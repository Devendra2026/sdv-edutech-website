
import Careers from '@/components/careers/page'
import { Metadata } from 'next/types'


export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Enterprise technology, survey management, GIS solutions, software development, and digital transformation services.',
  icons: {
    icon: '/logo.png',
  },
}

export default function Careerspage() {
  return (
    <main className='min-h-screen'>
      <Careers />
    </main>
  )
}

