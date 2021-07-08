module.exports = [
  ['@vuepress/plugin-pwa'],
  [
    '@vuepress/plugin-pwa-popup',
    {
      locales: {
        '/': {
          message: '发现新内容可用',
          buttonText: '刷新'
        }
      }
    }
  ]
]
