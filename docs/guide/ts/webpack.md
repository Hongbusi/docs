# 使用 webpack 打包

## 下载依赖

``` bash
yarn add typescript -D
yarn add webpack webpack-cli -D
yarn add webpack-dev-server -D
yarn add html-webpack-plugin clean-webpack-plugin -D
yarn add ts-loader -D
yarn add cross-env -D
```

## 入口 js：src/main.ts

``` ts
document.write('Hello WebPack TS!');
```

## index 页面：public/index.html

``` html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>WebPack $ TS</title>
</head>
<body>

</body>
</html>
```

## webpack.config.js

``` js
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production'; // 是否生产环境

function resolve(dir) {
  return path.resolve(__dirname, dir);
}

module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: {
    app: './src/main.ts'
  },

  output: {
    path: resolve('dist'),
    filename: '[name].[contenthash:8].js'
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        include: [resolve('src')]
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin({}),

    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],

  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },

  devtool: isProd ? 'cheap-module-source-map' : 'cheap-module-eval-source-map',

  devServer: {
    host: 'localhost', // 主机名
    stats: 'errors-only', // 打包日志输出输出错误信息
    port: 8081,
    open: true
  }
}
```

## 配置打包命令

``` json
"dev": "cross-env NODE_ENV=development webpack-dev-server --config webpack.config.js",
"build": "cross-env NODE_ENV=production webpack --config webpack.config.js"
```

::: warning 注意
报错：`Error: Cannot find module 'webpack-cli/bin/config-yargs'`

原因：`webpack-dev-server` 不适用于 `webpack-cli v4`，`webpack-cli v4` 附带了对 @webpack-cli/serve 的开箱即用支持，这意味着您可以使用 `webpack serve` 来调用 `webpack-dev-server`。
:::

## 运行与打包

``` bash
yarn dev
yarn build
```
