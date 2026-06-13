import Services from '@/components/services/content'
import { createPageMetadata } from '@/lib/metadata'

export const metadata = createPageMetadata({
  title: 'Services',
  description:
    'Survey management, GIS solutions, software development, training programs, SBM services, consulting, and manpower outsourcing for enterprise and government.',
  path: '/services',
})

export default function ServicesPage() {
  return <Services />
}
