# Vue 组件注册

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
