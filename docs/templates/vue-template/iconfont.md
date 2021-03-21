---
title: vue-template 图标
date: 2021-03-16
tags: 
- vue
- iconfont
categories:
- vue-template
---

# 图标

## 前言

已有项目中，都是 font-class 方式，通过引入 iconfont.css、iconfont.eot、iconfont.svg、iconfont.ttf、iconfont.woff 5 个文件实现图标的使用。

**为什么放弃 font-class，选择 symbol ?**

**font-class**

1. 更新图标繁琐，需要下载、替换、重命名、修改引入路径等一系列操作；
2. 不支持多色图标。

**symbol**

1. 更新图标只需替换 iconfont.js 内容即可，一步到位；
2. 支持多色图标，不再受单色限制；
3. 兼容 ie9+，满足使用。

## 使用方式

``` vue
<svg-icon icon-class="xxx" /> // icon-class 为 icon 的名字
```

## 改变样式

直接通过 font-size, color 来调整样式

## 更新图标

复制 `//at.alicdn.com/t/font_2389959_b65d10z2hec.js` 的代码，粘贴到项目中 src/icons/iconfont.js 文件下。

## 拓展

[iconfont](https://www.iconfont.cn/)：阿里做的开源图库。

### unicode

unicode 是字体在网页端最原始的应用方式，特点是：
> - 兼容性最好，支持 ie6+，及所有现代浏览器。
> - 支持按字体的方式去动态调整图标大小，颜色等等。
> - 但是因为是字体，所以不支持多色。只能使用平台里单色的图标，就算项目里有多色图标也会自动去色。

unicode使用步骤如下：

#### 第一步：拷贝项目下面生成的 font-face

``` css
@font-face {
  font-family: 'iconfont';
	src: url('iconfont.eot');
	src: url('iconfont.eot?#iefix') format('embedded-opentype'),
  url('iconfont.woff') format('woff'),
  url('iconfont.ttf') format('truetype'),
  url('iconfont.svg#iconfont') format('svg');
}
```

#### 第二步：定义使用的 iconfont 的样式

``` css
.iconfont{
  font-family:"iconfont" !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
```

#### 第三步：挑选相应的图标并获取字体编码，应用于页面

``` html
<i class="iconfont">&#x33;</i>
```

### font-class

font-class 是 unicode 使用方式的一种变种，主要是解决 unicode 书写不直观，语意不明确的问题。

与 unicode 使用方式相比，具有如下特点：
1. 兼容性良好，支持 ie8+，及所有现代浏览器;
2. 相比于 unicode 语意明确，书写更直观。可以很容易分辨这个 icon 是什么;
3. 因为使用 class 来定义图标，所以当要替换图标时，只需要修改 class 里面的 unicode 引用;
4. 不过因为本质上还是使用的字体，所以多色图标还是不支持的。

使用步骤如下：

#### 第一步：拷贝项目下面生成的 fontclass 代码：

``` css
//at.alicdn.com/t/font_8d5l8fzk5b87iudi.css
```

#### 第二步：挑选相应图标并获取类名，应用于页面：

``` css
<i class="iconfont icon-xxx"></i>
```

### symbol

这是一种全新的使用方式，应该说这才是未来的主流，也是平台目前推荐的用法。这种用法其实是做了一个 svg 的集合，与上面两种相比具有如下特点：

1. 支持多色图标了，不再受单色限制。
2. 通过一些技巧，支持像字体那样，通过 font-size，color 来调整样式。
3. 兼容性较差，支持 ie9+，及现代浏览器。
4. 浏览器渲染 svg 的性能一般，还不如 png。

使用步骤如下：

#### 第一步：拷贝项目下面生成的 symbol 代码：

``` js
//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js
```

#### 第二步：加入通用 css 代码（引入一次就行）：

``` css
<style type="text/css">
  .icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
```

#### 第三步：挑选相应图标并获取类名，应用于页面：

``` html
<svg class="icon" aria-hidden="true">
	<use xlink:href="#icon-xxx"></use>
</svg>
```
