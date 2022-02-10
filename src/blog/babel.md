---
sidebar: false
---

# Babel 使用详解

Babel 是一个 JavaScript 编译器。

Babel 是一个工具链，主要用于将 ECMAScript 2015+ 代码转换为当前和旧版浏览器或环境中向后兼容的 JavaScript 版本。

## Usage

### 安装

``` bash
npm install @babel/core @babel/cli @babel/preset-env --save-dev
```

- `@babel/core` Babel 编译器核心。
- `@babel/cli` Babel 命令行。
- `@babel/preset-env` 是一个智能预设，允许您使用最新的 JavaScript，而无需微观管理目标环境需要哪些语法转换（以及可选的浏览器 polyfill）。这既让你的生活更轻松，也让 JavaScript 包更小！

### 创建一个名为 `babel.config.js` 的配置文件：

``` js
const presets = 
];

module.exports = {
  presets: [
  [
    "@babel/preset-env",
    {
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1"
      },
      useBuiltIns: "usage",
      corejs: "3.6.4"
    }
  ]
};
```

### 运行编译

``` bash
npx babel src --out-dir lib
```
