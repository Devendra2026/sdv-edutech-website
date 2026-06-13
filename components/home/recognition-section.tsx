'use client'

import { SectionShell } from '@/components/marketing/section-shell'
import { MotionSection } from '@/components/providers/motion-section'
import { certificates } from '@/lib/site-content'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/navigation'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function RecognitionSection() {
  return (
    <SectionShell className='overflow-hidden'>
      <div
        className='absolute inset-0 bg-linear-to-b from-background via-muted/20 to-background pointer-events-none'
        aria-hidden
      />

      <div className='relative text-center mb-12 md:mb-16'>
        <span className='eyebrow-chip'>Certifications</span>
        <h2 className='mt-4 font-display text-3xl md:text-4xl font-bold text-foreground'>Our Recognition</h2>
        <p className='mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed'>
          Achievements and recognitions for excellence, compliance, and quality service delivery.
        </p>
      </div>

      <MotionSection>
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          spaceBetween={24}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {certificates.map(item => (
            <SwiperSlide key={item.image}>
              <article className='rounded-2xl border border-border/70 bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow motion-reduce:transition-none'>
                <div className='relative h-72 w-full'>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className='object-cover'
                    sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                  />
                </div>
                <div className='p-5'>
                  <h3 className='font-display text-lg font-semibold text-foreground line-clamp-2'>{item.title}</h3>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </MotionSection>
    </SectionShell>
  )
}
