import type { DefaultTheme } from 'vitepress'
import { defineConfig } from 'vitepress'

const TechnologyStack: DefaultTheme.NavItemWithLink[] = [
  { text: 'JavaScript', link: '/javascript/' },
  { text: 'TypeScript', link: '/typescript/' },
  { text: 'Vue', link: '/vue/' },
  { text: 'Node', link: '/nodejs/what-is-nodejs' },
  { text: 'Nest', link: '/nestjs/' },
  { text: 'Algorithm', link: '/algorithm/what-is-algorithm' },
  { text: 'Rust', link: '/rust/' },
]

const Nav: DefaultTheme.NavItem[] = [
  { text: '技术栈', items: TechnologyStack },
  { text: '笔记', link: '/notes/' },
  { text: '面试', link: '/interview/css/box' },
  { text: '书签', link: '/bookmarks/' },
]

const SidebarJavaScript: DefaultTheme.SidebarItem[] = [
  {
    text: 'JavaScript',
    items: [
      { text: '浏览器工作原理', link: '/javascript/browser' },
      { text: 'V8 引擎工作原理', link: '/javascript/v8' },
      { text: 'JavaScript 内存管理', link: '/javascript/memory-management' },
      { text: 'JavaScript 事件循环', link: '/javascript/event-loop' },
      { text: 'this', link: '/javascript/this' },
      { text: 'apply', link: '/javascript/apply' },
      { text: 'call', link: '/javascript/call' },
      { text: 'bind', link: '/javascript/bind' },
      { text: 'Promise', link: '/javascript/promise' },
    ],
  },
]

const SidebarTypeScript: DefaultTheme.SidebarItem[] = [
  {
    text: 'TypeScript',
    items: [
      { text: 'keyof', link: '/typescript/keyof' },
      { text: 'typeof', link: '/typescript/typeof' },
    ],
  },
  {
    text: 'TypeChallenges',
    items: [
      { text: '4 · 实现 Pick', link: '/typescript/4-pick' },
    ],
  },
]

const SidebarVue: DefaultTheme.SidebarItem[] = [
  {
    text: 'Vue',
    items: [
      { text: '介绍', link: '/vue/' },
      { text: 'Vue3 源码结构介绍', link: '/vue/introduction' },
    ],
  },
]

const SidebarNode: DefaultTheme.SidebarItem[] = [
  {
    text: 'Node.js',
    items: [
      { text: 'Node.js 是什么？', link: '/nodejs/what-is-nodejs' },
      { text: '一些问题', link: '/nodejs/some-problems' },
    ],
  },
]

const SidebarNest: DefaultTheme.SidebarItem[] = [
  {
    text: 'MySQL',
    items: [
      { text: '快速开始', link: '/mysql/getting-started' },
    ],
  },
  {
    text: 'Nest',
    items: [
      { text: '介绍', link: '/nestjs/' },
      { text: '开始使用', link: '/nestjs/getting-started' },
      { text: '内置 HTTP 异常', link: '/nestjs/built-in-http-exceptions' },
    ],
  },
]

const SidebarAlgorithm: DefaultTheme.SidebarItem[] = [
  {
    text: '入门篇',
    items: [
      { text: '什么是算法？', link: '/algorithm/what-is-algorithm' },
      { text: '为什么要学习算法和数据结构？', link: '/algorithm/why-study-algorithms-and-data-structures' },
      { text: '算法与数据结构的学习方法', link: '/algorithm/algorithms-and-data-structures-learning-methods' },
      { text: '为什么要学习复杂度的分析方法？', link: '/algorithm/why-learn-complexity-analysis' },
    ],
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
      { text: '递归函数转非递归', link: '/algorithm/convert-recursive-function-to-non-recursive' },
    ],
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
      { text: '图', link: '/algorithm/picture' },
    ],
  },
]

const SidebarRust: DefaultTheme.SidebarItem[] = [
  {
    text: 'Rust 程序设计语言',
    items: [
      { text: '安装', link: '/rust/trpl/install' },
      { text: '常见编程概念', link: '/rust/trpl/common-programming-concepts' },
    ],
  },
]

const SidebarNotes: DefaultTheme.SidebarItem[] = [
  {
    text: 'Vite',
    items: [
      { text: '配置', link: '/notes/vite/config' },
    ],
  },
  {
    text: 'Books',
    items: [
      { text: 'Vue.js 设计与实现', link: '/notes/books/vue-design-and-implementation' },
      { text: '你不知道的 JavaScript 上卷', link: '/notes/books/you-dont-know-js-1' },
    ],
  },
  {
    text: 'TypeScript',
    items: [
      { text: '常用命令', link: '/notes/typescript/command' },
    ],
  },
  {
    text: 'Git',
    items: [
      { text: '常用命令', link: '/notes/git/commands' },
      { text: '常见问题', link: '/notes/git/problem' },
    ],
  },
  {
    text: 'Linux',
    items: [
      { text: '免密登录', link: '/notes/linux/password-free-login' },
      { text: '环境配置', link: '/notes/linux/env-config' },
      { text: 'Docker 常用命令', link: '/notes/linux/docker' },
      { text: 'Mac 下端口占用情况', link: '/notes/linux/port-occupancy-for-mac' },
      { text: '常见问题', link: '/notes/linux/problem' },
    ],
  },
  {
    text: '其他',
    items: [
      { text: '工具类', link: '/notes/other/utils' },
      { text: '环境配置', link: '/notes/other/environment' },
    ],
  },
  {
    text: '经验积累',
    items: [
      { text: 'node-sass', link: '/notes/experience/node-sass' },
      { text: '终端', link: '/notes/experience/terminal' },
    ],
  },
]

const SidebarInterview: DefaultTheme.SidebarItem[] = [
  {
    text: 'CSS',
    items: [
      { text: '盒模型', link: '/interview/css/box' },
      { text: 'BFC', link: '/interview/css/bfc' },
      { text: '水平垂直居中', link: '/interview/css/center' },
      { text: '画一个三角形', link: '/interview/css/triangle' },
      { text: '文字小于 12px', link: '/interview/css/less-12px' },
    ],
  },
  {
    text: 'JavaScript',
    items: [
      { text: '数据类型', link: '/interview/javascript/data-type' },
      { text: '字符串常用方法', link: '/interview/javascript/string-api' },
      { text: '数组常用方法', link: '/interview/javascript/array-api' },
      { text: '对象常用方法', link: '/interview/javascript/object-api' },
      { text: '深拷贝浅拷贝', link: '/interview/javascript/copy' },
      { text: '闭包', link: '/interview/javascript/closure' },
      { text: '作用域链', link: '/interview/javascript/scope' },
      { text: '原型、原型链', link: '/interview/javascript/prototype' },
      { text: '继承', link: '/interview/javascript/inherit' },
      { text: 'this', link: '/interview/javascript/this' },
      { text: '事件模型', link: '/interview/javascript/event-model' },
      { text: '事件代理', link: '/interview/javascript/event-agent' },
      { text: '事件循环', link: '/interview/javascript/event-loop' },
      { text: 'typeof 与 instanceof 区别', link: '/interview/javascript/typeof-instanceof' },
      { text: 'new 操作符', link: '/interview/javascript/new' },
      { text: 'Promise', link: '/interview/javascript/promise' },
      { text: 'ajax 原理', link: '/interview/javascript/ajax' },
      { text: 'bind、call、apply', link: '/interview/javascript/bind-call-apply' },
      { text: '执行上下文和执行栈', link: '/interview/javascript/context-stack' },
      { text: 'DOM', link: '/interview/javascript/dom' },
      { text: 'BOM', link: '/interview/javascript/bom' },
      { text: '内存泄漏', link: '/interview/javascript/memory-leak' },
      { text: '防抖', link: '/interview/javascript/debounce' },
      { text: '节流', link: '/interview/javascript/throttle' },
      { text: '函数缓存', link: '/interview/javascript/function-cache' },
      { text: '函数式编程', link: '/interview/javascript/functional-programming' },
      { text: '本地存储', link: '/interview/javascript/cache' },
      { text: '断点续传', link: '/interview/javascript/continue-to-upload' },
    ],
  },
  {
    text: 'Vue',
    items: [
      { text: '实例挂载过程', link: '/interview/vue/new-vue' },
      { text: '生命周期', link: '/interview/vue/lifecycle' },
      { text: 'v-show 与 v-if 的区别', link: '/interview/vue/show-if' },
      { text: '组件之间的通信方式', link: '/interview/vue/communication' },
      { text: 'nextTick 原理', link: '/interview/vue/next-tick' },
      { text: 'Vue 中 key 的作用', link: '/interview/vue/key' },
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
      { text: 'axios 封装', link: '/interview/vue/axios' },
      { text: 'template 如何编译成 render', link: '/interview/vue/template-to-render' },
    ],
  },
  {
    text: 'TypeScript',
    items: [
      { text: '对 TypeScript 的理解', link: '/interview/typescript/understand' },
      { text: 'TypeScript 数据类型', link: '/interview/typescript/data-type' },
      { text: '对 TypeScript 中枚举类型的理解', link: '/interview/typescript/enum' },
      { text: '对 TypeScript 中接口的理解', link: '/interview/typescript/interface' },
      { text: '对 TypeScript 中类的理解', link: '/interview/typescript/class' },
      { text: '对 TypeScript 中函数的理解', link: '/interview/typescript/function' },
      { text: '对 TypeScript 中泛型的理解', link: '/interview/typescript/generic' },
      { text: '对 TypeScript 中高级类型的理解', link: '/interview/typescript/high-type' },
      { text: '对 TypeScript 装饰器的理解', link: '/interview/typescript/decorator' },
      { text: '对 TypeScript 中命名空间和模块的理解', link: '/interview/typescript/namespace-module' },
      { text: '在 Vue 项目中应用 TypeScript', link: '/interview/typescript/vue' },
    ],
  },
  {
    text: 'Webpack',
    items: [
      { text: '对 webpack 的理解', link: '/interview/webpack/understand' },
      { text: 'webpack 的构建流程', link: '/interview/webpack/build-process' },
      { text: 'webpack 中常见的 loader', link: '/interview/webpack/loader' },
      { text: 'webpack 中常见的 plugin', link: '/interview/webpack/plugin' },
      { text: 'loader 和 plugin 的区别', link: '/interview/webpack/loader-plugin' },
      { text: 'webpack 的热更新', link: '/interview/webpack/hmr' },
      { text: 'webpack proxy 工作原理', link: '/interview/webpack/proxy' },
      { text: 'webpack 优化前端性能', link: '/interview/webpack/performance' },
      { text: '提高 webpack 构建速度', link: '/interview/webpack/improve-build' },
      { text: '与 webpack 类似的工具', link: '/interview/webpack/similar-tools' },
    ],
  },
]

export default defineConfig({
  lang: 'zh-CN',
  title: 'Hongbusi',
  description: 'The more you know, the more you do not know.',

  base: '/',
  srcDir: 'src',
  cleanUrls: true,
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
  ],

  themeConfig: {
    logo: '/logo.svg',
    nav: Nav,
    sidebar: {
      '/javascript/': SidebarJavaScript,
      '/typescript/': SidebarTypeScript,
      '/vue/': SidebarVue,
      '/nodejs/': SidebarNode,
      '/mysql/': SidebarNest,
      '/nestjs/': SidebarNest,
      '/algorithm/': SidebarAlgorithm,
      '/rust/': SidebarRust,
      '/notes/': SidebarNotes,
      '/interview/': SidebarInterview,
    },
    editLink: {
      pattern: 'https://github.com/Hongbusi/docs/edit/main/src/:path',
      text: 'Suggest changes to this page',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Hongbusi' },
      { icon: 'twitter', link: 'https://twitter.com/Hongbusi' },
    ],
    footer: {
      copyright: 'Copyright © 2020-PRESENT Hongbusi',
    },
  },
})
