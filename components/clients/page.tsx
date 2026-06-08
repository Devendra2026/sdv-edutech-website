'use client'

import PageHero from '@/components/shared/page-hero'
import SectionHeading from '@/components/shared/section-heading'
import { motion } from '@/lib/motion'
import { Quote } from 'lucide-react'
import Link from 'next/link'

const clients = [
  {
    name: 'MINISTRY OF HOUSING AND URBAN AFFAIRS',
    logo: 'https://niua.in/c-cube/sites/all/themes/zap/images/cool-city/mohua.png',
  },
  {
    name: 'Urban Development Department, Government of Utter Pradesh',
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
  {
    quote: 'Their GIS platform transformed how we manage public infrastructure across the state.',
    author: '',
  },
  {
    quote: 'A true engineering partner — the survey system paid for itself within months.',
    author: '',
  },
  {
    quote: 'From strategy to delivery, SDV made our cloud migration genuinely seamless.',
    author: '',
  },
]

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function Clients() {
  return (
    <main className='min-h-screen'>
      <PageHero
        eyebrow='Trusted Partners'
        title='Trusted by Industry Leaders'
        highlight='Leaders'
        description='Partnering with government organizations across India to deliver reliable, scalable, and mission-critical technology solutions..'
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Clients' }]}
        centered
      />

      {/* Logo Slider */}
      <section className='pb-12'>
        <div className='overflow-hidden'>
          <div className='flex w-max animate-marquee gap-5'>
            {[...clients, ...clients].map((client, i) => (
              <div
                key={`${client.name}-${i < clients.length ? 'a' : 'b'}`}
                className='bg-white border border-slate-200 rounded-2xl px-5 py-3 shadow-sm flex items-center gap-4 min-w-[320px]'
              >
                <img src={client.logo} alt={client.name} className='w-12 h-12 object-contain' />

                <span className='text-sm font-medium text-slate-700'>{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Grid */}
      <section className='relative py-12 md:py-20'>
        <div className='absolute inset-0 -z-10 bg-linear-to-b from-slate-50 to-white' />

        <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
          <SectionHeading
            eyebrow='Our Clients'
            title='Trusted by Govt. Organizations'
            subtitle='We are proud to serve a wide network of government departments, institutions, and corporate clients.'
          />

          <motion.div
            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'
            variants={container}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            {clients.map(client => (
              <motion.div
                key={client.name}
                variants={item}
                className='bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500'
              >
                <div className='h-55 bg-slate-50 flex items-center justify-center p-8'>
                  <img src={client.logo} alt={client.name} className='max-h-28 object-contain' />
                </div>

                <div className='p-5 border-t border-slate-100'>
                  <h3 className='text-center text-sm font-semibold text-slate-800'>{client.name}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className='py-16 md:py-24'>
        <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
          <SectionHeading eyebrow='Client Feedback' title='What Clients Say' />

          <motion.div
            className='grid grid-cols-1 md:grid-cols-3 gap-6'
            variants={container}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            {testimonials.map(t => (
              <motion.div
                key={t.quote}
                variants={item}
                className='bg-white rounded-2xl p-7 border border-slate-200 shadow-md hover:shadow-xl transition-all'
              >
                <Quote className='w-8 h-8 text-blue-200 mb-4' />

                <p className='text-slate-700 leading-relaxed mb-6'>"{t.quote}"</p>

                <p className='text-sm font-medium text-slate-500 border-t pt-4'>{t.author}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className='mt-16 bg-white border border-slate-200 rounded-3xl p-10 text-center shadow-lg'
          >
            <h2 className='text-3xl font-bold text-slate-900'>Join Our Growing Client Base</h2>

            <p className='mt-3 text-slate-600 max-w-2xl mx-auto'>
              Discover how SDV EDUTECH can help your organization through innovative technology, GIS solutions, and
              digital transformation.
            </p>

            <Link href='/contact'>
              <button
                type='button'
                className='mt-6 px-8 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all'
              >
                Get in Touch
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
