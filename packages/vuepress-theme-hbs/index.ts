import type { ThemeObject } from '@vuepress/core';
import { createPage } from '@vuepress/core';

import { path } from '@vuepress/utils';

const hbsTheme: ThemeObject = {
  name: 'vuepress-theme-hbs',
  extends: '@vuepress/theme-default',
  layouts: {
    Layout: path.resolve(__dirname, 'layouts/Layout.vue'),
    DailyReading: path.resolve(__dirname, 'layouts/DailyReading.vue')
  },
  // 初始化之后，所有的页面已经加载完毕
  async onInitialized(app) {
    if (app.pages.every((page) => page.path !== '/daily-reading')) {
      const dailyReadingPage = await createPage(app, {
        path: '/daily-reading',
        frontmatter: {
          layout: 'DailyReading'
        }
      });
      app.pages.push(dailyReadingPage);
    }
  }
}

export default hbsTheme;
