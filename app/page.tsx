'use client';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/home/hero-section';
import StatsSection from '@/components/home/stats-section';
import ServicesSection from '@/components/home/services-section';
import TransformSection from '@/components/home/transform-section';
import TestimonialsSection from '@/components/home/testimonials-section';
import CTASection from '@/components/home/cta-section';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <TransformSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
