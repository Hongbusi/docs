import { defineConfigWithTheme } from 'vitepress'
import baseConfig from '@vue/theme/config'
import type { Config } from '@vue/theme'
import { UserConfig } from 'vitepress'
import { NavbarFix } from './plugins/navbar'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfigWithTheme<Config>({
  extends: baseConfig as () => UserConfig<Config>,

  lang: 'zh-CN',
  title: 'Hongbusi',
  description: 'The more you know, the more you do not know.',
  base: '/',
  srcDir: 'src',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'alternate icon', href: '/favicon.ico', type: 'image/png', size: '16x16' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', size: '180x180' }],
    ['link', { rel: 'mask-icon', href: '/favicon.png', color: '#ffffff' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['meta', { name: 'twitter:site', content: '@Hongbusi' }]
  ],

  themeConfig: {
    nav: [
      {
        text: 'Frontend',
        items: [
          { text: 'JavaScript', link: '/javascript/browser' },
          { text: 'petite-vue', link: '/petite-vue/' }
        ]
      },
      { text: 'Notes', link: '/notes/essays/2022' },
      { text: 'Interview', link: '/interview/' },
      { text: 'Bookmarks', link: '/bookmarks/' }
    ],

    sidebar: {
      '/javascript/': getJavaScriptSidebar(),
      '/petite-vue/': getPetiteVueSidebar(),
      '/notes/': getNotesSidebar(),
      '/interview/': getInterviewSidebar()
    },

    algolia: {
      indexName: 'Hongbusi',
      appId: '58YVUHI1VL',
      apiKey: '1bde22dfb8f411080436bd011af2c580'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Hongbusi' },
      { icon: 'twitter', link: 'https://twitter.com/Hongbusi' }
    ],

    editLink: {
      repo: 'Hongbusi/docs',
      text: 'Edit this page on GitHub'
    },

    footer: {
      copyright: `Copyright © 2020-${new Date().getFullYear()} Hongbusi`
    }
  },

  vite: {
    define: {
      __VUE_OPTIONS_API__: false
    },
    plugins: [
      NavbarFix(),
      VitePWA({
        includeAssets: ['favicon.png', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
        manifest: {
          name: 'Hongbusi',
          short_name: 'Hongbusi',
          description: 'The more you know, the more you do not know.',
          theme_color: '#ffffff',
          icons: [
            {
              src: 'pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable',
            }
          ]
        }
      })
    ]
  },

  vue: {
    reactivityTransform: true
  }
})

function getJavaScriptSidebar() {
  return [
    {
      text: 'JavaScript 运行环境',
      items: [
        { text: '浏览器工作原理', link: '/javascript/browser' },
        { text: 'V8 引擎工作原理', link: '/javascript/v8' },
        { text: 'JavaScript 内存管理', link: '/javascript/memory-management' },
        { text: 'JavaScript 事件循环', link: '/javascript/event-loop' },
      ]
    },
    {
      text: 'JavaScript 高级',
      items: [
        { text: 'this', link: '/javascript/this' }
      ]
    },
    {
      text: 'Function',
      items: [
        { text: 'Function.prototype.apply()', link: '/javascript/function/apply' },
        { text: 'Function.prototype.call()', link: '/javascript/function/call' },
        { text: 'Function.prototype.bind()', link: '/javascript/function/bind' }
      ]
    }
  ]
}

function getPetiteVueSidebar() {
  return [
    {
      text: 'petite vue',
      items: [
        { text: '介绍', link: '/petite-vue/' },
        { text: 'Vue3 源码结构介绍', link: '/petite-vue/introduction' }
      ]
    }
  ]
}

function getNotesSidebar() {
  return [
    {
      text: 'Essays',
      items: [
        { text: '2022', link: '/notes/essays/2022' }
      ]
    },
    {
      text: 'Vite',
      items: [
        { text: '配置', link: '/notes/vite/config' }
      ]
    },
    {
      text: 'Books',
      items: [
        { text: 'Vue.js 设计与实现', link: '/notes/books/vue-design-and-implementation' },
        { text: '你不知道的 JavaScript 上卷', link: '/notes/books/you-dont-know-js-1' },
      ]
    },
    {
      text: 'TypeScript',
      items: [
        { text: '常用命令', link: '/notes/typescript/command' }
      ]
    },
    {
      text: 'Git',
      items: [
        { text: '常用命令', link: '/notes/git/command' }
      ]
    },
    {
      text: '其他',
      items: [
        { text: '工具类', link: '/notes/other/utils' },
        { text: '环境配置', link: '/notes/other/environment' }
      ]
    }
  ]
}

function getInterviewSidebar() {
  return [
    {
      text: 'Css',
      items: [
        { text: '介绍', link: '/interview/css/' }
      ]
    },
    {
      text: 'JavaScript',
      items: [
        { text: '介绍', link: '/interview/javascript/' }
      ]
    },
    {
      text: 'Vue',
      items: [
        { text: '实例挂载过程', link: '/interview/vue/new-vue' },
        { text: '生命周期', link: '/interview/vue/lifecycle' },
        { text: 'v-show 和 v-if 的区别', link: '/interview/vue/show-if' },
        { text: '组件之间的通信方式', link: '/interview/vue/communication' },
        { text: 'nextTick 原理', link: '/interview/vue/next-tick' },
        { text: 'key 的作用', link: '/interview/vue/key' },
        { text: 'computed 原理', link: '/interview/vue/computed' },
        { text: '虚拟 DOM', link: '/interview/vue/vnode' },
        { text: 'diff 算法', link: '/interview/vue/diff' },
        { text: 'Vue3 性能提升体现在什么方面', link: '/interview/vue/performance' },
        { text: '为什么用 Proxy 替代 defineProperty', link: '/interview/vue/proxy' },
        { text: 'Composition 与 Options Api 区别', link: '/interview/vue/composition' },
        { text: 'Vue3 中的 tree-shaking 特性', link: '/interview/vue/tree-shaking' },
        { text: '设计一个 Modal 组件', link: '/interview/vue/modal-component' },
        { text: '权限管理', link: '/interview/vue/permission' },
        { text: '跨域', link: '/interview/vue/cors' },
        { text: 'axios 封装', link: '/interview/vue/axios' }
      ]
    },
    {
      text: 'TypeScript',
      items: [
        { text: '介绍', link: '/interview/typescript/' }
      ]
    },
    {
      text: 'Webpack',
      items: [
        { text: '介绍', link: '/interview/webpack/' }
      ]
    }
  ]
}
