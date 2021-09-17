<template>
  <a class="link" :href="link" rel="noopener noreferrer">{{ text }}</a>
</template>

<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    required: true
  },

  link: {
    type: String,
    required: true
  }
});
</script>

<style lang="sass" scoped>
.link {
  display: inline-block;
  width: 100px;
  height: 100%;
}
</style>
