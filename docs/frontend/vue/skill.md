# 开发技巧

## 状态共享

使用 Vue.js 2.6.0 新增的功能 [Vue.observable( object )](https://cn.vuejs.org/v2/api/#Vue-observable) 实现状态共享。

首先创建一个 store.js，包含一个 state 和一个 mutations，分别用来指向数据和处理方法。

``` js
import Vue from "vue";

export const store = Vue.observable({ count: 0 });

export const mutations = {
  setCount(count) {
    store.count = count;
  }
};
```

然后在 `App.vue` 里面引入这个 `store.js`，在组件里面使用引入的数据和方法。

``` vue
<template>
  <div id="app">
    <p>count:{{ count }}</p>
    <button @click="setCount(count + 1)">+1</button>
    <button @click="setCount(count - 1)">-1</button>
  </div>
</template>

<script>
import { store, mutations } from "./store";

export default {
  name: "App",

  computed: {
    count() {
      return store.count;
    }
  },

  methods: {
    setCount: mutations.setCount
  }
};
</script>
```
