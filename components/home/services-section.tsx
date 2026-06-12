'use client'

import { AnimatePresence, motion } from '@/lib/motion'
import { ArrowUpRight, BarChart3, BookOpen, Code2, Map, Users, X, Zap } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

interface Service {
  icon: React.ReactNode
  title: string
  description: string
  link: string
  image: string
  gradient: string
  accentColor: string
}

export default function ServicesSection() {
  // State to manage which image is currently active in the popup modal
  const [activeImage, setActiveImage] = useState<string | null>(null)

  const services: Service[] = [
    {
      icon: <BarChart3 className='w-5 h-5 text-amber-700' />,
      title: 'Survey Management',
      description:
        'Advanced survey solutions for data collection, cross-platform analysis, and actionable asset insights.',
      link: '/services/survey-management',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80',
      gradient: 'from-amber-500/[0.04] via-orange-500/[0.01] to-transparent',
      accentColor: 'border-amber-200 bg-amber-50/60',
    },
    {
      icon: <Map className='w-5 h-5 text-blue-700' />,
      title: 'GIS Solutions',
      description:
        'Geographic Information Systems built for robust spatial rendering, geodatabase management, and layering.',
      link: '/services/gis-solutions',
      image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&q=80',
      gradient: 'from-blue-500/[0.04] via-indigo-500/[0.01] to-transparent',
      accentColor: 'border-blue-200 bg-blue-50/60',
    },
    {
      icon: <Code2 className='w-5 h-5 text-emerald-700' />,
      title: 'Software Development',
      description:
        'Custom enterprise software and clean microservice ecosystems tailored entirely to your workflow needs.',
      link: '/services/software-development',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
      gradient: 'from-emerald-500/[0.04] via-teal-500/[0.01] to-transparent',
      accentColor: 'border-emerald-200 bg-emerald-50/60',
    },
    {
      icon: <BookOpen className='w-5 h-5 text-cyan-700' />,
      title: 'Training Programs',
      description: 'Comprehensive educational infrastructure, tracking metrics, and professional tech skill pathways.',
      link: '/services/training',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80',
      gradient: 'from-cyan-500/[0.04] via-sky-500/[0.01] to-transparent',
      accentColor: 'border-cyan-200 bg-cyan-50/60',
    },
    {
      icon: <Zap className='w-5 h-5 text-purple-700' />,
      title: 'SBM Services',
      description: 'Water management structures, clean city programs, and smart government compliance networks.',
      link: '/services/digital-transformation',
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80',
      gradient: 'from-purple-500/[0.04] via-fuchsia-500/[0.01] to-transparent',
      accentColor: 'border-purple-200 bg-purple-50/60',
    },
    {
      icon: <Users className='w-5 h-5 text-rose-700' />,
      title: 'Consulting Services',
      description:
        'High-level strategic analysis, system architectural blueprints, and technology risk mitigation models.',
      link: '/services/consulting',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80',
      gradient: 'from-rose-500/[0.04] via-pink-500/[0.01] to-transparent',
      accentColor: 'border-rose-200 bg-rose-50/60',
    },
    {
      icon: <Users className='w-5 h-5 text-rose-700' />,
      title: 'OutSourcing & ManPower Servics',
      description:
        'Vetted Talent Deployment Frameworks, Automated Workforce Scheduling Modules, Operational Productivity Analytical Graphs',
      link: '/services/OutSourcing & ManPower Service',
      image: 'https://tse4.mm.bing.net/th/id/OIP.-gaMupK9a6UkhDvZIkuwdwHaEx?pid=Api&h=220&P=0',
      gradient: 'from-rose-500/[0.04] via-pink-500/[0.01] to-transparent',
      accentColor: 'border-rose-200 bg-rose-50/60',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
  }

  return (
    <section className='relative py-20 md:py-28 bg-[#f8fafc] text-slate-800 overflow-hidden'>
      {/* Background Glows */}
      <div className='absolute top-[-5%] left-[-15%] w-[55vw] h-[55vw] rounded-full bg-blue-100/40 blur-[120px] pointer-events-none' />
      <div className='absolute bottom-[5%] right-[-15%] w-[55vw] h-[55vw] rounded-full bg-indigo-100/30 blur-[130px] pointer-events-none' />

      {/* Grid Mesh */}
      <div
        className='absolute inset-0 opacity-[0.22] pointer-events-none bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] bg-size-[24px_24px]'
        aria-hidden
      />

      <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <p className='text-xs md:text-sm font-semibold uppercase tracking-wider text-blue-600 mb-3'>What we do</p>
          <h2 className='font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight'>
            Our Services
          </h2>
          <p className='text-base text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed'>
            Comprehensive enterprise solutions engineered to elevate operation scalability and drive business value
            forward.
          </p>
        </motion.div>

        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          {services.map(service => (
            <motion.div key={service.title} variants={itemVariants} className='group'>
              {/* Entire Card Click Trigger */}
              <div
                onClick={() => setActiveImage(service.image)}
                className='relative h-full rounded-3xl border border-slate-200/70 bg-white/70 backdrop-blur-xl hover:bg-white/95 hover:border-slate-300 transition-all duration-500 overflow-hidden cursor-zoom-in flex flex-col shadow-md shadow-slate-200/20 hover:shadow-xl hover:shadow-slate-200/40'
              >
                <div
                  className={`absolute inset-0 bg-linear-to-b ${service.gradient} opacity-100 pointer-events-none`}
                />

                {/* Top Image Frame */}
                <div className='p-4 pb-0 relative z-10'>
                  <div className='relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-100 border border-slate-100/80 shadow-inner group/img'>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                      className='object-cover transition-transform duration-700 ease-out group-hover/img:scale-105 contrast-[1.01]'
                    />
                    <div className='absolute inset-0 bg-linear-to-t from-black/10 via-transparent to-transparent pointer-events-none' />
                  </div>
                </div>

                {/* Card Info Body */}
                <div className='p-6 flex flex-col grow relative z-10'>
                  <div className='flex items-center justify-between mb-4'>
                    <div className={`p-2.5 rounded-xl border shadow-2xs ${service.accentColor}`}>{service.icon}</div>

                    {/* Simple aesthetic indicator (no routing link) */}
                    <div className='p-1.5 rounded-lg border border-slate-200 bg-slate-50 group-hover:border-blue-300 group-hover:bg-blue-50/80 transition-colors duration-300'>
                      <ArrowUpRight className='w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors' />
                    </div>
                  </div>

                  <h3 className='font-display text-lg font-bold text-slate-900 mb-2 tracking-tight group-hover:text-blue-600 transition-colors duration-300'>
                    {service.title}
                  </h3>

                  <p className='text-slate-600 text-sm leading-relaxed mb-6 grow'>{service.description}</p>

                  {/* Clean Text Indicator — Clicking this now safely opens the image modal because it inherits from parent div */}
                  <div className='pt-4 border-t border-slate-100 mt-auto flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-blue-600 transition-colors duration-300'>
                    <span>Learn more</span>
                    <ArrowUpRight className='w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300' />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Global CTA button below the cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          viewport={{ once: true }}
          className='text-center mt-16'
        >
          <Link href='/services'>
            <motion.button
              type='button'
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className='px-8 py-3.5 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-colors shadow-md shadow-slate-900/10 text-sm'
            >
              Explore All Services
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Image Popup Modal Overlay */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
            className='fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-10 cursor-zoom-out'
          >
            {/* Close Button */}
            <button
              type='button'
              onClick={() => setActiveImage(null)}
              className='absolute top-6 right-6 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 border border-white/20 transition-colors duration-200 z-50'
              aria-label='Close image preview'
            >
              <X className='w-6 h-6' />
            </button>

            {/* Modal Image Container */}
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={e => e.stopPropagation()}
              className='relative max-w-5xl w-full aspect-square md:aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900'
            >
              <Image
                src={activeImage}
                alt='Enlarged service preview'
                fill
                quality={95}
                className='object-contain'
                unoptimized
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
