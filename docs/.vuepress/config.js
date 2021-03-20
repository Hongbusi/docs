module.exports = {
  title: '洪布斯',
  description: '桃李不言，下自成蹊！',
  head: [
    ['link', {rel: 'icon', href: 'logo.png'}]
  ],
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  plugins: [
    ['@vuepress-reco/vuepress-plugin-kan-ban-niang', { clean: true }],
    ['dynamic-title', {
        showText: '(/≧▽≦/)欢迎回来！',
        hideText: '(●—●)不要走啊，再看看！'
    }],
    ['meting', {
      meting: {
          server: 'netease',
          type: 'playlist',
          mid: '696441716',
          // auto: 'https://music.163.com/#/playlist?id=6670996920'
      },
      aplayer: {
        fixed: true,
        mini: true,
        autoplay: false,
        listFolded: true,
        theme: '#f9bcdd',
        order: 'random',
        volume: 0.1,
        lrcType: 0
      },
      mobile :{
        cover: false,
      }
    }]
  ],
  theme: 'reco',
  themeConfig: {
    lastUpdated: '上次更新',
    record: '浙ICP备2020035758号-2',
    recordLink: 'https://beian.miit.gov.cn',
    startYear: '2021',
    type: 'blog',
    logo: 'logo.png',
    author: 'Hongbusi',
    authorAvatar: 'logo.png',
    subSidebar: 'auto',
    nav: [
      ...require('./nav'),
      { text: '时间轴', link: '/timeline/', icon: 'reco-date' }
    ],
    sidebar: require('./sidebar')
  },
}
