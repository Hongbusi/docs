# Node 接口

Webpack 提供了 Node.js API，可以在 Node.js 运行时下直接使用。

当你需要自定义构建或开发流程时，Node.js API 非常有用，因为此时所有的报告和错误处理都必须自行实现，webpack 仅仅负责编译的部分。所以 `stats` 配置选项不会在 `webpack()` 调用中生效。

## 安装

开始使用 webpack 的 Node.js API 之前，首先你需要安装 webpack：

``` bash
npm install webpack --save-dev
```

在 Node.js 文件中，引入 webpack 模块：

``` js
const webpack = require('webpack');
```

## webpack()

导入的 `webpack` 函数会将 **配置对象** 传给 webpack，如果同时传入回调函数会在 webpack compiler 运行时被执行：

``` js
const webpack = require('webpack');

webpack({
  // [配置对象](/configuration/)
}, (err, stats) => { // [Stats Object](#stats-object)
  if (err || stats.hasErrors()) {
    // [在这里处理错误](#error-handling)
  }
  // 处理完成
});
```

::: tip
`err` 对象 **不包含** 编译错误，必须使用 `stats.hasErrors()` 单独处理。`err` 对象只包含 webpack 相关的问题，例如配置错误等。
:::

## Compiler 实例

如果你不向 `webpack` 传入可执行的回调函数，它会返回一个 webpack `Compiler` 实例。你可以通过手动执行它或者为它的构建时添加一个监听器，就像 CLI 类似。`Compiler` 实例提供了以下方法：

- `.run(callback)`
- `.watch(watchOptions, handler)`

使用 `run` 方法启动所有编译工作。 完成之后，执行传入的的 `callback` 函数。 最终记录下来的概括信息（stats）和错误（errors），都应在这个 callback 函数中获取。

::: warning
这个 API 一次仅支持一个编译。当使用 `run` 或者 `watch` 时，调用 `close`，并等待它完成后再次执行 `run` 或者 `watch`。 并发编译将破坏输出文件。
:::

## 执行

调用 `Compiler` 实例的 `run` 方法跟上文提到的快速执行方法很类似：

``` js
const webpack = require('webpack');

const compiler = webpack({
  // [配置对象](/configuration/)
});

compiler.run((err, stats) => { // [Stats Object](#stats-object)
  // ...

  compiler.close((closeErr) => {
    // ...
  });
});
```

::: warning
不要忘记关闭编译器，这样低优先级的工作（比如持久缓存）就有机会完成。
:::

## 监听

调用 `watch` 方法会触发 webpack 执行，但之后会监听变更（很像 CLI 命令: `webpack --watch`），一旦 webpack 检测到文件变更，就会重新执行编译。 该方法返回一个 `Watching` 实例。

``` js
watch(watchOptions, callback);
```

``` js
const webpack = require('webpack');

const compiler = webpack({
  // [配置对象](/configuration/)
});

const watching = compiler.watch({
  // [watchOptions](/configuration/watch/#watchoptions) 示例
  aggregateTimeout: 300,
  poll: undefined
}, (err, stats) => { // [Stats Object](#stats-object)
  // 这里打印 watch/build 结果...
  console.log(stats);
});
```

`watch` 方法返回一个 `Watching` 实例，该实例会暴露一个 `.close(callback)` 方法。 调用该方法将会结束监听：

``` js
watching.close((closeErr) => {
  console.log('Watching Ended.');
});
```

## Stats 对象

`stats` 对象会被作为 `webpack()` 回调函数的第二个参数传递，可以通过它获取到代码编译过程中的有用信息，包括：

- 错误和警告（如果有的话）
- 计时信息
- module 和 chunk 信息

`stats` 对象暴露了以下方法：

### stats.hasErrors()

可以用来检查编译期是否有错误，返回值为 `true` 或 `false`。

### stats.hasWarnings()

可以用来检查编译期是否有警告， 返回值为 `true` 或 `false`。

### stats.toJson(options)

以 JSON 对象形式返回编译信息。`options` 可以是一个字符串（预设值）或是颗粒化控制的对象：

``` js
stats.toJson('minimal'); // [更多选项如: 'verbose' 等](/configuration/stats).
```

``` js
stats.toJson({
  assets: false,
  hash: true,
});
```

### stats.toString(options)

以格式化的字符串形式返回描述编译信息（类似 CLI 的输出）。

配置对象与 `stats.toJson(options)` 一致，除了额外增加的一个选项：

``` js
stats.toString({
  // 增加控制台颜色开关
  colors: true,
});
```

下面是 `stats.toString()` 用法的示例：

``` js
const webpack = require('webpack');

webpack({
  // [配置对象](/configuration/)
}, (err, stats) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(stats.toString({
    chunks: false,  // 使构建过程更静默无输出
    colors: true    // 在控制台展示颜色
  }));
});
```

## MultiCompiler

`MultiCompiler` 模块可以让 webpack 同时执行多个配置。如果传给 webpack 的 Node.js API 的 `options` 参数，该参数由是由多个配置对象构成的数组，webpack 会相应地创建多个 compiler 实例，并且在所有 compiler 执行完毕后调用 `callback` 方法。

``` js
const webpack = require('webpack');

webpack([
  { entry: './index1.js', output: { filename: 'bundle1.js' } },
  { entry: './index2.js', output: { filename: 'bundle2.js' } }
], (err, stats) => { // [Stats Object](#stats-object)
  process.stdout.write(stats.toString() + '\n');
});
```

::: warning
多个配置对象在执行时，不会并行执行。每个配置都只会在前一个处理结束后，才进行处理。
:::

## 错误处理

完备的错误处理中需要考虑以下三种类型的错误：

- 致命的 wepback 错误（配置出错等）
- 编译错误（缺失的 module，语法错误等）
- 编译警告

下面是一个覆盖这些场景的示例：

``` js
const webpack = require('webpack');

webpack({
  // [配置对象](/configuration/)
}, (err, stats) => {
  if (err) {
    console.error(err.stack || err);
    if (err.details) {
      console.error(err.details);
    }
    return;
  }

  const info = stats.toJson();

  if (stats.hasErrors()) {
    console.error(info.errors);
  }

  if (stats.hasWarnings()) {
    console.warn(info.warnings);
  }

  // Log result...
});
```
