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
    '@vuepress/docsearch',
    {
      apiKey: '<API_KEY>',
      indexName: '<INDEX_NAME>',
      locales: {
        '/': {
          placeholder: '搜索文档'
        }
      }
    }
  ]
]
