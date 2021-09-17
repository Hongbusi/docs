const { path } = require('@vuepress/utils');

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
  // [
  //   '@vuepress/docsearch',
  //   {
  //     apiKey: '<API_KEY>',
  //     indexName: '<INDEX_NAME>',
  //     locales: {
  //       '/': {
  //         placeholder: '搜索文档'
  //       }
  //     }
  //   }
  // ],
  ['@vuepress/plugin-search', {
    locales: {
      '/': {
        placeholder: '搜索',
      }
    }
  }],
  ['@vuepress/plugin-register-components', {
    componentsDir: path.resolve(__dirname, '../../components'),
  }]
]
