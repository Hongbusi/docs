# 最佳实践

## vuex

#### src/store/index.js

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

#### src/lang/index.js

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
