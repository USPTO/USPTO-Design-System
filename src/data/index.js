const sidenav = require('./sidenav')
const pkg = require('../../package.json')

module.exports = {

  

  description: pkg.description,


  links: {    
    changelog: 'changelog.html',
   // firstComponent: `components/${sidenav[0].children[0].href}`,
    home: 'index.html',    
  },

  title: 'USPTO UI Design Library',

  header: {
    links: [
      {
        href: '',
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
        href: 'components/index.html',
        text: 'Components',
        title: 'Components',
      } , 
      {
        href: '',
        text: 'Page templates',
        title: 'Page templates',
      } ,
      {
        href: 'about.html',
        text: 'About',
        title: 'About',
      }      
    ]
  },

  sep: ' | ',

  sidenav,

  

}