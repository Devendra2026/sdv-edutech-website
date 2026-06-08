'use client'

import { motion } from '@/lib/motion'
import { ChevronRight, Sparkles } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface Crumb {
  label: string
  href?: string
}

interface PageHeroProps {
  eyebrow: string
  title: React.ReactNode
  /** the word(s) in the title to render with the brand gradient */
  highlight?: string
  description: string
  crumbs?: Crumb[]
  visual?: React.ReactNode
  /** when true, hero centers content with no visual column */
  centered?: boolean
}

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}
const item = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
}

export default function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  crumbs = [],
  visual,
  centered,
}: PageHeroProps) {
  // optionally split the title to gradient-highlight a phrase
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
      {/* faint blueprint grid wash unique to hero */}
      <div
        className='absolute inset-0 -z-10 blueprint-grid opacity-60 mask-[radial-gradient(120%_80%_at_50%_0%,#000_30%,transparent_75%)]'
        aria-hidden
      />

      <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pt-12 md:pt-16 pb-14 md:pb-20'>
        <motion.div
          className={`grid gap-12 items-center ${visual && !centered ? 'lg:grid-cols-2' : 'grid-cols-1'}`}
          variants={container}
          initial='hidden'
          animate='visible'
        >
          <motion.div className={`space-y-6 ${centered ? 'text-center mx-auto max-w-3xl' : ''}`} variants={item}>
            {/* breadcrumb */}
            {crumbs.length > 0 && (
              <motion.nav
                variants={item}
                className={`flex items-center gap-1.5 text-xs text-muted-foreground ${
                  centered ? 'justify-center' : ''
                }`}
                aria-label='Breadcrumb'
              >
                {crumbs.map((c, i) => (
                  <React.Fragment key={c.label}>
                    {i > 0 && <ChevronRight className='w-3.5 h-3.5 opacity-50' />}
                    {c.href ? (
                      <Link href={c.href} className='hover:text-primary transition-colors'>
                        {c.label}
                      </Link>
                    ) : (
                      <span className='text-foreground font-medium'>{c.label}</span>
                    )}
                  </React.Fragment>
                ))}
              </motion.nav>
            )}

            <motion.div variants={item}>
              <span className={`glass eyebrow-chip ${centered ? 'mx-auto' : ''}`}>
                <Sparkles className='w-3.5 h-3.5' />
                {eyebrow}
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className='font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.05] tracking-tight'
            >
              {renderTitle()}
            </motion.h1>

            <motion.p
              variants={item}
              className={`text-lg text-justify md:text-xl text-muted-foreground leading-relaxed ${
                centered ? 'mx-auto max-w-2xl' : 'max-w-lg'
              }`}
            >
              {description}
            </motion.p>
          </motion.div>

          {visual && !centered && (
            <motion.div
              className='hidden lg:block'
              initial={{ opacity: 0, x: 40, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
            >
              {visual}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
