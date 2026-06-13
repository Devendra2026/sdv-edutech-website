import Careers from '@/components/careers/content'
import { createPageMetadata } from '@/lib/metadata'

export const metadata = createPageMetadata({
  title: 'Careers',
  description:
    'Join SDV Edutech — careers in software engineering, GIS, surveying, and technology consulting in Agra and across India.',
  path: '/careers',
})

export default function CareersPage() {
  return <Careers />
}
