---
sidebarDepth: 0
---

# Vue 中实现图片懒加载

[vue-lazyload](https://github.com/hilongjw/vue-lazyload) 用于在应用程序中延迟加载图像的 Vue 模块。

## 安装

``` bash
npm install vue-lazyload

#or

yarn add vue-lazyload
```

## 使用

``` js
// main.js

import Vue from 'vue';
import App from './App.vue';
import VueLazyload from 'vue-lazyload';

Vue.use(VueLazyload);

// or with options
const loadimage = require('./assets/loading.gif');
const errorimage = require('./assets/error.gif');

Vue.use(VueLazyload, {
  preLoad: 1.3, // 预载高度比例，默认值：1.3
  error: errorimage, // 加载失败时图像的 src，默认值：'data-src'
  loading: loadimage, // 加载时图像的 src，默认值：'data-src'
  attempt: 1 // 尝试次数, 默认值：3
});

new Vue({
  el: 'body',
  components: {
    App
  }
})
```

``` vue
<template>
  <ul>
    <li v-for="img in list">
      <img v-lazy="img.src">
    </li>
  </ul>
</template>
```
