---
title: 判断数据类型
date: 2021-04-12
---

# 判断数据类型

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
