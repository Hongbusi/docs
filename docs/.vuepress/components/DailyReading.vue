<template>
  <h3 class="min-w-max">{{ frontmatter.title }}</h3>
  <!-- <a v-for="(item, index) in frontmatter.data" :key="index" :href="item.link">{{ item.text }}</a> -->
</template>

<script setup lang="ts">
import { usePageFrontmatter } from '@vuepress/client';

const frontmatter = usePageFrontmatter<DefaultThemeNormalPageFrontmatter>();
</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
