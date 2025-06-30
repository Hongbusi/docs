import { FileQuestion } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="content-container py-16">
      <div className="text-center">
        <FileQuestion className="mx-auto h-24 w-24 text-muted-foreground mb-6" />
        <h2 className="text-3xl font-bold mb-4">提示词未找到</h2>
        <p className="text-lg text-muted-foreground mb-8">
          抱歉，您访问的提示词不存在或已被删除。
        </p>
        <Link href="/prompts">
          <Button>
            返回提示词库
          </Button>
        </Link>
      </div>
    </div>
  )
}
