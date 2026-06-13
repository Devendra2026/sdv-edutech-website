import type { Metadata } from 'next'
import { siteConfig } from './site-content'

const defaultOgImage = '/images/hero-consulting.jpg'

export function createPageMetadata({
  title,
  description,
  path = '',
  ogImage = defaultOgImage,
}: {
  title: string
  description: string
  path?: string
  ogImage?: string
}): Metadata {
  const url = `${siteConfig.url}${path}`

  return {
    title,
    description,
    icons: { icon: siteConfig.logo },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [ogImage],
    },
    alternates: { canonical: url },
  }
}
