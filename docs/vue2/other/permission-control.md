
# Vue 权限控制

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
