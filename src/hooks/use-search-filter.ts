import { useMemo, useState } from 'react'

interface SearchableItem {
  title: string
  description: string
  tags: string[]
  category: string
  content?: string
  [key: string]: any
}

export function useSearchFilter<T extends SearchableItem>(items: T[]) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  // 获取所有分类和标签
  const categories = useMemo(() => {
    const cats = new Set(items.map(item => item.category))
    return Array.from(cats)
  }, [items])

  const allTags = useMemo(() => {
    const tags = new Set(items.flatMap(item => item.tags))
    return Array.from(tags)
  }, [items])

  // 过滤项目
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const searchLower = searchTerm.toLowerCase()
      const matchesSearch = searchTerm === ''
        || item.title.toLowerCase().includes(searchLower)
        || item.description.toLowerCase().includes(searchLower)
        || item.tags.some(tag => tag.toLowerCase().includes(searchLower))
        || (item.content && item.content.toLowerCase().includes(searchLower))

      const matchesCategory = selectedCategory === '' || item.category === selectedCategory

      const matchesTags = selectedTags.length === 0
        || selectedTags.every(tag => item.tags.includes(tag))

      return matchesSearch && matchesCategory && matchesTags
    })
  }, [items, searchTerm, selectedCategory, selectedTags])

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag],
    )
  }

  const clearFilters = () => {
    setSearchTerm('')
    setSelectedCategory('')
    setSelectedTags([])
  }

  return {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    selectedTags,
    setSelectedTags,
    categories,
    allTags,
    filteredItems,
    toggleTag,
    clearFilters,
    hasActiveFilters: selectedCategory !== '' || selectedTags.length > 0,
  }
}
