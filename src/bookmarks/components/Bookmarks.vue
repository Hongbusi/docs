<script setup lang="ts">
import bookmarks from './bookmarks'
</script>

<template>
  <div class="bookmarks">
    <div class="container">
      <div class="bookmarks-hero">
        <h1 class="title">
          Bookmarks
        </h1>
        <p class="subtitle">
          Some of my favorite websites/tools with excellent design and UX that I highly recommend.
        </p>
      </div>

      <div v-for="(value, key, index) in bookmarks" :key="index">
        <div class="category-title">
          {{ key }}
        </div>
        <ul>
          <li v-for="item in value" :key="item.url" class="bookmark-title">
            <a :href="item.url" target="_blank" rel="noopener noreferrer">
              {{ item.title }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bookmarks {
  padding-bottom: 16px;
}

.container {
  margin: 0 auto;
  max-width: 960px;
}

.bookmarks-hero {
  padding: 48px 0 12px;
}

@media (min-width: 768px) {
  .bookmarks {
    padding-bottom: 96px;
  }

  .bookmarks-hero {
    padding: 64px 0 12px;
  }
}

.title,
.subtitle {
  transition: color 0.25s;
}

.title {
  line-height: 32px;
  font-size: 32px;
  font-weight: 500;
}

@media (min-width: 768px) {
  .title {
    line-height: 40px;
    font-size: 40px;
  }
}

.subtitle {
  padding-top: 8px;
  max-width: 512px;
  font-size: 16px;
  font-weight: 500;
  color: var(--vt-c-text-2);
}

.category-title {
  padding-top: 36px;
  padding-bottom: 16px;
  font-size: 20px;
  font-weight: 500;
}

.bookmark-title {
  margin-top: 8px;
  font-size: 16px;
  font-weight: 500;
  color: var(--vt-c-text-2);
}
</style>
