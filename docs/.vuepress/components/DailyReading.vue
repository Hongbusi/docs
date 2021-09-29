<template>
  <h3 class="text-center text-3xl font-medium border-b border-gray-200 pb-3">{{ title }}</h3>
  <a
    v-for="(item, index) in list"
    :key="index"
    :href="item.link"
    target="_blank"
  >
    <div class="p-3 transition hover:bg-gray-100">
      <span class="mr-2">({{ item.date }})</span>{{ item.title }}
    </div>
  </a>

  <div class="text-center mt-12">
    <button v-if="!finish" class="border px-5 py-2 rounded-sm transition-shadow hover:shadow" @click="handleClickLoadMore">加载更多</button>
    <p v-else>没有更多了~</p>
  </div>

</template>

<script setup>
import { computed, ref } from 'vue';
import { usePageFrontmatter } from '@vuepress/client';

const frontmatter = usePageFrontmatter();

// title
const title = computed(() => {
  if (!frontmatter.value.title) {
    return '每日阅读';
  }

  return frontmatter.value.title;
});

// list
let cuttentIndex = ref(0);
let finish = ref(false);
const pageSize = 20;

const list = computed(() => {
  const { data } = frontmatter.value;

  if (!data) {
    return [];
  }

  const list = data.slice(0, (cuttentIndex.value + 1) * pageSize);

  finish.value = list.length === data.length;

  return list;
});

// click load more
const handleClickLoadMore = function() {
  cuttentIndex.value++;
}
</script>
