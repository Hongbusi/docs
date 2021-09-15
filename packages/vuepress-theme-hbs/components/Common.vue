<template>
  <Layout>
    <template #navbar>
      <Navbar v-if="shouldShowNavbar" @toggle-sidebar="toggleSidebar">
        <template #before>
          <slot name="navbar-before" />
        </template>
        <template #after>
          <slot name="navbar-after" />
        </template>
      </Navbar>
    </template>
  </Layout>
</template>

<script setup lang="ts">
import { usePageFrontmatter } from '@vuepress/client';
import { computed } from 'vue';
import type { DefaultThemePageFrontmatter } from '@vuepress/theme-default/lib/shared';
import Layout from '@vuepress/theme-default/lib/client/layouts/Layout.vue';
import Navbar from './Navbar.vue';
import { useThemeLocaleData } from '@vuepress/theme-default/lib/client/composables';

const frontmatter = usePageFrontmatter<DefaultThemePageFrontmatter>();
const themeLocale = useThemeLocaleData();

// navbar
const shouldShowNavbar = computed(() => frontmatter.value.navbar !== false && themeLocale.value.navbar !== false);
</script>
