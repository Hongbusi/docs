const sidebar = {
  vueTemplate: [
    {
      title: '前言',
      collapsable: false,
      children: [
        '/client/'
      ]
    },
    {
      title: 'vue-template',
      collapsable: false,
      children: [
        '/client/vue-template/',
        '/client/vue-template/tree',
        '/client/vue-template/iconfont',
        '/client/vue-template/plop-template',
        '/client/vue-template/i18n'
      ]
    },
  ],
  vuepress: [
    {
      title: '前言',
      collapsable: false,
      children: [
        '/vuepress/'
      ]
    },
    {
      title: 'vuepress',
      collapsable: false,
      children: [
        '/vuepress/guide'
      ]
    },
  ]
};

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
    nav: [
      {
        text: '工具',
        items: [
          {
            text: '脚手架',
            link: '/client/'
          }
        ]
      },
      {
        text: '学习笔记',
        items: [
          {
            text: 'vuepress',
            link: '/vuepress/'
          }
        ]
      },
    ],
    sidebar: {
      collapsable: false,
      '/client/': sidebar.vueTemplate,
      '/vuepress/': sidebar.vuepress
    }
  }
}
