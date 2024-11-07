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
      title: '洪布斯的文档网站',
      locales: {
        root: {
          label: '简体中文',
          lang: 'zh-CN',
        },
      },
      social: {
        github: 'https://github.com/Hongbusi',
      },
      sidebar: [
        { label: '笔记', autogenerate: { directory: 'notes' } },
        { label: '服务器', autogenerate: { directory: 'server' } },
        { label: 'Nest', autogenerate: { directory: 'nestjs' } },
        { label: 'MySQL', autogenerate: { directory: 'mysql' } },
        { label: 'JavaScript', autogenerate: { directory: 'javascript' } },
        { label: 'TypeScript', autogenerate: { directory: 'typescript' } },
        { label: '面试', autogenerate: { directory: 'interview' } },
      ],
      editLink: {
        baseUrl: 'https://github.com/Hongbusi/docs/edit/main/',
      },
      lastUpdated: true,
    }),
  ],
})
