import { StatCard } from '@/components/marketing/stat-card'
import { createPageHeroVisual } from '@/components/shared/page-hero-image'
import PageHeroStatic from '@/components/shared/page-hero-static'
import { aboutStats, companyStats } from '@/lib/site-content'
import { Award, HeartHandshake, Lightbulb, ShieldCheck } from 'lucide-react'
import Image from 'next/image'

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'Highest quality and precision in every solution we design and engineer.',
    imageSrc: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Exploring emerging technologies, advanced data tracking, and dynamic systems.',
    imageSrc: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: ShieldCheck,
    title: 'Integrity',
    description: 'Building trust with governmental and regional enterprises through transparency.',
    imageSrc: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: HeartHandshake,
    title: 'Customer Focus',
    description: 'Your scalable success, data ownership, and milestones are our primary objectives.',
    imageSrc: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80',
  },
]

const AboutHeroVisual = createPageHeroVisual(
  '/images/about-hero.png',
  'SDV Edutech office and team',
  'aspect-square',
)

export default function About() {
  return (
    <main className='min-h-screen'>
      <PageHeroStatic
        eyebrow='Who we are'
        title='Engineering Enterprise Transformation'
        highlight='Transformation'
        description={`Since 2021, ${companyStats.yearsExperience} years of excellence — Sdv Edutech empowers organizations with technology, geospatial intelligence, and data-driven solutions for sustainable growth.`}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]}
        Visual={AboutHeroVisual}
      />

      <section className='relative py-16 md:py-24'>
        <div className='absolute inset-0 -z-10 section-tint' aria-hidden />
        <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div className='space-y-5'>
              <p className='eyebrow text-primary'>Our story</p>
              <h2 className='font-display text-3xl md:text-4xl font-bold text-foreground'>
                Built on Trust, Driven by Innovation
              </h2>
              <p className='text-lg text-muted-foreground leading-relaxed max-w-prose'>
                Sdv Edutech Private Limited helps enterprises leverage technology for transformation. We&apos;ve become
                a trusted partner across government and corporate sectors nationwide.
              </p>
              <p className='text-lg text-muted-foreground leading-relaxed max-w-prose'>
                Our expertise spans survey management, GIS solutions, custom software, training programs, and analytics
                — combining industry workflows with modern frameworks.
              </p>
            </div>
            <div className='grid grid-cols-2 gap-4'>
              {aboutStats.map(s => (
                <StatCard key={s.label} value={s.value} label={s.label} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className='py-16 md:py-24 bg-muted/30'>
        <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
          <div className='text-center max-w-2xl mx-auto mb-12'>
            <p className='eyebrow text-primary'>Our values</p>
            <h2 className='mt-3 font-display text-3xl md:text-4xl font-bold text-foreground'>What We Stand For</h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {values.map(({ icon: Icon, title, description, imageSrc }) => (
              <article
                key={title}
                className='rounded-2xl border border-border/70 bg-card overflow-hidden flex flex-col sm:flex-row'
              >
                <div className='relative sm:w-40 h-40 sm:h-auto shrink-0 bg-muted'>
                  <Image src={imageSrc} alt={title} fill className='object-cover' sizes='160px' />
                </div>
                <div className='p-6'>
                  <div className='flex items-center gap-3 mb-2'>
                    <Icon className='w-5 h-5 text-primary' aria-hidden />
                    <h3 className='font-display font-semibold text-foreground'>{title}</h3>
                  </div>
                  <p className='text-sm text-muted-foreground leading-relaxed'>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
