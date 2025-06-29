import Image from 'next/image'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
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
    // ... Your additional navbar options
  />
)

const footer = (
  <Footer className="flex-col items-center md:items-start">
    <a
      className="x:focus-visible:nextra-focus flex items-center gap-1"
      target="_blank"
      rel="noreferrer"
      title="Nextra"
      href="https://nextra.site"
    >
      Powered by Nextra
    </a>
    <p className="mt-6 text-xs">
      ©
      {new Date().getFullYear()}
      Hongbusi.
    </p>
  </Footer>
)

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      // Not required, but good for SEO
      lang="zh-CN"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          footer={footer}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
