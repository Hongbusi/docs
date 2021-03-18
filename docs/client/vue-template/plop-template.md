# plop-template

在开发过程中，无论我们添加页面还是添加组件，都需要新建文件，但每个人新建的文件内容规范可能都不太一样。于是乎，引入了 [plop](https://github.com/plopjs/plop) 来解决这个问题，使用命名行一键创建模板，更好的遵守规范。

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
