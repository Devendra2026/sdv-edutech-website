import type { Metadata } from 'next';
import BasicSoftwarePakage from '@/components/packages/software/basicsoftwarepakage/page';

export const metadata: Metadata = {
  title: 'Basic Software Package | SDV Edutech',
  description: 'Explore our enterprise services in Agra for smart education technology, custom software, and GIS solutions.',
};

export default function Page() {
  return <BasicSoftwarePakage />;
}

