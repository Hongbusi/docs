'use client'

import { GoogleAnalytics } from '@next/third-parties/google'

export function Analytics() {
  const isProd = process.env.NODE_ENV === 'production'
  const googleAnalyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID

  if (!isProd || !googleAnalyticsId)
    return null

  return <GoogleAnalytics gaId={googleAnalyticsId} />
}
