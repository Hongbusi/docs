import Image from 'next/image'
import { Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { GoogleAdSense } from '@/components/adsense'
import { Analytics } from '@/components/analytics'
import { Footer } from '@/components/footer'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import 'nextra-theme-docs/style.css'
import './globals.css'
import './theme.css'

export const metadata = {
  title: {
    default: '洪布斯',
    template: '%s | 洪布斯',
  },
  description: '知道的越多，不知道的也越多。精选的开发工具、学习资源和AI提示词，帮助开发者提高效率。',
  keywords: ['洪布斯', '开发工具', 'AI提示词', '书签', '学习资源', '前端开发', '程序员'],
  authors: [{ name: '洪布斯', url: 'https://hongbusi.com' }],
  creator: '洪布斯',
  publisher: '洪布斯',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      'index': true,
      'follow': true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // 需要替换为实际的验证码
  },
  alternates: {
    canonical: 'https://docs.hongbusi.com',
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://docs.hongbusi.com',
    title: '洪布斯 - 开发者资源库',
    description: '知道的越多，不知道的也越多。精选的开发工具、学习资源和AI提示词，帮助开发者提高效率。',
    siteName: '洪布斯',
    images: [
      {
        url: 'https://docs.hongbusi.com/og-image.png', // 需要添加 OG 图片
        width: 1200,
        height: 630,
        alt: '洪布斯 - 开发者资源库',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '洪布斯 - 开发者资源库',
    description: '知道的越多，不知道的也越多。精选的开发工具、学习资源和AI提示词，帮助开发者提高效率。',
    images: ['https://docs.hongbusi.com/og-image.png'],
    creator: '@hongbusi', // 需要替换为实际的 Twitter 用户名
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  manifest: '/manifest.json', // 需要创建 manifest 文件
}

const navbar = (
  <Navbar
    logo={<Image src="https://hongbusi.com/avatar.svg" alt="logo" width={32} height={32} />}
    logoLink="/"
    projectLink="https://github.com/Hongbusi"
  />
)

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" dir="ltr" suppressHydrationWarning>
      <Head></Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/Hongbusi/docs/tree/main"
          footer={Footer}
        >
          {children}
          <GoogleAdSense />
          <Analytics />
          <TailwindIndicator />
        </Layout>
      </body>
    </html>
  )
}
