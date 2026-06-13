import Portfolio from '@/components/portfolio/content'
import { createPageMetadata } from '@/lib/metadata'

export const metadata = createPageMetadata({
  title: 'Portfolio',
  description:
    'Explore SDV Edutech project portfolio — GIS mapping, survey platforms, enterprise software, and digital transformation case studies.',
  path: '/portfolio',
})

export default function PortfolioPage() {
  return <Portfolio />
}
