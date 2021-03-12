let nav = require('./nav.js')

module.exports = {
  title: 'Hongbusi',
  description: 'Hongbusi',
  head: [
    ['link', {rel: 'icon', href: 'logo.png'}],
  ],
  themeConfig: {
    repo: 'Hongbusi/docs',
    docsDir: 'docs',
    editLinks: true,
    lastUpdated: 'Last Updated',
    copyright: 'Copyright © 2021 Hongbusi',
    record: '浙ICP备2020035758号-2',
    recordLink: 'https://beian.miit.gov.cn',
    nav: nav,
    sidebar: {
      '/vue-template/': [
        '',
        'tree',
        'iconfont'
      ]
    }
  }
}
