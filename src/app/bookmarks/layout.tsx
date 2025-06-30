import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '我的书签',
  description: '精选的开发工具和学习资源，提高开发效率。包含前端框架、设计工具、开发工具、学习资源等。',
  keywords: ['书签', '开发工具', '学习资源', '前端框架', '设计工具', 'VSCode插件', '开发效率'],
  openGraph: {
    title: '我的书签 | 洪布斯',
    description: '精选的开发工具和学习资源，提高开发效率。包含前端框架、设计工具、开发工具、学习资源等。',
    url: 'https://docs.hongbusi.com/bookmarks',
    images: [
      {
        url: 'https://docs.hongbusi.com/og-bookmarks.png',
        width: 1200,
        height: 630,
        alt: '我的书签 - 开发工具和学习资源',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '我的书签 | 洪布斯',
    description: '精选的开发工具和学习资源，提高开发效率。包含前端框架、设计工具、开发工具、学习资源等。',
    images: ['https://docs.hongbusi.com/og-bookmarks.png'],
  },
  alternates: {
    canonical: 'https://docs.hongbusi.com/bookmarks',
  },
}

export default function BookmarksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
