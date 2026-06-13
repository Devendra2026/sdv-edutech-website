'use client'

import { motion } from '@/lib/motion'
import { Layers, MapPin, Navigation } from 'lucide-react'

const PINS = [
  { x: 86, y: 70, delay: 0 },
  { x: 196, y: 118, delay: 0.6 },
  { x: 150, y: 198, delay: 1.2 },
  { x: 278, y: 176, delay: 1.8 },
] as const

/**
 * GisMapVisual
 * A glass "geospatial console": layered terrain polygons, a fine blueprint
 * grid, an animated survey route with flowing dashes, and pinging location
 * markers. Pure SVG + CSS so it is crisp at any size and loads instantly.
 */
export default function GisMapVisual({ className = '' }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className='absolute inset-4 rounded-4xl bg-primary/25 blur-3xl animate-pulse-glow' aria-hidden />
      <motion.div
        className='relative glass glow-ring rounded-[1.6rem] p-5 overflow-hidden'
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* console header */}
        <div className='flex items-center justify-between mb-4'>
          <div className='flex items-center gap-2 text-primary'>
            <Layers className='w-4 h-4' />
            <span className='text-xs font-semibold text-foreground'>GIS Spatial Console</span>
          </div>
          <span className='text-[10px] text-muted-foreground tracking-wide'>LIVE • EPSG:4326</span>
        </div>

        {/* the map */}
        <div className='relative rounded-xl overflow-hidden border border-border bg-card/60'>
          <svg viewBox='0 0 360 240' className='w-full h-auto block text-primary'>
            {/* blueprint grid */}
            <defs>
              <linearGradient id='terrainA' x1='0' y1='0' x2='1' y2='1'>
                <stop offset='0%' stopColor='currentColor' stopOpacity='0.20' />
                <stop offset='100%' stopColor='currentColor' stopOpacity='0.04' />
              </linearGradient>
              <linearGradient id='terrainB' x1='0' y1='0' x2='1' y2='1'>
                <stop offset='0%' stopColor='var(--secondary)' stopOpacity='0.16' />
                <stop offset='100%' stopColor='var(--secondary)' stopOpacity='0.02' />
              </linearGradient>
              <pattern id='mapgrid' width='24' height='24' patternUnits='userSpaceOnUse'>
                <path d='M24 0H0V24' fill='none' stroke='currentColor' strokeOpacity='0.10' strokeWidth='1' />
              </pattern>
            </defs>
            <rect width='360' height='240' fill='url(#mapgrid)' />

            {/* terrain / zone polygons */}
            <motion.path
              d='M20 60 L120 30 L190 70 L150 140 L60 150 Z'
              fill='url(#terrainA)'
              stroke='currentColor'
              strokeOpacity='0.35'
              strokeWidth='1.5'
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ transformOrigin: 'center' }}
            />
            <motion.path
              d='M170 120 L300 90 L340 170 L250 210 L165 185 Z'
              fill='url(#terrainB)'
              stroke='var(--secondary)'
              strokeOpacity='0.4'
              strokeWidth='1.5'
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              style={{ transformOrigin: 'center' }}
            />

            {/* survey route with flowing dashes */}
            <path
              d='M86 70 C140 90, 150 110, 196 118 S250 170, 278 176'
              fill='none'
              stroke='currentColor'
              strokeOpacity='0.35'
              strokeWidth='2'
            />
            <path
              className='animate-dash'
              d='M86 70 C140 90, 150 110, 196 118 S250 170, 278 176'
              fill='none'
              stroke='currentColor'
              strokeWidth='2.5'
              strokeLinecap='round'
            />

            {/* location markers with ping */}
            {PINS.map((p, i) => (
              <g key={i}>
                <motion.circle
                  cx={p.x}
                  cy={p.y}
                  r='5'
                  fill={i % 2 ? 'var(--secondary)' : 'currentColor'}
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.15, type: 'spring' }}
                  style={{ transformOrigin: `${p.x}px ${p.y}px` }}
                />
                <circle
                  cx={p.x}
                  cy={p.y}
                  r='5'
                  fill='none'
                  stroke={i % 2 ? 'var(--secondary)' : 'currentColor'}
                  strokeWidth='2'
                  className='animate-ring-ping'
                  style={{ transformOrigin: `${p.x}px ${p.y}px`, animationDelay: `${p.delay}s` }}
                />
              </g>
            ))}
          </svg>

          {/* corner readout chip */}
          <div className='absolute bottom-2 left-2 glass rounded-lg px-2.5 py-1.5 flex items-center gap-1.5'>
            <Navigation className='w-3 h-3 text-primary' />
            <span className='text-[10px] font-medium text-foreground'>28.61° N, 77.20° E</span>
          </div>
        </div>

        {/* layer toggles */}
        <div className='grid grid-cols-3 gap-2 mt-4'>
          {['Parcels', 'Terrain', 'Routes'].map((l, i) => (
            <div key={l} className='flex items-center gap-1.5 rounded-lg bg-card/70 border border-border px-2.5 py-2'>
              <MapPin className={`w-3.5 h-3.5 ${i === 1 ? 'text-secondary' : 'text-primary'}`} />
              <span className='text-[11px] text-foreground font-medium'>{l}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
