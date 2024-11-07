---
title: 作用域
---

## 一、作用域

作用域：变量对象，又称执行上下文。

作用域分成：`全局作用域`、`函数作用域`、`块级作用域`。

### 全局作用域

任何不在函数中或是大括号中声明的变量，都是在全局作用域下，全局作用域下声明的变量可以在程序的任意位置访问。

``` js
const greeting = 'Hello World!'
function greet() {
  console.log(greeting)
}
greet() // Hello World!
```

### 函数作用域

函数作用域也叫局部作用域，如果一个变量是在函数内部声明的，它就在一个函数作用域下面。这些变量只能在函数内部访问，不能在函数以外去访问。

``` js
function greet() {
  const greeting = 'Hello World!'
  console.log(greeting)
}
greet() // Hello World!
console.log(greeting) // Uncaught ReferenceError: greeting is not defined
```

### 块级作用域

ES6 引入了 let 和 const 关键字，和 var 关键字不同，在大括号中使用 let 和 const 声明的变量存在于块级作用域中。在大括号之外不能访问这些变量。

``` js
{
  const greeting = 'Hello World!'
  var lang = 'English'
  console.log(greeting) // Hello World!
}
console.log(lang) // English
console.log(greeting) // Uncaught ReferenceError: greeting is not defined
```

## 二、词法作用域

词法作用域，又叫静态作用域。函数的作用域在函数定义的时候就决定了。

``` js
const a = 2
function foo() {
  console.log(a)
}
function bar() {
  const a = 3
  foo()
}
bar() // 2
```

## 三、作用域链

当查找变量的时候，会先从当前上下文的变量对象中查找，如果没有找到，就会从父级执行上下文的变量对象中查找，一直找到全局上下文的变量对象，也就是全局对象。这样由多个执行上下文的变量对象构成的链表就叫做作用域链。

## 参考文献

- https://vue3js.cn/interview/JavaScript/scope.html
- https://github.com/mqyqingfeng/Blog/issues/6
