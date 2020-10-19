const fs = require('fs')
const fse = require('fs-extra')
const dataSrc = '../src/data'
let data = require(dataSrc)
const glob = require('glob')
const nunjucks = require('nunjucks')
const nunjuckFile = /\.njk$/i
const sassFile = /\.s[ac]ss$/i
const srcFolder = 'src/pages/'
const outFolder = 'dist/'
const slashes = /[\\\/]/g


const env = nunjucks.configure(
  [ '.', srcFolder, 'src/templates' ],
  {
    lstripBlocks: true,
    trimBlocks: true,
    noCache: true,
  }
)

let uid = {}
env.addGlobal('uid', key => {
  if (!uid[key]) uid[key] = 0
  return `${key}-${++uid[key]}`
})

const cwd = `${process.cwd()}\\`
const log = (...a) => console.log(...['[build]', ...a])
const recwd = new RegExp(cwd.replace(/\\/g, '\\\\'), 'g')

const prettyError = e =>
  `[nunjucks] error ${e.message.replace(recwd, '').replace(slashes, '/').replace(/\s+/g, ' ')}`

const render = (file, context = data) => new Promise((resolve, reject) => {
  nunjucks.render(file, context, (err, res) => err ? reject(prettyError(err)) : resolve(res))
})

const renderFile = async (file, context = data) => {
  uid = {} // reset uid counts
  let toFile = file.replace(slashes, '/')
    .replace(srcFolder, outFolder)
    .replace(nunjuckFile, '.html')

  let path = toFile.split(slashes).slice(1, -1)
  let rel = path.length === 0 ? '' : `${ path.map(() => '..').join('/') }/`

  context.relativeRoot = rel
  context.img = `${rel}assets/img/`

  log(`render ${file}`)
  let html = await render(file, context)
  writeFile(toFile, html)
}

const renderFiles = async (context = data) => {
  for (let file of glob.sync(`${srcFolder}**/*.{njk,html}`)) {
    await renderFile(file, context)
  }
}

const sass = require('sass')
const includePaths = [
  'src/assets/scss',
  './node_modules/bootstrap/scss',
  './node_modules/usptostrap/src/scss'
]

const renderSassFile = (options = {}) => new Promise((resolve, reject) => {
  let { file, outFile } = options
  if (!outFile) {
    outFile = file.replace(slashes, '/')
      .replace(includePaths[0], 'dist/assets/css')
      .replace(sassFile, '.css')
  }
  log(`render ${file}`)
  sass.render({ ...options, includePaths, outFile, sourceMap: true }, (err, result) => {
    if (err) reject(err)
    else {
      writeFile(outFile, result.css)
      writeFile(`${outFile}.map`, result.map)
      resolve(result)
    }
  }) 
})

const copyImageFile = async () => {
  await fse.copy('./node_modules/usptostrap/assets/img', 'dist/assets/img')  
}

const copyFontsFile = async () => {
  await fse.copy('./node_modules/usptostrap/assets/fonts', 'dist/assets/fonts')
  await fse.copy('./node_modules/usptostrap/assets/icons', 'dist/assets/icons')
}
 
const updateData = async (context) => {
  if (context) return (data = context)
  const dump = m => {
    let a = m && m.children
    if (a) a.forEach(dump)
    try { delete require.cache[m.id] }
    catch (e) {}
  }
  dump(require.cache[require.resolve(dataSrc)])
  return (data = require(dataSrc))
}

const writeFile = (file, data) => {
  fs.mkdirSync(file.split(slashes).slice(0, -1).join('/'), { recursive: true })
  fs.writeFileSync(file, data)
  log(`saved ${file}`)
}

const watch = (path, fn) => {
  const timeouts = {}
  fs.watch(path, { recursive: true }, (event, file) => {
    if (event !== 'change') return
    let x = `${event}${file}`
    let f = `${path}/${file}`.replace(slashes, '/')
    clearTimeout(timeouts[x])
    timeouts[x] = setTimeout(() => fn(f), 10)
  })
}

Object.assign(exports, {
  copyFontsFile,
  copyImageFile,
  render,
  renderFile,
  renderFiles,
  renderSassFile,
  updateData,
  watch,
})

if (!module.parent) {
  let [build] = process.argv.slice(2)
  if (build) data.build = build
  copyFontsFile()
  .then(() => log(`copy fonts = success`))
  .catch(e => log(`copy fonts error ${e}`))

  copyImageFile()
  .then(() => log(`copy = success`))
  .catch(e => log(`copy error ${e}`))

  renderFiles()
  .then(() => log(`njks = success`))
  .catch(e => log(`njks error ${e}`))

  renderSassFile({ file: 'src/assets/scss/main.scss' })
  .then(() => log(`sass = success`))
  .catch(e => log(`sass error = ${e}`)) 

}