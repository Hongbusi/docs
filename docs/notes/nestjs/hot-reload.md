---
title: 热更新
sidebar:
  order: 3
---

## 安装

``` bash
pnpm add webpack-node-externals run-script-webpack-plugin webpack -D
```

## 配置

安装完成后，在应用程序的根目录中创建一个 `webpack-hmr.config.js` 文件。

``` js
const { RunScriptWebpackPlugin } = require('run-script-webpack-plugin')
const nodeExternals = require('webpack-node-externals')

module.exports = function (options, webpack) {
  return {
    ...options,
    entry: ['webpack/hot/poll?100', options.entry],
    externals: [
      nodeExternals({
        allowlist: ['webpack/hot/poll?100'],
      }),
    ],
    plugins: [
      ...options.plugins,
      new webpack.HotModuleReplacementPlugin(),
      new webpack.WatchIgnorePlugin({
        paths: [/\.js$/, /\.d\.ts$/],
      }),
      new RunScriptWebpackPlugin({ name: options.output.filename, autoRestart: false }),
    ],
  }
}
```

## 启用 HMR

打开应用程序入口文件 `main.ts` 并添加以下 `webpack` 相关指令。

``` ts {1,7-10}
declare const module: any

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(3000)

  if (module.hot) {
    module.hot.accept()
    module.hot.dispose(() => app.close())
  }
}
bootstrap()
```

## 更新 scripts

将脚本添加到 `package.json` 文件中。

``` json
{
  "scripts": {
    "start:dev": "nest build --webpack --webpackPath webpack-hmr.config.js --watch"
  }
}
```

## 运行以下命令启动应用程序

``` bash
pnpm run start:dev
```

Click [here](https://docs.nestjs.com/recipes/hot-reload) to read more.
