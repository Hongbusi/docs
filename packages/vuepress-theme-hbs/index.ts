import type { ThemeObject } from '@vuepress/core';
import { createPage } from '@vuepress/core';

import { path } from '@vuepress/utils';

const hbsTheme: ThemeObject = {
  name: 'vuepress-theme-hbs',
  extends: '@vuepress/theme-default',
  layouts: {
    Layout: path.resolve(__dirname, 'layouts/Layout.vue')
  },
  // // 初始化之后，所有的页面已经加载完毕
  // async onInitialized(app) {
  //   // 如果主页不存在
  //   if (app.pages.every((page) => page.path !== '/')) {
  //     // 创建一个主页
  //     const homepage = await createPage(app, {
  //       path: '/',
  //       // 设置 frontmatter
  //       frontmatter: {
  //         layout: 'Layout',
  //       },
  //       // 设置 markdown 内容
  //       content: `\
  // # 欢迎来到 ${app.options.title}

  // 这是默认主页
  // `,
  //     })
  //     // 把它添加到 `app.pages`
  //     app.pages.push(homepage)
  //   }
  // }
}

export default hbsTheme;
