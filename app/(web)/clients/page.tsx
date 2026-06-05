// 'use client'

// import PageHero from '@/components/shared/page-hero'
// import SectionHeading from '@/components/shared/section-heading'
// import { motion } from 'framer-motion'
// import { Quote } from 'lucide-react'
// import Link from 'next/link'

// const clients = ['NAGAR PANCHAYAT ANAND NAGAR', 'NAGAR PANCHAYAT SONKH',  ]

// const initials = (name: string) =>
//   name
//     .split(' ')
//     .filter(Boolean)
//     .slice(0, 2)
//     .map(w => w[0])
//     .join('')
//     .toUpperCase()

// const testimonials = [
//   {
//     quote: 'Their GIS platform transformed how we manage public infrastructure across the state.',
//     author: 'Nagar Panchayat Fatehabad',
//   },
//   {
//     quote: 'A true engineering partner — the survey system paid for itself within months.',
//     author: 'Nagar Panchayat Govardhan',
//   },
//   {
//     quote: 'From strategy to delivery, SDV made our cloud migration genuinely seamless.',
//     author: 'Nagar Panchayat Chhata',
//   },
// ]

// const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.06 } } }
// const item = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }

// export default function ClientsPage() {
//   return (
//     <main className='min-h-screen'>
//       <PageHero
//         eyebrow='Trusted partners'
//         title='Trusted by Industry Leaders'
//         highlight='Leaders'
//         description='From government bodies to fast-growing enterprises, organizations rely on SDV EDUTECH to deliver IT and geospatial solutions that perform.'
//         crumbs={[{ label: 'Home', href: '/' }, { label: 'Clients' }]}
//         centered
//       />

//       {/* Marquee strip */}
//       <section className='pb-8'>
//         <div className='marquee-mask overflow-hidden py-2'>
//           <div className='flex w-max animate-marquee gap-4'>
//             {[...clients, ...clients].map((c, i) => (
//               <div key={i} className='glass rounded-xl px-6 py-3 flex items-center gap-3 whitespace-nowrap'>
//                 <span className='w-8 h-8 rounded-lg bg-linear-to-br from-primary to-secondary text-white text-xs font-bold flex items-center justify-center'>
//                   {initials(c)}
//                 </span>
//                 <span className='text-sm font-medium text-foreground'>{c}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Logo grid */}
//       <section className='relative py-12 md:py-20'>
//         <div className='absolute inset-0 -z-10 section-tint' aria-hidden />
//         <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
//           <SectionHeading
//             eyebrow='Our clients'
//             title='Organizations We Serve'
//             subtitle='A selection of the enterprises and institutions we partner with'
//           />
//           <motion.div
//             className='grid grid-cols-2 md:grid-cols-4 gap-5'
//             variants={container}
//             initial='hidden'
//             whileInView='visible'
//             viewport={{ once: true }}
//           >
//             {clients.map((client, idx) => (
//               <motion.div
//                 key={idx}
//                 variants={item}
//                 className='p-6 rounded-2xl glass card-hover flex flex-col items-center justify-center gap-3 min-h-36 text-center group'
//               >
//                 <span className='w-14 h-14 rounded-2xl bg-linear-to-br from-primary to-secondary text-white text-lg font-bold flex items-center justify-center group-hover:scale-105 transition-transform'>
//                   {initials(client)}
//                 </span>
//                 <p className='font-medium text-foreground text-sm'>{client}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className='py-16 md:py-24'>
//         <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
//           <SectionHeading eyebrow='In their words' title='What Clients Say' />
//           <motion.div
//             className='grid grid-cols-1 md:grid-cols-3 gap-6'
//             variants={container}
//             initial='hidden'
//             whileInView='visible'
//             viewport={{ once: true }}
//           >
//             {testimonials.map((t, i) => (
//               <motion.div key={i} variants={item} className='p-7 rounded-2xl glass card-hover flex flex-col'>
//                 <Quote className='w-8 h-8 text-primary/30 mb-4' />
//                 <p className='text-foreground leading-relaxed mb-6 flex-1'>&ldquo;{t.quote}&rdquo;</p>
//                 <p className='text-sm text-muted-foreground font-medium border-t border-border/70 pt-4'>{t.author}</p>
//               </motion.div>
//             ))}
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             viewport={{ once: true }}
//             className='glass rounded-2xl p-8 md:p-12 text-center space-y-4 mt-12'
//           >
//             <h2 className='font-display text-2xl md:text-3xl font-bold text-foreground'>
//               Join Our Growing Client Base
//             </h2>
//             <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
//               Discover how SDV EDUTECH can transform your business.
//             </p>
//             <Link href='/contact'>
//               <motion.button
//                 whileHover={{ scale: 1.04 }}
//                 whileTap={{ scale: 0.96 }}
//                 className='px-8 py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors mt-2 shadow-lg shadow-primary/25'
//               >
//                 Get in Touch
//               </motion.button>
//             </Link>
//           </motion.div>
//         </div>
//       </section>
//     </main>
//   )
// }
'use client'

import PageHero from '@/components/shared/page-hero'
import SectionHeading from '@/components/shared/section-heading'
import { motion } from 'framer-motion'
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
    quote:
      'Their GIS platform transformed how we manage public infrastructure across the state.',
    author: 'Nagar Panchayat Fatehabad',
  },
  {
    quote:
      'A true engineering partner — the survey system paid for itself within months.',
    author: 'Nagar Panchayat Govardhan',
  },
  {
    quote:
      'From strategy to delivery, SDV made our cloud migration genuinely seamless.',
    author: 'Nagar Panchayat Chhata',
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

export default function ClientsPage() {
  return (
    <main className='min-h-screen'>
      <PageHero
        eyebrow='Trusted Partners'
        title='Trusted by Industry Leaders'
        highlight='Leaders'
        description='Partnering with government organizations across India to deliver reliable, scalable, and mission-critical technology solutions..'
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Clients' },
        ]}
        centered
      />

      {/* Logo Slider */}
      <section className='pb-12'>
        <div className='overflow-hidden'>
          <div className='flex w-max animate-marquee gap-5'>
            {[...clients, ...clients].map((client, i) => (
              <div
                key={i}
                className='bg-white border border-slate-200 rounded-2xl px-5 py-3 shadow-sm flex items-center gap-4 min-w-[320px]'
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className='w-12 h-12 object-contain'
                />

                <span className='text-sm font-medium text-slate-700'>
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Grid */}
      <section className='relative py-12 md:py-20'>
        <div className='absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 to-white' />

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
            {clients.map((client, idx) => (
              <motion.div
                key={idx}
                variants={item}
                className='bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500'
              >
                <div className='h-[220px] bg-slate-50 flex items-center justify-center p-8'>
                  <img
                    src={client.logo}
                    alt={client.name}
                    className='max-h-28 object-contain'
                  />
                </div>

                <div className='p-5 border-t border-slate-100'>
                  <h3 className='text-center text-sm font-semibold text-slate-800'>
                    {client.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className='py-16 md:py-24'>
        <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
          <SectionHeading
            eyebrow='Client Feedback'
            title='What Clients Say'
          />

          <motion.div
            className='grid grid-cols-1 md:grid-cols-3 gap-6'
            variants={container}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={item}
                className='bg-white rounded-2xl p-7 border border-slate-200 shadow-md hover:shadow-xl transition-all'
              >
                <Quote className='w-8 h-8 text-blue-200 mb-4' />

                <p className='text-slate-700 leading-relaxed mb-6'>
                  "{t.quote}"
                </p>

                <p className='text-sm font-medium text-slate-500 border-t pt-4'>
                  {t.author}
                </p>
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
            <h2 className='text-3xl font-bold text-slate-900'>
              Join Our Growing Client Base
            </h2>

            <p className='mt-3 text-slate-600 max-w-2xl mx-auto'>
              Discover how SDV EDUTECH can help your organization through
              innovative technology, GIS solutions, and digital transformation.
            </p>

            <Link href='/contact'>
              <button className='mt-6 px-8 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all'>
                Get in Touch
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
