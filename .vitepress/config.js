/**
 * @type {import('vitepress').UserConfig}
 */

const config = {
  base: '/docs/',
  srcDir: 'src',
  title: 'Hongbusi',
  description: 'The more you know, the more you do not know.',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  themeConfig: {
    repo: 'Hongbusi/docs',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',

    nav: [
      { text: 'Frontend', link: '/frontend/' }
    ],

    sidebar: {
      '/frontend/': getFrontendSidebar()
    }
  }
};

function getFrontendSidebar() {
  return [
    {
      text: 'Webpack',
      children: [
        { text: 'Node 接口', link: '/frontend/webpack/node-interface' },
        { text: 'Plugins', link: '/frontend/webpack/plugins' }
      ]
    }
  ]
}

export default config;
