import Image from 'next/image'
import { Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { Footer } from '@/components/footer'
import 'nextra-theme-docs/style.css'
import './globals.css'
import './theme.css'

export const metadata = {
  title: {
    default: '洪布斯',
    template: '%s | 洪布斯',
  },
  description: '知道的越多，不知道的也越多。',
  icons: {
    icon: '/favicon.svg',
  },
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
        </Layout>
      </body>
    </html>
  )
}
