---
title: isObject
date: 2021-04-11
---

## 介绍

检查 `value` 是否为 `Object` 的 language type。

::: tip
版本: 0.1.0

参数：要检查的值

返回：如果 `value` 为一个对象，那么返回 `true`，否则返回 `false`
:::

``` js
_.isObject(value)
```

## 例子

``` js
_.isObject({});
// => true
 
_.isObject([1, 2, 3]);
// => true
 
_.isObject(_.noop);
// => true
 
_.isObject(null);
// => false
```

## 源码

``` js
function isObject(value) {
  const type = typeof value;
  return value != null && (type === 'object' || type === 'function');
}
```

## typeof

`typeof` 操作符返回一个字符串，表示未经计算的操作数的类型。

### 语法

```
typeof operand
typeof(operand)
```

### `typeof` 可能的返回值（8 种）

| 类型 | 结果 |
| ----------- | ----------- |
| Undefined   | "undefined" |
| Boolean     | "boolean"   |
| Number      | "number"    |
| String      | "string"    |
| Function    | "function"  |
| Symbol      | "symbol"    |
| BigInt      | "bigint"    |
| Object、Null、Array、new Date()、new RegExp() | "object" |

::: tip
如想了解更多，可前往 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof) 查看官网文档。 
:::
