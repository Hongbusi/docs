---
title: 深拷贝浅拷贝
---

## 一、浅拷贝

浅拷贝是拷贝一层，如果属性是基本类型，拷贝的就是基本类型的值。如果属性是引用类型，拷贝的就是内存地址。

下面简单实现一个浅拷贝：

``` js
function shallowClone(obj) {
  const newObj = {}
  for (const key in obj) {
    if (obj.hasOwnProperty(key))
      newObj[key] = obj[key]
  }
  return newObj
}
```

在 `JavaScript` 中，存在浅拷贝的现象有：

- `Object.assign()`
- `Array.prototype.slice()`、`Array.prototype.concat()`
- 使用拓展运算符实现的复制

## 二、深拷贝

深拷贝是开辟一个新的栈，两个对象属性完成相同，但是对应两个不同的地址，修改一个对象的属性，不会改变另一个对象的属性。

常见的深拷贝方式有：

- `_.cloneDeep()`
- `jQuery.extend()`
- `JSON.stringify()`
- `手写循环递归`

### _.cloneDeep()

``` js
const _ = require('lodash')

const obj1 = {
  a: 1,
  b: { f: { g: 1 } },
  c: [1, 2, 3]
}
const obj2 = _.cloneDeep(obj1)
```

### jQuery.extend()

``` js
const $ = require('jquery')

const obj1 = {
  a: 1,
  b: { f: { g: 1 } },
  c: [1, 2, 3]
}
const obj2 = $.extend(true, {}, obj1)
```

### JSON.stringify()

``` js
const obj2 = JSON.parse(JSON.stringify(obj1))
```

但是这种方式存在弊端，会忽略 `undefined`、`symbol` 和 `function`。

### 循环递归

``` js
function deepClone(obj, hash = new WeakMap()) {
  // 如果是 null 或者 undefined 就不进行拷贝操作
  if (obj === null)
    return obj

  if (obj instanceof Date)
    return new Date(obj)

  if (obj instanceof RegExp)
    return new RegExp(obj)

  // 如果是普通的值或函数的话是不需要深拷贝
  if (typeof obj !== 'object')
    return obj

  // 是对象的话就要进行深拷贝
  if (hash.get(obj))
    return hash.get(obj)

  const cloneObj = new obj.constructor()
  // 找到的是所属类原型上的 constructor，而原型上的 constructor 指向的是当前类本身
  hash.set(obj, cloneObj)

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      // 实现一个递归拷贝
      cloneObj[key] = deepClone(obj[key], hash)
    }
  }
  return cloneObj
}
```

## 三、区别

浅拷贝和深拷贝都创建出一个新的对象，但在复制对象属性的时候，行为不一样。

- 浅拷贝只复制属性指向某个对象的指针，而不复制对象本身，新旧对象还是共享同一块内存，修改对象属性会影响原对象。
- 深拷贝会另外创造一个一模一样的对象，新对象跟原对象不共享内存，修改新对象不会改到原对象。

## 参考文献

- https://vue3js.cn/interview/JavaScript/copy.html
