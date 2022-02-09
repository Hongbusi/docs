# Plugins

## webpackbar

Elegant ProgressBar and Profiler for Webpack.

**Installation**

``` bash
npm install webpackbar --save-dev
```

**Usage**

``` js
const WebpackBar = require('webpackbar');

module.exports = {
  plugins: [
    new WebpackBar()
  ]
};
```

[View details](https://github.com/unjs/webpackbar)

## webpack-assets-manifest

This webpack plugin will generate a JSON file that matches the original filename with the hashed version.

**Installation**

``` bash
npm install webpack-assets-manifest --save-dev
```

**Usage**

``` js
const WebpackAssetsManifest = require('webpack-assets-manifest');

module.exports = {
  plugins: [
    new WebpackAssetsManifest({
      // options
    })
  ]
};
```

[View details](https://github.com/webdeveric/webpack-assets-manifest)

## copy-webpack-plugin

Copies individual files or entire directories, which already exist, to the build directory.

**Installation**

``` bash
npm install copy-webpack-plugin --save-dev
```

**Usage**

``` js
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: 'public',
          to: '.',
          globOptions: {
            ignore: ['**/index.html']
          }
        }
      ],
      options: {
        concurrency: 100
      }
    })
  ]
};
```

[View details](https://github.com/webpack-contrib/copy-webpack-plugin)

## webpack-bundle-analyzer

Visualize size of webpack output files with an interactive zoomable treemap.

**Installation**

``` bash
npm install webpack-bundle-analyzer --save-dev
```

**Usage**

``` js
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  plugins: [
    new BundleAnalyzerPlugin()
  ]
};
```

[View details](https://github.com/webpack-contrib/webpack-bundle-analyzer)
