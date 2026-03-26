---
title: typeof
sidebar:
  order: 2
---

`typeof` 类型操作符（`The typeof type operator`）。

`typeof` 方法可以在类型上下文（type context）中使用，用于获取一个变量或者属性的类型。

``` ts
const s = 'hello'
let n: typeof s
// let n: string
```

如果仅仅用来判断基本的类型，自然是没什么太大用，和其他的类型操作符搭配使用才能发挥它的作用。

举个例子：比如搭配 TypeScript 内置的 `ReturnType<T>`。你传入一个函数类型，`ReturnType<T>` 会返回该函数的返回值的类型：

``` ts
type Predicate = (x: unknown) => boolean
type K = ReturnType<Predicate>
// type K = boolean
```

如果我们直接对一个函数名使用 `ReturnType`，我们会看到这样一个报错：

``` ts
function f() {
  return { x: 10, y: 3 }
}
type P = ReturnType<f>

// 'f' refers to a value, but is being used as a type here. Did you mean 'typeof f'?
```

这是因为值（values）和类型（types）并不是一种东西。为了获取值 `f` 也就是函数 `f` 的类型，我们就需要使用 `typeof`：

``` ts
function f() {
  return { x: 10, y: 3 }
}
type P = ReturnType<typeof f>

// type P = {
//   x: number
//   y: number
// }
```
