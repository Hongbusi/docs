let nav = require('./nav.js')

module.exports = {
  title: 'Hongbusi',
  description: '桃李不言，下自成蹊！',
  head: [
    ['link', {rel: 'icon', href: 'logo.png'}],
    ['link', {rel: 'stylesheet', href: 'styles/index.css'}],
    ['script', {src: 'js/index.js'}]
  ],
  themeConfig: {
    repo: 'Hongbusi',
    docsRepo: 'Hongbusi/docs',
    editLinks: true,
    nav: nav,
    sidebar: {
    }
  }
}
