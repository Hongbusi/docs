# plop-template

平时日常工作中，做最多的就是写业务模块和组件。当每次新开一个 view 或者 component 的时候都需要手动创建一个新 .vue 文件，然后再创建 template、script、style 这些标签，还是有些麻烦的。

基于plop，提供了几个基础模板，方便创建新的 view、component 或者 store。

## plop

[plop](https://github.com/plopjs/plop) 是一个小工具，可以节省您的时间并帮助您的团队以一致的方式构建新文件。

## 使用方式

```
npm run new         # npm
yarn run new        # yarn
```

## 可用模板

### view

``` vue
<template>
  <div />
</template>

<script>
export default {
  name: 'View',
  props: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style lang="less" scoped>

</style>
```

### component

``` vue
<template>
  <div />
</template>

<script>
export default {
  name: 'Component',
  props: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style lang="less" scoped>

</style>
```

### store

``` js
const state = {};

const mutations = {};

const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
```
