import type { MetadataRoute } from 'next'
import { bookmarks, prompts } from '@/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://docs.hongbusi.com'

  // 静态页面
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/bookmarks`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/prompts`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ]

  // 动态提示词页面
  const promptPages = prompts.map(prompt => ({
    url: `${baseUrl}/prompts/${prompt.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...promptPages]
}
