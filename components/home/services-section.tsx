'use client'

import { SectionShell } from '@/components/marketing/section-shell'
import { ServiceCard } from '@/components/marketing/service-card'
import { services } from '@/lib/site-content'
import { BarChart3, BookOpen, Code2, Map, Users, Zap } from 'lucide-react'
import { useState } from 'react'
import { ServicesImageModal } from './services-image-modal'

const serviceIcons: Record<string, React.ReactNode> = {
  'survey-management': <BarChart3 className='w-5 h-5' />,
  'gis-solutions': <Map className='w-5 h-5' />,
  'software-development': <Code2 className='w-5 h-5' />,
  'training-programs': <BookOpen className='w-5 h-5' />,
  'sbm-services': <Zap className='w-5 h-5' />,
  'consulting-services': <Users className='w-5 h-5' />,
  'outsourcing-manpower': <Users className='w-5 h-5' />,
}

export default function ServicesSection() {
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string } | null>(null)

  return (
    <SectionShell id='services'>
      <div className='text-center max-w-2xl mx-auto mb-12 md:mb-16'>
        <p className='eyebrow text-primary'>What we offer</p>
        <h2 className='mt-3 font-display text-3xl md:text-4xl font-bold text-foreground'>Our Core Services</h2>
        <p className='mt-4 text-muted-foreground leading-relaxed'>
          End-to-end technology solutions tailored for government and enterprise clients across India.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {services.map(service => (
          <ServiceCard
            key={service.slug}
            slug={service.slug}
            title={service.title}
            description={service.shortDescription}
            image={service.image}
            icon={serviceIcons[service.slug]}
            onImageClick={() => setActiveImage({ src: service.image, alt: service.title })}
          />
        ))}
      </div>

      <ServicesImageModal
        image={activeImage?.src ?? null}
        alt={activeImage?.alt ?? ''}
        onClose={() => setActiveImage(null)}
      />
    </SectionShell>
  )
}
