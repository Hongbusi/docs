# 技术选型

## 图片裁剪

[vue-cropperjs](https://github.com/Agontuk/vue-cropperjs) 是一个基于 [cropperjs](https://github.com/fengyuanchen/cropperjs) 封装的 Vue 组件。

::: tip 为什么选择 vue-cropperjs 而不是 vue-cropper ？
因为 vue-corpperjs 是 cropperjs 官网推荐的~
:::

::: tip 版本选择
vue2 请选择 v4.2.0，vue3 请选择 v5+
:::

### 安装

``` bash
npm install vue-cropperjs

#or

yarn add vue-cropperjs
```

### 参数

#### viewMode

> 定义裁剪器的视图模式。

- 类型：`Number`
- 默认值：`0`
- 配置项：
  - `0`：无限制。
  - `1`：限制裁剪框不超过画布的大小。
  - `2`：限制最小画布大小以适合容器。如果画布和容器的比例不同，则最小画布将被维度之一的额外空间包围。
  - `3`：限制最小画布大小以填充适合容器。如果画布和容器的比例不同，容器将无法在其中一个维度中容纳整个画布。

#### aspectRatio

> 定义裁剪框的固定纵横比。默认情况下，裁剪框具有自由比例。

- 类型：`Number`
- 默认值：`NaN`

#### responsive

> 调整窗口大小时重新渲染裁剪器。

- 类型：`Boolean`
- 默认值：`true`

#### guides

> 在裁剪框上方显示虚线。

- 类型：`Boolean`
- 默认值：`true`

#### autoCropArea

> 它应该是一个介于 0 和 1 之间的数字。定义自动裁剪区域大小（百分比）。

- 类型：`Number`
- 默认值：`0.8`

### 使用

``` vue
<template>
  <div>
    <vue-cropper
      ref='cropper'
      :guides="true"
      :view-mode="2"
      drag-mode="crop"
      :auto-crop-area="0.5"
      :min-container-width="250"
      :min-container-height="180"
      :background="true"
      :rotatable="true"
      :src="imgSrc"
    />
    <img :src="cropImg" style="max-width: 300px;" />
    <button @click="cropImage">裁剪图片</button>
    <button @click="rotate">旋转</button>
    <button @click="change">更换图片</button>
  </div>
</template>

<script>
import VueCropper from 'vue-cropperjs';
import 'cropperjs/dist/cropper.css';

export default {
  components: { VueCropper },

  data () {
    return {
      imgSrc: require('./assets/image.jpg'),
      cropImg: ''
    }
  },

  methods: {
    change () {
      this.imgSrc = require('./assets/image1.jpg');
      // rebuild cropperjs with the updated source
      this.$refs.cropper.replace(require('./assets/image1.jpg'));
    },

    cropImage () {
      // get image data for post processing, e.g. upload or setting image src
      this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
    },

    rotate () {
      // guess what this does :)
      this.$refs.cropper.rotate(90);
    }
  }
}
</script>
```

## 图片懒加载

[vue-lazyload](https://github.com/hilongjw/vue-lazyload)用于在应用程序中延迟加载图像的 Vue 模块。

### 安装

``` bash
npm install vue-lazyload

#or

yarn add vue-lazyload
```

### 使用

``` js
// main.js

import Vue from 'vue';
import App from './App.vue';
import VueLazyload from 'vue-lazyload';

Vue.use(VueLazyload);

// or with options
const loadimage = require('./assets/loading.gif');
const errorimage = require('./assets/error.gif');

Vue.use(VueLazyload, {
  preLoad: 1.3, // 预载高度比例，默认值：1.3
  error: errorimage, // 加载失败时图像的 src，默认值：'data-src'
  loading: loadimage, // 加载时图像的 src，默认值：'data-src'
  attempt: 1 // 尝试次数, 默认值：3
});

new Vue({
  el: 'body',
  components: {
    App
  }
})
```

``` vue
<template>
  <ul>
    <li v-for="img in list">
      <img v-lazy="img.src">
    </li>
  </ul>
</template>
```
