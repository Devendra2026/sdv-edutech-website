import { createPageHeroVisual } from '@/components/shared/page-hero-image'
import PageHeroStatic from '@/components/shared/page-hero-static'
import { PortfolioGrid } from './portfolio-grid'

const PortfolioHeroVisual = createPageHeroVisual(
  '/images/portfolio-hero.png',
  'Enterprise technology portfolio',
)

export default function Portfolio() {
  return (
    <main className='min-h-screen'>
      <PageHeroStatic
        eyebrow='Our work'
        title='Projects that Deliver Results'
        highlight='Results'
        description='A showcase of IT and geospatial engagements — from large-scale GIS systems to enterprise platforms and digital transformation programs.'
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Portfolio' }]}
        Visual={PortfolioHeroVisual}
      />
      <PortfolioGrid />
    </main>
  )
}
