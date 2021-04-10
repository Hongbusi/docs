# plugins

## vuepress-plugin-container

### 取消了容器默认标题 <Badge text="优化"/>

::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::

### theorem、right 容器 <Badge text="新增"/>

输入

```md
::: theorem 牛顿第一定律
假若施加于某物体的外力为零，则该物体的运动速度不变。

::: right
来自 [维基百科](https://zh.wikipedia.org/wiki/牛顿运动定律)
:::
:::
```

输出

::: theorem 牛顿第一定律
假若施加于某物体的外力为零，则该物体的运动速度不变。

::: right
来自 [维基百科](https://zh.wikipedia.org/wiki/牛顿运动定律)
:::

## vuepress-plugin-smooth-scroll <Badge text="优化"/>

取消用户配置操作，默认开启状态
