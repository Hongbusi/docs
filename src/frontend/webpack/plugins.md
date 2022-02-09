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
