import type { Metadata } from 'next';
import StandardPackage from '@/components/packages/website/standardpackage/page';

export const metadata: Metadata = {
  title: 'Standard Package | SDV Edutech',
  description: 'Explore our enterprise services in Agra for smart education technology, custom software, and GIS solutions.',
};

export default function Page() {
  return <StandardPackage />;
}

