import { defineConfigWithTheme } from 'vitepress'
import baseConfig from '@vue/theme/config'
import type { Config } from '@vue/theme'
import { UserConfig } from 'vitepress'
import { NavbarFix } from './plugins/navbar'
import { VitePWA } from 'vite-plugin-pwa'

const nav = [
  {
    text: 'Frontend',
    items: [
      { text: 'JavaScript', link: '/javascript/browser' }
    ]
  },
  { text: 'Bookmarks', link: '/bookmarks/' },
  { text: 'Notes', link: '/notes/' }
]

const sidebar = {
  '/javascript/': [
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
    nav,

    sidebar,

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
