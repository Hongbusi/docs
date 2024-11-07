---
title: 闭包
---

闭包（英语：Closure），又称词法闭包（Lexical Closure）或函数闭包（function closures）。

## 一、定义

一个普通的函数，如果它可以访问外层作用域的自由变量，那这个函数就是一个闭包。

- 从广义的角度来说：`JavaScript` 中的函数都是闭包。

- 从狭义的角度来说：`JavaScript` 中一个函数，如果访问了外层作用域的变量，那么它是一个闭包。

::: tip 自由变量
自由变量是指在函数中使用的，但既不是函数参数也不是函数的局部变量的变量。
:::

请看下面的代码：

``` js
function init() {
  const name = 'Mozilla' // name 是一个被 init 创建的局部变量
  function displayName() { // displayName() 是内部函数，一个闭包
    alert(name) // 使用了父函数中声明的变量
  }
  displayName()
}
init()
```

## 二、使用场景

任何闭包的使用场景都离不开这两点：

- 模拟私有变量
- 延长变量的生命周期

::: tip 延长变量的生命周期
一般函数的词法环境在函数返回后就被销毁，但是闭包会保存对创建时所在词法环境的引用，即便创建时所在的执行上下文被销毁，但创建时所在词法环境依然存在，以达到延长变量的生命周期的目的。
:::

下面举个例子：

在页面上添加一些可以调整字号的按钮。

``` js
function makeSizer(size) {
  return function () {
    document.body.style.fontSize = `${size}px`
  }
}

const size12 = makeSizer(12)
const size14 = makeSizer(14)
const size16 = makeSizer(16)

document.getElementById('size-12').onclick = size12
document.getElementById('size-14').onclick = size14
document.getElementById('size-16').onclick = size16
```

### 柯里化函数

柯里化的目的在于避免频繁调用具有相同参数函数的同时，又能够轻松的重用。

``` js
// 假设我们有一个求长方形面积的函数
function getArea(width, height) {
  return width * height
}

// 如果我们碰到的长方形的宽老是 10
const area1 = getArea(10, 20)
const area2 = getArea(10, 30)
const area3 = getArea(10, 40)

// 我们可以使用闭包柯里化这个计算面积的函数
function getArea(width) {
  return (height) => {
    return width * height
  }
}

const getTenWidthArea = getArea(10)
// 之后碰到宽度为 10 的长方形就可以这样计算面积
const area1 = getTenWidthArea(20)

// 而且如果遇到宽度偶尔变化也可以轻松复用
const getTwentyWidthArea = getArea(20)
```

### 使用闭包模拟私有方法

在 `JavaScript` 中，没有支持声明私有变量，但我们可以使用闭包来模拟私有方法。

``` js
const Counter = (function () {
  let privateCounter = 0

  function changeBy(val) {
    privateCounter += val
  }

  return {
    increment() {
      changeBy(1)
    },

    decrement() {
      changeBy(-1)
    },

    value() {
      return privateCounter
    }
  }
})()

console.log(Counter.value()) // 0
Counter.increment()
Counter.increment()
console.log(Counter.value()) // 2
Counter.decrement()
console.log(Counter.value()) // 1
```

上述通过使用闭包来定义公共函数，并令其可以访问私有函数和变量。这个方式也称为模块模式（module pattern）。

### 其他

例如计数器、延迟调用、回调等闭包的应用，其核心思想还是创建私有变量和延长变量的生命周期。

## 三、注意事项

如果不是某些特定任务需要使用闭包，在其它函数中创建函数是不明智的，因为闭包在处理速度和内存消耗方面对脚本性能具有负面影响。

例如，在创建新的对象或者类时，方法通常应该关联于对象的原型，而不是定义到对象的构造器中。原因是这将导致每次构造器被调用时，方法都会被重新赋值一次（也就是说，对于每个对象的创建，方法都会被重新赋值）。

考虑以下示例：

``` js
function MyObject(name, message) {
  this.name = name.toString()
  this.message = message.toString()
  this.getName = function () {
    return this.name
  }

  this.getMessage = function () {
    return this.message
  }
}
```

在上面的代码中，我们并没有利用到闭包的好处，因此可以避免使用闭包。修改成如下：

``` js
function MyObject(name, message) {
  this.name = name.toString()
  this.message = message.toString()
}

MyObject.prototype.getName = function () {
  return this.name
}
MyObject.prototype.getMessage = function () {
  return this.message
}
```

## 参考文献

- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures
