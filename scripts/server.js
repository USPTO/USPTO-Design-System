let bs
try {
  bs = require('browser-sync')
} catch (e) {
  console.log(`
    \x1b[91m"browser-sync" module not found.\x1b[0m
    Install it globally: \x1b[33mnpm i -g browser-sync\x1b[0m
    Then try running this script again.\r\n`)
  process.exit(1)
}

bs.create().init({
  online: false,
  open: false,
  port: 3000,
  server: {
    baseDir: 'dist',
    directory: true,
  },
  ui: false,
  watch: true,
})

require('./dev')
