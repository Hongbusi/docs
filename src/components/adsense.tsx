'use client'

import Script from 'next/script'

export function GoogleAdSense() {
  const isProd = process.env.NODE_ENV === 'production'
  const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID

  if (!isProd || !googleAdsId)
    return null

  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${googleAdsId}`}
      crossOrigin="anonymous"
    />
  )
}
