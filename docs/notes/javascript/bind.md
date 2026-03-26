---
title: Function.prototype.bind()
---

`bind()` 方法创建一个新函数，在 `bind()` 被调用时，这个新函数的 `this` 被指定为 `bind()` 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。

## 语法

``` js
function.bind(thisArg, arg1, arg2, ...)
```

## 简单实现

``` js
Function.prototype._bind = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('当前调用 call 方法的不是函数')
  }

  // 参数要拼接
  const args = Array.prototype.slice.call(arguments, 1)

  const currentContext = this

  const fn = function () {
    return currentContext.apply(
      this instanceof fn ? this : context,
      args.concat(Array.prototype.slice.call(arguments))
    )
  }

  const OP = function () {}

  if (this.prototype) {
    OP.prototype = this.prototype
  }

  // 将 fn.prototype 是 OP 的实例，因此返回 fn 若作为 new 的构造函数
  // new 生成的新对象作为 this 传入 fn，新对象的 __proto__ 就是 OP 的实例
  fn.prototype = new OP()

  return fn
}
```
