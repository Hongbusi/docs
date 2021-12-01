---
sidebarDepth: 0
---

# Vue 全局注入 scss / less 变量

[style-resources-loader](https://github.com/yenshih/style-resources-loader) 是 webpack 的 CSS 处理器资源加载器。

这个加载器是一个用于 webpack 的 CSS 处理器资源加载器，它将你的样式资源（例如变量、mixin）注入到多个导入的 css、sass、scss、less、stylus 模块中。

它主要用于：

- 在所有样式文件中共享变量、mixin、函数，因此您无需手动 @import。 
- 覆盖其他库（例如 ant-design）提供的样式文件中的变量并自定义您自己的主题。

## Installation

``` bash
npm install style-resources-loader -D

#or

yarn add style-resources-loader -D
```

## Usage

在 Vue 中使用 [前往](https://cli.vuejs.org/zh/guide/css.html)
