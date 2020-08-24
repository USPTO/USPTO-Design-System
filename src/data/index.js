const pkg = require('../../package.json')
const navLinks = require('./navLinks')

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
      },
      {
        href: 'foundation/foundation.html',
        text: 'Foundation',
        title: 'Foundation',
      },

      {
        href: 'components/components.html',
        text: 'Components',
        title: 'Components',
      },
      {
        href: 'patterns/patterns.html',
        text: 'Patterns',
        title: 'Patterns',
      },
      {
        href: 'pageTemplates/pageTemplate1.html',
        text: 'Page templates',
        title: 'Page templates',
      },
      {
        href: 'about.html',
        text: 'About',
        title: 'About',
      }
    ]
  },

  sep: ' | ',

  ...navLinks,



}