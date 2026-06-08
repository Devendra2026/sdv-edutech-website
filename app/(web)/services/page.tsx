import Services from '@/components/services/page'
import { Metadata } from 'next/types'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Enterprise technology, survey management, GIS solutions, software development, and digital transformation services.',
  icons: {
    icon: '/logo.png',
  },
}

export default function ServicesPage() {
  return (
    <main className='min-h-screen'>
      <Services />
    </main>
  )
}
