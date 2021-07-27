# 常见问题

## 使用 less

Nuxt2 使用的是 Webpack4，需要安装 v7 版本的 `less-loader`（v8 是使用 Webpack5）。

``` bash
yarn add less less-loader@^7.3.0 -D
```

## 配置全局 less 变量

使用 [@nuxtjs/style-resources](https://github.com/nuxt-community/style-resources-module) 来实现。

``` bash
yarn add @nuxtjs/style-resources -D
```

`nuxt.config.js`:

``` js
export default {
  buildModules: ['@nuxtjs/style-resources'],
  styleResources: {
    less: [
      './assets/vars/*.less',
      './assets/abstracts/_mixins.less'
    ]
  }
}
```

## 默认 3000 端口报错

``` js
TypeError: Failed to execute 'put' on 'Cache': Vary header contains * at Object.put (workbox-core.prod.js:1)
```

解决方案：在 nuxt.config.js 添加：

``` js
export default {
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0' // default: localhost
  }
  // other configs
}
```
