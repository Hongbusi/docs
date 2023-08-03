import path from 'node:path'
import type { UserConfig } from 'vitepress'
import { defineConfigWithTheme } from 'vitepress'
import baseConfig from '@vue/theme/config'
import type { Config } from '@vue/theme'
import { NavbarFix } from './plugins/navbar'
import sidebar from './sidebar'

export default defineConfigWithTheme<Config>({
  extends: baseConfig as () => UserConfig<Config>,

  lang: 'zh-CN',
  title: 'Hongbusi',
  description: 'The more you know, the more you do not know.',
  base: '/',
  srcDir: 'src',

  head: [
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
  ],

  themeConfig: {
    // algolia: {
    //   indexName: 'Hongbusi',
    //   appId: '58YVUHI1VL',
    //   apiKey: '1bde22dfb8f411080436bd011af2c580'
    // },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Hongbusi' },
      { icon: 'twitter', link: 'https://twitter.com/Hongbusi' },
    ],

    editLink: {
      repo: 'Hongbusi/docs',
      text: 'Edit this page on GitHub',
    },

    nav: [
      { text: 'Guide', link: '/guide/', activeMatch: '/guide/' },
      {
        text: 'Technology Stack',
        items: [
          { text: 'Vue', link: '/vue/', activeMatch: '/vue/' },
          { text: 'Node', link: '/nodejs/what-is-nodejs', activeMatch: '/nodejs/' },
          { text: 'JavaScript', link: '/javascript/', activeMatch: '/javascript/' },
          { text: 'TypeScript', link: '/typescript/', activeMatch: '/typescript/' },
          { text: 'Nest', link: '/nestjs/', activeMatch: '/nestjs/' },
          { text: 'Algorithm', link: '/algorithm/what-is-algorithm', activeMatch: '/algorithm/' },
          { text: 'Rust', link: '/rust/', activeMatch: '/rust/' },
        ],
      },
      { text: 'Notes', link: '/notes/', activeMatch: '/notes/' },
      { text: 'Interview', link: '/interview/css/box', activeMatch: '/interview/' },
      { text: 'Bookmarks', link: '/bookmarks/', activeMatch: '/bookmarks/' },
    ],

    sidebar: {
      ...sidebar,
      '/guide/': [
        {
          text: 'React',
          items: [
            { text: '文件、文件名命名', link: '/guide/react/filename' },
            { text: 'umi - 路由', link: '/guide/react/umi-routes' },
          ],
        },
      ],
      '/nestjs/': [
        {
          text: 'NestJS Guide',
          items: [
            { text: 'Introduction', link: '/nestjs/' },
            { text: 'Getting Started', link: '/nestjs/getting-started' },
            { text: '内置 HTTP 异常', link: '/nestjs/built-in-http-exceptions' },
          ],
        },
      ],
    },

    footer: {
      copyright: `Copyright © 2020-${new Date().getFullYear()} Hongbusi`,
    },
  },

  vite: {
    define: {
      __VUE_OPTIONS_API__: false,
    },

    resolve: {
      alias: {
        '~': `${path.resolve(__dirname, 'theme')}/`,
      },
    },

    plugins: [
      NavbarFix(),
    ],
  },
})
