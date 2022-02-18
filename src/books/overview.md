# 框架设计概览

## 命令式和声明式

视图层框架通常分为命令式和声明式，它们各有优缺点。

``` js
// 命令式
const div = document.querySelector('#app')
div.innerText = 'hello world'
div.addEventListener('click', () => alert('ok'))

// 声明式
<div @click="() => alert('ok')">hello world</div>
```

命令式框架**关注过程**，声明式框架**更加关注结果**。

## 性能与可维护性的权衡

**声明式代码的性能不优于命令式代码的性能**。

毕竟框架本身就是封装了命令式代码才实现了面向用户的声明式。

而框架设计者要做的就是：**在保持维护性的同时让性能损失最小化**。
