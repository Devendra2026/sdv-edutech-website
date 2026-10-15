import type { Metadata } from 'next';
import CareerHero from '@/components/careers/page';

export const metadata: Metadata = {
  title: 'Careers | SDV Edutech',
  description: 'Join our team and contribute to impactful projects in GIS, software, and digital transformation.',
};

export default function Page() {
  return <CareerHero />;
}
