# Plugins

## webpackbar

### Installation

``` bash
npm install webpackbar -D
# or
yarn add webpackbar -D
```

### Usage

``` js
const webpack = require('webpack');
const WebpackBar = require('webpackbar');

module.exports = {
  entry: './entry.js',
  output: {
    path: path.resolve(__dirname)
    filename: './output.js',
  },
  plugins: [
    new WebpackBar()
  ]
};
```
