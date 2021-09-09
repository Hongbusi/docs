import type { ThemeObject } from '@vuepress/core'
import { path } from '@vuepress/utils'

const fooTheme: ThemeObject = {
  // 你的主题
  name: 'vuepress-theme-hbs',
  // 要继承的父主题
  extends: '@vuepress/theme-default',
  // 覆盖父主题的布局
  layouts: {
    Layout: path.resolve(__dirname, 'layouts/Layout.vue'),
  },
}

export default fooTheme
