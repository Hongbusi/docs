# Modal 对话框

## 基础使用

``` vue
<template>
  <a-modal
    title="Title"
    :visible="visible"
    :confirm-loading="confirmLoading"
    @ok="handleOk"
    @cancel="handleCancel"
  >
    content
  </a-modal>
</template>
<script>

export default {
  name: 'Modal',

  data() {
    return {
      visible: false,
      onfirmLoading: false
    }
  },

  methods: {
    // 用于父组件通过 this.$refs.modal.showModal() 显示对话框
    showModal() {
      this.visible = true;
    },

    handleOk() {
      this.confirmLoading = true;
      setTimeout(() => {
        this.visible = false;
        this.confirmLoading = false;
      }, 2000);
    },

    handleCancel() {
      this.visible = false;
    }
  }
};
</script>
```

## 自定义 title

``` vue
<template #title>可自定义 title</template>
```

## 自定义 footer

``` vue
<template #footer>
  <a-button>取消</a-button>
  <a-button type="primary">确认</a-button>
</template>
```

## 不要默认 footer

``` vue
<a-modal :footer=null />
```
