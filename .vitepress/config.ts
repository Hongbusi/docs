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

    nav: [
      {
        text: 'Frontend',
        items: [
          { text: 'Vue', link: '/vue/' },
          { text: 'JavaScript', link: '/javascript/' },
          { text: 'TypeScript', link: '/typescript/' },
        ]
      },
      { text: 'Algorithm', link: '/algorithm/what-is-algorithm' },
      { text: 'Notes', link: '/notes/' },
      // { text: 'Rust', link: '/rust/' },
      { text: 'Interview', link: '/interview/css/box' },
      { text: 'Bookmarks', link: '/bookmarks/' }
    ],

    sidebar: {
      ...sidebar,
      '/algorithm/': [
        {
          text: '入门篇',
          items: [
            { text: '什么是算法？', link: '/algorithm/what-is-algorithm', },
            { text: '为什么要学习算法和数据结构？', link: '/algorithm/why-study-algorithms-and-data-structures' },
            { text: '算法与数据结构的学习方法', link: '/algorithm/algorithms-and-data-structures-learning-methods' },
            { text: '为什么要学习复杂度的分析方法？', link: '/algorithm/why-learn-complexity-analysis' }
          ]
        },
        {
          text: '基础篇',
          items: [
            { text: '递归程序设计技巧', link: '/algorithm/recursive-programming-techniques' },
            { text: '顺序表与链表', link: '/algorithm/sequence-list-and-linked-list' },
            { text: '栈与队列', link: '/algorithm/stacks-and-queues' },
            { text: '二叉树', link: '/algorithm/binary-tree' },
            { text: '堆与优先队列', link: '/algorithm/heap-and-priority-queue' },
            { text: '排序与查找', link: '/algorithm/sort-and-find' },
            { text: '二分算法', link: '/algorithm/binary-algorithm' },
            { text: '平衡二叉排序树', link: '/algorithm/balanced-binary-sorting-tree' },
            { text: '递归函数转非递归', link: '/algorithm/convert-recursive-function-to-non-recursive' }
          ]
        },
        {
          text: '高级篇',
          items: [
            { text: '森林与并查集', link: '/algorithm/forest-and-union' },
            { text: '单调队列与单调栈', link: '/algorithm/monotonic-queue-and-monotonic-stack' },
            { text: '回溯算法', link: '/algorithm/backtracking-algorithm' },
            { text: '贪心算法', link: '/algorithm/greedy-algorithm' },
            { text: '动态规划', link: '/algorithm/dynamic-programming' },
            { text: '字符串匹配', link: '/algorithm/string-match' },
            { text: '树状数组与线段树', link: '/algorithm/tree-arrays-and-segment-trees' },
            { text: '树上的问题', link: '/algorithm/tree-problem' },
            { text: '图', link: '/algorithm/picture' }
          ]
        }
      ],
      '/rust/': [
        {
          text: 'Rust 程序设计语言',
          items: [
            { text: '安装', link: '/rust/trpl/install' },
            { text: '常见编程概念', link: '/rust/trpl/common-programming-concepts' }
          ]
        }
      ]
    },

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

  vue: {
    reactivityTransform: true
  }
})
