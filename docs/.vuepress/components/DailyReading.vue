<template>
  <h3 class="text-center text-3xl font-medium border-b border-gray-200 pb-3">{{ title }}</h3>
  <template v-for="(dailyReadingItem, dailyReadingIndex) in dailyReadingList" :key="dailyReadingIndex">
    <div class="text-center p-3 bg-yellow-100">{{ dailyReadingItem.date }}</div>
    <a
      v-for="(item, index) in dailyReadingItem.list"
      :key="index"
      :href="item.link"
      target="_blank"
    >
      <div class="p-3 transition hover:bg-red-100">
        {{ item.title }}
      </div>
    </a>

    <div class="border-t border-red-200 border-dashed mt-3 mb-10"></div>
  </template>

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

// dailyReadingList
let cuttentIndex = ref(0);
let finish = ref(false);
const pageSize = 5;

const dailyReadingList = computed(() => {
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
