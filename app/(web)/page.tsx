'use client'


import HeroSection from '@/components/home/hero-section'
import AboutSection from '@/components/home/about-section'
import ServicesSection from '@/components/home/services-section'
import TestimonialsSection from '@/components/home/testimonials-section'
import TransformSection from '@/components/home/transform-section'
import RecognitionSection from '@/components/home/recognition-section'

export default function HomePage() {
  return (
    <main className='min-h-screen'>
      <HeroSection />
      <AboutSection/>
      <ServicesSection />
      <TransformSection />
      <TestimonialsSection />
      <RecognitionSection/>
    </main>
  )
}
