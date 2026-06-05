

import Gallery from '@/components/gallery/page'
import { Metadata } from 'next/types'


export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Enterprise technology, survey management, GIS solutions, software development, and digital transformation services.',
  icons: {
    icon: '/logo.png',
  },
}

export default function PhotogalleryPage() {
  return (
    <main className='min-h-screen'>
      <Gallery />
    </main>
  )
}

