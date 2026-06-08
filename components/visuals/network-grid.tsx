'use client'

import { motion } from '@/lib/motion'
import { Activity, Server, ShieldCheck } from 'lucide-react'

/**
 * NetworkVisual
 * A glass infrastructure topology: a central hub connected to pulsing edge
 * nodes with animated data packets travelling the links. Reads as "IT /
 * cloud infrastructure / digital transformation".
 */
export default function NetworkVisual({ className = '' }: { className?: string }) {
  const center = { x: 180, y: 120 }
  const nodes = [
    { x: 60, y: 56 },
    { x: 300, y: 60 },
    { x: 40, y: 184 },
    { x: 312, y: 180 },
    { x: 180, y: 30 },
    { x: 180, y: 210 },
  ]

  return (
    <div className={`relative ${className}`}>
      <div className='absolute inset-4 rounded-4xl bg-primary/25 blur-3xl animate-pulse-glow' aria-hidden />
      <motion.div
        className='relative glass glow-ring rounded-[1.6rem] p-5 overflow-hidden'
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className='flex items-center justify-between mb-4'>
          <div className='flex items-center gap-2 text-primary'>
            <Server className='w-4 h-4' />
            <span className='text-xs font-semibold text-foreground'>Cloud Infrastructure</span>
          </div>
          <span className='text-[10px] text-success font-semibold flex items-center gap-1'>
            <Activity className='w-3 h-3' /> 99.98% uptime
          </span>
        </div>

        <div className='relative rounded-xl overflow-hidden border border-border bg-card/60'>
          <svg viewBox='0 0 360 240' className='w-full h-auto block text-primary'>
            {/* links */}
            {nodes.map(n => (
              <line
                key={`link-${n.x}-${n.y}`}
                x1={center.x}
                y1={center.y}
                x2={n.x}
                y2={n.y}
                stroke='currentColor'
                strokeOpacity='0.22'
                strokeWidth='1.5'
              />
            ))}

            {/* animated packets */}
            {nodes.map((n, i) => (
              <motion.circle
                key={`packet-${n.x}-${n.y}`}
                r='3'
                fill={i % 2 ? 'var(--secondary)' : 'currentColor'}
                initial={{ cx: center.x, cy: center.y, opacity: 0 }}
                animate={{ cx: [center.x, n.x], cy: [center.y, n.y], opacity: [0, 1, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.35, ease: 'easeInOut' }}
              />
            ))}

            {/* edge nodes */}
            {nodes.map(n => (
              <g key={`node-${n.x}-${n.y}`}>
                <circle
                  cx={n.x}
                  cy={n.y}
                  r='9'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  className='animate-ring-ping'
                  style={{ transformOrigin: `${n.x}px ${n.y}px`, animationDelay: `${Number(n) * 0.4}s` }}
                />
                <circle
                  cx={n.x}
                  cy={n.y}
                  r='7'
                  fill='var(--card)'
                  stroke='currentColor'
                  strokeOpacity='0.5'
                  strokeWidth='1.5'
                />
                <circle cx={n.x} cy={n.y} r='3' fill={Number(n) % 2 ? 'var(--secondary)' : 'currentColor'} />
              </g>
            ))}

            {/* center hub */}
            <circle cx={center.x} cy={center.y} r='22' fill='currentColor' fillOpacity='0.12' />
            <circle cx={center.x} cy={center.y} r='14' fill='var(--card)' stroke='currentColor' strokeWidth='2' />
            <circle cx={center.x} cy={center.y} r='5' fill='currentColor' />
          </svg>
        </div>

        <div className='grid grid-cols-2 gap-2 mt-4'>
          <div className='flex items-center gap-2 rounded-lg bg-card/70 border border-border px-3 py-2.5'>
            <ShieldCheck className='w-4 h-4 text-success' />
            <div>
              <p className='text-[10px] text-muted-foreground leading-none mb-1'>Security</p>
              <p className='text-xs font-semibold text-foreground'>SOC 2 · ISO 27001</p>
            </div>
          </div>
          <div className='flex items-center gap-2 rounded-lg bg-card/70 border border-border px-3 py-2.5'>
            <Server className='w-4 h-4 text-primary' />
            <div>
              <p className='text-[10px] text-muted-foreground leading-none mb-1'>Nodes</p>
              <p className='text-xs font-semibold text-foreground'>42 active regions</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
