const sidebar = {
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
    }
  ],
  vueTemplate: [
    {
      title: 'vue-template',
      collapsable: false,
      children: [
        '/templates/vue-template/',
        '/templates/vue-template/tree',
        '/templates/vue-template/iconfont',
        '/templates/vue-template/plop-template',
        '/templates/vue-template/i18n'
      ]
    }
  ],
  hbsCreate: [
    {
      title: 'hbs-create',
      collapsable: false,
      children: [
        '/packages/hbs-create/'
      ]
    }
  ],
  hbsStyles: [
    {
      title: 'hbs-styles',
      collapsable: false,
      children: [
        '/packages/hbs-styles/'
      ]
    }
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
        text: '学习笔记',
        items: [
          {
            text: 'vuepress',
            link: '/vuepress/'
          }
        ]
      },
      {
        text: 'Templates',
        items: [
          {
            text: 'vue-template',
            link: '/templates/vue-template/'
          }
        ]
      },
      {
        text: 'Packages',
        items: [
          {
            text: 'hbs-create',
            link: '/packages/hbs-create/'
          },
          {
            text: 'hbs-styles',
            link: '/packages/hbs-styles/'
          }
        ]
      }
    ],
    sidebar: {
      collapsable: false,
      '/vuepress/': sidebar.vuepress,
      '/templates/vue-template/': sidebar.vueTemplate,
      '/packages/hbs-create/': sidebar.hbsCreate,
      '/packages/hbs-styles/': sidebar.hbsStyles
    }
  }
}
