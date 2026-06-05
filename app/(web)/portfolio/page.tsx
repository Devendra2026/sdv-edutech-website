

import Portfolio from '@/components/portfolio/page'
import { Metadata } from 'next/types'


export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Enterprise technology, survey management, GIS solutions, software development, and digital transformation services.',
  icons: {
    icon: '/logo.png',
  },
}

export default function PortfolioPage() {
  return (
    <main className='min-h-screen'>
      <Portfolio />
    </main>
  )
}
