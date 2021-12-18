# 性能优化

## 合理使用 client-only 组件

此组件用于仅在客户端渲染其他组件。[参考文档](https://www.nuxtjs.cn/api/components-client-only)

### props

`placeholder="String"`，在 `<client-only />` 被挂载之前，使用此属性作为文本占位符。

``` vue
<template>
  <div>
    <sidebar />
    <client-only placeholder="Loading...">
      <!-- comments 组件只会在客户端被渲染 -->
      <comments />
    </client-only>
  </div>
</template>
```

### slots

`placeholder`，在 `<client-only />` 被挂载之前，使用此属性作为插槽。

``` vue
<template>
  <div>
    <sidebar />
    <client-only>
      <!-- comments 组件只会在客户端被渲染 -->
      <comments />

      <!-- comments-placeholder 会在服务端被加载-->
      <comments-placeholder slot="placeholder" />
    </client-only>
  </div>
</template>
```

https://juejin.cn/post/6844903858804621326

https://tflin.com/post/2036517759.html#%E7%BC%93%E5%AD%98
