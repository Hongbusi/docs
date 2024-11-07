---
title: typeof 与 instanceof 区别
---

## 一、typeof

`typeof` 操作符返回一个字符串，用于确认一个变量的类型。返回值有八种：`undefined`、`boolean`、`string`、`number`、`bigint`、`symbol`、`function`、`object`。

其中需要注意的是：

- 值为对象（而不是函数）或 `null` 返回的都是 `object`；
- 调用 `typeof null` 返回的是 `object`，因为特殊值 `null` 被认为是一个对空对象的引用。

## 二、instanceof

`instanceof` 运算符用于检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上。

``` js
function Car(make) {
  this.make = make
}
const auto = new Car('China')
console.log(auto instanceof Car) // true
console.log(auto instanceof Object) // true
```

`instanceof` 实现原理：

``` js
function _instanceof(leftValue, rightValue) {
  rightValue = rightValue.prototype
  leftValue = leftValue.__proto__
  while (true) {
    if (leftValue === null)
      return false
    if (leftValue === rightValue)
      return true
    leftValue = leftValue.__proto__
  }
}
```

其实 `instanceof` 主要的实现原理就是只要右边变量的 `prototype` 在左边变量的原型链上即可。因此，`instanceof` 在查找的过程中会遍历左边变量的原型链，直到找到右边变量的 `prototype`，如果查找失败，则会返回 `false`，告诉我们左边变量并非是右边变量的实例。

## 三、区别

`typeof` 与 `instanceof` 都是判断数据类型的方法，区别如下：

- `typeof` 会返回一个变量的基本类型，`instanceof` 返回的是一个布尔值；
- `instanceof` 可以准确地判断复杂引用数据类型，但是不能正确判断基础数据类型；
- 而 `typeof` 也存在弊端，它虽然可以判断基础数据类型（`null` 除外），但是引用数据类型中，除了 `function` 类型以外，其他的也无法判断。

可以看到，上述两种方法都有弊端，并不能满足所有场景的需求。

如果需要通用检测数据类型，可以采用 `Object.prototype.toString`，调用该方法，统一返回格式 `"[object Xxx]"` 的字符串。

如下：

``` js
Object.prototype.toString({}) // "[object Object]"
Object.prototype.toString.call({}) // "[object Object]"
Object.prototype.toString.call(1) // "[object Number]"
Object.prototype.toString.call('1') // "[object String]"
Object.prototype.toString.call(true) // "[object Boolean]"
Object.prototype.toString.call(() => {}) // "[object Function]"
Object.prototype.toString.call(null) // "[object Null]"
Object.prototype.toString.call(undefined) // "[object Undefined]"
Object.prototype.toString.call(/123/g) // "[object RegExp]"
Object.prototype.toString.call(new Date()) // "[object Date]"
Object.prototype.toString.call([]) // "[object Array]"
Object.prototype.toString.call(document) // "[object HTMLDocument]"
Object.prototype.toString.call(window) // "[object Window]"
```

了解了 `toString` 的基本用法，下面就实现一个全局通用的数据类型判断方法。

``` js
function getType(value) {
  // 先进行 typeof 判断，如果是基础数据类型，直接返回
  if (typeof value !== 'object')
    return type

  // 对于typeof返回结果是object的，再进行如下的判断，正则返回结果
  return Object.prototype.toString.call(value).replace(/^\[object (\S+)\]$/, '$1')
}
```

## 参考文献

- https://vue3js.cn/interview/JavaScript/typeof_instanceof.html
