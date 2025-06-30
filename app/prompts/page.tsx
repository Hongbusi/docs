'use client'

import { Filter, Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import { PromptCard } from '@/components/prompt-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { prompts } from '@/data'

export default function PromptsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  // 获取所有分类和标签
  const categories = useMemo(() => {
    const cats = new Set(prompts.map(p => p.category))
    return Array.from(cats)
  }, [])

  const allTags = useMemo(() => {
    const tags = new Set(prompts.flatMap(p => p.tags))
    return Array.from(tags)
  }, [])

  // 过滤提示词
  const filteredPrompts = useMemo(() => {
    return prompts.filter((prompt) => {
      const matchesSearch = searchTerm === ''
        || prompt.title.toLowerCase().includes(searchTerm.toLowerCase())
        || prompt.description.toLowerCase().includes(searchTerm.toLowerCase())
        || prompt.content.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesCategory = selectedCategory === '' || prompt.category === selectedCategory

      const matchesTags = selectedTags.length === 0
        || selectedTags.every(tag => prompt.tags.includes(tag))

      return matchesSearch && matchesCategory && matchesTags
    })
  }, [searchTerm, selectedCategory, selectedTags])

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag],
    )
  }

  return (
    <div className="content-container py-12">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">提示词库</h1>
        <p className="text-lg text-muted-foreground">
          精选的AI提示词模板，帮助你更高效地使用AI工具
        </p>
      </div>

      {/* 搜索和过滤 */}
      <div className="mb-8 space-y-4">
        {/* 搜索框 */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <input
            type="text"
            placeholder="搜索提示词..."
            className="w-full pl-10 pr-4 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>

        {/* 分类过滤 */}
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedCategory === '' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedCategory('')}
          >
            全部分类
          </Button>
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* 标签过滤 */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">标签过滤:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {allTags.map(tag => (
              <Badge
                key={tag}
                variant={selectedTags.includes(tag) ? 'default' : 'outline'}
                className="cursor-pointer hover:bg-accent"
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* 选中的过滤条件 */}
        {(selectedCategory || selectedTags.length > 0) && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>已选择:</span>
            {selectedCategory && (
              <Badge variant="secondary">
                分类:
                {' '}
                {selectedCategory}
              </Badge>
            )}
            {selectedTags.map(tag => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setSelectedCategory('')
                setSelectedTags([])
              }}
            >
              清除所有
            </Button>
          </div>
        )}
      </div>

      {/* 提示词卡片网格 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredPrompts.map(prompt => (
          <PromptCard key={prompt.id} prompt={prompt} />
        ))}
      </div>

      {/* 无结果提示 */}
      {filteredPrompts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground mb-4">
            没有找到匹配的提示词
          </p>
          <Button
            variant="outline"
            onClick={() => {
              setSearchTerm('')
              setSelectedCategory('')
              setSelectedTags([])
            }}
          >
            清除所有过滤条件
          </Button>
        </div>
      )}
    </div>
  )
}
