import type { Product } from '@/types'

export const products: Product[] = [
  {
    title: 'MBTI人格类型测试助手',
    description: '探索你的人格类型，帮助你更好的了解自己。',
    image: 'https://hongbusi.com/images/mbti.jpg',
    tech: ['微信小程序', 'weapp-vite', 'weapp-tailwindcss'],
    platform: 'miniprogram',
    qrcode: 'https://hongbusi.com/images/mbti-qrcode.jpg',
  },
  {
    title: 'XTwitterDownloader',
    description: '免费下载 X (Twitter) 视频、图片等内容。',
    image: 'https://hongbusi.com/images/xtwitterdownloader.png',
    link: 'https://xtwitterdownloader.com',
    tech: ['Next', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    platform: 'web',
  },
]
