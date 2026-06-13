import About from '@/components/about/content'
import { createPageMetadata } from '@/lib/metadata'

export const metadata = createPageMetadata({
  title: 'About Us',
  description:
    'Learn about Sdv Edutech — MSME certified technology partner delivering GIS, software, and digital transformation across India since 2021.',
  path: '/about',
})

export default function AboutPage() {
  return <About />
}
