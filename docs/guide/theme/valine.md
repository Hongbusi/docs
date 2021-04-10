# 评价

[valine](https://valine.js.org/)

**options**

``` js
// .vuepress/config.js

module.exports = {
  themeConfig: {
    valineConfig: {
      // 默认配置
      placeholder: '填写邮箱可以收到回复提醒哦！', // 评论框占位提示符
      avatar: 'Gravatar', // 头像展示方式
      meta: ['nick', 'mail'], // 评论者相关属性
      visitor: true, // 文章访问量统计
      recordIP: false, // 是否记录评论者 IP
      requiredFields: ['nick', 'mail'], // 设置必填项，默认匿名
      // 仅需配置
      appId: 'Your appId', // 从 LeanCloud 的应用中得到的 appId
      appKey: 'Your appKey' // 从 LeanCloud 的应用中得到的 appKey
    }
  }  
}
```
