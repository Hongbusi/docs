# SPA（单页应用）首屏加载速度慢怎么解决？

![SPA（单页应用）首屏加载速度慢怎么解决](/docs/images/interview/first-page-time.png)

## 一、什么是首屏加载

首屏时间（First Contentful Paint），指的是浏览器从响应用户输入网址地址，到首屏内容渲染完成的时间，此时整个网页不一定要全部渲染完成，但需要展示当前视窗需要的内容。

首屏加载可以说是用户体验中最重要的环节。

### 关于计算首屏时间

可以通过 `DOMContentLoad` 或者 `performance` 来计算出首屏时间：

``` js
// 方案一：
document.addEventListener('DOMContentLoaded', (event) => {
  console.log('first contentful painting');
});

// 方案二：
performance.getEntriesByName('first-contentful-paint')[0];

// 会返回一个 PerformancePaintTiming 的实例，结构如下：
{
  name: 'first-contentful-paint',
  entryType: 'paint',
  startTime: 507.80000002123415,
  duration: 0
}
```

## 二、加载慢的原因

在页面渲染的过程，导致加载速度慢的因素可能如下：

- 网络延时问题；
- 资源文件体积过大；
- 资源是否重复发送请求去加载；
- 加载脚本的时候，渲染内容堵塞。

## 三、解决方案

常见的几种 SPA 首屏优化方式：

- 减小入口文件积；
- 静态资源本地缓存；
- UI 框架按需加载；
- 图片资源的压缩；
- 组件重复打包；
- 开启 GZip 压缩；
- 使用 SSR。

### 减小入口文件体积

常用的手段是路由懒加载，把不同路由对应的组件分割成不同的代码块，待路由被请求的时候会单独打包路由，使得入口文件变小，加载速度大大增加。

在 `vue-router` 配置路由的时候，采用动态加载路由的形式：

``` js
const routers = [
  {
    path: '/',
    name: 'home',
    component: () => import('./views/index.vue')
  }
];
```

以函数的形式加载路由，这样就可以把各自的路由文件分别打包，只有在解析给定的路由时，才会加载路由组件。

### 静态资源本地缓存

- 后端返回资源问题：
  - 采用 HTTP 缓存，设置 Cache-Control，Last-Modified，Etag 等响应头；
  - 采用 Service Worker 离线缓存；
- 前端合理利用 localStorage。

### UI 框架按需加载

在日常使用 UI 框架，例如 element-UI、或者 antd，我们经常性直接引用整个 UI 库：

``` js
import ElementUI from 'element-ui';
Vue.use(ElementUI);
```

但实际上我用到的组件只有按钮，所以我们要按需引用：

``` js
import { Button } from 'element-ui';
Vue.use(Button);
```

### 组件重复打包

假设 `a.js` 文件是一个常用的库，现在有多个路由使用了 `a.js` 文件，这就造成了重复下载。

解决方案：在 `webpack` 的 `config` 文件中，修改 `CommonsChunkPlugin` 的配置：

``` js
minChunks: 3
```

`minChunks` 为 `3` 表示会把使用 3 次及以上的包抽离出来，放进公共依赖文件，避免了重复加载组件。

### 图片资源的压缩

图片资源虽然不在编码过程中，但它却是对页面性能影响最大的因素。

对于所有的图片资源，我们可以进行适当的压缩。

对页面上使用到的 icon，可以使用在线字体图标，或者雪碧图，将众多小图标合并到同一张图上，用以减轻 http 请求压力。

### 开启 GZip 压缩

拆完包之后，我们再用 `gzip` 做一下压缩 安装 `compression-webpack-plugin`：

``` bash
yarn add compression-webpack-plugin --dev
```

在 `vue.congig.js` 中引入并修改 `webpack` 配置：

``` js
const CompressionPlugin = require('compression-webpack-plugin');

configureWebpack: (config) => {
  if (process.env.NODE_ENV === 'production') {
    // 为生产环境修改配置...
    config.mode = 'production';
    return {
      plugins: [new CompressionPlugin({
        test: /\.js$|\.html$|\.css/, // 匹配文件名
        threshold: 10240, // 对超过 10k 的数据进行压缩
        deleteOriginalAssets: false // 是否删除原文件
      })]
    }
  }
}
```

在服务器我们也要做相应的配置。如果发送请求的浏览器支持 gzip，就发送给它 gzip 格式的文件。

### 使用 SSR

SSR（Server side），也就是服务端渲染，组件或页面通过服务器生成 `html` 字符串，再发送到浏览器。

从头搭建一个服务端渲染是很复杂的，vue 应用建议使用 `Nuxt.js` 实现服务端渲染。

### 小结

减少首屏渲染时间的方法有很多，总的来讲可以分成两大部分：**资源加载优化** 和 **页面渲染优化**。

下图是更为全面的首屏优化的方案：

![首屏优化的方案](/docs/images/interview/first-page-time-result.png)
