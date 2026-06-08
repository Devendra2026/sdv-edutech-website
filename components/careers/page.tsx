// 'use client'

// import PageHero from '@/components/shared/page-hero'
// import SectionHeading from '@/components/shared/section-heading'
// import { motion } from '@/lib/motion'
// import { ArrowRight, Banknote, MapPin, TrendingUp, Users2, Wallet } from 'lucide-react'
// import Image from 'next/image'
// import Link from 'next/link'

// const jobs = [
//   { title: 'Senior Software Engineer', location: 'Agra',  dept: 'Engineering' },
//   { title: 'GIS Specialist', location: 'Agra',  dept: 'GIS' },
//   { title: 'Field Surveyor', location: 'Agra',  dept: 'Land Record' },
//   { title: 'HR Manager', location: 'Agra', dept: 'Business Administration' },
//   { title: 'Office Assistant', location: 'Agra',  dept: 'Office Administration' },
//   { title: 'Data Entry Operator', location: 'Agra',  dept: 'Data Management' },
//   { title:  'Field Supervisor', location: 'Agra', dept: 'Field Operations' },

// ]

// const benefits = [
//   {
//     icon: <TrendingUp className='w-6 h-6' />,
//     title: 'Growth Opportunities' ,
//     description: 'Clear career paths, mentorship, and continuous skill development.',
//   },
//   {
//     icon: <Wallet className='w-6 h-6' />,
//     title: 'Competitive Compensation',
//     description: 'Industry-leading salary, benefits, and performance rewards.',
//   },
//   {
//     icon: <Users2 className='w-6 h-6' />,
//     title: 'Collaborative Culture',
//     description: 'Work with talented teams on high-impact, meaningful projects.',
//   },
// ]

// const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } }
// const item = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } }

// export default function Careers() {
//   return (
//     <main className='min-h-screen'>
//       <PageHero
//         eyebrow='Join the team'
//         title='Build Your Career with Us'
//         highlight='Career'
//         description="Join Sdv Edutech Private Limited and be part of a dynamic team driving innovation in IT and geospatial technology. Work on impactful projects that solve real-world challenges for businesses and organizations. We offer opportunities for continuous learning, professional growth, and collaboration with talented experts. If you're passionate about technology, GIS, and digital transformation, we'd love to have you on our journey."
//         crumbs={[{ label: 'Home', href: '/' }, { label: 'Careers' }]}
//         visual={
//           <div className='relative w-full max-w-lg mx-auto lg:mx-0 lg:ml-auto'>
//             <div className='relative rounded-2xl overflow-hidden border border-border/80 shadow-xl shadow-primary/10 bg-card ring-1 ring-primary/10'>
//               <div className='relative w-full aspect-5/4'>
//                 <Image
//                   src='/images/careers-hero.png'
//                   alt='We are hiring and apply today recruitment signs in a storefront window'
//                   fill
//                   priority
//                   className='object-cover object-center'
//                   sizes='(max-width: 1024px) 0px, 50vw'
//                 />
//                 <div
//                   className='absolute inset-0 bg-linear-to-t from-foreground/25 via-transparent to-transparent pointer-events-none'
//                   aria-hidden
//                 />
//               </div>
//             </div>
//           </div>
//         }
//       />

//       {/* Benefits */}
//       <section className='relative py-16 md:py-24'>
//         <div className='absolute inset-0 -z-10 section-tint' aria-hidden />
//         <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
//           <SectionHeading eyebrow='Why SDV' title="Why You'll Love Working Here" />
//           <motion.div
//             className='grid grid-cols-1 md:grid-cols-3 gap-6'
//             variants={container}
//             initial='hidden'
//             whileInView='visible'
//             viewport={{ once: true }}
//           >
//             {benefits.map((b, i) => (
//               <motion.div key={i} variants={item} className='p-7 rounded-2xl glass card-hover text-center'>
//                 <div className='mx-auto mb-5 icon-tile p-3 w-12 h-12'>{b.icon}</div>
//                 <h3 className='font-display text-lg font-semibold text-foreground mb-2'>{b.title}</h3>
//                 <p className='text-muted-foreground text-sm leading-relaxed'>{b.description}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Open positions */}
//       <section className='py-16 md:py-24'>
//         <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
//           <SectionHeading
//             eyebrow='Open roles'
//             title='Open Positions'
//             subtitle="Find the role where you'll do your best work"
//             align='center'
//           />
//           <motion.div
//             className='space-y-4 max-w-4xl mx-auto'
//             variants={container}
//             initial='hidden'
//             whileInView='visible'
//             viewport={{ once: true }}
//           >
//             {jobs.map((job, idx) => (
//               <motion.div
//                 key={idx}
//                 variants={item}
//                 className='p-6 rounded-2xl glass card-hover flex flex-col md:flex-row md:items-center justify-between gap-4 group'
//               >
//                 <div className='space-y-2 flex-1'>
//                   <div className='flex items-center gap-3'>
//                     <h3 className='font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors'>
//                       {job.title}
//                     </h3>
//                     <span className='px-2.5 py-0.5 rounded-full bg-primary/8 border border-primary/15 text-primary text-xs font-medium'>
//                       {job.dept}
//                     </span>
//                   </div>
//                   <div className='flex flex-col sm:flex-row gap-4 text-muted-foreground text-sm'>
//                     <div className='flex items-center gap-2'>
//                       <MapPin className='w-4 h-4 text-primary' />
//                       {job.location}
//                     </div>

//                   </div>
//                 </div>
//                 <Link
//                   href='/careers/apply'
//                   className='px-5 py-2.5 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-semibold flex items-center gap-2 whitespace-nowrap shadow-lg shadow-primary/25 justify-center'
//                 >
//                   Apply <ArrowRight className='w-4 h-4' />
//                 </Link>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* CTA */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             viewport={{ once: true }}
//             className='glass rounded-2xl p-8 md:p-12 text-center space-y-4 mt-12 max-w-4xl mx-auto'
//           >
//             <h2 className='font-display text-2xl font-bold text-foreground'>Don&apos;t see your role listed?</h2>
//             <p className='text-muted-foreground'>
//               Send us your resume and we&apos;ll keep you in mind for future opportunities.
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
import { motion } from '@/lib/motion'
import { ArrowRight, MapPin, TrendingUp, Users2, Wallet } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface Benefit {
  icon: React.ReactNode
  title: string
  description: string
  image: string
  gradient: string
}

const jobs = [
  { title: 'Senior Software Engineer', location: 'Agra', dept: 'Engineering' },
  { title: 'GIS Specialist', location: 'Agra', dept: 'GIS' },
  { title: 'Field Surveyor', location: 'Agra', dept: 'Land Record' },
  { title: 'HR Manager', location: 'Agra', dept: 'Business Administration' },
  { title: 'Office Assistant', location: 'Agra', dept: 'Office Administration' },
  { title: 'Data Entry Operator', location: 'Agra', dept: 'Data Management' },
  { title: 'Field Supervisor', location: 'Agra', dept: 'Field Operations' },
]

const benefits: Benefit[] = [
  {
    icon: <TrendingUp className='w-5 h-5 text-blue-600' />,
    title: 'Growth Opportunities',
    description: 'Clear career paths, continuous professional mentorship, and dedicated structural skill development.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80', // Team brainstorming / learning workshop
    gradient: 'from-blue-500/[0.03] via-indigo-500/[0.01] to-transparent',
  },
  {
    icon: <Wallet className='w-5 h-5 text-emerald-600' />,
    title: 'Competitive Compensation',
    description: 'Highly competitive structural base salary matching global market standards, healthcare, and rewards.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80', // Professional workplace consulting layout
    gradient: 'from-emerald-500/[0.03] via-teal-500/[0.01] to-transparent',
  },
  {
    icon: <Users2 className='w-5 h-5 text-purple-600' />,
    title: 'Collaborative Culture',
    description:
      'Work hand-in-hand with brilliant multidisciplinary engineering squads on meaningful, large-scale systems.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80', // Active design collaboration
    gradient: 'from-purple-500/[0.03] via-fuchsia-500/[0.01] to-transparent',
  },
]

const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } }
const item = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } }

export default function Careers() {
  return (
    <main className='min-h-screen bg-[#f8fafc] text-slate-800 relative overflow-hidden'>
      {/* Soft Light-Mode Ambient Orbs */}
      <div className='absolute top-[-10%] left-[-20%] w-[60vw] h-[60vw] rounded-full bg-blue-200/20 blur-[130px] pointer-events-none' />
      <div className='absolute bottom-[15%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-indigo-100/30 blur-[140px] pointer-events-none' />

      {/* Structural Dot Matrix Grid Background */}
      <div
        className='absolute inset-0 opacity-[0.25] pointer-events-none bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] bg-size-[24px_24px]'
        aria-hidden
      />

      <PageHero
        eyebrow='Join the team'
        title='Build Your Career with Us'
        highlight='Career'
        description="Join Sdv Edutech Private Limited and be part of a dynamic team driving innovation in IT and geospatial technology. Work on impactful projects that solve real-world challenges for businesses and organizations. We offer opportunities for continuous learning, professional growth, and collaboration with talented experts. If you're passionate about technology, GIS, and digital transformation, we'd love to have you on our journey."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Careers' }]}
        visual={
          <div className='relative w-full max-w-lg mx-auto lg:mx-0 lg:ml-auto'>
            <div className='relative rounded-2xl overflow-hidden border border-slate-200/80 shadow-2xl shadow-blue-100/60 bg-white/70 backdrop-blur-xl ring-1 ring-black/3'>
              <div className='relative w-full aspect-5/4'>
                <Image
                  src='/images/careers-hero.png'
                  alt='We are hiring and apply today recruitment signs in a storefront window'
                  fill
                  priority
                  className='object-cover object-center contrast-[1.02]'
                  sizes='(max-width: 1024px) 0px, 50vw'
                />
                <div
                  className='absolute inset-0 bg-linear-to-t from-[#f8fafc] via-transparent to-transparent pointer-events-none'
                  aria-hidden
                />
              </div>
            </div>
          </div>
        }
      />

      {/* Benefits Showcase with Pictures */}
      <section className='relative py-20 md:py-28 z-10'>
        <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
          <SectionHeading eyebrow='Why SDV' title="Why You'll Love Working Here" />

          <motion.div
            className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12'
            variants={container}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            {benefits.map(b => (
              <motion.div
                key={b.title}
                variants={item}
                className='group relative rounded-3xl border border-slate-200/70 bg-white/70 backdrop-blur-xl hover:bg-white/95 hover:border-slate-300 transition-all duration-500 overflow-hidden flex flex-col h-full shadow-md shadow-slate-200/20 hover:shadow-xl hover:shadow-slate-200/40 cursor-default'
              >
                {/* Dynamic Subtle Gradient overlay */}
                <div className={`absolute inset-0 bg-linear-to-b ${b.gradient} pointer-events-none`} />

                {/* Card Picture Frame */}
                <div className='p-4 pb-0 z-10'>
                  <div className='relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-100 border border-slate-100/80 shadow-inner'>
                    <Image
                      src={b.image}
                      alt={b.title}
                      fill
                      sizes='(max-width: 768px) 100vw, 33vw'
                      className='object-cover transition-transform duration-700 ease-out group-hover:scale-105'
                    />
                    <div className='absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent pointer-events-none' />
                  </div>
                </div>

                {/* Info Text Content Block */}
                <div className='p-6 flex flex-col grow text-center items-center z-10'>
                  {/* Frosted Floating Icon Pin */}
                  <div className='mb-4 p-2.5 rounded-xl border border-slate-200/60 bg-slate-50/80 shadow-2xs group-hover:bg-white transition-colors duration-300'>
                    {b.icon}
                  </div>

                  <h3 className='font-display text-lg font-bold text-slate-900 mb-2 tracking-tight group-hover:text-blue-600 transition-colors duration-300'>
                    {b.title}
                  </h3>
                  <p className='text-slate-600 text-sm leading-relaxed max-w-sm grow'>{b.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Open positions list */}
      <section className='py-16 md:py-24 relative z-10'>
        <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
          <SectionHeading
            eyebrow='Open roles'
            title='Open Positions'
            subtitle="Find the role where you'll do your best work"
            align='center'
          />

          <motion.div
            className='space-y-4 max-w-4xl mx-auto mt-12'
            variants={container}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            {jobs.map(job => (
              <motion.div
                key={job.title}
                variants={item}
                className='p-5 rounded-2xl border border-slate-200/60 bg-white/60 backdrop-blur-md hover:bg-white hover:border-slate-300/80 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4 group shadow-xs hover:shadow-md'
              >
                <div className='space-y-2 flex-1'>
                  <div className='flex flex-wrap items-center gap-3'>
                    <h3 className='font-display text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors'>
                      {job.title}
                    </h3>
                    <span className='px-2.5 py-0.5 rounded-md bg-slate-100 border border-slate-200/60 text-slate-600 text-[11px] font-semibold uppercase tracking-wide'>
                      {job.dept}
                    </span>
                  </div>
                  <div className='flex items-center gap-2 text-slate-500 text-sm'>
                    <MapPin className='w-4 h-4 text-blue-600/80' />
                    <span className='font-medium'>{job.location}</span>
                  </div>
                </div>

                <Link
                  href='/careers/apply'
                  className='px-5 py-2.5 rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 text-white hover:opacity-95 transition-opacity text-sm font-semibold flex items-center gap-2 whitespace-nowrap shadow-md shadow-blue-600/10 justify-center'
                >
                  Apply <ArrowRight className='w-4 h-4' />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Spontaneous Speculative Application Callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className='bg-white/60 backdrop-blur-md border border-slate-200/70 rounded-3xl p-8 md:p-12 text-center space-y-4 mt-16 max-w-4xl mx-auto shadow-sm'
          >
            <h2 className='font-display text-xl font-bold text-slate-900 tracking-tight'>
              Don&apos;t see your role listed?
            </h2>
            <p className='text-slate-600 text-sm max-w-lg mx-auto'>
              Send us your resume and we&apos;ll keep you flagged in our primary registry for fast-tracked future
              operational expansions.
            </p>
            <div className='pt-2'>
              <Link href='/contact'>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className='px-8 py-3 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-colors shadow-md shadow-slate-900/10 text-sm'
                >
                  Get in Touch
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
