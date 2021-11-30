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
        text: 'Code',
        children: [
          { text: 'Leetcode', link: '/leetcode/' },
          { text: '手写代码专题', link: '/code/' }
        ]
      },
      {
        text: '最佳实践',
        children: [
          {
            text: 'Vue2',
            children: [
              { text: '第三方库', link: '/vue2/packages/' },
              { text: 'Nuxt.js', link: '/vue2/nuxt/' },
              { text: 'Ant Design Vue', link: '/vue2/ant-design-vue/' },
              { text: '其他', link: '/vue2/other/' }
            ]
          },
          {
            text: 'Vue3',
            children: [
              { text: '第三方库', link: '/vue3/packages/' }
            ]
          },
          {
            text: 'Git',
            children: [
              { text: 'Git 常见问题', link: '/git/problem/' }
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
