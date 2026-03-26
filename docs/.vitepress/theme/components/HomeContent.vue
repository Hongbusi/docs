<script setup lang="ts">
interface Product {
  title: string
  description: string
  image: string
  tech: string[]
  link?: string
  qrcode?: string
}

const products: Product[] = [
  {
    title: 'MBTI人格类型测试助手',
    description: '探索你的人格类型，帮助你更好的了解自己。',
    image: 'https://hongbusi.com/images/mbti.jpg',
    tech: ['微信小程序', 'weapp-vite', 'weapp-tailwindcss'],
    qrcode: 'https://hongbusi.com/images/mbti-qrcode.jpg',
  },
  {
    title: 'XTwitterDownloader',
    description: '免费下载 X (Twitter) 视频、图片等内容。',
    image: 'https://hongbusi.com/images/xtwitterdownloader.png',
    tech: ['Next', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    link: 'https://xtwitterdownloader.com',
  },
]
</script>

<template>
  <div style="max-width: 900px; margin: 0 auto; padding: 48px 24px;">
    <h2 style="text-align: center; font-size: 2rem; margin-bottom: 8px;">我的产品</h2>
    <p style="text-align: center; color: var(--vp-c-text-2); margin-bottom: 40px;">精心打造的产物，希望你会喜欢</p>

    <div class="cards-grid">
      <div v-for="product in products" :key="product.title" class="card">
        <img
          :src="product.image"
          :alt="product.title"
          style="width: 100%; border-radius: 6px; margin-bottom: 12px;"
        />
        <div class="card-title">
          <a
            v-if="product.link"
            :href="product.link"
            target="_blank"
            rel="noopener"
          >{{ product.title }}</a>
          <span v-else>{{ product.title }}</span>
        </div>
        <div class="card-description">{{ product.description }}</div>
        <div class="card-tags">
          <span v-for="t in product.tech" :key="t" class="tag">{{ t }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
