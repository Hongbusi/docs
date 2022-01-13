module.exports = {
  base: '/docs/',
  title: '洪布斯',
  description: '知道的越多，不知道的越多！',
  head: [
    ['link', { rel: 'manifest', href: '/docs/manifest.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],
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
      { text: '源码', link: '/source-code/' },
      { text: '前端', link: '/frontend/' },
      { text: '库', link: '/repository/' },
      { text: '面试', link: '/interview/' },
      { text: '网站', link: '/website/' },
      { text: '博客', link: '/blog/' },
      { text: '提问', link: 'https://github.com/Hongbusi/docs/discussions' }
    ],
    sidebarDepth: 1,
    sidebar: {
      '/frontend/': getFrontendSidebar(),
      '/source-code/': getSourceCodeSidebar(),
      '/interview/': getInterviewSidevar()
    }
  }
}

function getFrontendSidebar() {
  return [
    {
      text: 'Git',
      children: [
        '/frontend/git/commands.md',
        '/frontend/git/problem.md'
      ]
    },
    {
      text: 'Vue',
      children: [
        '/frontend/vue/skill.md'
      ]
    },
    {
      text: 'Node',
      children: [
        '/frontend/node/fs-extra.md'
      ]
    },
  ]
}

function getSourceCodeSidebar() {
  return [
    {
      text: 'Vue3',
      children: [
        '/source-code/vue3/key.md'
      ]
    }
  ]
}

function getInterviewSidevar() {
  return [
    {
      text: 'Vue 系列',
      children: [
        '/interview/vue/vue.md',
        '/interview/vue/spa.md',
        '/interview/vue/show-if.md',
        '/interview/vue/new-vue.md',
        '/interview/vue/lifecycle.md',
        '/interview/vue/if-for.md',
        '/interview/vue/first-page-time.md',
        '/interview/vue/data.md'
      ]
    },
    {
      text: '手写代码专题',
      children: [
        '/interview/handwritten-code/getQueryString.md',
        '/interview/handwritten-code/setInterval.md',
        '/interview/handwritten-code/throttle.md',
        '/interview/handwritten-code/debounce.md'
      ]
    },
    {
      text: 'LeetCode',
      children: [
        '/interview/leetcode/find-all-anagrams-in-a-string.md',
        '/interview/leetcode/hand-of-straights.md',
        '/interview/leetcode/perfect-number.md'
      ]
    }
  ]
}
