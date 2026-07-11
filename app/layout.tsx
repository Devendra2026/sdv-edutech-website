
import { siteConfig } from '@/lib/site-content'
import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Sora } from 'next/font/google'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

const sora = Sora({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} - Enterprise Technology Solutions`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    'Enterprise technology, survey management, GIS solutions, software development, and digital transformation services.',
  icons: {
    icon: siteConfig.logo,
  },
  openGraph: {
    siteName: siteConfig.name,
    locale: 'en_IN',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    
      <html lang="en" className={`${jakarta.variable} ${sora.variable}`}>
        <body className="font-sans antialiased relative">
          <div className="site-bg" aria-hidden="true" />
          <div className="site-grain" aria-hidden="true" />

          {children}

          {process.env.NODE_ENV === 'production' && <Analytics />}
        </body>
      </html>
    
  )
}
