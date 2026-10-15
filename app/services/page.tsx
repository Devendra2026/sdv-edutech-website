import type { Metadata } from 'next';
import ServiceHero from '@/components/services/page';

export const metadata: Metadata = {
  title: 'Services | SDV Edutech',
  description: 'Explore our enterprise services in Agra for smart education technology, custom software, and GIS solutions.',
};

export default function Page() {
  return <ServiceHero />;
}
