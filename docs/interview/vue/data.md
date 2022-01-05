# 为什么 data 属性是一个函数而不是一个对象？

![为什么 data 属性是一个函数而不是一个对象](/docs/images/interview/data.png)

## 一、实例和组件定义 data 的区别

`Vue` 实例的时候定义 `data` 属性既可以是一个对象，也可以是一个函数：

``` js
const app = new Vue({
  el: '#app',

  // 对象格式
  data:{
    msg: 'message'
  },

  // 函数格式
  data() {
    return {
      msg: 'message'
    }
  }
})
```

组件中定义 `data` 属性，只能是一个函数。如果为组件 `data` 直接定义为一个对象：

``` js
Vue.component('component1', {
  template:`<div>组件</div>`,

  data: {
    msg: 'foo'
  }
})
```

则会得到警告信息：

![data-object](/docs/images/interview/data-object.png)

警告说明：返回的 `data` 应该是一个函数在每一个组件实例中。

## 二、组件 data 定义函数与对象的区别

上面讲到组件 `data` 必须是一个函数，不知道大家有没有思考过这是为什么呢？

在我们定义好一个组件的时候，`Vue` 最终都会通过 `Vue.extend()` 构成组件实例。

这里我们模仿组件构造函数，定义 `data` 属性，采用对象的形式：

``` js
function Component() {
 
}

Component.prototype.data = {
	count: 0
}
```

创建两个组件实例：

``` js
const componentA = new Component();
const componentB = new Component();
```

修改 `componentA` 组件 `data` 属性的值，`componentB` 中的值也发生了改变：

``` js
console.log(componentB.data.count); // 0
componentA.data.count = 1;
console.log(componentB.data.count); // 1
```

产生这样的原因这是两者共用了同一个内存地址，`componentA` 修改的内容，同样对 `componentB` 产生了影响。

如果我们采用函数的形式，则不会出现这种情况（函数返回的对象内存地址并不相同）。

``` js
function Component() {
	this.data = this.data();
}
Component.prototype.data = function() {
  return {
    count: 0
  }
}
```

修改 `componentA` 组件 `data` 属性的值，`componentB` 中的值不受影响：

``` js
console.log(componentB.data.count); // 0
componentA.data.count = 1;
console.log(componentB.data.count); // 0
```

**`Vue` 组件可能会有很多个实例，采用函数返回一个全新 `data` 形式，使每个实例对象的数据不会受到其他实例对象数据的污染。**

## 三、原理分析

首先可以看看 `Vue` 初始化 `data` 的代码，`data` 的定义可以是函数也可以是对象：

``` js
// src/core/instance/state.js
function initData(vm: Component) {
  let data = vm.$options.data
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {}
  ...
}
```

`data` 既能是 `object` 也能是 `function`，那为什么还会出现上文警告呢？

组件在创建的时候，会进行选项的合并，自定义组件会进入 `mergeOptions` 进行选项合并：

``` js
// src/core/util/options.js
Vue.prototype._init = function (options?: Object) {
  ...
  // merge options
  if (options && options._isComponent) {
    // optimize internal component instantiation
    // since dynamic options merging is pretty slow, and none of the
    // internal component options needs special treatment.
    initInternalComponent(vm, options)
  } else {
    vm.$options = mergeOptions(
      resolveConstructorOptions(vm.constructor),
      options || {},
      vm
    )
  }
  ...
}
```

定义 `data` 会进行数据校验，这时候 `vm` 实例为 `undefined`，进入 if 判断，若 `data` 类型不是 `function`，则出现警告提示：

``` js
// src/core/instance/init.js
strats.data = function (
  parentVal: any,
  childVal: any,
  vm?: Component
): ?Function {
  if (!vm) {
    if (childVal && typeof childVal !== "function") {
      process.env.NODE_ENV !== "production" &&
        warn(
          'The "data" option should be a function ' +
            "that returns a per-instance value in component " +
            "definitions.",
          vm
        );

      return parentVal;
    }
    return mergeDataOrFn(parentVal, childVal);
  }
  return mergeDataOrFn(parentVal, childVal, vm);
};
```

## 四、结论

- 根实例对象 `data` 可以是对象也可以是函数（根实例是单例），不会产生数据污染情况；
- 组件实例对象 `data` 必须为函数，目的是为了防止多个组件实例对象之间共用一个 `data`，产生数据污染。采用函数的形式，`initData` 时会将其作为工厂函数都会返回全新 `data` 对象。
