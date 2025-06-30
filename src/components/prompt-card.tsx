'use client'

import type { Prompt } from '@/types'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { CopyButton } from '@/components/ui/copy-button'

interface PromptCardProps {
  prompt: Prompt
}

export function PromptCard({ prompt }: PromptCardProps) {
  return (
    <Link href={`/prompts/${prompt.id}`}>
      <Card className="flex flex-col gap-3 h-120 hover:shadow-md transition-all duration-200 cursor-pointer group border-border hover:border-primary/20">
        <CardHeader className="shrink-0">
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="text-lg font-medium line-clamp-2">
              {prompt.title}
            </CardTitle>
            <Badge variant="secondary" className="shrink-0">
              {prompt.category}
            </Badge>
          </div>
          {prompt.description && (
            <p className="text-sm text-muted-foreground line-clamp-2">
              {prompt.description}
            </p>
          )}
        </CardHeader>

        <CardContent className="flex-1 min-h-0">
          <div className="p-3 w-full h-full bg-muted rounded-md text-sm overflow-y-auto">
            <pre className="whitespace-pre-wrap break-words font-mono">
              {prompt.content}
            </pre>
          </div>
        </CardContent>

        <CardFooter className="flex items-center justify-between shrink-0">
          <div className="flex flex-wrap gap-1">
            {prompt.tags.slice(0, 2).map(tag => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
            {prompt.tags.length > 2 && (
              <Badge variant="outline" className="text-xs">
                +
                {prompt.tags.length - 2}
              </Badge>
            )}
          </div>
          <div onClick={e => e.preventDefault()}>
            <CopyButton text={prompt.content} />
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}
