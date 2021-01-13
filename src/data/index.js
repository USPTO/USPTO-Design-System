const pkg = require('../../package.json')
const navLinks = require('./navLinks')

module.exports = {



  description: pkg.description,


  links: {
    changelog: 'changelog.html',
    // firstComponent: `components/${sidenav[0].children[0].href}`,
    home: 'index.html',
  },

  title: 'USPTO UI Design System',

  header: {
    links: [
      {
        href: 'https://github.com/uspto/designpatterns',
        text: 'View on Github',
        title: 'View on Github',
      }
    ]
  },

  subHeader: {
    links: [
      {
        href: 'usage/how-to-use.html',
        text: 'Usage',
        title: 'How to use USPTO Design System',
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
        href: 'pageTemplates/pageTemplate.html',
        text: 'Page templates',
        title: 'Page templates',
      },      
      {
        href: 'resources/resources.html',
        text: 'Resources',
        title: 'Resources',
      },
      {
        href: 'about/about.html',
        text: 'About',
        title: 'About',
      }
    ]
  },

  sep: ' | ',

  ...navLinks,



}