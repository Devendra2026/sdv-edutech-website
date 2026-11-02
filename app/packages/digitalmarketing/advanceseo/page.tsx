import type { Metadata } from 'next';
import AdvanceSeo from '@/components/packages/digitalmarketing/advancedseo/page';

export const metadata: Metadata = {
  title: 'Advance SEO | SDV Edutech',
  description: 'Explore our enterprise services in Agra for smart education technology, custom software, and GIS solutions.',
};

export default function Page() {
  return <AdvanceSeo />;
}

