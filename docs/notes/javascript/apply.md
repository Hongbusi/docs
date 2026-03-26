---
title: Function.prototype.apply()
---

`apply()` 方法用于指定函数调用指向的 `this` 指针，并提供类数组类型的参数列表作为指定函数的参数。

::: tip
`apply()` 的语法和作用与 `call()` 方法类似，只有一个区别，就是 `call()` 方法接受的是一个参数列表，而 `apply()` 方法接受的是一个包含多个参数的类数组。
:::

## 语法

``` js
func.apply(thisArg, [argsArray])
```

## 简单实现

``` js
Function.prototype._apply = function (thisArg, argArray) {
  // 判断当前的调用方是不是一个函数
  if (typeof this !== 'function') {
    throw new TypeError('当前调用 apply 方法的不是函数')
  }

  // 处理绑定的 thisArg
  thisArg = (thisArg !== null && thisArg !== undefined) ? new Object(thisArg) : window

  // 将调用方的内容保存为执行方的一个属性，为了保证不与执行方中的 key 键名重复
  const fn = Symbol('fn')

  thisArg[fn] = this
  argArray = argArray || []

  // 执行保存的函数，这个时候作用域就是在调用方的对象的作用域下执行，改变 this 的指向
  const result = thisArg[fn](...argArray)

  // 执行完删除刚才新增的属性值
  delete thisArg[fn]

  // 返回执行结果
  return result
}
```
