<template>
  <h1>{{ frontmatter.title }}</h1>
  <a v-for="(item, index) in frontmatter.data" :key="index" :href="item.link">{{ item.text }}</a>
</template>

<script setup lang="ts">
import { usePageFrontmatter } from '@vuepress/client';

const frontmatter = usePageFrontmatter<DefaultThemeNormalPageFrontmatter>();
</script>
