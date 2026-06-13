import { createPageHeroVisual } from '@/components/shared/page-hero-image'
import PageHeroStatic from '@/components/shared/page-hero-static'
import { ServicesGrid, ServicesProcess } from './services-interactive'

const ServicesHeroVisual = createPageHeroVisual(
  '/images/services-hero.png',
  'Team collaborating on technology solutions',
)

export default function Services() {
  return (
    <main className='min-h-screen'>
      <PageHeroStatic
        eyebrow='What we do'
        title='Enterprise Services that Scale'
        highlight='Scale'
        description='We transform complex spatial data into actionable intelligence through custom software, GIS mapping, and cloud modernization for government and enterprise clients.'
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
        Visual={ServicesHeroVisual}
      />
      <ServicesGrid />
      <ServicesProcess />
    </main>
  )
}
