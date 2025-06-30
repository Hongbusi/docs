'use client'

import { Check, Copy } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Button } from './button'

interface CopyButtonProps {
  text: string
  className?: string
}

export function CopyButton({ text, className }: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    }
    catch (err) {
      console.error('复制失败:', err)
    }
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={copyToClipboard}
      className={cn('transition-all duration-200', className)}
    >
      {isCopied
        ? (
            <>
              <Check className="h-4 w-4 text-green-600" />
              已复制
            </>
          )
        : (
            <>
              <Copy className="h-4 w-4" />
              复制
            </>
          )}
    </Button>
  )
}
