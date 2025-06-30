'use client'

import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CopyButton } from '@/components/ui/copy-button'
import { prompts } from '@/data'

interface PromptDetailPageProps {
  params: Promise<{
    id: string
  }>
}

export default function PromptDetailPage({ params }: PromptDetailPageProps) {
  const resolvedParams = React.use(params)
  const prompt = prompts.find(p => p.id === resolvedParams.id)

  if (!prompt) {
    notFound()
  }

  return (
    <div className="content-container py-8">
      {/* 返回按钮 */}
      <div className="mb-6">
        <Link href="/prompts">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            返回提示词库
          </Button>
        </Link>
      </div>

      {/* 详情卡片 */}
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex-1">
              <CardTitle className="text-2xl font-bold mb-2">
                {prompt.title}
              </CardTitle>
              {prompt.description && (
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {prompt.description}
                </p>
              )}
            </div>
          </div>

          {/* 分类和标签 */}
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary" className="text-sm">
              {prompt.category}
            </Badge>
            <div className="h-4 w-px bg-border" />
            {prompt.tags.map(tag => (
              <Badge key={tag} variant="outline" className="text-sm">
                {tag}
              </Badge>
            ))}
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* 提示词内容 */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold">提示词内容</h3>
              <CopyButton text={prompt.content} />
            </div>
            <div className="bg-muted/50 rounded-lg p-6">
              <pre className="whitespace-pre-wrap break-words font-mono text-sm leading-relaxed">
                {prompt.content}
              </pre>
            </div>
          </div>

          {/* 使用说明 */}
          <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
              💡 使用说明
            </h4>
            <div className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
              <p>• 复制上面的提示词到您的AI工具中</p>
              <p>
                • 根据提示词中的
                {' {} '}
                部分替换为您的具体需求
              </p>
              <p>• 可以根据实际情况调整和优化提示词内容</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
