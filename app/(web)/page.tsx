import AboutSection from '@/components/home/about-section'
import HeroSection from '@/components/home/hero-section'
import { RecognitionSkeleton } from '@/components/home/recognition-skeleton'
import ServicesSection from '@/components/home/services-section'
import TransformSection from '@/components/home/transform-section'
import { createPageMetadata } from '@/lib/metadata'
import dynamic from 'next/dynamic'

const RecognitionSection = dynamic(() => import('@/components/home/recognition-section'), {
  loading: () => <RecognitionSkeleton />,
})

export const metadata = createPageMetadata({
  title: 'Home',
  description:
    'SDV Edutech delivers enterprise technology, survey management, GIS solutions, software development, and digital transformation for government and corporate clients.',
  path: '/',
})

export default function HomePage() {
  return (
    <main className='min-h-screen'>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TransformSection />
      <RecognitionSection />
    </main>
  )
}
