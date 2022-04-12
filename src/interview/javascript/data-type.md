# 数据类型

在 `JavaScript` 中，可以分为 `2` 种类型：`基本类型` 和 `引用类型`。

## 基本类型

基本类型有以下 `7` 种：

- `Number`
- `String`
- `Boolean`
- `Undefined`
- `Null`
- `Symbol`
- `BigInt`

### Null

`Null` 类型只有一个值：`null`。

逻辑上讲 `null` 表示一个空对象指针，这也是给 `typeof` 传一个 `null` 会返回 `'object'` 的原因。

### Symbol

`Symbol` 返回的 `symbol` 值都是唯一、不可变的。一个 `symbol` 值能作为对象属性的唯一标识符，这是该数据类型仅有的目的。

### BigInt

`BigInt` 可以表示任意精度的整数。

## 引用类型

引用类型统称为 `Object`，这里主要讲述下面三种：

- `Object`
- `Array`
- `Function`

### Object

创建 `object` 常用方式为对象字面量表示法，属性名可以是字符串或数值。

``` js
let person = {
  name: 'Hongbusi',
  'age': 18,
  18: true
}
```

### Array

`JavaScript` 数组是一组有序的数据，但跟其他语言不同的是，数组中每个槽位可以存储任意类型的数据。并且，数组也是动态大小的，会随着数据添加而自动增长。

``` js
let array = ['red', { age: 18 }, 2]
array.push(2)
```

### Function

函数实际上是对象，每个函数都是 `Function` 类型的实例，而 `Function` 也有属性和方法，跟其他引用类型一样。

函数存在 `3` 种常见的表达方式：

- 函数声明

``` js
function sum (num1, num2) {
  return num1 + num2
}
```

- 函数表达式

``` js
let sum = function(num1, num2) {
  return num1 + num2
}
```

- 箭头函数

``` js
let sum = (num1, num2) => {
  return num1 + num2
}
```

### 其他引用类型

除了上述说的三种之外，还包括 `Date`、`RegExp`、`Map`、`Set` 等...

## 存储区别

基本数据类型和引用数据类型存储在内存中的位置不同：

- 基本数据类型存储在栈中。
- 引用类型的对象存储于堆中。

## 参考文献

- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures
- https://vue3js.cn/interview/JavaScript/data_type.html
