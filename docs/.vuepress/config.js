module.exports = {
  title: '洪布斯',
  description: '知道的越多，不知道的越多！',
  head: [
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],
  bundler: '@vuepress/webpack',
  markdown: {
    code: {
      lineNumbers: false
    }
  },
  plugins: [
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
    ['@vuepress/plugin-search', {
      locales: {
        '/': {
          placeholder: '搜索'
        }
      }
    }]
  ],
  themeConfig: {
    repo: 'Hongbusi/docs',
    docsDir: 'docs',
    docsBranch: 'master',
    logo: '/images/logo.png',
    navbar: [
      { text: '首页', link: '/' },
      { text: '前端', link: '/frontend/' },
      { text: '库', link: '/repository/' },
      { text: '网站', link: '/website/' },
      { text: '面试', link: '/interview/' },
      { text: '讨论', link: 'https://github.com/Hongbusi/docs/discussions' },
      { text: '每日阅读', link: 'https://hongbusi.github.io/daily-reading' }
    ],
    sidebar: {
      '/frontend/': getFrontendSidebar()
    }
  }
}

function getFrontendSidebar() {
  return [
    {
      text: 'Vue',
      link: '/frontend/vue/index.md',
      children: [
        '/frontend/vue/skill.md'
      ]
    }
  ]
}
