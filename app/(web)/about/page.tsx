import About from '@/components/about/page'
import { Metadata } from 'next/types'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Enterprise technology, survey management, GIS solutions, software development, and digital transformation services.',
  icons: {
    icon: '/logo.png',
  },
}

export default function AboutPage() {
  return (
    <main className='min-h-screen'>
      <About />
    </main>
  )
}
