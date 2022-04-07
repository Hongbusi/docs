import getInterviewSidebar from './interview'
import getNotesSidebar from './notes'

const sidebar = {
  '/javascript/': getJavaScriptSidebar(),
  '/petite-vue/': getPetiteVueSidebar(),
  '/notes/': getNotesSidebar(),
  '/interview/': getInterviewSidebar()
}

export default sidebar

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
