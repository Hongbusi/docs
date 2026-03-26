<script setup lang="ts">
import { ref, computed } from 'vue'

interface Bookmark {
  title: string
  description: string
  url: string
  tags: string[]
  category: string
}

const bookmarks: Bookmark[] = [
  {
    title: 'React Bits',
    description: '一个开源的高质量、动画、交互式且完全可定制的 React 组件集合。',
    url: 'https://reactbits.dev',
    tags: ['React', '组件库'],
    category: 'UI设计',
  },
  {
    title: 'Shadcn UI',
    description: '一套设计精美、易于访问的组件和代码分发平台。',
    url: 'https://ui.shadcn.com',
    tags: ['React', '组件库'],
    category: 'UI设计',
  },
  {
    title: 'Dokploy',
    description: '开源的自托管部署平台，支持多服务器部署、Docker Compose、数据库管理和实时监控。',
    url: 'https://dokploy.com',
    tags: ['开源'],
    category: '部署平台',
  },
  {
    title: 'Coolify',
    description: '开源的自托管 Heroku/Netlify/Vercel 替代品，支持任何 Docker 服务和 Git 集成。',
    url: 'https://coolify.io',
    tags: ['开源'],
    category: '部署平台',
  },
  {
    title: 'Vercel',
    description: '前端云平台，为现代 Web 应用提供快速部署、全球 CDN 和无服务器函数。',
    url: 'https://vercel.com',
    tags: [],
    category: '部署平台',
  },
  {
    title: 'Netlify',
    description: '静态网站托管平台，提供自动化部署、全球 CDN、表单处理和无服务器函数。',
    url: 'https://netlify.com',
    tags: [],
    category: '部署平台',
  },
  {
    title: 'WXT',
    description: '下一代 Web 扩展开发框架，支持多浏览器、MV2/MV3、TypeScript 等特性，提供快速开发模式和自动化发布。',
    url: 'https://wxt.dev',
    tags: ['浏览器'],
    category: '开发工具',
  },
  {
    title: 'Cobalt',
    description: '媒体下载和保存工具，支持多种在线服务的视频、音频下载。',
    url: 'https://cobalt.tools',
    tags: ['视频'],
    category: '实用工具',
  },
  {
    title: 'TinyPNG',
    description: '智能压缩 WebP、PNG 和 JPEG 图像。',
    url: 'https://tinypng.com',
    tags: ['图片压缩'],
    category: '实用工具',
  },
  {
    title: 'AI Logo',
    description: 'AI Logo 设计一键生成，免费公司 logo 在线设计制作。',
    url: 'https://ai.logo123.com',
    tags: ['AI', '设计'],
    category: 'UI设计',
  },
  {
    title: 'Kimi',
    description: 'Kimi 是一个有着超大"内存"的智能助手，可以一口气读完二十万字的小说，还会上网冲浪，快来跟他聊聊吧。',
    url: 'https://kimi.moonshot.cn',
    tags: ['AI'],
    category: 'AI工具',
  },
  {
    title: 'Readdy',
    description: '通过与AI聊天构建和发布美观专业的网站，无需编程或设计技能。',
    url: 'https://readdy.ai',
    tags: ['AI'],
    category: 'AI工具',
  },
  {
    title: 'Happy Hues',
    description: '不确定在设计中使用什么颜色或在哪里使用它们？Happy Hues 是一个调色板灵感网站。',
    url: 'https://www.happyhues.co',
    tags: ['设计'],
    category: 'UI设计',
  },
  {
    title: 'Coolors',
    description: '为您的设计生成或浏览漂亮的颜色组合。',
    url: 'https://coolors.co',
    tags: ['设计'],
    category: 'UI设计',
  },
  {
    title: 'Can I use',
    description: '"Can I use"提供了最新的浏览器支持表，用于支持桌面和移动网络浏览器上的前端网络技术。',
    url: 'https://caniuse.com',
    tags: [],
    category: '开发工具',
  },
  {
    title: '百度翻译',
    description: '百度翻译提供即时免费200+语言翻译服务。',
    url: 'https://fanyi.baidu.com',
    tags: [],
    category: '实用工具',
  },
  {
    title: '谷歌翻译',
    description: 'Google 免费提供的这项服务可在简体中文和其他 100 多种语言之间即时翻译。',
    url: 'https://translate.google.com',
    tags: [],
    category: '实用工具',
  },
  {
    title: 'uiverse',
    description: '探索 3000 多个免费 UI 元素：CSS 和 Tailwind。',
    url: 'https://uiverse.io',
    tags: ['开源'],
    category: 'UI设计',
  },
  {
    title: 'Google Analytics',
    description: 'Google Analytics（谷歌分析）。',
    url: 'https://analytics.google.com',
    tags: [],
    category: '实用工具',
  },
  {
    title: 'BrandCrowd',
    description: '在几秒钟内制作您的 logo、名片和社交媒体设计。',
    url: 'https://www.brandcrowd.com',
    tags: ['设计'],
    category: 'UI设计',
  },
  {
    title: 'Gmail',
    description: 'Google 的电子邮件服务。',
    url: 'https://mail.google.com',
    tags: [],
    category: '实用工具',
  },
  {
    title: '稿定',
    description: '在线快速图片和视频编辑,不会PS也能搞定设计。',
    url: 'https://www.gaoding.com',
    tags: ['设计'],
    category: 'UI设计',
  },
  {
    title: '滴答清单',
    description: '滴答清单，一个帮你高效完成任务和规划时间的应用。',
    url: 'https://www.dida365.com',
    tags: [],
    category: '实用工具',
  },
  {
    title: '即时设计',
    description: '即时设计是一款在线可协作的UI设计工具。',
    url: 'https://js.design',
    tags: ['设计'],
    category: 'UI设计',
  },
  {
    title: 'QQ邮箱',
    description: 'QQ邮箱，为亿万用户提供高效稳定便捷的电子邮件服务。',
    url: 'https://mail.qq.com',
    tags: [],
    category: '实用工具',
  },
  {
    title: 'Youtube',
    description: '在 YouTube 上畅享你喜爱的视频和音乐。',
    url: 'https://www.youtube.com',
    tags: ['视频'],
    category: '娱乐媒体',
  },
  {
    title: '微信公众平台',
    description: '微信公众平台，给个人、企业和组织提供业务服务与用户管理能力的全新服务平台。',
    url: 'https://mp.weixin.qq.com',
    tags: ['微信'],
    category: '实用工具',
  },
  {
    title: '知乎',
    description: '中文互联网高质量的问答社区和创作者聚集的原创内容平台。',
    url: 'https://www.zhihu.com',
    tags: [],
    category: '娱乐媒体',
  },
  {
    title: 'Nextra',
    description: '制作漂亮的网站，使用 Next.js 和 MDX。',
    url: 'https://nextra.site',
    tags: ['React', '文档'],
    category: '开发工具',
  },
  {
    title: 'VuePress',
    description: 'Vue 驱动的静态网站生成器。',
    url: 'https://vuepress.vuejs.org',
    tags: ['Vue', '文档'],
    category: '开发工具',
  },
  {
    title: 'VitePress',
    description: '由 Vite 和 Vue 驱动的静态站点生成器。',
    url: 'https://vitepress.dev',
    tags: ['Vue'],
    category: '开发工具',
  },
  {
    title: '哔哩哔哩',
    description: '哔哩哔哩是国内知名的视频弹幕网站。',
    url: 'https://www.bilibili.com',
    tags: ['视频'],
    category: '娱乐媒体',
  },
  {
    title: 'Twitter',
    description: 'Twitter.',
    url: 'https://twitter.com',
    tags: ['社交'],
    category: '娱乐媒体',
  },
  {
    title: 'Supabase',
    description: '使用 Postgres 数据库、身份验证、即时 API、实时、函数、存储和矢量嵌入构建生产级应用程序。',
    url: 'https://supabase.com',
    tags: ['数据库'],
    category: '开发工具',
  },
  {
    title: '稀土掘金',
    description: '面向全球中文开发者的技术内容分享与交流平台。',
    url: 'https://juejin.cn',
    tags: ['技术'],
    category: '技术社区',
  },
  {
    title: 'GitHub',
    description: '全球领先的代码管理平台。',
    url: 'https://github.com',
    tags: ['开源'],
    category: '技术社区',
  },
  {
    title: 'degit',
    description: '制作 git 存储库的副本。',
    url: 'https://github.com/Rich-Harris/degit',
    tags: [],
    category: '开发工具',
  },
  {
    title: 'cursor.directory',
    description: '找到适合您的框架和语言的最佳光标规则。',
    url: 'https://cursor.directory',
    tags: ['AI'],
    category: 'AI工具',
  },
  {
    title: 'IconKitchen',
    description: '快速生成 Android、iOS、Web 等应用程序图标。',
    url: 'https://icon.kitchen',
    tags: ['图标', 'AI'],
    category: 'UI设计',
  },
  {
    title: 'LogoFast',
    description: 'LogoFast 是一款免费的 AI 徽标制作工具。几秒钟内即可创建漂亮的徽标。',
    url: 'https://logofa.st',
    tags: ['AI', '设计'],
    category: 'UI设计',
  },
  {
    title: 'appicons',
    description: '快速下载AppStore图标！',
    url: 'https://appicons.co',
    tags: ['图标'],
    category: 'UI设计',
  },
  {
    title: 'vectorCraftr',
    description: '带有 SVG 插图的美丽图书馆。',
    url: 'https://vectorcraftr.com',
    tags: ['设计'],
    category: 'UI设计',
  },
  {
    title: 'unDraw',
    description: '浏览以找到符合您需求的图像并单击下载。',
    url: 'https://undraw.co/illustrations',
    tags: ['设计', '开源'],
    category: 'UI设计',
  },
  {
    title: 'Sound Box',
    description: '一个在线音效网站，提供多种自然环境音效以及白噪音。',
    url: 'https://soundbox.fun',
    tags: [],
    category: '娱乐媒体',
  },
  {
    title: 'Nest.js 中文文档',
    description: 'NestJS 是一个用于构建高效、可扩展的 Node.js Web 应用程序的框架。',
    url: 'https://docs.nestjs.cn',
    tags: ['文档'],
    category: '开发工具',
  },
  {
    title: 'ChatGPT',
    description: 'ChatGPT 可帮助您获得答案、找到灵感并提高工作效率。',
    url: 'https://chatgpt.com',
    tags: ['AI'],
    category: 'AI工具',
  },
  {
    title: 'Iconify',
    description: '所有流行的图标集。',
    url: 'https://icon-sets.iconify.design',
    tags: ['图标', '开源'],
    category: 'UI设计',
  },
  {
    title: 'Lovart AI',
    description: 'AI 设计代理，支持人机协作、AI 生成、编辑与设计于一体的无缝画布。',
    url: 'https://www.lovart.ai',
    tags: ['AI', '设计'],
    category: 'UI设计',
  },
]

const search = ref('')

const filteredBookmarks = computed(() => {
  if (!search.value) return bookmarks
  const q = search.value.toLowerCase()
  return bookmarks.filter(
    b =>
      b.title.toLowerCase().includes(q) ||
      b.description.toLowerCase().includes(q) ||
      b.tags.some(t => t.toLowerCase().includes(q)) ||
      b.category.toLowerCase().includes(q)
  )
})

const groupedBookmarks = computed(() => {
  const groups: Record<string, Bookmark[]> = {}
  for (const b of filteredBookmarks.value) {
    if (!groups[b.category]) groups[b.category] = []
    groups[b.category].push(b)
  }
  return groups
})
</script>

<template>
  <div class="search-filter">
    <input v-model="search" placeholder="搜索书签..." />
  </div>

  <template v-for="(items, category) in groupedBookmarks" :key="category">
    <h2 class="category-heading">{{ category }}</h2>
    <div class="cards-grid">
      <div v-for="item in items" :key="item.url" class="card">
        <div class="card-title">
          <a :href="item.url" target="_blank" rel="noopener">{{ item.title }}</a>
        </div>
        <div class="card-description">{{ item.description }}</div>
        <div class="card-tags">
          <span v-for="tag in item.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
      </div>
    </div>
  </template>
</template>
