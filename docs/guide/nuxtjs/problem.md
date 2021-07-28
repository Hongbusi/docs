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

## 使用 iconfont

`plugins` 下新建 `iconfont.js` 文件，存放 iconfont 生成的 js 代码。

在 nuxt.config.js 添加：

``` js
export default = {
  plugins: [{ src: '~/plugins/iconfont', ssr: false }]
}
```

## components

Nuxt.js 2.13+ 可以在您的模板中使用时自动导入您的组件。要激活此功能，请在您的配置中设置：

``` js
export default {
  components: true
}
```

在 components 目录中创建组件后，它们就可以自动导入了。

```
components/
  TheHeader.vue
  TheFooter.vue
```

``` vue
<template>
  <div>
    <TheHeader />
    <Nuxt />
    <TheFooter />
  </div>
</template>
```

#### 动态导入

要动态导入组件，也称为延迟加载组件，您需要做的就是在模板中添加 Lazy 前缀。

``` vue
<template>
  <div>
    <TheHeader />
    <Nuxt />
    <LazyTheFooter />
  </div>
</template>
```

#### 嵌套目录

如果嵌套目录中有组件，例如：

```
components/
  base/
      foo/
         Button.vue
```

组件名称将基于其自己的路径目录和文件名。因此，该组件将是：

``` vue
<BaseFooButton />
```

但是，如果要使用不应成为组件名称一部分的自定义目录结构，则可以明确指定这些目录：

```
components/
  base/
      foo/
         Button.vue
```

``` js
export default {
  components: {
    dirs: [
      '~/components',
      '~/components/base'
    ]
  }
}
```

现在在您的模板中，您可以使用 FooButton 而不是 BaseFooButton。

``` vue
<FooButton />
```
