# this 指向

> 本文转载自 [https://mp.weixin.qq.com/s/hYm0JgBI25grNG_2sCRlTA](https://mp.weixin.qq.com/s/hYm0JgBI25grNG_2sCRlTA)

---

`this` 是 JavaScript 中的一个关键字，但是又一个相对比较特别的关键字，不像 `function`、`var`、`for`、`if` 这些关键字一样，可以很清楚的搞清楚它到底是如何使用的。

`this` 会在执行上下文中绑定一个对象，但是是根据什么条件绑定的呢？在不同的执行条件下会绑定不同的对象，这也是让人捉摸不定的地方。

这一次，我们一起来彻底搞定 `this` 到底是如何绑定的吧！

## 理解 this

### 为什么使用 this

在常见的编程语言中，几乎都有 `this` 这个关键字，但是 JavaScript 中的 `this` 和常见的面向对象语言中的 `this` 不太一样：

- 常见面向对象的编程语言中，比如 Java、C++、Swift、Dart 等等一系列语言中，`this` 通常只会出现在类的方法中。
- 也就是你需要有一个类，类中的方法（特别是实例方法）中，`this` 代表的是当前调用对象。
- 但是 JavaScript 中的 `this` 更加灵活，无论是它出现的位置还是它代表的含义。

使用 `this` 有什么意义呢？下面的代码中，我们通过对象字面量创建出来一个对象，当我们调用对象的方法时，希望将对象的名称一起进行打印。

如果没有 `this`，那么我们的代码会是下面的写法：

- 在方法中，为了能够获取到 `name` 名称，必须通过 `obj` 的引用（变量名称）来获取。
- 但是这样做有一个很大的弊端：如果我将 `obj` 的名称换成了 `info`，那么所有的方法中的 `obj` 都需要换成 `info`。

``` js
var obj = {
  name: 'why',
  running: function() {
    console.log(obj.name + ' running')
  },
  eating: function() {
    console.log(obj.name + ' eating')
  },
  studying: function() {
    console.log(obj.name + ' studying')
  }
}
```

事实上，上面的代码，在实际开发中，我们都会使用 `this` 来进行优化：

- 当我们通过 `obj` 去调用 `running`、`eating`、`studying` 这些方法时，`this` 就是指向的 `obj` 对象。

``` js
var obj = {
  name: 'why',
  running: function() {
    console.log(this.name + ' running')
  },
  eating: function() {
    console.log(this.name + ' eating')
  },
  studying: function() {
    console.log(this.name + ' studying')
  }
}
```

所以我们会发现，在某些函数或者方法的编写中，`this` 可以让我们更加便捷的方式来引用对象，在进行一些 API 设计时，代码更加的简洁和易于复用。

当然，上面只是应用 this 的一个场景而已，开发中使用到 this 的场景到处都是，这也是为什么它不容易理解的原因。

### this 指向什么

我们先说一个最简单的，`this` 在全局作用域下指向什么？

- 这个问题非常容易回答，在浏览器中测试就是指向 `window`。
- 所以，在全局作用域下，我们可以认为 `this` 就是指向的 `window`。

``` js
console.log(this) // window

var name = 'why'
console.log(this.name) // why
console.log(window.name) // why
```

但是，开发中很少直接在全局作用域下去使用 `this`，通常都是在函数中使用。

所有的函数在被调用时，都会创建一个执行上下文：

- 这个上下文中记录着函数的调用栈、函数的调用方式、传入的参数信息等。
- `this` 也是其中的一个属性。

我们先来看一个让人困惑的问题：

- 定义一个函数，我们采用三种不同的方式对它进行调用，它产生了三种不同的结果。

``` js
// 定义一个函数
function foo() {
  console.log(this)
}

// 1. 调用方式一：直接调用
foo() // window

// 2. 调用方式二：将 foo 放到一个对象中，再调用
var obj = {
  name: 'why',
  foo: foo
}
obj.foo() // obj 对象

// 3. 调用方式三：通过 call/apply 调用
foo.call('abc') // String {"abc"} 对象
```

上面的案例可以给我们什么样的启示呢？

- 函数在调用时，JavaScript 会默认给 `this` 绑定一个值。
- `this` 的绑定和定义的位置（编写的位置）没有关系。
- `this` 的绑定和调用方式以及调用的位置有关系。
- `this` 是在运行时被绑定的。

那么 `this` 到底是怎么样的绑定规则呢？一起来学习一下吧。

## this 绑定规则

我们现在已经知道 `this` 无非就是在函数调用时被绑定的一个对象，我们就需要知道它在不同的场景下的绑定规则即可。

### 默认绑定

什么情况下使用默认绑定呢？独立函数调用。

- 独立的函数调用我们可以理解成函数没有被绑定到某个对象上进行调用。

#### 案例一：普通函数调用

- 该函数直接被调用，并没有进行任何的对象关联。
- 这种独立的函数调用会使用默认绑定，通常默认绑定时，函数中的 `this` 指向全局对象（window）。

``` js
function foo() {
  console.log(this) // window
}

foo()
```

#### 案例二：函数调用链（一个函数又调用另外一个函数）

- 所有的函数调用都没有被绑定到某个对象上。

``` js
function test1() {
  console.log(this) // window
  test2()
}

function test2() {
  console.log(this) // window
  test3()
}

function test3() {
  console.log(this) // window
}

test1()
```

#### 案例三：将函数作为参数，传入到另一个函数中

``` js
function foo(func) {
  func()
}

function bar() {
  console.log(this) // window
}

foo(bar)
```

我们对案例进行一些修改，考虑一下打印结果是否会发生变化：

``` js
function foo(func) {
  func()
}

var obj = {
  name: 'why',
  bar: function() {
    console.log(this) // window
  }
}

foo(obj.bar)
```

- 这里的结果依然是 `window`，为什么呢？
- 原因非常简单，在真正函数调用的位置，并没有进行任何的对象绑定，只是一个独立函数的调用。

### 隐式绑定
