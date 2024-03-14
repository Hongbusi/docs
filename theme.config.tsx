import { useRouter } from 'next/router'
import type { DocsThemeConfig } from 'nextra-theme-docs'
import { useConfig } from 'nextra-theme-docs'

import { Footer } from '@/components/footer'

const config: DocsThemeConfig = {
  logo: <p className="font-bold text-xl">洪布斯</p>,
  project: {
    link: 'https://github.com/Hongbusi',
  },
  docsRepositoryBase: 'https://github.com/Hongbusi/docs/tree/main',
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Hongbusi',
      }
    }
  },
  head: function useHead() {
    const { title } = useConfig()
    const { route } = useRouter()
    const socialCard = route === '/' || !title
      ? 'https://nextra.site/og.jpeg'
      : `https://nextra.site/api/og?title=${title}`

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="description" content="Make beautiful websites with Next.js & MDX." />
        <meta name="og:description" content="Make beautiful websites with Next.js & MDX." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialCard} />
        <meta name="twitter:site:domain" content="hongbusi.com" />
        <meta name="twitter:url" content="https://hongbusi.com" />
        <meta name="og:title" content={title ? `${title} – Hongbusi` : 'Hongbusi'} />
        <meta name="og:image" content={socialCard} />
        <meta name="apple-mobile-web-app-title" content="Hongbusi" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="icon" href="/favicon-dark.svg" type="image/svg+xml" media="(prefers-color-scheme: dark)" />
        <link rel="icon" href="/favicon-dark.png" type="image/png" media="(prefers-color-scheme: dark)" />
      </>
    )
  },
  search: {
    placeholder: 'Search...',
  },
  editLink: {
    text: 'Edit this page →',
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    backToTop: true,
  },
  footer: {
    text: <Footer />,
  },
}

export default config
