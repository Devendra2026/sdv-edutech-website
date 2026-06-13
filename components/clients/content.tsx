import PageHeroStatic from '@/components/shared/page-hero-static'
import { Quote } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const clients = [
  {
    name: 'Ministry of Housing and Urban Affairs',
    logo: 'https://niua.in/c-cube/sites/all/themes/zap/images/cool-city/mohua.png',
  },
  {
    name: 'Urban Development Department, Government of Uttar Pradesh',
    logo: 'https://tse4.mm.bing.net/th/id/OIP.yDz-fvvTafglQELULd7X0gHaHa?pid=Api&h=220&P=0',
  },
  {
    name: 'National Skill Development Corporation (NSDC)',
    logo: 'https://digitallearning.eletsonline.com/wp-content/uploads/2018/01/nsdc-logo-ss.jpg',
  },
  {
    name: 'Skill India Foundation',
    logo: 'https://skillsindiafoundation.in/logo/logo.jpg',
  },
]

const testimonials = [
  { quote: 'Their GIS platform transformed how we manage public infrastructure across the state.' },
  { quote: 'A true engineering partner — the survey system paid for itself within months.' },
  { quote: 'From strategy to delivery, SDV made our cloud migration genuinely seamless.' },
]

export default function Clients() {
  return (
    <main className='min-h-screen'>
      <PageHeroStatic
        eyebrow='Trusted partners'
        title='Trusted by Industry Leaders'
        highlight='Leaders'
        description='Partnering with government organizations across India to deliver reliable, scalable, and mission-critical technology solutions.'
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Clients' }]}
        centered
      />

      <section className='pb-12 overflow-hidden'>
        <div className='flex w-max animate-marquee gap-5'>
          {[...clients, ...clients].map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className='bg-card border border-border rounded-2xl px-5 py-3 shadow-sm flex items-center gap-4 min-w-[320px]'
            >
              <div className='relative w-12 h-12 shrink-0'>
                <Image src={client.logo} alt='' fill className='object-contain' sizes='48px' />
              </div>
              <span className='text-sm font-medium text-foreground'>{client.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className='relative py-12 md:py-20'>
        <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <p className='eyebrow text-primary'>Our clients</p>
            <h2 className='mt-3 font-display text-3xl font-bold text-foreground'>
              Trusted by Government Organizations
            </h2>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {clients.map(client => (
              <article
                key={client.name}
                className='rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow'
              >
                <div className='h-40 bg-muted flex items-center justify-center p-6'>
                  <div className='relative h-20 w-full max-w-35'>
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      className='object-contain'
                      sizes='(max-width: 640px) 50vw, 140px'
                    />
                  </div>
                </div>
                <div className='p-4 border-t border-border'>
                  <h3 className='text-center text-sm font-semibold text-foreground'>{client.name}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='py-16 bg-muted/30'>
        <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
          <div className='grid md:grid-cols-3 gap-6'>
            {testimonials.map((t, i) => (
              <blockquote key={i} className='glass rounded-2xl p-6'>
                <Quote className='w-8 h-8 text-primary/30 mb-4' aria-hidden />
                <p className='text-muted-foreground leading-relaxed italic'>&ldquo;{t.quote}&rdquo;</p>
              </blockquote>
            ))}
          </div>
          <div className='text-center mt-12'>
            <Link
              href='/contact'
              className='inline-flex items-center justify-center min-h-11 px-8 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors'
            >
              Become a partner
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
