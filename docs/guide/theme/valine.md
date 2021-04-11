---
title: 评价
date: 2021-04-10
---

## 介绍

主题内置评价功能，基于 [valine](https://valine.js.org/) 实现。

需要在某篇文章开启评论，在 `front-matter` 设置 `isShowComments: true`。

``` md
---
isShowComments: true
---
```

## Options

**评价**

``` js
// .vuepress/config.js

module.exports = {
  themeConfig: {
    valineConfig: {
      visitor: true, // 如需文章访问量统计
      appId: 'Your appId', // 从 LeanCloud 的应用中得到的 appId
      appKey: 'Your appKey' // 从 LeanCloud 的应用中得到的 appKey
    }
  }  
}
```

**访问量统计**

``` js
// .vuepress/config.js

module.exports = {
  themeConfig: {
    valineConfig: {
      visitor: true, // 文章访问量统计
    }
  }  
}
```
