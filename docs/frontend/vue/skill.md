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

## 组件注册

通常在组件使用前，需要引入后再注册，但如果高频组件多了，每次都这样做，不仅新增很多代码，效率还低！我们应该如何优化呢？

其实，我们可以借助一下 webpack 的 require.context() 方法来创建自己的（模块）上下文，从而实现自动动态require组件。

我们先在 components 文件夹（这里面都是些高频组件）添加一个叫 global.js 的文件，在这个文件里使用 require.context 动态将需要的高频组件统统打包进来，然后在 main.js 文件中引入 global.js 的文件。

``` js
// components/global.js

import Vue from 'vue';

function changeStr(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const requireComponent = require.context('./', false, /\.vue$/);

// 查找同级目录下以 vue 结尾的组件
const install = () => {
  requireComponent.keys().forEach(fileName => {
    let config = requireComponent(fileName);
    console.log(config); // ./child1.vue 然后用正则拿到child1
    let componentName = changeStr(fileName.replace(/^\.\//, '').replace(/\.\w+$/, ''));
    Vue.component(componentName, config.default || config);
  });
}

export default {
  install // 对外暴露 install 方法
}
```

最后我们就可以随时随地在页面中使用这些高频组件，无需再手动一个个引入了。

## 权限控制

自定义指令 directive。

我们通常给一个元素添加 v-if / v-show 来做权限管理，但如果判断条件繁琐且多个地方需要判断，这种方式的代码不仅不优雅而且冗余。

针对这种情况，我们可以通过全局自定义指令来处理：我们先在新建个 array.js 文件，用于存放与权限相关的全局函数:

``` js
// array.js

export function checkArray(key) {
  let arr = ['1', '2', '3', '4', 'demo'];
  let index = arr.indexOf(key);
  if (index > -1) {
    return true; // 有权限
  } else {
    return false; // 无权限
  }
}
```

然后在将 array 文件挂载到全局中:

``` js
// main.js

import { checkArray } from "./common/array";

Vue.directive('permission', {
  inserted(el, binding) {
    let permission = binding.value; // 获取到 v-permission 的值
    if (permission) {
      let hasPermission = checkArray(permission);
      if (!hasPermission) { // 没有权限 移除 Dom 元素
        el.parentNode && el.parentNode.removeChild(el);
      }
    }
  }
});
```

最后我们在页面中就可以通过自定义指令 v-permission 来判断：

``` vue
<div class="btns">
  <button v-permission="'1'">权限按钮1</button>  // 会显示
  <button v-permission="'10'">权限按钮2</button>  // 无显示
  <button v-permission="'demo'">权限按钮3</button> // 会显示
</div>
```

## 全局注入 scss / less 变量

[style-resources-loader](https://github.com/yenshih/style-resources-loader) 是 webpack 的 CSS 处理器资源加载器。

这个加载器是一个用于 webpack 的 CSS 处理器资源加载器，它将你的样式资源（例如变量、mixin）注入到多个导入的 css、sass、scss、less、stylus 模块中。

它主要用于：

- 在所有样式文件中共享变量、mixin、函数，因此您无需手动 @import。 
- 覆盖其他库（例如 ant-design）提供的样式文件中的变量并自定义您自己的主题。

**Installation**

``` bash
npm install style-resources-loader -D

#or

yarn add style-resources-loader -D
```

**Usage**

在 Vue 中使用 [前往](https://cli.vuejs.org/zh/guide/css.html)
