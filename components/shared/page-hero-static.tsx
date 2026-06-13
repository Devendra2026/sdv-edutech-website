import { ChevronRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

interface Crumb {
  label: string
  href?: string
}

interface PageHeroStaticProps {
  eyebrow: string
  title: React.ReactNode
  highlight?: string
  description: string
  crumbs?: Crumb[]
  /** Stable component reference — avoids inline JSX prop re-creation each render */
  Visual?: React.ComponentType
  centered?: boolean
}

export default function PageHeroStatic({
  eyebrow,
  title,
  highlight,
  description,
  crumbs = [],
  Visual,
  centered,
}: PageHeroStaticProps) {
  const renderTitle = () => {
    if (!highlight || typeof title !== 'string') return title
    const idx = title.indexOf(highlight)
    if (idx === -1) return title
    return (
      <>
        {title.slice(0, idx)}
        <span className='text-gradient'>{highlight}</span>
        {title.slice(idx + highlight.length)}
      </>
    )
  }

  return (
    <section className='relative overflow-hidden'>
      <div
        className='absolute inset-0 -z-10 blueprint-grid opacity-60 mask-[radial-gradient(120%_80%_at_50%_0%,#000_30%,transparent_75%)]'
        aria-hidden
      />
      <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pt-12 md:pt-16 pb-14 md:pb-20'>
        <div className={`grid gap-12 items-center ${Visual && !centered ? 'lg:grid-cols-2' : 'grid-cols-1'}`}>
          <div
            className={`space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 motion-reduce:animate-none ${centered ? 'text-center mx-auto max-w-3xl' : ''}`}
          >
            {crumbs.length > 0 && (
              <nav
                className={`flex items-center gap-1.5 text-xs text-muted-foreground ${centered ? 'justify-center' : ''}`}
                aria-label='Breadcrumb'
              >
                {crumbs.map((c, i) => (
                  <span key={c.label} className='flex items-center gap-1.5'>
                    {i > 0 && <ChevronRight className='w-3.5 h-3.5 opacity-50' aria-hidden />}
                    {c.href ? (
                      <Link href={c.href} className='hover:text-primary transition-colors'>
                        {c.label}
                      </Link>
                    ) : (
                      <span className='text-foreground font-medium'>{c.label}</span>
                    )}
                  </span>
                ))}
              </nav>
            )}
            <span className={`glass eyebrow-chip inline-flex ${centered ? 'mx-auto' : ''}`}>
              <Sparkles className='w-3.5 h-3.5' aria-hidden />
              {eyebrow}
            </span>
            <h1 className='font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.05] tracking-tight'>
              {renderTitle()}
            </h1>
            <p
              className={`text-lg md:text-xl text-muted-foreground leading-relaxed ${centered ? 'mx-auto max-w-2xl' : 'max-w-lg'}`}
            >
              {description}
            </p>
          </div>
          {Visual && !centered && (
            <div className='hidden lg:block'>
              <Visual />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
