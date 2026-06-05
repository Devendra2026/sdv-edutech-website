// 'use client'

// import PageHero from '@/components/shared/page-hero'
// import SectionHeading from '@/components/shared/section-heading'
// import { motion } from 'framer-motion'
// import {
//   ArrowUpRight,
//   BarChart3,
//   BookOpen,
//   Code2,
//   LifeBuoy,
//   Map,
//   PenTool,
//   Rocket,
//   Search,
//   Users,
//   Zap,
// } from 'lucide-react'
// import Image from 'next/image'
// import Link from 'next/link'

// const services = [
//   {
//     icon: <BarChart3 className='w-7 h-7' />,
//     title: 'Survey Management',
//     description:
//       'Advanced survey solutions for comprehensive data collection, real-time validation, and actionable analytics.',
//     tags: ['Data Capture', 'Dashboards'],
//   },
//   {
//     icon: <Map className='w-7 h-7' />,
//     title: 'GIS Solutions',
//     description:
//       'Geographic Information Systems for spatial analysis, asset mapping, and location intelligence at scale.',
//     tags: ['Mapping', 'Geospatial'],
//   },
//   {
//     icon: <Code2 className='w-7 h-7' />,
//     title: 'Software Development',
//     description: 'Custom enterprise software engineered to your specifications, from APIs to full platforms.',
//     tags: ['Web', 'Cloud'],
//   },
//   {
//     icon: <BookOpen className='w-7 h-7' />,
//     title: 'Training Programs',
//     description: 'Comprehensive training and skill development that empowers your teams to own the technology.',
//     tags: ['LMS', 'Workshops'],
//   },
//   {
//     icon: <Zap className='w-7 h-7' />,
//     title: 'SBM - SWM',
//     description: 'Swachh Bharat Mission and Swachh Water Mission',
//     tags: ['Strategy', 'Automation'],
//   },
//   {
//     icon: <Users className='w-7 h-7' />,
//     title: 'Consulting Services',
//     description: 'Expert consulting for technology architecture, data governance, and business strategy.',
//     tags: ['Advisory', 'Architecture'],
//   },
// ]

// const process = [
//   {
//     icon: <Search className='w-6 h-6' />,
//     step: '01',
//     title: 'Discover',
//     description: 'We map your goals, data, and constraints to define the right outcomes.',
//   },
//   {
//     icon: <PenTool className='w-6 h-6' />,
//     step: '02',
//     title: 'Design',
//     description: 'Architecture, UX, and delivery plan tailored to your enterprise.',
//   },
//   {
//     icon: <Rocket className='w-6 h-6' />,
//     step: '03',
//     title: 'Deliver',
//     description: 'Agile build and rollout with measurable milestones and zero surprises.',
//   },
//   {
//     icon: <LifeBuoy className='w-6 h-6' />,
//     step: '04',
//     title: 'Support',
//     description: 'Ongoing optimization, training, and SLA-backed support.',
//   },
// ]

// const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } }
// const item = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } }

// export default function Services() {
//   return (
//     <main className='min-h-screen'>
//       <PageHero
//         eyebrow='What we do'
//         title='Enterprise Services that Scale'
//         highlight='Scale'
//         description='Comprehensive IT and geospatial solutions engineered to move your organization forward — from data capture to full digital transformation.'
//         crumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
//         visual={
//           <div className='relative w-full max-w-lg mx-auto lg:mx-0 lg:ml-auto'>
//             <div className='relative rounded-2xl overflow-hidden border border-border/80 shadow-xl shadow-primary/10 bg-card ring-1 ring-primary/10'>
//               <div className='relative w-full aspect-5/4'>
//                 <Image
//                   src='/images/services-hero.png'
//                   alt='Collaborative team working on laptops and technology at a shared workspace'
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

//       {/* Services grid */}
//       <section className='relative py-16 md:py-24'>
//         <div className='absolute inset-0 -z-10 section-tint' aria-hidden />
//         <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
//           <SectionHeading
//             eyebrow='Capabilities'
//             title='Our Services'
//             subtitle='Comprehensive enterprise solutions designed to drive your business forward'
//           />
//           <motion.div
//             className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'
//             variants={container}
//             initial='hidden'
//             whileInView='visible'
//             viewport={{ once: true }}
//           >
//             {services.map((service, idx) => (
//               <motion.div key={idx} variants={item} className='group'>
//                 <div className='relative h-full p-7 md:p-8 rounded-2xl glass card-hover cursor-pointer overflow-hidden'>
//                   <div
//                     className='absolute -top-16 -right-16 w-40 h-40 rounded-full bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'
//                     aria-hidden
//                   />
//                   <div className='relative'>
//                     <div className='mb-5 icon-tile p-3.5'>{service.icon}</div>
//                     <h3 className='font-display text-xl font-semibold text-foreground mb-3'>{service.title}</h3>
//                     <p className='text-muted-foreground text-sm leading-relaxed mb-5'>{service.description}</p>
//                     <div className='flex flex-wrap gap-2 mb-5'>
//                       {service.tags.map(t => (
//                         <span
//                           key={t}
//                           className='px-2.5 py-1 rounded-full bg-primary/8 text-primary text-xs font-medium border border-primary/15'
//                         >
//                           {t}
//                         </span>
//                       ))}
//                     </div>
//                     <div className='inline-flex items-center gap-1.5 text-primary font-medium text-sm'>
//                       Learn more
//                       <ArrowUpRight className='w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform' />
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Process */}
//       <section className='py-16 md:py-24'>
//         <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
//           <SectionHeading
//             eyebrow='How we work'
//             title='A Proven Delivery Process'
//             subtitle='A transparent, milestone-driven approach from first conversation to long-term support'
//           />
//           <motion.div
//             className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'
//             variants={container}
//             initial='hidden'
//             whileInView='visible'
//             viewport={{ once: true }}
//           >
//             {process.map((p, idx) => (
//               <motion.div key={idx} variants={item} className='relative p-7 rounded-2xl glass card-hover'>
//                 <span className='font-display text-5xl font-extrabold text-primary/10 absolute top-4 right-5 select-none'>
//                   {p.step}
//                 </span>
//                 <div className='mb-5 icon-tile p-3 w-12 h-12'>{p.icon}</div>
//                 <h3 className='font-display text-lg font-semibold text-foreground mb-2'>{p.title}</h3>
//                 <p className='text-muted-foreground text-sm leading-relaxed'>{p.description}</p>
//               </motion.div>
//             ))}
//           </motion.div>

//           <div className='text-center mt-14'>
//             <Link href='/contact'>
//               <motion.button
//                 whileHover={{ scale: 1.04 }}
//                 whileTap={{ scale: 0.96 }}
//                 className='px-8 py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25'
//               >
//                 Start Your Project
//               </motion.button>
//             </Link>
//           </div>
//         </div>
//       </section>
//     </main>
//   )
// }

'use client'

import { useState } from 'react'
import PageHero from '@/components/shared/page-hero'
import SectionHeading from '@/components/shared/section-heading'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowUpRight,
  BarChart3,
  BookOpen,
  Code2,
  LifeBuoy,
  Map,
  PenTool,
  Rocket,
  Search,
  Users,
  Zap,
  X,
  CheckCircle2,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    icon: <BarChart3 className='w-6 h-6' />,
    title: 'Survey Management',
    description:
      'Advanced survey solutions for comprehensive data collection, real-time validation, and actionable analytics.',
    tags: ['Data Capture', 'Dashboards'],
    imageSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    popupDetails: {
      overview: 'Our survey architecture is engineered to bypass manual capture errors completely. We build secure pipelines parsing thousands of distributed telemetry points synchronously.',
      deliverables: ['Real-time Validation Engine', 'Custom Analytical Dashboards', 'Offline-first Client Apps'],
    }
  },
  {
    icon: <Map className='w-6 h-6' />,
    title: 'GIS Solutions',
    description:
      'Geographic Information Systems for spatial analysis, asset mapping, and location intelligence at scale.',
    tags: ['Mapping', 'Geospatial'],
    imageSrc: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80',
    popupDetails: {
      overview: 'Enterprise mapping layers utilizing spatial indexing and polygon processing pipelines. Render complex geographical data smoothly across web and native platforms.',
      deliverables: ['Multi-layer Asset Topology', 'High-density Raster Rendering', 'Custom Spatial Geoprocessors'],
    }
  },
  {
    icon: <Code2 className='w-6 h-6' />,
    title: 'Software Development',
    description: 'Custom enterprise software engineered to your specifications, from APIs to full platforms.',
    tags: ['Web', 'Cloud'],
    imageSrc: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    popupDetails: {
      overview: 'We construct resilient cloud-native architectures optimized for elasticity, zero-downtime hot reloads, and high availability metrics.',
      deliverables: ['Microservices Integration', 'Highly Available GraphQL/REST APIs', 'Cloud Automation Architectures'],
    }
  },
  {
    icon: <BookOpen className='w-6 h-6' />,
    title: 'Training Programs',
    description: 'Comprehensive training and skill development that empowers your teams to own the technology.',
    tags: ['LMS', 'Workshops'],
    imageSrc: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
    popupDetails: {
      overview: 'Closing operational technical gaps via tailored curriculum designs. Empower your in-house engineers to run modern frameworks with total precision.',
      deliverables: ['Custom Learning Environments', 'Hands-on Technical Classrooms', 'Operational Documentation Suites'],
    }
  },
  {
    icon: <Zap className='w-6 h-6' />,
    title: 'SBM - SWM',
    description: 'Swachh Bharat Mission and Swachh Water Mission solutions engineered for scale and optimization.',
    tags: ['Strategy', 'Automation'],
    imageSrc: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80',
    popupDetails: {
      overview: 'Architectural blueprints built specifically to assist governmental and regional sanitation structures scale smoothly into digital reporting portals.',
      deliverables: ['Field Waste Monitoring Interfaces', 'Resource Routing Automation Modules', 'Public Health Analytical Graphs'],
    }
  },
  {
    icon: <Users className='w-6 h-6' />,
    title: 'Consulting Services',
    description: 'Expert consulting for technology architecture, data governance, and business strategy.',
    tags: ['Advisory', 'Architecture'],
    imageSrc: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    popupDetails: {
      overview: 'Strategic advisory planning assessing legacy technology blockages, aligning current structural patterns to secure future target layouts.',
      deliverables: ['Comprehensive Security & Auditing Scales', 'Modern Data Governance Playbooks', 'Technology Roadmap Timelines'],
    }
  },
]

const processSteps = [
  {
    icon: <Search className='w-6 h-6' />,
    step: '01',
    title: 'Discover',
    description: 'We map your goals, data, and constraints to define the right outcomes.',
    imageSrc: 'https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&w=600&q=80'
  },
  {
    icon: <PenTool className='w-6 h-6' />,
    step: '02',
    title: 'Design',
    description: 'Architecture, UX, and delivery plan tailored to your enterprise.',
    imageSrc: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80' // Fresh Working UI/UX Design Image
  },
  {
    icon: <Rocket className='w-6 h-6' />,
    step: '03',
    title: 'Deliver',
    description: 'Agile build and rollout with measurable milestones and zero surprises.',
    imageSrc: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80'
  },
  {
    icon: <LifeBuoy className='w-6 h-6' />,
    step: '04',
    title: 'Support',
    description: 'Ongoing optimization, training, and SLA-backed support.',
    imageSrc: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80'
  },
]

const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } }
const item = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } }

export default function Services() {
  type ServiceType = (typeof services)[number]
  const [activeCard, setActiveCard] = useState<ServiceType | null>(null)

  return (
    <main className='min-h-screen'>
      <PageHero
        eyebrow='What we do'
        title='Enterprise Services that Scale'
        highlight='Scale'
        description='Comprehensive IT and geospatial solutions engineered to move your organization forward — from data capture to full digital transformation.'
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
        visual={
          <div className='relative w-full max-w-lg mx-auto lg:mx-0 lg:ml-auto'>
            <div className='relative rounded-2xl overflow-hidden border border-border/80 shadow-xl shadow-primary/10 bg-card ring-1 ring-primary/10'>
              <div className='relative w-full aspect-5/4'>
                <Image
                  src='/images/services-hero.png'
                  alt='Collaborative team working on laptops and technology at a shared workspace'
                  fill
                  priority
                  className='object-cover object-center'
                  sizes='(max-width: 1024px) 0px, 50vw'
                />
                <div
                  className='absolute inset-0 bg-linear-to-t from-foreground/25 via-transparent to-transparent pointer-events-none'
                  aria-hidden
                />
              </div>
            </div>
          </div>
        }
      />

      {/* Gallery Services Grid */}
      <section className='relative py-16 md:py-24'>
        <div className='absolute inset-0 -z-10 section-tint' aria-hidden />
        <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
          <SectionHeading
            eyebrow='Capabilities'
            title='Our Services'
            subtitle='Comprehensive enterprise solutions designed to drive your business forward'
          />
          <motion.div
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'
            variants={container}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                variants={item}
                className='group cursor-pointer'
                onClick={() => setActiveCard(service)}
              >
                <div className='relative flex flex-col h-full rounded-2xl border border-border/60 glass overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20'>
                  
                  {/* Top Image Box with Hover Zoom */}
                  <div className='relative w-full aspect-[16/10] overflow-hidden bg-muted'>
                    <Image
                      src={service.imageSrc}
                      alt={service.title}
                      fill
                      className='object-cover transition-transform duration-500 ease-out group-hover:scale-105'
                      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent' />
                    
                    {/* Tags Layered on Bottom-Left of Image */}
                    <div className='absolute bottom-4 left-4 flex flex-wrap gap-1.5'>
                      {service.tags.map(t => (
                        <span
                          key={t}
                          className='px-2 py-0.5 rounded-md bg-background/80 backdrop-blur-xs text-foreground text-[11px] font-medium border border-border/40'
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Quick Access Floating Icon */}
                    <div className='absolute top-4 right-4 p-2 rounded-xl bg-background/80 backdrop-blur-xs text-primary border border-border/40 opacity-0 transform translate-y-[-4px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300'>
                      {service.icon}
                    </div>
                  </div>

                  {/* Bottom Text Content */}
                  <div className='flex flex-col flex-grow p-6 md:p-7'>
                    <h3 className='font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-200'>
                      {service.title}
                    </h3>
                    <p className='text-muted-foreground text-sm leading-relaxed flex-grow mb-6'>
                      {service.description}
                    </p>
                    <div className='inline-flex items-center gap-1.5 text-primary font-semibold text-sm mt-auto'>
                      Explore Solution
                      <ArrowUpRight className='w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Fullscreen Modal Popup */}
      <AnimatePresence>
        {activeCard && (
          <div className='fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-background/80 backdrop-blur-md'>
            {/* Modal Backdrop Click Target */}
            <motion.div 
              className='absolute inset-0' 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCard(null)} 
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className='relative w-full max-w-4xl max-h-[90vh] md:max-h-[85vh] bg-card border border-border/80 rounded-2xl shadow-2xl overflow-y-auto z-10'
            >
              {/* Sticky Header Close Button */}
              <button
                onClick={() => setActiveCard(null)}
                className='absolute top-4 right-4 z-20 p-2 rounded-full bg-background/80 border border-border text-muted-foreground hover:text-foreground transition-colors hover:shadow-sm'
                aria-label='Close layout window'
              >
                <X className='w-5 h-5' />
              </button>

              <div className='grid grid-cols-1 md:grid-cols-12 gap-0'>
                {/* Visual Cover Half */}
                <div className='relative md:col-span-5 h-48 md:h-auto min-h-[220px] bg-muted'>
                  <Image
                    src={activeCard.imageSrc}
                    alt={activeCard.title}
                    fill
                    className='object-cover'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-background via-transparent to-transparent' />
                  <div className='absolute bottom-6 left-6 hidden md:block'>
                    <div className='p-3 bg-background/90 text-primary rounded-xl border border-border w-fit shadow-md'>
                      {activeCard.icon}
                    </div>
                  </div>
                </div>

                {/* Information Content Half */}
                <div className='p-6 md:p-10 md:col-span-7 flex flex-col justify-center'>
                  <div className='flex flex-wrap gap-2 mb-3'>
                    {activeCard.tags.map(tag => (
                      <span key={tag} className='text-xs px-2.5 py-1 bg-primary/10 text-primary rounded-md font-medium'>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className='text-2xl md:text-3xl font-display font-extrabold text-foreground mb-4'>
                    {activeCard.title}
                  </h2>
                  
                  <p className='text-muted-foreground text-sm md:text-base leading-relaxed mb-6'>
                    {activeCard.popupDetails.overview}
                  </p>

                  <hr className='border-border/60 mb-6' />

                  {/* Structural Deliverables */}
                  <h4 className='text-xs font-bold uppercase tracking-wider text-foreground mb-3'>
                    Key Framework Deliverables
                  </h4>
                  <ul className='space-y-2.5 mb-8'>
                    {activeCard.popupDetails.deliverables.map((item, idx) => (
                      <li key={idx} className='flex items-start gap-3 text-sm text-muted-foreground'>
                        <CheckCircle2 className='w-4 h-4 text-primary shrink-0 mt-0.5' />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Core CTAs inside modal */}
                  <div className='flex flex-wrap items-center gap-4'>
                    <Link href='/contact' onClick={() => setActiveCard(null)} className='w-full sm:w-auto'>
                      <button className='w-full sm:w-auto px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors shadow-md shadow-primary/10'>
                        Inquire About Asset
                      </button>
                    </Link>
                    <button 
                      onClick={() => setActiveCard(null)}
                      className='w-full sm:w-auto px-6 py-3 border border-border rounded-xl font-medium text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors'
                    >
                      Return to Gallery
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Process Section */}
      <section className='py-16 md:py-24 bg-muted/30'>
        <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
          <SectionHeading
            eyebrow='How we work'
            title='A Proven Delivery Process'
            subtitle='A transparent, milestone-driven approach from first conversation to long-term support'
          />
          
          <motion.div
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'
            variants={container}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            {processSteps.map((p, idx) => (
              <motion.div 
                key={idx} 
                variants={item} 
                className='group relative flex flex-col h-full rounded-2xl border border-border/60 glass overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary/20'
              >
                {/* Process Step Image Container */}
                <div className='relative w-full aspect-[16/10] overflow-hidden bg-muted'>
                  <Image
                    src={p.imageSrc}
                    alt={p.title}
                    fill
                    className='object-cover transition-transform duration-500 ease-out group-hover:scale-105'
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent' />
                  
                  {/* Step Number Overlay */}
                  <span className='font-display text-4xl font-extrabold text-foreground/15 absolute top-3 right-4 select-none group-hover:text-primary/20 transition-colors duration-300'>
                    {p.step}
                  </span>
                  
                  {/* Floating Icon inside image box */}
                  <div className='absolute bottom-3 left-4 p-2.5 bg-background/90 text-primary rounded-xl border border-border/40 shadow-sm'>
                    {p.icon}
                  </div>
                </div>

                {/* Process Step Text Description */}
                <div className='flex flex-col flex-grow p-6'>
                  <h3 className='font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-200'>
                    {p.title}
                  </h3>
                  <p className='text-muted-foreground text-sm leading-relaxed'>
                    {p.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className='text-center mt-14'>
            <Link href='/contact'>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className='px-8 py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25'
              >
                Start Your Project
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
