import type { Metadata } from 'next';
import BasicPackage from '@/components/packages/website/basicpackage/page';

export const metadata: Metadata = {
  title: 'Basic Package | SDV Edutech',
  description: 'Explore our enterprise services in Agra for smart education technology, custom software, and GIS solutions.',
};

export default function Page() {
  return <BasicPackage />;
}

