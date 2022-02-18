import { defineConfigWithTheme } from 'vitepress'
import baseConfig from '@vue/theme/config'
import type { Config } from '@vue/theme'
import { UserConfig } from 'vitepress'
import { NavbarFix } from './plugins/navbar'

export default defineConfigWithTheme<Config>({
  extends: baseConfig as () => UserConfig<Config>,

  lang: 'zh-CN',
  title: 'Hongbusi',
  description: 'The more you know, the more you do not know.',
  base: '/docs/',
  srcDir: 'src',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'twitter:site', content: '@Hongbusi' }]
  ],

  themeConfig: {
    nav: [
      { text: 'Notes', link: '/notes/' },
      { text: 'Packages', link: '/packages/' },
      {
        text: 'Bookmarks',
        items: [
          { text: 'Essay', link: 'https://github.com/Hongbusi/Essay' },
          { text: 'Daily Reading', link: 'https://hongbusi.github.io/daily-reading' }
        ]
      },
      { text: 'About', link: '/about/' }
    ],

    sidebar: {
      '/bookmarks/': [
        {
          text: '最近阅读',
          items: [
            { text: '测试1', link: '/bookmarks/' }
          ]
        }
      ]
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
      NavbarFix()
    ]
  },

  vue: {
    reactivityTransform: true
  }
})
