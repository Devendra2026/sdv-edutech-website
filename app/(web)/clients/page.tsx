


import Clients from '@/components/clients/page'
import { Metadata } from 'next/types'


export const metadata: Metadata = {
  title: 'Clients',
  description:
    'Enterprise technology, survey management, GIS solutions, software development, and digital transformation services.',
  icons: {
    icon: '/logo.png',
  },
}

export default function clientsspage() {
  return (
    <main className='min-h-screen'>
      <Clients />
    </main>
  )
}
