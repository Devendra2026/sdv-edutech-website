
import Contact from '@/components/contact/page'
import { Metadata } from 'next/types'


export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Enterprise technology, survey management, GIS solutions, software development, and digital transformation services.',
  icons: {
    icon: '/logo.png',
  },
}

export default function ContactPage() {
  return (
    <main className='min-h-screen'>
      <Contact />
    </main>
  )
}

