import type { Metadata } from 'next';
import Clients from '@/components/clients/page';

export const metadata: Metadata = {
  title: 'Clients | SDV Edutech',
  description: 'Explore the government organizations we partner with to deliver reliable, scalable, and mission-critical technology solutions.',
};

export default function Page() {
  return <Clients />;
}
