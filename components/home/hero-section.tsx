import { CtaButton } from '@/components/marketing/cta-button'
import { heroCopy, heroStats, siteConfig } from '@/lib/site-content'
import { ArrowRight, Award, Building2, CheckCircle2, Headphones, ShieldCheck } from 'lucide-react'
import Image from 'next/image'

const trustPoints = ['Established industry expertise', 'Govt. approved partner', 'End-to-end solutions', '24/7 support']

export default function HeroSection() {
  return (
    <section className='relative overflow-hidden border-b border-border/60 bg-background'>
      <div className='absolute inset-0 hero-grid-bg opacity-80 pointer-events-none' aria-hidden />
      <div
        className='absolute inset-0 bg-linear-to-br from-background/70 via-background/40 to-primary/5 pointer-events-none'
        aria-hidden
      />

      <div className='relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-14 md:py-20 lg:py-24'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center'>
          <div className='space-y-6 md:space-y-7 order-2 lg:order-1'>
            <div className='flex flex-wrap gap-2'>
              <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-primary text-primary-foreground text-xs font-semibold'>
                <Award className='w-3.5 h-3.5' aria-hidden />
                {heroCopy.badge}
              </span>
              <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-secondary/10 text-secondary border border-secondary/25 text-xs font-semibold'>
                <ShieldCheck className='w-3.5 h-3.5' aria-hidden />
                Enterprise Partner
              </span>
            </div>

            <div className='space-y-4'>
              <h1 className='font-display text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-foreground leading-[1.1] tracking-tight'>
                Innovative <span className='text-primary'>IT Solutions</span>
              </h1>
              <p className='text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl'>
                {heroCopy.description}
              </p>
            </div>

            <ul className='grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5'>
              {trustPoints.map(point => (
                <li key={point} className='flex items-start gap-2 text-sm text-foreground/90'>
                  <CheckCircle2 className='w-4 h-4 text-primary shrink-0 mt-0.5' aria-hidden />
                  {point}
                </li>
              ))}
            </ul>

            <div className='flex flex-col sm:flex-row gap-3 pt-1'>
              <CtaButton href='/contact' className='gap-2'>
                Get in touch
                <ArrowRight className='w-4 h-4' />
              </CtaButton>
              <CtaButton href='/services' variant='outline'>
                Our services
              </CtaButton>
            </div>

            <div className='inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-muted/80 border border-border backdrop-blur-sm'>
              <Building2 className='w-4 h-4 text-primary' aria-hidden />
              <span className='text-sm font-medium text-foreground'>Quality assured excellence</span>
            </div>
          </div>

          <div className='order-1 lg:order-2 w-full'>
            <div className='relative rounded-2xl overflow-hidden border border-border/80 shadow-xl shadow-primary/10 bg-card ring-1 ring-primary/10'>
              <div className='relative w-full aspect-5/4 sm:aspect-4/3 lg:aspect-5/4 min-h-70 sm:min-h-85'>
                <Image
                  src={siteConfig.heroImage}
                  alt='IT consulting and enterprise technology team collaboration'
                  fill
                  priority
                  className='object-cover object-center'
                  sizes='(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 560px'
                />
                <div
                  className='absolute inset-0 bg-linear-to-t from-foreground/35 via-transparent to-transparent pointer-events-none'
                  aria-hidden
                />
                <div className='absolute bottom-0 left-0 right-0 z-10 grid grid-cols-3 divide-x divide-white/20 bg-primary/95'>
                  {heroStats.map(stat => (
                    <div key={stat.label} className='px-2 sm:px-3 py-3.5 sm:py-4 text-center'>
                      <p className='font-display text-lg sm:text-xl md:text-2xl font-bold text-white'>{stat.value}</p>
                      <p className='text-[10px] sm:text-xs text-white/90 leading-tight mt-0.5'>{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className='mt-3 flex items-center justify-center gap-2 text-xs text-muted-foreground'>
              <Headphones className='w-3.5 h-3.5 text-primary' aria-hidden />
              Dedicated support for government & corporate clients
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
