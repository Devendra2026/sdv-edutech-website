'use client'

import PageHero from '@/components/shared/page-hero'
import ProjectThumb from '@/components/visuals/project-thumb'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

type Theme = 'gis' | 'software' | 'survey' | 'network' | 'training' | 'consulting'

const projects: { title: string; category: string; theme: Theme; description: string; metric: string }[] = [
  {
    title: 'Survey Platform for Public Works',
    category: 'Survey',
    theme: 'survey',
    description: 'Real-time field data capture and validation across 200+ sites.',
    metric: '40% faster reporting',
  },
  {
    title: 'Statewide GIS Mapping System',
    category: 'GIS',
    theme: 'gis',
    description: 'Spatial asset management with multi-layer terrain analysis.',
    metric: '1.2M parcels mapped',
  },
  {
    title: 'Enterprise CRM Platform',
    category: 'Software',
    theme: 'software',
    description: 'Custom CRM unifying sales, support, and analytics.',
    metric: '3x pipeline visibility',
  },
  {
    title: 'Cloud Migration & DevOps',
    category: 'Transformation',
    theme: 'network',
    description: 'Zero-downtime migration to a resilient multi-region cloud.',
    metric: '99.98% uptime',
  },
  {
    title: 'Workforce Training LMS',
    category: 'Training',
    theme: 'training',
    description: 'Scalable learning platform with progress tracking.',
    metric: '8,000+ learners',
  },
  {
    title: 'Data Strategy Engagement',
    category: 'Consulting',
    theme: 'consulting',
    description: 'Governance and architecture roadmap for analytics.',
    metric: '6-month roadmap',
  },
]

const categories = ['All', 'Survey', 'GIS', 'Software', 'Transformation', 'Training', 'Consulting']

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All')
  const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter)

  return (
    <main className='min-h-screen'>
      <PageHero
        eyebrow='Our work'
        title='Projects that Deliver Results'
        highlight='Results'
        description='A showcase of IT and geospatial engagements — from large-scale GIS systems to enterprise platforms and digital transformation programs.'
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Portfolio' }]}
        visual={
          <div className='relative w-full max-w-lg mx-auto lg:mx-0 lg:ml-auto'>
            <div className='relative rounded-2xl overflow-hidden border border-border/80 shadow-xl shadow-primary/10 bg-card ring-1 ring-primary/10'>
              <div className='relative w-full aspect-5/4'>
                <Image
                  src='/images/portfolio-hero.png'
                  alt='Digital technology network with global connectivity, data nodes, and enterprise service icons'
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

      <section className='relative py-12 md:py-20'>
        <div className='absolute inset-0 -z-10 section-tint' aria-hidden />
        <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
          {/* Filter pills */}
          <div className='flex flex-wrap gap-2 mb-12 justify-center'>
            {categories.map(category => {
              const active = activeFilter === category
              return (
                <motion.button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`relative px-5 py-2 rounded-full font-medium text-sm transition-colors ${
                    active ? 'text-primary-foreground' : 'glass text-foreground hover:text-primary'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {active && (
                    <motion.span
                      layoutId='filter-active'
                      className='absolute inset-0 rounded-full bg-primary shadow-lg shadow-primary/25'
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className='relative z-10'>{category}</span>
                </motion.button>
              )
            })}
          </div>

          {/* Projects grid */}
          <motion.div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8' layout>
            <AnimatePresence mode='popLayout'>
              {filtered.map(project => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.35 }}
                  className='group rounded-2xl glass card-hover overflow-hidden cursor-pointer'
                >
                  <div className='p-3.5 pb-0'>
                    <ProjectThumb theme={project.theme} />
                  </div>
                  <div className='p-6'>
                    <div className='flex items-center justify-between mb-3'>
                      <span className='inline-block px-3 py-1 rounded-full bg-primary/8 border border-primary/15 text-primary text-xs font-medium'>
                        {project.category}
                      </span>
                      <ArrowUpRight className='w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all' />
                    </div>
                    <h3 className='font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors'>
                      {project.title}
                    </h3>
                    <p className='text-muted-foreground text-sm leading-relaxed mb-4'>{project.description}</p>
                    <div className='pt-3 border-t border-border/70'>
                      <span className='text-sm font-semibold text-gradient'>{project.metric}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
// 'use client'

// import PageHero from '@/components/shared/page-hero'
// import ProjectThumb from '@/components/visuals/project-thumb'
// import { AnimatePresence, motion } from 'framer-motion'
// import { ArrowUpRight } from 'lucide-react'
// import Image from 'next/image'
// import { useState } from 'react'

// type Theme = 'gis' | 'software' | 'survey' | 'network' | 'training' | 'consulting'

// interface Project {
//   title: string
//   category: string
//   theme: Theme
//   description: string
//   metric: string
//   image: string
// }

// const projects: Project[] = [
//   {
//     title: 'Survey Platform for Public Works',
//     category: 'Survey',
//     theme: 'survey',
//     description: 'Real-time field data capture and validation across 200+ sites.',
//     metric: '40% faster reporting',
//     image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
//   },
//   {
//     title: 'Statewide GIS Mapping System',
//     category: 'GIS',
//     theme: 'gis',
//     description: 'Spatial asset management with multi-layer terrain analysis.',
//     metric: '1.2M parcels mapped',
//     image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&q=80',
//   },
//   {
//     title: 'Enterprise CRM Platform',
//     category: 'Software',
//     theme: 'software',
//     description: 'Custom CRM unifying sales, support, and analytics.',
//     metric: '3x pipeline visibility',
//     image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
//   },
//   {
//     title: 'Cloud Migration & DevOps',
//     category: 'Transformation',
//     theme: 'network',
//     description: 'Zero-downtime migration to a resilient multi-region cloud.',
//     metric: '99.98% uptime',
//     image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=600&q=80',
//   },
//   {
//     title: 'Workforce Training LMS',
//     category: 'Training',
//     theme: 'training',
//     description: 'Scalable learning platform with progress tracking.',
//     metric: '8,000+ learners',
//     image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80',
//   },
//   {
//     title: 'Data Strategy Engagement',
//     category: 'Consulting',
//     theme: 'consulting',
//     description: 'Governance and architecture roadmap for analytics.',
//     metric: '6-month roadmap',
//     image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80',
//   },
// ]

// const categories = ['All', 'Survey', 'GIS', 'Software', 'Transformation', 'Training', 'Consulting']

// export default function Portfolio() {
//   const [activeFilter, setActiveFilter] = useState('All')
//   const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter)

//   return (
//     <main className='min-h-screen'>
//       <PageHero
//         eyebrow='Our work'
//         title='Projects that Deliver Results'
//         highlight='Results'
//         description='A showcase of IT and geospatial engagements — from large-scale GIS systems to enterprise platforms and digital transformation programs.

//                     We deliver innovative technology solutions that help organizations improve efficiency, make data-driven decisions, and achieve sustainable growth. Our projects combine technical expertise, modern technologies, and practical business outcomes to create lasting value.'
//         crumbs={[{ label: 'Home', href: '/' }, { label: 'Portfolio' }]}
//         visual={
//           <div className='relative w-full max-w-lg mx-auto lg:mx-0 lg:ml-auto'>
//             <div className='relative rounded-2xl overflow-hidden border border-border/80 shadow-xl shadow-primary/10 bg-card ring-1 ring-primary/10'>
//               <div className='relative w-full aspect-5/4'>
//                 <Image
//                   src='/images/portfolio-hero.png'
//                   alt='Digital technology network with global connectivity, data nodes, and enterprise service icons'
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

//       <section className='relative py-12 md:py-20'>
//         <div className='absolute inset-0 -z-10 section-tint' aria-hidden />
//         <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
//           {/* Filter pills */}
//           <div className='flex flex-wrap gap-2 mb-12 justify-center'>
//             {categories.map(category => {
//               const active = activeFilter === category
//               return (
//                 <motion.button
//                   key={category}
//                   onClick={() => setActiveFilter(category)}
//                   className={`relative px-5 py-2 rounded-full font-medium text-sm transition-colors ${
//                     active ? 'text-primary-foreground' : 'glass text-foreground hover:text-primary'
//                   }`}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   {active && (
//                     <motion.span
//                       layoutId='filter-active'
//                       className='absolute inset-0 rounded-full bg-primary shadow-lg shadow-primary/25'
//                       transition={{ type: 'spring', stiffness: 400, damping: 32 }}
//                     />
//                   )}
//                   <span className='relative z-10'>{category}</span>
//                 </motion.button>
//               )
//             })}
//           </div>

//           {/* Projects grid */}
//           <motion.div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8' layout>
//             <AnimatePresence mode='popLayout'>
//               {filtered.map(project => (
//                 <motion.div
//                   key={project.title}
//                   layout
//                   initial={{ opacity: 0, scale: 0.92 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 0.92 }}
//                   transition={{ duration: 0.35 }}
//                   className='group rounded-2xl glass card-hover overflow-hidden cursor-pointer flex flex-col h-full'
//                 >
//                   {/* Image container with ProjectThumb overlay */}
//                   <div className='p-3.5 pb-0'>
//                     <div className='relative w-full aspect-16/10 rounded-xl overflow-hidden bg-muted border border-border/40 shadow-inner group-hover:scale-[1.01] transition-transform duration-300'>
//                       <Image
//                         src={project.image}
//                         alt={project.title}
//                         fill
//                         sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
//                         className='object-cover transition-transform duration-500 group-hover:scale-105'
//                       />
//                       <div className='absolute top-3 left-3 opacity-90 scale-90 origin-top-left z-10'>
//                         <ProjectThumb theme={project.theme} />
//                       </div>
//                       <div className='absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent pointer-events-none' />
//                     </div>
//                   </div>

//                   {/* Details content */}
//                   <div className='p-6 flex flex-col flex-grow'>
//                     <div className='flex items-center justify-between mb-3'>
//                       <span className='inline-block px-3 py-1 rounded-full bg-primary/8 border border-primary/15 text-primary text-xs font-medium'>
//                         {project.category}
//                       </span>
//                       <ArrowUpRight className='w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all' />
//                     </div>
                    
//                     <h3 className='font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors'>
//                       {project.title}
//                     </h3>
                    
//                     <p className='text-muted-foreground text-sm leading-relaxed mb-6 flex-grow'>
//                       {project.description}
//                     </p>
                    
//                     <div className='pt-3 mt-auto border-t border-border/70'>
//                       <span className='text-sm font-semibold text-gradient'>{project.metric}</span>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </AnimatePresence>
//           </motion.div>
//         </div>
//       </section>
//     </main>
//   )
// }

