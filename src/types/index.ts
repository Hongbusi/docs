export interface Product {
  title: string
  description: string
  image: string
  link?: string
  qrcode?: string
  tech: string[]
  platform: 'web' | 'miniprogram' | 'mobile' | 'desktop' | 'api' | 'chrome-extension'
}

export interface Prompt {
  id: string
  title: string
  description: string
  content: string
  tags: string[]
  category: string
}

export interface Bookmark {
  title: string
  description: string
  url: string
  logo?: string
  tags: string[]
  category: string
}
