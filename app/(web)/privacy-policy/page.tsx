import { LegalPage } from '@/components/marketing/legal-page'
import { createPageMetadata } from '@/lib/metadata'
import { siteConfig } from '@/lib/site-content'

export const metadata = createPageMetadata({
  title: 'Privacy Policy',
  description: `Privacy policy for ${siteConfig.legalName} — how we collect, use, and protect your information.`,
  path: '/privacy-policy',
})

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title='Privacy Policy' lastUpdated='June 12, 2025'>
      <p>
        {siteConfig.legalName} (&quot;we&quot;, &quot;us&quot;) respects your privacy. This policy describes how we
        collect and use personal information when you visit our website or contact us.
      </p>
      <h2 className='font-display text-xl font-semibold text-foreground mt-8'>Information we collect</h2>
      <p>
        We may collect information you provide through contact forms, job applications, or email correspondence,
        including name, email, phone number, and message content.
      </p>
      <h2 className='font-display text-xl font-semibold text-foreground mt-8'>How we use information</h2>
      <p>
        We use your information to respond to inquiries, process job applications, improve our services, and comply with
        legal obligations. We do not sell your personal data.
      </p>
      <h2 className='font-display text-xl font-semibold text-foreground mt-8'>Data security</h2>
      <p>
        We implement appropriate technical and organizational measures to protect personal information against
        unauthorized access, alteration, or disclosure.
      </p>
    </LegalPage>
  )
}
