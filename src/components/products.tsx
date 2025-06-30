'use client'

import type { Product } from '@/types'
import Link from 'next/link'
import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { products } from '@/data/products'

const platformLabels = {
  'web': 'Web 应用',
  'miniprogram': '微信小程序',
  'mobile': '移动应用',
  'desktop': '桌面应用',
  'api': 'API 服务',
  'chrome-extension': '浏览器插件',
} as const

const platformColors = {
  'web': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  'miniprogram': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  'mobile': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  'desktop': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
  'api': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
  'chrome-extension': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
} as const

interface ProductCardProps {
  product: Product
  onMiniprogramClick: (product: Product) => void
}

function ProductCard({ product, onMiniprogramClick }: ProductCardProps) {
  const isMiniprogram = product.platform === 'miniprogram'

  const cardContent = (
    <>
      <div className="absolute inset-0 bg-muted/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        <div className="w-full h-36 bg-muted rounded-lg mb-4 overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
            {product.title}
          </h3>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${platformColors[product.platform]}`}>
            {platformLabels[product.platform]}
          </span>
        </div>

        <p className="text-muted-foreground mb-3 text-sm">
          {product.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {product.tech.map((tech: string, techIndex: number) => (
            <span key={techIndex} className="px-2 py-0.5 bg-secondary text-secondary-foreground rounded text-xs">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </>
  )

  if (isMiniprogram) {
    return (
      <div
        onClick={() => onMiniprogramClick(product)}
        className="group relative bg-card rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border cursor-pointer"
      >
        {cardContent}
      </div>
    )
  }

  return (
    <Link
      href={product.link || ''}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative bg-card rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border block"
    >
      {cardContent}
    </Link>
  )
}

export function Products() {
  const [selectedQRCode, setSelectedQRCode] = useState<{ title: string, qrcode: string } | null>(null)

  const handleMiniprogramClick = (product: Product) => {
    if (product.platform === 'miniprogram' && product.qrcode) {
      setSelectedQRCode({ title: product.title, qrcode: product.qrcode })
    }
  }

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            onMiniprogramClick={handleMiniprogramClick}
          />
        ))}
      </div>

      <Dialog open={!!selectedQRCode} onOpenChange={() => setSelectedQRCode(null)}>
        <DialogContent className="w-[320px]" showCloseButton={false}>
          <DialogHeader className="text-center">
            <DialogTitle className="text-center">{selectedQRCode?.title}</DialogTitle>
            <DialogDescription className="text-center">
              使用微信扫描下方二维码体验小程序
            </DialogDescription>
          </DialogHeader>
          {selectedQRCode && (
            <div className="flex justify-center mt-2">
              <img
                src={selectedQRCode.qrcode}
                alt={`${selectedQRCode.title} 二维码`}
                className="w-58 h-58 object-contain rounded"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
