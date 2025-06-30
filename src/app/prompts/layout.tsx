import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '提示词库',
  description: '精选的AI提示词模板，帮助你更高效地使用AI工具。包含编程、写作、翻译、创意等各类提示词。',
  keywords: ['AI提示词', 'Prompt', 'ChatGPT', 'AI工具', '人工智能', '编程提示词', '写作提示词', '创意提示词'],
  openGraph: {
    title: '提示词库 | 洪布斯',
    description: '精选的AI提示词模板，帮助你更高效地使用AI工具。包含编程、写作、翻译、创意等各类提示词。',
    url: 'https://docs.hongbusi.com/prompts',
    images: [
      {
        url: 'https://docs.hongbusi.com/og-prompts.png',
        width: 1200,
        height: 630,
        alt: '提示词库 - AI提示词模板',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '提示词库 | 洪布斯',
    description: '精选的AI提示词模板，帮助你更高效地使用AI工具。包含编程、写作、翻译、创意等各类提示词。',
    images: ['https://docs.hongbusi.com/og-prompts.png'],
  },
  alternates: {
    canonical: 'https://docs.hongbusi.com/prompts',
  },
}

export default function PromptsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
