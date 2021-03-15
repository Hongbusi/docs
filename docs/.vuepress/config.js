const sidebar = {
  vueTemplate: [
    '/vue-template/tree',
    '/vue-template/iconfont'
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
        text: '脚手架',
        ariaLabel: '脚手架菜单',
        items: [
          {
            text: 'vue-template',
            link: '/vue-template/'
          }
        ]
      },
    ],
    sidebar: {
      collapsable: false,
      '/vue-template/': sidebar.vueTemplate
    }
  }
}
