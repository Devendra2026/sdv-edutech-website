'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const projects = [
  {
    title: 'Survey Platform for Public Works',
    category: 'Survey',
    description: 'Real-time field data capture and validation across 200+ sites.',
    metric: '40% faster reporting',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Statewide GIS Mapping System',
    category: 'GIS',
    description: 'Spatial asset management with multi-layer terrain analysis.',
    metric: '1.2M parcels mapped',
    image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Enterprise CRM Platform',
    category: 'Software',
    description: 'Custom CRM unifying sales, support, and analytics.',
    metric: '3x pipeline visibility',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Cloud Migration & DevOps',
    category: 'Transformation',
    description: 'Zero-downtime migration to a resilient multi-region cloud.',
    metric: '99.98% uptime',
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Workforce Training LMS',
    category: 'Training',
    description: 'Scalable learning platform with progress tracking.',
    metric: '8,000+ learners',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Data Strategy Engagement',
    category: 'Consulting',
    description: 'Governance and architecture roadmap for analytics.',
    metric: '6-month roadmap',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80',
  },
] as const

const categories = ['All', 'Survey', 'GIS', 'Software', 'Transformation', 'Training', 'Consulting'] as const

export function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState<string>('All')
  const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter)

  return (
    <section className='relative py-12 md:py-20'>
      <div className='absolute inset-0 -z-10 section-tint' aria-hidden />
      <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
        <div className='flex flex-wrap gap-2 mb-12 justify-center' role='tablist' aria-label='Filter projects'>
          {categories.map(category => (
            <Button
              key={category}
              type='button'
              variant={activeFilter === category ? 'default' : 'outline'}
              size='sm'
              className='rounded-full min-h-11'
              onClick={() => setActiveFilter(category)}
              role='tab'
              aria-selected={activeFilter === category}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filtered.map(project => (
            <article
              key={project.title}
              className='rounded-2xl border border-border/70 bg-card overflow-hidden hover:shadow-lg transition-shadow'
            >
              <div className='relative aspect-video bg-muted'>
                <Image src={project.image} alt={project.title} fill className='object-cover' sizes='33vw' />
              </div>
              <div className='p-6'>
                <span className='text-xs font-medium text-primary uppercase tracking-wide'>{project.category}</span>
                <h3 className='mt-2 font-display text-lg font-bold text-foreground'>{project.title}</h3>
                <p className='mt-2 text-sm text-muted-foreground leading-relaxed'>{project.description}</p>
                <p className='mt-3 text-sm font-semibold text-primary'>{project.metric}</p>
              </div>
            </article>
          ))}
        </div>

        <div className='text-center mt-14'>
          <Button asChild size='lg' className='min-h-11'>
            <Link href='/contact'>Start a similar project</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
