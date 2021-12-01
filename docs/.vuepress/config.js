module.exports = {
  base: '/docs/',
  title: '洪布斯',
  description: '桃李不言，下自成蹊！',
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
      {
        text: '学习',
        children: [
          {
            text: '原生',
            children: [
              { text: 'HTML', link: '/native/html/' },
              { text: 'CSS', link: '/native/css/' },
              { text: 'JavaScript', link: '/native/js/' }
            ]
          },
          {
            text: '框架',
            children: [
              { text: 'Vue2 相关', link: '/frame/vue2/' },
              { text: 'Vue3 相关', link: '/frame/vue3/' }
            ]
          },
          {
            text: 'Code',
            children: [
              { text: 'Leetcode', link: '/leetcode/' },
              { text: '手写代码专题', link: '/code/' }
            ]
          },
          {
            text: '其他',
            children: [
              { text: 'Git', link: '/other/git/' },
              { text: '书单', link: '/other/books/' }
            ]
          }
        ]
      },
      { text: '每日阅读', link: 'https://hongbusi.github.io/daily-reading' }
    ],
    sidebarDepth: 0,
    sidebar: {
      '/code/': getCodeSidebar(),
      '/leetcode/': getLeetcodeSidebar(),
      '/vue2/packages/': getVue2PackagesSidebar(),
      '/vue2/nuxt/': getVue2NuxtSidebar(),
      '/vue2/ant-design-vue/': getVue2AntDesignVueSidebar(),
      '/vue2/other/': getVue2OtherSidebar(),
      '/vue3/packages/': getVue3PackagesSidebar(),
      '/git/problem/': getGitProblemSidebar()
    }
  }
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

function getLeetcodeSidebar() {
  return [
    'index.md',
    'find-all-anagrams-in-a-string.md'
  ]
}

function getVue2PackagesSidebar() {
  return [
    'index.md',
    'i18n.md',
    'lazyload.md',
    'cropperjs.md',
    'variable-injection.md'
  ]
}

function getVue2NuxtSidebar() {
  return [
    'index.md',
    'init.md',
    'swiper.md',
    'performance-optimization.md',
    'problem.md'
  ]
}

function getVue2AntDesignVueSidebar() {
  return [
    'index.md',
    'modal.md'
  ]
}

function getVue2OtherSidebar() {
  return [
    'index.md',
    'introducing-js.md',
    'component-registration.md',
    'permission-control.md'
  ]
}

function getVue3PackagesSidebar() {
  return [
    'index.md'
  ]
}

function getGitProblemSidebar() {
  return [
    'index.md',
    'gitignore.md'
  ]
}
