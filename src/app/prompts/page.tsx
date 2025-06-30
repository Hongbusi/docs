'use client'

import { PromptCard } from '@/components/prompt-card'
import { SearchFilter } from '@/components/search-filter'
import { Button } from '@/components/ui/button'
import { prompts } from '@/data'
import { useSearchFilter } from '@/hooks/use-search-filter'

export default function PromptsPage() {
  const {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    selectedTags,
    toggleTag,
    categories,
    allTags,
    filteredItems: filteredPrompts,
    hasActiveFilters,
    clearFilters,
  } = useSearchFilter(prompts)

  return (
    <div className="content-container py-12">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">提示词库</h1>
        <p className="text-lg text-muted-foreground">
          精选的AI提示词模板，帮助你更高效地使用AI工具
        </p>
      </div>

      {/* 搜索和过滤 */}
      <SearchFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedTags={selectedTags}
        toggleTag={toggleTag}
        categories={categories}
        allTags={allTags}
        hasActiveFilters={hasActiveFilters}
        clearFilters={clearFilters}
        searchPlaceholder="搜索提示词..."
        categoryLabel="分类"
      />

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
            onClick={clearFilters}
          >
            清除所有过滤条件
          </Button>
        </div>
      )}
    </div>
  )
}
