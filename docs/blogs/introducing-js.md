# Vue 引入 js 库的正确姿势

## 错误示范

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

## 正确引入方式

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

## 写成插件

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
