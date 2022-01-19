# 前言

## 认识 webpack

随着前端的快速发展，目前前端的开发已经变的越来越复杂了：

- 比如开发过程中我们需要通过**模块化的方式**来开发；
- 比如也会使用一些**高级的特性来加快我们的开发效率或者安全性**，比如通过 ES6+、TypeScript 开发脚本逻辑，通过 sass、less 等方式来编写 css 样式代码；
- 比如开发过程中，我们还希望**实时的监听文件的变化**来并且**反映到浏览器上**，提高开发的效率；
- 比如开发完成后我们还需要**将代码进行压缩、合并以及其他相关的优化**；
- 等等…

对于很多的前端开发者来说，并不需要思考这些问题，日常的开发中根本就没有面临这些问题：

- 这是因为目前前端开发我们通常都会直接使用三大框架来开发：**Vue、React、Angular**；
- 但是事实上，这三大框架的创建过程我们都是**借助于脚手架**的；
- 事实上 Vue-CLI、create-react-app、Angular-CLI 都是**基于 webpack** 来帮助我们支持模块化、less、TypeScript、打包优化等的；

事实上我们上面提到的所有脚手架都是依赖于 webpack 的。

## webpack 到底是什么呢？

官方的解释：

> webpack is a **static module bundler** for **modern** JavaScript applications.

webpack 是一个静态的模块化打包工具，为现代的 JavaScript 应用程序；

我们来对上面的解释进行拆解：

- **打包 bundler**：webpack 可以将帮助我们进行打包，所以它是一个打包工具；
- **静态的 static**：这样表述的原因是我们最终可以将代码打包成最终的静态资源（部署到静态服务器）；
- **模块化 module**：webpack 默认支持各种模块化开发，ES Module、CommonJS、AMD 等；
- **现代的 modern**：我们前端说过，正是因为现代前端开发面临各种各样的问题，才催生了 webpack 的出现和发展；