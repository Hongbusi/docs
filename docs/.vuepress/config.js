module.exports = {
  title: 'Hongbusi',
  description: '洪布斯',
  head: [
    ['link', {rel: 'icon', href: 'logo.png'}],
    ['link', {rel: 'stylesheet', href: 'index.css'}]
  ],
  themeConfig: {
    repo: 'Hongbusi/docs',
    docsDir: 'docs',
    editLinks: true,
    lastUpdated: 'Last Updated',
    copyright: 'Copyright © 2021 Hongbusi',
    record: '浙ICP备2020035758号-2',
    recordLink: 'https://beian.miit.gov.cn',
    nav: require('./nav'),
    sidebar: require('./sidebar')
  }
}
