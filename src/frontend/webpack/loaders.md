# Loaders

## [style-resources-loader](https://github.com/yenshih/style-resources-loader)

用于 webpack 的 CSS 处理器资源加载器。

## [style-loader](https://github.com/webpack-contrib/style-loader)

将 CSS 注入 DOM。

## [css-loader](https://github.com/webpack-contrib/css-loader)

css-loader 像 import/require() 一样解释 @import 和 url() 并解析它们。

## [less-loader](https://github.com/webpack-contrib/less-loader)

用于 webpack 的 Less 加载器。将 Less 编译为 CSS。

## [vue-loader](https://github.com/vuejs/vue-loader)

Vue 单文件组件的 webpack 加载器。

::: tip
你应该将 `vue-loader` 和 `vue-template-compiler` 一起安装。除非你是使用自行 fork 版本的 Vue 模板编译器的高阶用户。
:::

::: tip
每个 `vue` 包的新版本发布时，一个相应版本的 `vue-template-compiler` 也会随之发布。编译器的版本必须和基本的 `vue` 包保持同步，这样 `vue-loader` 就会生成兼容运行时的代码。这意味着你每次升级项目中的 `vue` 包时，也应该匹配升级 `vue-template-compiler`。
:::

::: tip Webpack 配置
Vue Loader 的配置和其它的 loader 不太一样。除了通过一条规则将 `vue-loader` 应用到所有扩展名为 `.vue` 的文件上之外，请确保在你的 webpack 配置中添加 Vue Loader 的插件。
:::

## [vue-style-loader](https://github.com/vuejs/vue-style-loader)

这是一个基于 style-loader 的分支。类似style-loader，您可以将其链接起来 css-loader 以将 CSS 作为样式标签动态注入到文档中。但是，由于这是作为依赖项包含在中并默认使用的vue-loader，因此在大多数情况下，您不需要自己配置此加载程序。

## [babel-loader](https://github.com/babel/babel-loader)

这个包允许使用 Babel 和 webpack 转译 JavaScript 文件。

## [thread-loader](https://github.com/webpack-contrib/thread-loader)

在工作程序池中运行以下加载程序。

把这个 loader 放置在其他 loader 之前， 放置在这个 loader 之后的 loader 就会在一个单独的 worker 池(worker pool)中运行。
