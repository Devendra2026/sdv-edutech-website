import type { Metadata } from 'next';
import BasicSeo from '@/components/packages/digitalmarketing/basicseo/page';

export const metadata: Metadata = {
  title: 'Basic SEO | SDV Edutech',
  description: 'Explore our enterprise services in Agra for smart education technology, custom software, and GIS solutions.',
};

export default function Page() {
  return <BasicSeo />;
}

