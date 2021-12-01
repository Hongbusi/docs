# Table 表格

## 自定义表头

``` js
const columns = [
  {
    slots: { title: 'customTitle' }
  }
];

<template slot="customTitle">customTitle</template>
```

## 自定义行内容

> text、record、index => 当前行的值、当前行数据、行索引

``` js
// 方法 1
const columns = [
  {
    scopedSlots: { customRender: 'title' }
  }
];

<template slot="title" slot-scope="text, record, index">customContent</template>

// 方法 2
const columns = [
  {
    customRender: function(text, record, index) {
      return 'customContent';
    }
  }
];
```
