const sidebar = {
  vueTemplate: [
    {
      title: '介绍',
      path: '/client/',
      collapsable: false
    },
    {
      title: 'vue-template',
      path: '/client/vue-template',
      collapsable: false,
      children: [
        '/client/vue-template/tree',
        '/client/vue-template/iconfont',
        '/client/vue-template/plop-template'
      ]
    },
  ],
  vuepress: [
    {
      title: '介绍',
      path: '/vuepress/',
      collapsable: false
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
