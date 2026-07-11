import { LegalPage } from '@/components/marketing/legal-page'
import { createPageMetadata } from '@/lib/metadata'
import { siteConfig } from '@/lib/site-content'

export const metadata = createPageMetadata({
  title: 'Terms of Service',
  description: `Terms of service for using the ${siteConfig.name} website and services.`,
  path: '/terms-of-service',
})

export default function TermsOfServicePage() {
  return (
    <LegalPage title='Terms of Service' lastUpdated='June 12, 2025'>
      <p>
        By accessing this website operated by {siteConfig.legalName}, you agree to these terms. If you do not agree,
        please do not use our site.
      </p>
      <h2 className='font-display text-xl font-semibold text-foreground mt-8'>Use of website</h2>
      <p>
        You may use this website for lawful purposes only. Content is provided for general information about our
        services and may be updated without notice.
      </p>
      <h2 className='font-display text-xl font-semibold text-foreground mt-8'>Intellectual property</h2>
      <p>
        All content, trademarks, and materials on this site are owned by {siteConfig.legalName} or its licensors and are
        protected by applicable intellectual property laws.
      </p>
      <h2 className='font-display text-xl font-semibold text-foreground mt-8'>Privacy and Cokkies</h2>
      <p>
       Your use of this website is also governed by our Privacy Policy. We may use cookies and similar tracking technologies to analyze website traffic and improve your browsing experience.
      </p>
      <h2 className='font-display text-xl font-semibold text-foreground mt-8'>Limitation of liability</h2>
      <p>
        We are not liable for indirect or consequential damages arising from use of this website. Service engagements
        are governed by separate written agreements.
      </p>
      <h2 className='font-display text-xl font-semibold text-foreground mt-8'>Governing Law and Jurisdiction</h2>
      <p>
       These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with this website shall be subject to the exclusive jurisdiction of the courts in [Agra,UP], India.
      </p>
    </LegalPage>
  )
}
