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
      { text: 'Frontend', link: '/frontend/' },
      { text: 'Blog', link: '/blog/' }
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
        { text: 'Loaders', link: '/frontend/webpack/loaders' },
        { text: 'Plugins', link: '/frontend/webpack/plugins' }
      ]
    },
    {
      text: 'Repository',
      children: [
        { text: 'Vue', link: '/frontend/repository/vue' },
        { text: 'Vite', link: '/frontend/repository/vite' },
        { text: 'Node', link: '/frontend/repository/node' },
        { text: '前端常用', link: '/frontend/repository/commonly-used' }
      ]
    }
  ]
}

export default config;
