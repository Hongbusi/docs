# 最佳实践

## vue 引入 js 库的正确姿势

### 错误示范

**全局变量法**

最不靠谱的方式就是将导入的库挂在全部变量window 对象下：

``` js
// entry.js

window._ = require('lodash');
```

``` js
// MyComponent.vue

export default {
  created() {
    console.log(_.isEmpty() ? 'Lodash everywhere!' : 'Uh oh..');
  }
}
```

这种方式的缺点有很多，我们只说其中一个关键的点：不支持服务端渲染。当应用跑在服务端时，window 对象不存在，当然试图去访问 window 下的属性会抛出错误。

**处处引入法**

另外一个不太优雅的方式就是在需要的每个文件中都引入对应的库：

``` js
// MyComponent.vue

import _ from 'lodash';

export default {
  created() {
    console.log(_.isEmpty() ? 'Lodash is available here!' : 'Uh oh..');
  }
}
```

虽然这方法是可行的，但是太不简洁。你必须在每个文件中都记得引入， 而且如果不需要了，又得重新删除。另外，如果打包策略不够明智的话，可能会打包出多份重复的代码。

### 正确引入方式

最简单靠谱的方式是用库变成 Vue 的原型对象的属性。下面，我来演示如何将 dayjs 库引入：

``` js
// entry.js

import dayjs from 'dayjs';
Object.definePrototype(Vue.prototype, '$dayjs', { value: dayjs });
```

由于所有的组件都会继承 Vue 原型对象上的方法，因此这些方法在任何组件文件中都能通过 `this.$dayjs` 访问到：
``` js
// MyNewComponent.vue

export default {
  created() {
    console.log('The time is ' . this.$dayjs().format('HH:mm'));
  }
}
```

我们来仔细看一下其中的原理。

`Object.defineProperty`

通常我们会如下设置对象属性：

``` js
Vue.prototype.$dayjs = dayjs;
```

你也可以这么做，但是 Object.defineProperty 允许我们用属性描述器来定义我们的属性。我们可以定义该属性是否可写，可枚举，可配置。

一般情况下，我们不需要用那么复杂的方式来赋值属性。但这里用它有个好处：用属性描述器定义的属性是默认只读的。

这能防止那些脑子不清醒的开发者犯下一些低级错误：

``` js
this.$http = 'Assign some random thing to the instance method';
this.$http.get('/'); // TypeError: this.$http.get is not a function
```

`Object.defineProperty` 能保护引入的库不被重新赋值，如果你尝试重写，程序会抛出 `TypeError: Cannot assign to read only property` 的错误。


可能你注意到，我们用 `$` 开头的属性来存放引入的库。当然，你应该记得还有其他的一些属性也是这样的，比如 $refs，$on，$mount。

这种做法不是强制的，这个前缀就是为了提醒某些昏昏沉沉的开发者，这些属性是公有的，你可以在任何地方使用。反之，某些属性只能在 Vue 内部使用。

作为一门以原型为基本的语言，JavaScript 中并没有真正的类，所以也就没有所谓的公有，私有变量，或者静态方法。上面这种约定，我觉得是种不错的选择。

### 写成插件

如果你在项目的很多地方都用了某个库，或者你希望全局可用，你可以构建自己的 Vue 插件。

插件能化繁为简，能让你像下面这样很简单地引入自己想要的库：

``` js
import MyLibraryPlugin from 'my-library-plugin';
Vue.use(MyLibraryPlugin);
```

就像 Vue Route，Vuex 等插件一样，我们的库仅仅需要两行，就能在任何地方使用了。

**如何写插件**

首先，创建一个文件。本例中，我将引入一个 Axios 库的插件。我们就把这个文件命名为 axios.js 吧。

最关键的地方在于，我们需要暴露一个将 Vue 构造器作为第一个参数的 install 方法。
``` js
// axios.js

export default {
  install: function(Vue) {
    // Do stuff
  }
}
```

然后我们可以用之前的方式将库添加到 Vue 的原型对象上：

``` js
// axios.js

import axios from 'axios';

export default {
  install: function(Vue) {
    Object.defineProperty(Vue.prototype, '$http', { value: axios });
  }
}
```

接着我们只需要 Vue 实例的 use 方法就能将这个库引入整个项目了。我们像下面代码一样简单引入：

``` js
// entry.js

import AxiosPlugin from './axios.js';
Vue.use(AxiosPlugin);

new Vue({
  created() {
    console.log(this.$http ? 'Axios works!' : 'Uh oh..');
  }
});
```

**插件参数设置**

插件的 install 方法还可以接受其他的可选参数。有些开发者可能不喜欢 Axios 实例对象的方法名 $http，因为 Vue resource 插件的方法名也是这个。然后，让我们利用第二个参数来修改它。
``` js
// axios.js

import axios from 'axios';

export default {
  install: function(Vue, name = '$http') {
    Object.defineProperty(Vue.prototype, name, { value: axios });
  }
}
```

``` js
// entry.js

import AxiosPlugin from './axios.js';
Vue.use(AxiosPlugin, '$axios');

new Vue({
  created() {
    console.log(this.$axios ? 'Axios works!' : 'Uh oh..');
  }
})
```

当然上面，我们可以直接在 `Object.defineProperty` 的中将 name 属性写死成 `$axios`。也可以在 install方法中引入多个需要的库。

## vue 全局注入 scss/less 变量

[style-resources-loader](https://github.com/yenshih/style-resources-loader) 是 webpack 的 CSS 处理器资源加载器。

这个加载器是一个用于 webpack 的 CSS 处理器资源加载器，它将你的样式资源（例如变量、mixin）注入到多个导入的 css、sass、scss、less、stylus 模块中。

它主要用于：

- 在所有样式文件中共享变量、mixin、函数，因此您无需手动 @import。 
- 覆盖其他库（例如 ant-design）提供的样式文件中的变量并自定义您自己的主题。

### 安装

``` bash
npm install style-resources-loader -D

#or

yarn add style-resources-loader -D
```

::: tip
在 Vue 中使用 [前往](https://cli.vuejs.org/zh/guide/css.html)
:::

## vuex

### src/store/index.js

``` js
import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';

Vue.use(Vuex);

// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context('./modules', true, /\.js$/);

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
  const value = modulesFiles(modulePath);
  modules[moduleName] = value.default;
  return modules;
}, {});

const store = new Vuex.Store({
  modules,
  getters
});

export default store;
```

## vue-i18n

[Vue I18n](https://kazupon.github.io/vue-i18n/zh/) 是 Vue.js 的国际化插件。它可以轻松地将一些本地化功能集成到你的 Vue.js 应用程序中。

### src/lang/index.js

``` js
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import Cookies from 'js-cookie';
import enLocale from './en';
import zhLocale from './zh';

Vue.use(VueI18n);

const messages = {
  en: {
    ...enLocale,
  },
  'zh-cn': {
    ...zhLocale,
  }
};

export function getLanguage() {
  const chooseLanguage = Cookies.get('language');
  if (chooseLanguage) return chooseLanguage;

  // if has not choose language
  const language = (navigator.language || navigator.browserLanguage).toLowerCase();
  const locales = Object.keys(messages);
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale;
    }
  }
  return 'en';
}

const i18n = new VueI18n({
  locale: getLanguage(),
  messages
});

export default i18n;
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
