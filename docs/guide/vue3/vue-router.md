# Vue-Router

[Vue Router](https://next.router.vuejs.org/zh/) 是 Vue.js 的官方路由。它与 Vue.js 核心深度集成，让用 Vue.js 构建单页应用变得轻而易举。

## 安装

``` bash
npm install vue-router@4

# or

yarn add vue-router@4
```

## router/index.ts 中配置

``` ts
import { createRouter, createWebHashHistory } from 'vue-router';

const routes: any[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/index.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
```

## main.ts 中使用

``` ts
import { createApp } from 'vue';
import Router from './router';
import App from './App.vue';

createApp(App).use(Router).mount('#app');
```

## 不同的历史模式

在创建路由器实例时，`history` 配置允许我们在不同的历史模式中进行选择。

### Hash 模式

hash 模式是用 `createWebHashHistory()` 创建的：

``` ts
import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    //...
  ]
});
```

### HTML5 模式

用 `createWebHistory()` 创建 HTML5 模式，推荐使用这个模式：

``` ts
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    //...
  ]
});
```
