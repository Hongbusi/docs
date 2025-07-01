'use client'

import { BookmarkCard } from '@/components/bookmark-card'
import { SearchFilter } from '@/components/search-filter'
import { Button } from '@/components/ui/button'
import { bookmarks } from '@/data'
import { useSearchFilter } from '@/hooks/use-search-filter'

export default function BookmarksPage() {
  const {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    selectedTags,
    toggleTag,
    categories,
    allTags,
    filteredItems: filteredBookmarks,
    hasActiveFilters,
    clearFilters,
  } = useSearchFilter(bookmarks)

  return (
    <div className="content-container py-12">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">我的书签</h1>
        <p className="text-lg text-muted-foreground">
          精选的开发工具和学习资源，提高开发效率
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
        searchPlaceholder="搜索书签..."
        categoryLabel="分类"
      />

      {/* 书签卡片网格 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3">
        {filteredBookmarks.map(bookmark => (
          <BookmarkCard key={bookmark.url} bookmark={bookmark} />
        ))}
      </div>

      {/* 无结果提示 */}
      {filteredBookmarks.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground mb-4">
            没有找到匹配的书签
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
