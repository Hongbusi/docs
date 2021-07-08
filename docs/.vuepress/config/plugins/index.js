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
  ],
  [
    '@vuepress/plugin-search',
    {
      locales: {
        '/': {
          placeholder: '搜索'
        }
      }
    }
  ]
]
