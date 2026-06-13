'use client'

import { CtaButton } from '@/components/marketing/cta-button'
import { Button } from '@/components/ui/button'
import { AnimatePresence, motion } from '@/lib/motion'
import { processSteps, serviceDetails, type ServiceDetail } from '@/lib/services-data'
import { ArrowUpRight, CheckCircle2, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export function ServicesGrid() {
  const [activeCard, setActiveCard] = useState<ServiceDetail | null>(null)

  return (
    <>
      <section className='relative py-16 md:py-24'>
        <div className='absolute inset-0 -z-10 section-tint' aria-hidden />
        <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
          <div className='text-center max-w-2xl mx-auto mb-12'>
            <p className='eyebrow text-primary'>Capabilities</p>
            <h2 className='mt-3 font-display text-3xl md:text-4xl font-bold text-foreground'>Our Services</h2>
            <p className='mt-4 text-muted-foreground'>
              Comprehensive enterprise solutions designed to drive your business forward.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
            {serviceDetails.map(service => (
              <article
                key={service.slug}
                id={service.slug}
                className='group scroll-mt-24 cursor-pointer'
                onClick={() => setActiveCard(service)}
                onKeyDown={e => e.key === 'Enter' && setActiveCard(service)}
                role='button'
                tabIndex={0}
              >
                <div className='relative flex flex-col h-full rounded-2xl border border-border/60 glass overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary/20'>
                  <div className='relative w-full aspect-video overflow-hidden bg-muted'>
                    <Image
                      src={service.imageSrc}
                      alt={service.title}
                      fill
                      className='object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:group-hover:scale-100'
                      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    />
                    <div className='absolute bottom-4 left-4 flex flex-wrap gap-1.5'>
                      {service.tags.map(t => (
                        <span
                          key={t}
                          className='px-2 py-0.5 rounded-md bg-background/80 text-foreground text-[11px] font-medium border border-border/40'
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className='flex flex-col grow p-6'>
                    <h3 className='font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors'>
                      {service.title}
                    </h3>
                    <p className='text-muted-foreground text-sm leading-relaxed grow mb-4'>{service.description}</p>
                    <span className='inline-flex items-center gap-1.5 text-primary font-semibold text-sm'>
                      Explore solution
                      <ArrowUpRight className='w-4 h-4' />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {activeCard && (
          <div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md'>
            <motion.div
              className='absolute inset-0'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCard(null)}
              aria-hidden
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className='relative w-full max-w-4xl max-h-[90vh] bg-card border border-border rounded-2xl shadow-2xl overflow-y-auto z-10'
              role='dialog'
              aria-modal='true'
              aria-labelledby='service-modal-title'
            >
              <button
                type='button'
                onClick={() => setActiveCard(null)}
                className='absolute top-4 right-4 z-20 p-2 rounded-full bg-background border border-border min-h-11 min-w-11 flex items-center justify-center'
                aria-label='Close'
              >
                <X className='w-5 h-5' />
              </button>
              <div className='grid grid-cols-1 md:grid-cols-12'>
                <div className='relative md:col-span-5 h-64 md:h-auto min-h-64 bg-muted'>
                  <Image src={activeCard.imageSrc} alt={activeCard.title} fill className='object-cover' />
                </div>
                <div className='p-6 md:p-10 md:col-span-7'>
                  <h2 id='service-modal-title' className='text-2xl font-display font-bold text-foreground mb-4'>
                    {activeCard.title}
                  </h2>
                  <p className='text-muted-foreground leading-relaxed mb-6'>{activeCard.popupDetails.overview}</p>
                  <h4 className='text-xs font-bold uppercase tracking-wider text-foreground mb-3'>Deliverables</h4>
                  <ul className='space-y-2 mb-8'>
                    {activeCard.popupDetails.deliverables.map(item => (
                      <li key={item} className='flex items-start gap-3 text-sm text-muted-foreground'>
                        <CheckCircle2 className='w-4 h-4 text-primary shrink-0 mt-0.5' aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className='flex flex-wrap gap-3'>
                    <Button asChild>
                      <Link href='/contact' onClick={() => setActiveCard(null)}>
                        Inquire about this service
                      </Link>
                    </Button>
                    <Button type='button' variant='outline' onClick={() => setActiveCard(null)}>
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

export function ServicesProcess() {
  return (
    <section className='py-16 md:py-24 bg-muted/30'>
      <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
        <div className='text-center max-w-2xl mx-auto mb-12'>
          <p className='eyebrow text-primary'>How we work</p>
          <h2 className='mt-3 font-display text-3xl md:text-4xl font-bold text-foreground'>
            A Proven Delivery Process
          </h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {processSteps.map(p => (
            <article
              key={p.title}
              className='rounded-2xl border border-border/60 glass overflow-hidden hover:shadow-lg transition-shadow'
            >
              <div className='relative aspect-video bg-muted'>
                <Image src={p.imageSrc} alt={p.title} fill className='object-cover' sizes='25vw' />
                <span className='font-display text-4xl font-extrabold text-foreground/15 absolute top-3 right-4'>
                  {p.step}
                </span>
              </div>
              <div className='p-6'>
                <h3 className='font-display text-lg font-bold text-foreground mb-2'>{p.title}</h3>
                <p className='text-muted-foreground text-sm leading-relaxed'>{p.description}</p>
              </div>
            </article>
          ))}
        </div>
        <div className='text-center mt-12'>
          <CtaButton href='/contact' size='lg'>
            Start your project
          </CtaButton>
        </div>
      </div>
    </section>
  )
}
