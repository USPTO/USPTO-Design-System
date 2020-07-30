const { renderFile, renderFiles, renderSassFile, updateData, watch } = require('./build')

const log = (...a) => console.log(...['[dev]', ...a].map(String))

watch('src/assets/scss', file => {
  renderSassFile({ file: 'src/assets/scss/main.scss' }).catch(log)  
})

watch('src/data', () => {
  updateData().then(renderFiles).catch(log)
})

watch('src/pages', file => {
  renderFile(file).catch(log)
})

watch('src/templates', file => {
  log(`template ${file} changed -- reloading all pages`)
  renderFiles().catch(log)
})
