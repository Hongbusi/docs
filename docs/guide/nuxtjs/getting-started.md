# 入门

## 安装

确保安装了 npx（npx 在 NPM 版本 5.2.0 默认安装了）：

``` shell:no-line-numbers
npx create-nuxt-app <项目名>
```

或者用 yarn ：<Badge text="推荐" />

``` shell:no-line-numbers
yarn create nuxt-app <项目名>
```

## 目录结构

``` js:no-line-numbers
assets // 用于组织未编译的静态资源如 LESS、SASS 或 JavaScript。
components // 用于组织应用的 Vue.js 组件。
layouts // 用于组织应用的布局组件。
middleware // 用于存放应用的中间件。
pages // 用于组织应用的路由及视图。
plugins // 用于组织那些需要在 根vue.js应用 实例化之前需要运行的 Javascript 插件。
static // 用于存放应用的静态文件。
store // 用于组织应用的 Vuex 状态树 文件。
nuxt.config.js // 用于组织 Nuxt.js 应用的个性化配置，以便覆盖默认配置。
package.json //用于描述应用的依赖关系和对外暴露的脚本接口。
```

## 别名

``` js:no-line-numbers
~ === srcDir
@ === srcDir

~~ === rootDir
@@ === rootDir
```

默认情况下，srcDir 和 rootDir 相同。

::: tip
提示：在您的 vue 模板中，如果你需要引入 `assets` 或者 `static` 目录，使用 `~/assets/your_image.png` 和 `~/static/your_image.png` 方式。
:::

## 路由

Nuxt.js 依据 `pages` 目录结构自动生成 `vue-router` 模块的路由配置。

::: tip
要在页面之间使用路由，我们建议使用 `<nuxt-link>` 标签。
:::

例如：

``` vue:no-line-numbers
<template>
  <nuxt-link to="/">首页</nuxt-link>
</template>
```

### 基础路由

假设 `pages` 的目录结构如下：

``` md:no-line-numbers
pages/
--| user/
-----| index.vue
-----| one.vue
--| index.vue
```

那么，Nuxt.js 自动生成的路由配置如下：

``` js:no-line-numbers
router: {
  routes: [
    {
      name: 'index',
      path: '/',
      component: 'pages/index.vue'
    },
    {
      name: 'user',
      path: '/user',
      component: 'pages/user/index.vue'
    },
    {
      name: 'user-one',
      path: '/user/one',
      component: 'pages/user/one.vue'
    }
  ]
}
```

### 动态路由

在 Nuxt.js 里面定义带参数的动态路由，需要创建对应的以下划线作为前缀的 Vue 文件 或 目录。

以下目录结构：

``` md:no-line-numbers
pages/
--| _slug/
-----| comments.vue
-----| index.vue
--| users/
-----| _id.vue
--| index.vue
```

Nuxt.js 生成对应的路由配置表为：

``` js:no-line-numbers
router: {
  routes: [
    {
      name: 'index',
      path: '/',
      component: 'pages/index.vue'
    },
    {
      name: 'users-id',
      path: '/users/:id?',
      component: 'pages/users/_id.vue'
    },
    {
      name: 'slug',
      path: '/:slug',
      component: 'pages/_slug/index.vue'
    },
    {
      name: 'slug-comments',
      path: '/:slug/comments',
      component: 'pages/_slug/comments.vue'
    }
  ]
}
```

你会发现名称为 users-id 的路由路径带有 :id? 参数，表示该路由是可选的。如果你想将它设置为必选的路由，需要在 users/_id 目录内创建一个 index.vue 文件。
