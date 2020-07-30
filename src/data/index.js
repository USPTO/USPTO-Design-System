const sidenav = require('./sidenav')
const pkg = require('../../package.json')

module.exports = {

  

  description: pkg.description,


  links: {    
    changelog: 'changelog.html',
    firstComponent: `components/${sidenav[0].children[0].href}`,
    home: 'index.html',    
  },

  title: 'USPTO UI Design Library',

  header: {
    links: [
      {
        //href: 'about.html',
        text: 'Download',
        title: 'Download',
      }      
    ]
  },

  subHeader: {
    links: [
      {
        href: 'howto.html',
        text: 'How to use DPL',
        title: 'How to use DPL',
      } , 
      {
        href: 'about.html',
        text: 'about',
        title: 'about',
      }      
    ]
  },

  sep: ' | ',

  sidenav,

  

}