import AboutSection from '@/components/home/about-section'
import HeroSection from '@/components/home/hero-section'
import RecognitionSection from '@/components/home/recognition-section'
import ServicesSection from '@/components/home/services-section'
import TestimonialsSection from '@/components/home/testimonials-section'
import TransformSection from '@/components/home/transform-section'
import { Metadata } from 'next/types'

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Enterprise technology, survey management, GIS solutions, software development, and digital transformation services.',
  icons: {
    icon: '/logo.png',
  },
}

export default function HomePage() {
  return (
    <main className='min-h-screen'>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TransformSection />
      <TestimonialsSection />
      <RecognitionSection />
    </main>
  )
}
