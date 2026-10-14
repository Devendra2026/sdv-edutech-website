import type { Metadata } from 'next';
import ContactPage from '@/components/contact/page';

export const metadata: Metadata = {
  title: 'Contact | SDV Edutech',
  description: 'Contact SDV Edutech in Agra for smart education technology, custom software, and GIS solutions.',
};

export default function Page() {
  return <ContactPage />;
}
