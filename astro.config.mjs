import starlight from '@astrojs/starlight'
import { defineConfig, passthroughImageService } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.hongbusi.com',
  image: {
    service: passthroughImageService(),
  },
  integrations: [
    starlight({
      title: '洪布斯的文档',
      description: '知道的越多，不知道的越多。',
      head: [
        {
          tag: 'script',
          attrs: {
            async: true,
            src: 'https://www.googletagmanager.com/gtag/js?id=G-M0H8SV269C',
          },
        },
        {
          tag: 'script',
          content: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-M0H8SV269C');
          `,
        },
      ],
      locales: {
        root: {
          label: '简体中文',
          lang: 'zh-CN',
        },
      },
      social: [
        { icon: 'twitter', label: 'Twitter', href: 'https://x.com/Hongbusi' },
        { icon: 'github', label: 'GitHub', href: 'https://github.com/Hongbusi' },
      ],
      sidebar: [
        { label: '笔记', collapsed: true, autogenerate: { directory: 'notes' } },
        { label: '服务器', collapsed: true, autogenerate: { directory: 'server' } },
        { label: 'Nest', collapsed: true, autogenerate: { directory: 'nestjs' } },
        { label: 'MySQL', collapsed: true, autogenerate: { directory: 'mysql' } },
        { label: 'JavaScript', collapsed: true, autogenerate: { directory: 'javascript' } },
        { label: 'TypeScript', collapsed: true, autogenerate: { directory: 'typescript' } },
        { label: '面试', collapsed: true, autogenerate: { directory: 'interview' } },
      ],
      editLink: {
        baseUrl: 'https://github.com/Hongbusi/docs/edit/main/',
      },
      lastUpdated: true,
    }),
  ],
})
