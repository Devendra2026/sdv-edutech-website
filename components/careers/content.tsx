import { CtaButton } from '@/components/marketing/cta-button'
import { createPageHeroVisual } from '@/components/shared/page-hero-image'
import PageHeroStatic from '@/components/shared/page-hero-static'
import { TrendingUp, Users2, Wallet } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const jobs = [
  { title: 'Senior Software Engineer', location: 'Agra', dept: 'Engineering' },
  { title: 'GIS Specialist', location: 'Agra', dept: 'GIS' },
  { title: 'Field Surveyor', location: 'Agra', dept: 'Land Record' },
  { title: 'HR Manager', location: 'Agra', dept: 'Business Administration' },
  { title: 'Office Assistant', location: 'Agra', dept: 'Office Administration' },
  { title: 'Data Entry Operator', location: 'Agra', dept: 'Data Management' },
]

const benefits = [
  {
    icon: TrendingUp,
    title: 'Growth Opportunities',
    description: 'Clear career paths, mentorship, and dedicated skill development.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: Wallet,
    title: 'Competitive Compensation',
    description: 'Competitive salary, healthcare benefits, and performance rewards.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: Users2,
    title: 'Collaborative Culture',
    description: 'Work with multidisciplinary teams on meaningful, large-scale systems.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
  },
]

const CareersHeroVisual = createPageHeroVisual('/images/carrer.jpeg', 'Careers at SDV Edutech')

export default function Careers() {
  return (
    <main className='min-h-screen'>
      <PageHeroStatic
        eyebrow='Join the team'
        title='Build Your Career with Us'
        highlight='Career'
        description='Join Sdv Edutech and work on impactful GIS, software, and digital transformation projects with opportunities for continuous learning and growth.'
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Careers' }]}
        Visual={CareersHeroVisual}
      />

      <section className='py-16 md:py-24'>
        <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <p className='eyebrow text-primary'>Why SDV</p>
            <h2 className='mt-3 font-display text-3xl font-bold text-foreground'>Why You&apos;ll Love Working Here</h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {benefits.map(({ icon: Icon, title, description, image }) => (
              <article key={title} className='rounded-2xl border border-border bg-card overflow-hidden'>
                <div className='relative aspect-video'>
                  <Image src={image} alt={title} fill className='object-cover' sizes='33vw' />
                </div>
                <div className='p-6'>
                  <Icon className='w-5 h-5 text-primary mb-3' aria-hidden />
                  <h3 className='font-display font-semibold text-foreground'>{title}</h3>
                  <p className='mt-2 text-sm text-muted-foreground leading-relaxed'>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='py-16 md:py-24 bg-muted/30'>
        <div className='max-w-4xl mx-auto px-4 md:px-6 lg:px-8'>
          <div className='text-center mb-10'>
            <h2 className='font-display text-3xl font-bold text-foreground'>Open Positions</h2>
            <p className='mt-3 text-muted-foreground'>Explore current opportunities and apply online.</p>
          </div>
          <ul className='space-y-3'>
            {jobs.map(job => (
              <li
                key={job.title}
                className='flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl border border-border bg-card p-5'
              >
                <div>
                  <h3 className='font-semibold text-foreground'>{job.title}</h3>
                  <p className='text-sm text-muted-foreground mt-1'>
                    {job.dept} · {job.location}
                  </p>
                </div>
                <CtaButton href='/careers/apply' size='sm'>
                  Apply now
                </CtaButton>
              </li>
            ))}
          </ul>
          <p className='text-center mt-8 text-sm text-muted-foreground'>
            Don&apos;t see a fit?{' '}
            <Link href='/contact' className='text-primary hover:underline'>
              Send us your resume
            </Link>
          </p>
        </div>
      </section>
    </main>
  )
}
