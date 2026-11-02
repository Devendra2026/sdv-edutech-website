import type { Metadata } from 'next';
import DynamicPackage from '@/components/packages/website/dynamicpackage/page';

export const metadata: Metadata = {
  title: 'Dynamic Package | SDV Edutech',
  description: 'Explore our enterprise services in Agra for smart education technology, custom software, and GIS solutions.',
};

export default function Page() {
  return <DynamicPackage />;
}
