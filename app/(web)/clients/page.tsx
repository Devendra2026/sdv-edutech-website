import Clients from '@/components/clients/content'
import { createPageMetadata } from '@/lib/metadata'

export const metadata = createPageMetadata({
  title: 'Clients',
  description:
    'Government and enterprise clients trust SDV Edutech for GIS, survey management, and technology solutions across India.',
  path: '/clients',
})

export default function ClientsPage() {
  return <Clients />
}
