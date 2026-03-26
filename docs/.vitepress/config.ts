import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '洪布斯',
  description: '知道的越多，不知道的也越多。',
  lang: 'zh-CN',
  lastUpdated: true,
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
  ],

  themeConfig: {
    logo: 'https://hongbusi.com/avatar.svg',
    siteTitle: '洪布斯',

    nav: [
      { text: '前端', link: '/frontend/javascript/this' },
      { text: '后端', link: '/backend/nestjs/' },
      { text: 'DevOps', link: '/devops/linux/docker' },
      { text: '积累', link: '/learning/' },
    ],

    sidebar: {
      '/frontend/': [
        {
          text: 'JavaScript',
          collapsed: false,
          items: [
            { text: 'this', link: '/frontend/javascript/this' },
            { text: 'call', link: '/frontend/javascript/call' },
            { text: 'apply', link: '/frontend/javascript/apply' },
            { text: 'bind', link: '/frontend/javascript/bind' },
            { text: 'Promise', link: '/frontend/javascript/promise' },
            { text: '浏览器渲染原理', link: '/frontend/javascript/browser' },
            { text: 'V8 引擎', link: '/frontend/javascript/v8' },
          ],
        },
        {
          text: 'TypeScript',
          collapsed: false,
          items: [
            { text: '概述', link: '/frontend/typescript/' },
            { text: 'typeof', link: '/frontend/typescript/typeof' },
            { text: 'Pick', link: '/frontend/typescript/4-pick' },
          ],
        },
      ],
      '/backend/': [
        {
          text: 'NestJS',
          collapsed: false,
          items: [
            { text: '概述', link: '/backend/nestjs/' },
            { text: '快速开始', link: '/backend/nestjs/getting-started' },
            { text: '内置 HTTP 异常', link: '/backend/nestjs/built-in-http-exceptions' },
            { text: '热重载', link: '/backend/nestjs/hot-reload' },
          ],
        },
        {
          text: 'MySQL',
          collapsed: false,
          items: [
            { text: '快速开始', link: '/backend/mysql/getting-started' },
            { text: '表关系', link: '/backend/mysql/relationship' },
          ],
        },
        {
          text: '服务器',
          collapsed: false,
          items: [
            { text: '环境配置', link: '/backend/server/env-config' },
            { text: 'Nginx SSL', link: '/backend/server/nginx-ssl' },
            { text: '免密登录', link: '/backend/server/password-free-login' },
            { text: 'Ubuntu', link: '/backend/server/ubuntu' },
          ],
        },
      ],
      '/devops/': [
        {
          text: 'Linux',
          collapsed: false,
          items: [
            { text: 'Docker', link: '/devops/linux/docker' },
            { text: '常见问题', link: '/devops/linux/problem' },
            { text: 'Mac 端口占用', link: '/devops/linux/port-occupancy-for-mac' },
          ],
        },
        {
          text: 'Git',
          collapsed: false,
          items: [
            { text: '常用命令', link: '/devops/git/commands' },
            { text: '常见问题', link: '/devops/git/problem' },
          ],
        },
        {
          text: '经验总结',
          collapsed: false,
          items: [
            { text: 'node-sass 问题', link: '/devops/experience/node-sass' },
            { text: '终端配置', link: '/devops/experience/terminal' },
          ],
        },
      ],
      '/learning/': [
        {
          text: '读书笔记',
          collapsed: false,
          items: [
            { text: '独自去闯', link: '/learning/books/go-it-alone' },
            { text: '重来 3', link: '/learning/books/rework-3' },
            { text: 'SaaS 创业路线图', link: '/learning/books/saas-entrepreneurial-roadmap' },
            { text: 'Vue.js 设计与实现', link: '/learning/books/vue-design-and-implementation' },
            { text: '你不知道的 JavaScript（上）', link: '/learning/books/you-dont-know-js-1' },
          ],
        },
        {
          text: 'SEO',
          collapsed: false,
          items: [
            { text: '工具', link: '/learning/seo/tools' },
          ],
        },
        {
          text: '其他',
          collapsed: false,
          items: [
            { text: '环境变量', link: '/learning/other/environment' },
            { text: '产品分析', link: '/learning/other/product-analysis' },
            { text: '工具函数', link: '/learning/other/utils' },
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
