import { defineConfigWithTheme } from 'vitepress'
import baseConfig from '@vue/theme/config'
import type { Config } from '@vue/theme'
import { UserConfig } from 'vitepress'
import { NavbarFix } from './plugins/navbar'
import sidebar from './sidebar'
import path from 'path'

export default defineConfigWithTheme<Config>({
  extends: baseConfig as () => UserConfig<Config>,

  lang: 'zh-CN',
  title: 'Hongbusi',
  description: 'The more you know, the more you do not know.',
  base: '/',
  srcDir: 'src',

  head: [
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }]
  ],

  themeConfig: {
    // algolia: {
    //   indexName: 'Hongbusi',
    //   appId: '58YVUHI1VL',
    //   apiKey: '1bde22dfb8f411080436bd011af2c580'
    // },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Hongbusi' },
      { icon: 'twitter', link: 'https://twitter.com/Hongbusi' }
    ],

    editLink: {
      repo: 'Hongbusi/docs',
      text: 'Edit this page on GitHub'
    },

    nav: [
      {
        text: 'Frontend',
        items: [
          { text: 'Vue', link: '/vue/', activeMatch: '/vue/' },
          { text: 'Node.js', link: '/nodejs/what-is-nodejs', activeMatch: '/nodejs/' },
          { text: 'JavaScript', link: '/javascript/', activeMatch: '/javascript/' },
          { text: 'TypeScript', link: '/typescript/', activeMatch: '/typescript/' }
        ]
      },
      { text: 'Algorithm', link: '/algorithm/what-is-algorithm', activeMatch: '/algorithm/' },
      { text: 'Notes', link: '/notes/', activeMatch: '/notes/' },
      { text: 'Rust', link: '/rust/', activeMatch: '/rust/' },
      { text: 'Interview', link: '/interview/css/box', activeMatch: '/interview/' },
      { text: 'Bookmarks', link: '/bookmarks/', activeMatch: '/bookmarks/' }
    ],

    sidebar: sidebar,

    footer: {
      copyright: `Copyright © 2020-${new Date().getFullYear()} Hongbusi`
    }
  },

  vite: {
    define: {
      __VUE_OPTIONS_API__: false
    },

    resolve: {
      alias: {
        '~': `${path.resolve(__dirname, 'theme')}/`
      }
    },

    plugins: [
      NavbarFix()
    ]
  },
})
