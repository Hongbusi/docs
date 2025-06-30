import type { Metadata } from 'next'
import { prompts } from '@/data'

interface PromptLayoutProps {
  params: Promise<{
    id: string
  }>
  children: React.ReactNode
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const resolvedParams = await params
  const prompt = prompts.find(p => p.id === resolvedParams.id)

  if (!prompt) {
    return {
      title: '提示词未找到',
      description: '您查找的提示词不存在',
    }
  }

  const title = `${prompt.title} | 提示词库 | 洪布斯`
  const description = prompt.description || `${prompt.title} - AI提示词模板，${prompt.category}类别`
  const keywords = [prompt.title, prompt.category, ...prompt.tags, 'AI提示词', 'Prompt', 'ChatGPT']

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: `https://docs.hongbusi.com/prompts/${prompt.id}`,
      type: 'article',
      images: [
        {
          url: 'https://docs.hongbusi.com/og-prompt.png',
          width: 1200,
          height: 630,
          alt: `${prompt.title} - AI提示词`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://docs.hongbusi.com/og-prompt.png'],
    },
    alternates: {
      canonical: `https://docs.hongbusi.com/prompts/${prompt.id}`,
    },
  }
}

export default function PromptLayout({ children }: PromptLayoutProps) {
  return children
}
