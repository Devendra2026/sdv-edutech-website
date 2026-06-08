'use client'

import { motion } from '@/lib/motion'
import { BarChart3, PieChart, TrendingUp } from 'lucide-react'

/**
 * AnalyticsVisual
 * A glass survey/analytics dashboard: an animated line trend, a growing bar
 * series, and a donut completion ring. Reads as "survey management / data
 * insights".
 */
export default function AnalyticsVisual({ className = '' }: { className?: string }) {
  const bars = [
    { day: 'Mon', h: 44 },
    { day: 'Tue', h: 66 },
    { day: 'Wed', h: 52 },
    { day: 'Thu', h: 80 },
    { day: 'Fri', h: 60 },
    { day: 'Sat', h: 92 },
    { day: 'Sun', h: 74 },
  ]
  const circumference = 2 * Math.PI * 26
  const pct = 0.78

  return (
    <div className={`relative ${className}`}>
      <div className='absolute inset-4 rounded-[2rem] bg-secondary/20 blur-3xl animate-pulse-glow' aria-hidden />
      <motion.div
        className='relative glass glow-ring rounded-[1.6rem] p-5 overflow-hidden'
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className='flex items-center justify-between mb-4'>
          <div className='flex items-center gap-2 text-primary'>
            <BarChart3 className='w-4 h-4' />
            <span className='text-xs font-semibold text-foreground'>Survey Insights</span>
          </div>
          <span className='text-[10px] text-success font-semibold flex items-center gap-1'>
            <TrendingUp className='w-3 h-3' /> +24% responses
          </span>
        </div>

        {/* trend line */}
        <div className='rounded-xl bg-card/70 border border-border p-3.5 mb-3'>
          <svg viewBox='0 0 320 90' className='w-full h-auto block text-primary'>
            <defs>
              <linearGradient id='trendFill' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='0%' stopColor='currentColor' stopOpacity='0.28' />
                <stop offset='100%' stopColor='currentColor' stopOpacity='0' />
              </linearGradient>
            </defs>
            <motion.path
              d='M0 70 L45 52 L90 60 L135 34 L180 44 L225 22 L270 30 L320 12'
              fill='none'
              stroke='currentColor'
              strokeWidth='2.5'
              strokeLinecap='round'
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.4, ease: 'easeInOut' }}
            />
            <motion.path
              d='M0 70 L45 52 L90 60 L135 34 L180 44 L225 22 L270 30 L320 12 L320 90 L0 90 Z'
              fill='url(#trendFill)'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            />
          </svg>
        </div>

        <div className='grid grid-cols-[1fr_96px] gap-3'>
          {/* bars */}
          <div className='rounded-xl bg-card/70 border border-border p-3.5'>
            <p className='text-[10px] text-muted-foreground mb-2'>Weekly completion</p>
            <div className='flex items-end gap-1.5 h-20'>
              {bars.map((bar, i) => (
                <motion.div
                  key={bar.day}
                  className='flex-1 rounded-md bg-gradient-to-t from-primary to-accent-glow'
                  initial={{ height: 0 }}
                  animate={{ height: `${bar.h}%` }}
                  transition={{ duration: 0.8, delay: 0.4 + i * 0.08, ease: 'easeOut' }}
                />
              ))}
            </div>
          </div>

          {/* donut */}
          <div className='rounded-xl bg-card/70 border border-border p-3.5 flex flex-col items-center justify-center'>
            <svg viewBox='0 0 64 64' className='w-16 h-16 -rotate-90 text-primary'>
              <circle cx='32' cy='32' r='26' fill='none' stroke='currentColor' strokeOpacity='0.15' strokeWidth='8' />
              <motion.circle
                cx='32'
                cy='32'
                r='26'
                fill='none'
                stroke='var(--secondary)'
                strokeWidth='8'
                strokeLinecap='round'
                strokeDasharray={circumference}
                initial={{ strokeDashoffset: circumference }}
                animate={{ strokeDashoffset: circumference * (1 - pct) }}
                transition={{ duration: 1.4, delay: 0.6, ease: 'easeOut' }}
              />
            </svg>
            <span className='text-xs font-bold text-foreground mt-1 flex items-center gap-1'>
              <PieChart className='w-3 h-3 text-secondary' /> 78%
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
