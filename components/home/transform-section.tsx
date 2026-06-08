'use client'

import { motion } from '@/lib/motion'
import { Shield, TrendingUp, Users, Zap } from 'lucide-react'
import React from 'react'

interface TransformItem {
  icon: React.ReactNode
  title: string
  description: string
}

export default function TransformSection() {
  const items: TransformItem[] = [
    {
      icon: <TrendingUp className='w-6 h-6' />,
      title: 'Scalable Solutions',
      description: 'Build systems that grow with your business needs and market demands.',
    },
    {
      icon: <Users className='w-6 h-6' />,
      title: 'Expert Team',
      description: 'Access a team of industry-leading professionals with proven expertise.',
    },
    {
      icon: <Zap className='w-6 h-6' />,
      title: 'Fast Deployment',
      description: 'Rapid implementation with minimal disruption to operations.',
    },
    {
      icon: <Shield className='w-6 h-6' />,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance standards for all solutions.',
    },
    {
      icon: <Shield className='w-6 h-6' />,
      title: 'ISO Certified',
      description: 'We are ISO 9001:2015 certified - 100% Authenticated and Verified.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.55 } },
  }

  const panels = [
    { v: '100+', l: 'Projects' },
    { v: '200+', l: 'Deployments' },
    { v: '300+', l: 'Integrations' },
    { v: '400+', l: 'Workflows' },
  ]

  return (
    <section className='py-16 md:py-24'>
      <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center'>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className='space-y-8'
          >
            <div className='space-y-4'>
              <p className='eyebrow text-primary'>The SDV difference</p>
              <h2 className='font-display text-3xl md:text-4xl font-bold text-foreground'>
                Why Choose Sdv Edutech Private Limited?
              </h2>
              <p className='text-lg text-muted-foreground leading-relaxed'>
                We combine deep industry expertise with cutting-edge technology to deliver solutions that transform
                businesses and drive measurable results.
              </p>
            </div>

            <motion.div
              className='space-y-3'
              variants={containerVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
            >
              {items.map(item => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className='flex gap-4 p-4 rounded-xl glass card-hover'
                >
                  <div className='shrink-0'>
                    <div className='flex items-center justify-center h-12 w-12 rounded-xl bg-linear-to-br from-primary to-accent-glow text-white'>
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className='font-display text-lg font-semibold text-foreground mb-1'>{item.title}</h3>
                    <p className='text-muted-foreground text-sm'>{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className='relative hidden lg:block'
          >
            <div className='relative h-125'>
              <div className='absolute inset-6 rounded-4xl bg-accent-glow/25 blur-3xl animate-pulse-glow' aria-hidden />
              <motion.div
                className='absolute inset-0 glass glow-ring rounded-[1.75rem] p-8'
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className='grid grid-cols-2 gap-4 w-full h-full'>
                  {panels.map(p => (
                    <motion.div
                      key={p.l}
                      className='bg-card/70 border border-border rounded-2xl flex items-center justify-center'
                      whileHover={{ scale: 1.04, y: -4 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      <div className='text-center'>
                        <p className='font-display text-3xl font-bold text-gradient mb-1'>{p.v}</p>
                        <p className='text-xs text-muted-foreground'>{p.l}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
