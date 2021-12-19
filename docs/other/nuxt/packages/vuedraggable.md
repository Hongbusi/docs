---
sidebarDepth: 0
---

# Vue 中实现拖拽

[vuedraggable](https://github.com/SortableJS/Vue.Draggable) 是一个基于 [sortablejs](https://github.com/SortableJS/Sortable) 封装的 Vue component 库。

## For Vue3

See [vue.draggable.next](https://github.com/SortableJS/vue.draggable.next)

## Installation

``` bash
npm install vuedraggable

#or

yarn add vuedraggable
```

## Usage

``` vue
<template>
  <draggable
    v-model="myArray"
    v-bind="dragOptions"
    @start="drag = true"
    @end="drag = false"
  >
    <transition-group type="transition" :name="!drag ? 'flip-list' : null">
      <div v-for="element in myArray" :key="element.id">
          {{ element.name }}
      </div>
    </transition-group>
  </draggable>
</template>

<script>
import draggable from 'vuedraggable';

export default {
  components: {
    draggable
  },

  data() {
    return {
      drag: false
    }
  },

  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      }
    }
  }
}
</script>
```
