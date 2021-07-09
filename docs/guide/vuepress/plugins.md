# 插件

## pwa

使你的 Vuepress 站点成为一个渐进式 Web 应用。

1. 安装

``` shell
yarn add @vuepress/plugin-pwa@next
```

2. 创建 Manifest 文件

通常是 `.vuepress/public/manifest.webmanifest` ：

``` json
{
  "name": "Hongbusi",
  "short_name": "Hongbusi",
  "description": "Vue-powered Static Site Generator",
  "start_url": "/index.html",
  "display": "standalone",
  "background_color": "#fff",
  "theme_color": "#3eaf7c",
  "icons": [
    {
      "src": "/images/icons/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/images/icons/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

3. 生成 PWA 图标

为了提高你的 PWA 的可用性，你需要生成一些图标，并将它们放置在 Public 目录下。

确保图标的路径匹配 Manifest 文件中的 icons 字段：

- .vuepress/public/images/icons/android-chrome-192x192.png
- .vuepress/public/images/icons/android-chrome-384x384.png
