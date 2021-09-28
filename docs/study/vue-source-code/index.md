# Vue@2.x 源码学习

[参考文档](https://juejin.cn/column/6960553066101735461)

## 目标

精通 Vue 技术栈的源码原理。

## 准备

### 下载 Vue 源码

- git 命令

``` bash
git clone https://github.com/vuejs/vue.git
```

- 去 [git](https://github.com/vuejs/vue/tree/dev) 手动下载然后解压

### 安装依赖

``` bash
yarn
```

### source map

在 package.json -> scripts 中的 dev 命令中添加 `--sourcemap`，这样就可以在浏览器中调试源码时查看当前代码在源码中的位置。

``` json
{
  "scripts": {
    "dev": "rollup -w -c scripts/config.js --sourcemap --environment TARGET:web-full-dev"
  }
}
```

### 开始调试

执行以下命令，启动开发环境：

``` bash
yarn run dev
```

## 扫盲

执行 `npm run build` 命令之后会发现在 `dist` 目录下生成一堆特殊命名的 `vue.*.js` 文件，这些特殊的命名分别是什么意思呢？

### 构建文件分类

|                    | UMD                | CommonJS                   | ES Module          |
| ------------------ | ------------------ | -------------------------- | ------------------ |
| Full               | vue.js             | vue.common.js              | vue.esm.js         |
| Runtime-only       | vue.runtime.js     | vue.runtime.common.js      | vue.runtime.esm.js |
| Full(prod)         | vue.min.js         | vue.common.prod.js         |                    |
| Runtime-only(prod) | vue.runtime.min.js | vue.runtime.common.prod.js |                    |

### 名词解释

- **Full**：这是一个全量的包，包含编译器（compiler）和运行时（runtime）。
- **Compiler**：编译器，负责将模版字符串（即你编写的类 html 语法的模版代码）编译为 JavaScript 语法的 render 函数。
- **Runtime**：负责创建 Vue 实例、渲染函数、patch 虚拟 DOM 等代码，基本上除了编译器之外的代码都属于运行时代码。
- **UMD**：兼容 CommonJS 和 AMD 规范，通过 CDN 引入的 vue.js 就是 UMD 规范的代码，包含编译器和运行时。
- **CommonJS**：典型的应用比如 nodeJS，CommonsJS 规范的包是为了给 browserify 和 webpack 1 这样旧的打包器使用的。他们默认的入口文件为 `vue.runtime.common.js`。
- **ES Module**：现代 JavaScript 规范，ES Module 规范的包是给像 webpack 2 和 rollup 这样的现代打包器使用的。这些打包器默认使用仅包含运行时的 `vue.runtime.esm.js` 文件。

### 目录结构

```
├── benchmarks                  性能、基准测试
├── dist                        构建打包的输出目录
├── examples                    案例目录
├── flow                        flow 语法的类型声明
├── packages                    一些额外的包
│   ├── vue-server-renderer
│   ├── vue-template-compiler
│   ├── weex-template-compiler
│   └── weex-vue-framework
├── scripts                     所有的配置文件的存放位置
├── src                         vue 源码目录
│   ├── compiler                编译器
│   ├── core                    运行时的核心包
│   │   ├── components          全局组件
│   │   ├── config.js           一些默认配置项
│   │   ├── global-api          全局 API
│   │   ├── instance            Vue 实例相关的
│   │   ├── observer            响应式原理
│   │   ├── util                工具方法
│   │   └── vdom                虚拟 DOM 相关
│   ├── platforms               平台相关的编译器代码
│   │   ├── web
│   │   └── weex
│   ├── server                  服务端渲染相关
├── test                        测试目录
├── types                       TS 类型声明
```
