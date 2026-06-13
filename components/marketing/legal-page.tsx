import PageHeroStatic from '@/components/shared/page-hero-static'
import { siteConfig } from '@/lib/site-content'

type LegalPageProps = {
  title: string
  lastUpdated: string
  children: React.ReactNode
}

export function LegalPage({ title, lastUpdated, children }: LegalPageProps) {
  return (
    <main className='min-h-screen'>
      <PageHeroStatic
        eyebrow='Legal'
        title={title}
        description={`Last updated: ${lastUpdated}`}
        crumbs={[{ label: 'Home', href: '/' }, { label: title }]}
        centered
      />
      <article className='max-w-3xl mx-auto px-4 md:px-6 pb-20 prose prose-neutral dark:prose-invert'>
        <div className='text-muted-foreground leading-relaxed space-y-4'>{children}</div>
        <p className='mt-12 text-sm text-muted-foreground'>
          Questions? Contact{' '}
          <a href={`mailto:${siteConfig.email}`} className='text-primary hover:underline'>
            {siteConfig.email}
          </a>
        </p>
      </article>
    </main>
  )
}
