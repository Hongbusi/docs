<template>
  <h3 class="text-center text-3xl font-medium border-b border-gray-200 pb-3">{{ frontmatter.title }}</h3>
  <a
    v-for="(item, index) in frontmatter.data"
    :key="index"
    :href="item.link"
    target="_blank"
  >
    <div class="p-3 hover:bg-gray-100">
      <span class="mr-2">({{ item.date }})</span>{{ item.title }}
    </div>
  </a>
</template>

<script setup lang="ts">
import { usePageFrontmatter } from '@vuepress/client';

const frontmatter = usePageFrontmatter<DefaultThemeNormalPageFrontmatter>();
</script>
