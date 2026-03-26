import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '洪布斯',
  description: '知道的越多，不知道的也越多。精选的开发工具、学习资源和AI提示词，帮助开发者提高效率。',
  lang: 'zh-CN',
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['meta', { name: 'author', content: '洪布斯' }],
    ['meta', { property: 'og:title', content: '洪布斯 - 开发者资源库' }],
    ['meta', { property: 'og:description', content: '知道的越多，不知道的也越多。精选的开发工具、学习资源和AI提示词，帮助开发者提高效率。' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://docs.hongbusi.com' }],
  ],

  themeConfig: {
    logo: 'https://hongbusi.com/avatar.svg',
    siteTitle: '洪布斯',

    nav: [],

    sidebar: {
      '/notes/': [
        {
          text: 'JavaScript',
          collapsed: false,
          items: [
            { text: 'this', link: '/notes/javascript/this' },
            { text: 'call', link: '/notes/javascript/call' },
            { text: 'apply', link: '/notes/javascript/apply' },
            { text: 'bind', link: '/notes/javascript/bind' },
            { text: 'Promise', link: '/notes/javascript/promise' },
            { text: '浏览器渲染原理', link: '/notes/javascript/browser' },
            { text: 'V8 引擎', link: '/notes/javascript/v8' },
          ],
        },
        {
          text: 'TypeScript',
          collapsed: false,
          items: [
            { text: '概述', link: '/notes/typescript/index' },
            { text: 'typeof', link: '/notes/typescript/typeof' },
            { text: 'Pick', link: '/notes/typescript/4-pick' },
          ],
        },
        {
          text: 'NestJS',
          collapsed: false,
          items: [
            { text: '概述', link: '/notes/nestjs/index' },
            { text: '快速开始', link: '/notes/nestjs/getting-started' },
            { text: '内置 HTTP 异常', link: '/notes/nestjs/built-in-http-exceptions' },
            { text: '热重载', link: '/notes/nestjs/hot-reload' },
          ],
        },
        {
          text: 'MySQL',
          collapsed: false,
          items: [
            { text: '快速开始', link: '/notes/mysql/getting-started' },
            { text: '表关系', link: '/notes/mysql/relationship' },
          ],
        },
        {
          text: 'Linux',
          collapsed: false,
          items: [
            { text: 'Docker', link: '/notes/linux/docker' },
            { text: '常见问题', link: '/notes/linux/problem' },
            { text: 'Mac 端口占用', link: '/notes/linux/port-occupancy-for-mac' },
          ],
        },
        {
          text: '服务器',
          collapsed: false,
          items: [
            { text: '环境配置', link: '/notes/server/env-config' },
            { text: 'Nginx SSL', link: '/notes/server/nginx-ssl' },
            { text: '免密登录', link: '/notes/server/password-free-login' },
            { text: 'Ubuntu', link: '/notes/server/ubuntu' },
          ],
        },
        {
          text: 'Git',
          collapsed: false,
          items: [
            { text: '常用命令', link: '/notes/git/commands' },
            { text: '常见问题', link: '/notes/git/problem' },
          ],
        },
        {
          text: '经验总结',
          collapsed: false,
          items: [
            { text: 'node-sass 问题', link: '/notes/experience/node-sass' },
            { text: '终端配置', link: '/notes/experience/terminal' },
          ],
        },
        {
          text: 'SEO',
          collapsed: false,
          items: [
            { text: '工具', link: '/notes/seo/tools' },
          ],
        },
        {
          text: '其他',
          collapsed: false,
          items: [
            { text: '环境变量', link: '/notes/other/environment' },
            { text: '产品分析', link: '/notes/other/product-analysis' },
            { text: '工具函数', link: '/notes/other/utils' },
          ],
        },
        {
          text: '读书笔记',
          collapsed: false,
          items: [
            { text: '独自去闯', link: '/notes/books/go-it-alone' },
            { text: '重来 3', link: '/notes/books/rework-3' },
            { text: 'SaaS 创业路线图', link: '/notes/books/saas-entrepreneurial-roadmap' },
            { text: 'Vue.js 设计与实现', link: '/notes/books/vue-design-and-implementation' },
            { text: '你不知道的 JavaScript（上）', link: '/notes/books/you-dont-know-js-1' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Hongbusi' },
    ],

    footer: {
      message: '知道的越多，不知道的也越多。',
      copyright: 'Copyright © 2024 洪布斯',
    },

    search: {
      provider: 'local',
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    outline: {
      label: '目录',
    },

    lastUpdated: {
      text: '最后更新于',
    },

    notFound: {
      title: '页面未找到',
      quote: '但如果你不改变方向，并且继续寻找，你可能会到达你所前往的地方。',
      linkLabel: '前往首页',
      linkText: '带我回首页',
    },
  },
})
