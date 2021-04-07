module.exports = {
  title: '洪布斯',
  description: '桃李不言，下自成蹊！',
  head: [
    ['link', {rel: 'icon', href: 'logo.png'}]
  ],
  plugins: [],
  themeConfig: {
    lastUpdated: '上次更新',
    record: '浙ICP备2020035758号-2',
    recordLink: 'https://beian.miit.gov.cn',
    startYear: '2021',
    author: 'Hongbusi',
    nav: require('./nav'),
    sidebar: require('./sidebar')
  }
}
