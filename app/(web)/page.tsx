'use client'

import CTASection from '@/components/home/cta-section'
import HeroSection from '@/components/home/hero-section'
import ServicesSection from '@/components/home/services-section'
import StatsSection from '@/components/home/stats-section'
import TestimonialsSection from '@/components/home/testimonials-section'
import TransformSection from '@/components/home/transform-section'

export default function HomePage() {
  return (
    <main className='min-h-screen'>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <TransformSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  )
}
