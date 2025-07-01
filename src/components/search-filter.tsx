'use client'

import { Filter, Search } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface SearchFilterProps {
  searchTerm: string
  setSearchTerm: (term: string) => void
  selectedCategory: string
  setSelectedCategory: (category: string) => void
  selectedTags: string[]
  toggleTag: (tag: string) => void
  categories: string[]
  allTags: string[]
  hasActiveFilters: boolean
  clearFilters: () => void
  searchPlaceholder?: string
  categoryLabel?: string
}

export function SearchFilter({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  selectedTags,
  toggleTag,
  categories,
  allTags,
  hasActiveFilters,
  clearFilters,
  searchPlaceholder = '搜索...',
  categoryLabel = '分类',
}: SearchFilterProps) {
  return (
    <div className="mb-8 space-y-4">
      {/* 搜索框 */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <input
          type="text"
          placeholder={searchPlaceholder}
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
          全部
          {categoryLabel}
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
          {allTags.map((tag) => {
            const isSelected = selectedTags.includes(tag)
            return (
              <Badge
                key={tag}
                variant={isSelected ? 'default' : 'outline'}
                className={`cursor-pointer transition-colors ${
                  isSelected
                    ? 'hover:bg-primary/80 hover:text-primary-foreground'
                    : 'hover:bg-accent hover:text-accent-foreground'
                }`}
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </Badge>
            )
          })}
        </div>
      </div>

      {/* 选中的过滤条件 */}
      {hasActiveFilters && (
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>已选择:</span>
          {selectedCategory && (
            <Badge variant="secondary">
              {categoryLabel}
              :
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
            onClick={clearFilters}
          >
            清除所有
          </Button>
        </div>
      )}
    </div>
  )
}
