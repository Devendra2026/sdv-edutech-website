import { CtaButton } from '@/components/marketing/cta-button'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className='min-h-screen flex items-center justify-center px-4'>
      <div className='text-center max-w-md'>
        <p className='font-display text-8xl font-bold text-primary/20'>404</p>
        <h1 className='mt-4 font-display text-2xl md:text-3xl font-bold text-foreground'>Page not found</h1>
        <p className='mt-3 text-muted-foreground'>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className='mt-8 flex flex-col sm:flex-row gap-3 justify-center'>
          <CtaButton href='/'>Go home</CtaButton>
          <Link
            href='/contact'
            className='inline-flex items-center justify-center min-h-11 px-6 rounded-md border border-border text-sm font-medium hover:bg-muted transition-colors'
          >
            Contact us
          </Link>
        </div>
      </div>
    </main>
  )
}
