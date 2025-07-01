'use client'

import type { Bookmark } from '@/types'
import { ExternalLink } from 'lucide-react'
import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

interface BookmarkCardProps {
  bookmark: Bookmark
}

export function BookmarkCard({ bookmark }: BookmarkCardProps) {
  const [imageError, setImageError] = useState(false)

  // 获取标题的首字母
  const getInitials = (title: string) => {
    return title
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href={bookmark.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
        >
          <Card className="h-20 hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="flex items-center gap-3 p-3 h-full">
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center overflow-hidden">
                {!imageError && bookmark.logo
                  ? (
                      <img
                        src={bookmark.logo}
                        alt={bookmark.title}
                        className="w-full h-full object-contain"
                        onError={() => setImageError(true)}
                      />
                    )
                  : (
                      <span className="text-xs font-semibold text-muted-foreground">
                        {getInitials(bookmark.title)}
                      </span>
                    )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1">
                  <h3 className="text-sm font-medium truncate group-hover:text-primary transition-colors">
                    {bookmark.title}
                  </h3>
                  <ExternalLink className="h-3 w-3 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                </div>
                <p className="text-xs text-muted-foreground truncate">
                  {bookmark.description}
                </p>
              </div>
            </CardContent>
          </Card>
        </a>
      </TooltipTrigger>
      <TooltipContent side="bottom">
        {bookmark.description}
      </TooltipContent>
    </Tooltip>
  )
}
