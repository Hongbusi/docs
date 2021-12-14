module.exports = {
  base: '/docs/',
  title: '洪布斯',
  description: '知道的越多，不知道的越多！',
  head: [
    ['link', { rel: 'manifest', href: '/docs/manifest.webmanifest' }],
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
      // {
      //   text: '学习',
      //   children: [
      //     {
      //       text: '原生',
      //       children: [
      //         { text: 'HTML', link: '/html/' },
      //         { text: 'CSS', link: '/css/' },
      //         { text: 'JavaScript', link: '/js/' }
      //       ]
      //     },
      //     {
      //       text: '框架',
      //       children: [
      //         { text: 'Vue2', link: '/vue2/' },
      //         { text: 'Vue3', link: '/vue3/' }
      //       ]
      //     },
      //     {
      //       text: 'Code',
      //       children: [
      //         { text: 'Leetcode', link: '/leetcode/' },
      //         { text: '手写代码专题', link: '/code/' }
      //       ]
      //     },
      //     {
      //       text: '其他',
      //       children: [
      //         { text: 'Git', link: '/git/' },
      //         { text: '书单', link: '/books/' }
      //       ]
      //     }
      //   ]
      // },
      { text: '首页', link: '/' },
      { text: '前端', link: '/frontend/' },
      { text: '库', link: '/repository/' },
      { text: '网站', link: '/website/' },
      { text: '面试', link: '/interview/' },
      { text: '讨论', link: 'https://github.com/Hongbusi/docs/discussions' }
    ],
    sidebarDepth: 1,
    sidebar: {
      '/frontend/': getFrontendSidebar(),

      '/html/': getHtmlSidebar(),
      '/css/': getCssSidebar(),
      '/js/': getJsSidebar(),
      '/vue2/': getVue2Sidebar(),
      '/vue3/': getVue3Sidebar(),
      '/leetcode/': getLeetcodeSidebar(),
      '/code/': getCodeSidebar(),
      '/git/': getGitSidebar(),
      '/books/': getBooksSidebar()
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

function getHtmlSidebar() {
  return [
    'index.md'
  ]
}

function getCssSidebar() {
  return [
    'index.md'
  ]
}

function getJsSidebar() {
  return [
    'index.md'
  ]
}

function getVue2Sidebar() {
  return [
    {
      text: 'Vue2',
      link: '/vue2/index.md'
    },
    {
      text: 'Ant Design Vue',
      link: '/vue2/ant-design-vue/index.md',
      children: [
        '/vue2/ant-design-vue/table.md',
        '/vue2/ant-design-vue/modal.md'
      ]
    },
    {
      text: '第三方库',
      link: '/vue2/packages/index.md',
      children: [
        '/vue2/packages/vuedraggable.md',
        '/vue2/packages/vue-lazyload.md',
        '/vue2/packages/vue-cropperjs.md',
        '/vue2/packages/style-resources-loader.md'
      ]
    }
  ]
}

function getVue3Sidebar() {
  return [
    'index.md'
  ]
}

function getLeetcodeSidebar() {
  return [
    'index.md',
    'find-all-anagrams-in-a-string.md'
  ]
}

function getCodeSidebar() {
  return [
    'index.md',
    'getQueryString.md',
    'setInterval.md',
    'debounce.md',
    'throttle.md'
  ]
}

function getGitSidebar() {
  return [
    'index.md'
  ]
}

function getBooksSidebar() {
  return [
    'index.md'
  ]
}
