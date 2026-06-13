import Contact from '@/components/contact/content'
import { createPageMetadata } from '@/lib/metadata'

export const metadata = createPageMetadata({
  title: 'Contact',
  description:
    'Get in touch with SDV Edutech in Agra, Uttar Pradesh. Phone, email, and contact form for enterprise technology inquiries.',
  path: '/contact',
})

export default function ContactPage() {
  return <Contact />
}
