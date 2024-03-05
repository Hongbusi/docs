# 配置

## ant-design-vue 定制主题

``` js
export default {
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          'primary-color': '#1DA57A',
          'link-color': '#1DA57A',
          'border-radius-base': '2px'
        },
        javascriptEnabled: true
      }
    }
  }
}
```

注意样式必须加载 `less` 格式。如果你使用 `unplugin-vue-components` 按需自动导入组件，那么你需要添加配置 `importLess: true`。

``` js
Components({
  resolvers: [
    AntDesignVueResolver({
      importLess: true
    })
  ]
})
```
