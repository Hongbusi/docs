import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import './style.css'
import Bookmarks from './components/Bookmarks.vue'
import Prompts from './components/Prompts.vue'
import HomeContent from './components/HomeContent.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Bookmarks', Bookmarks)
    app.component('Prompts', Prompts)
    app.component('HomeContent', HomeContent)
  },
} satisfies Theme
