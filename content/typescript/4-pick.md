---
title: 实现 Pick
sidebar:
  order: 3
---

[4 · 实现 Pick](https://github.com/type-challenges/type-challenges/blob/master/questions/4-easy-pick/README.zh-CN.md)

## Description

从类型 T 中选择出属性 K，构造成一个新的类型。

## Example

``` ts
interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
}
```

## Answer

``` ts
type MyPick<T, K extends keyof T> = { [P in K]: T[P] }
```

## Related knowledge points

- [Mapped Types](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)
- [Indexed Access Types](https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html)
- [keyof and lookup Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#keyof-and-lookup-types)
- [Generic Constraints](https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints)
