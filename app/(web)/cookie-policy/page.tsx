import { LegalPage } from '@/components/marketing/legal-page'
import { createPageMetadata } from '@/lib/metadata'
import { siteConfig } from '@/lib/site-content'

export const metadata = createPageMetadata({
  title: 'Cookie Policy',
  description: `How ${siteConfig.name} uses cookies and similar technologies on this website.`,
  path: '/cookie-policy',
})

export default function CookiePolicyPage() {
  return (
    <LegalPage title='Cookie Policy' lastUpdated='June 12, 2025'>
      <p>
        This website may use cookies and similar technologies to improve functionality, analyze traffic, and enhance
        user experience.
      </p>
      <h2 className='font-display text-xl font-semibold text-foreground mt-8'>What are cookies?</h2>
      <p>
        Cookies are small text files stored on your device when you visit a website. They help remember preferences and
        understand how visitors use our site.
      </p>
      <h2 className='font-display text-xl font-semibold text-foreground mt-8'>Analytics</h2>
      <p>
        We may use privacy-focused analytics in production to understand site usage. You can control cookies through
        your browser settings.
      </p>
      <h2 className='font-display text-xl font-semibold text-foreground mt-8'>Managing cookies</h2>
      <p>
        Most browsers allow you to refuse or delete cookies. Disabling cookies may affect certain features of this
        website.
      </p>
    </LegalPage>
  )
}
