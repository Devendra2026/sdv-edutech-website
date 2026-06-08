'use client';

import { motion } from '@/lib/motion';
import {
  Briefcase,
  CheckCircle2,
  Cloud,
  Cpu,
  LineChart,
  ShieldCheck,
  Workflow,
} from 'lucide-react';


export default function ItConsultingVisual({ className = '' }: { className?: string }) {
  const capabilities = [
    { icon: Cloud, label: 'Cloud & Infra', value: 'Modernize' },
    { icon: ShieldCheck, label: 'Security', value: 'Compliant' },
    { icon: Workflow, label: 'Process', value: 'Optimize' },
    { icon: LineChart, label: 'Analytics', value: 'Insights' },
  ];

  const nodes = [
    { cx: 72, cy: 48, r: 6 },
    { cx: 180, cy: 36, r: 7 },
    { cx: 288, cy: 56, r: 6 },
    { cx: 120, cy: 118, r: 8 },
    { cx: 240, cy: 128, r: 6 },
  ];

  return (
    <div className={`relative ${className}`}>
      <div
        className="absolute inset-6 rounded-[2.5rem] bg-linear-to-br from-primary/35 via-accent-glow/20 to-secondary/25 blur-3xl animate-pulse-glow"
        aria-hidden
      />

      <motion.div
        className="relative glass glow-ring rounded-[1.75rem] p-5 md:p-6 overflow-hidden"
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="absolute inset-0 blueprint-grid opacity-40 pointer-events-none" aria-hidden />

        <div className="relative flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-linear-to-br from-primary to-accent-glow flex items-center justify-center text-white shadow-lg shadow-primary/30">
              <Briefcase className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-foreground">IT Advisory Hub</p>
              <p className="text-[10px] text-muted-foreground">Strategy • Delivery • Scale</p>
            </div>
          </div>
          <span className="text-[10px] font-semibold text-success px-2 py-1 rounded-full bg-success/10 border border-success/20">
            LIVE
          </span>
        </div>

        {/* Architecture graph */}
        <div className="relative rounded-xl border border-border bg-card/70 p-3 mb-3 overflow-hidden">
          <svg viewBox="0 0 360 150" className="w-full h-auto block text-primary" aria-hidden>
            <defs>
              <linearGradient id="consultLine" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="currentColor" stopOpacity="0.15" />
                <stop offset="50%" stopColor="currentColor" stopOpacity="0.55" />
                <stop offset="100%" stopColor="var(--secondary)" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            <motion.path
              d="M72 48 L180 36 L288 56 M180 36 L120 118 L240 128 M72 48 L120 118 M288 56 L240 128"
              fill="none"
              stroke="url(#consultLine)"
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0.4 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.6, ease: 'easeInOut' }}
            />
            {nodes.map((n, i) => (
              <g key={i}>
                <motion.circle
                  cx={n.cx}
                  cy={n.cy}
                  r={n.r}
                  fill={i % 2 ? 'var(--secondary)' : 'currentColor'}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.45, delay: 0.35 + i * 0.12, type: 'spring' }}
                  style={{ transformOrigin: `${n.cx}px ${n.cy}px` }}
                />
                <circle
                  cx={n.cx}
                  cy={n.cy}
                  r={n.r + 4}
                  fill="none"
                  stroke={i % 2 ? 'var(--secondary)' : 'currentColor'}
                  strokeWidth="1.5"
                  className="animate-ring-ping"
                  style={{ transformOrigin: `${n.cx}px ${n.cy}px`, animationDelay: `${i * 0.5}s` }}
                />
              </g>
            ))}
          </svg>
          <div className="absolute bottom-2 right-2 glass rounded-lg px-2 py-1 flex items-center gap-1">
            <Cpu className="w-3 h-3 text-primary" />
            <span className="text-[10px] font-medium text-foreground">Digital core</span>
          </div>
        </div>

        {/* Bento capability grid */}
        <div className="grid grid-cols-2 gap-2 mb-3">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.label}
              className="rounded-xl bg-card/75 border border-border p-3 group hover:border-primary/40 transition-colors"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
            >
              <cap.icon className="w-4 h-4 text-primary mb-2 group-hover:scale-110 transition-transform" />
              <p className="text-[10px] text-muted-foreground">{cap.label}</p>
              <p className="text-sm font-semibold text-foreground">{cap.value}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center justify-between rounded-xl bg-linear-to-r from-primary via-accent-glow to-secondary px-4 py-3 text-white">
          <span className="text-sm font-medium">Roadmap velocity</span>
          <motion.span
            className="text-xs font-bold flex items-center gap-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <LineChart className="w-3.5 h-3.5" /> +32% YoY
          </motion.span>
        </div>
      </motion.div>

      {/* Floating chips — Aceternity-style accent cards */}
      <motion.div
        className="absolute -left-4 md:-left-8 top-12 glass rounded-2xl px-3.5 py-2.5 flex items-center gap-2.5 shadow-lg"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-8 h-8 rounded-full bg-primary/15 text-primary flex items-center justify-center">
          <ShieldCheck className="w-4 h-4" />
        </div>
        <div>
          <p className="text-[11px] font-semibold text-foreground">Enterprise-grade</p>
          <p className="text-[10px] text-muted-foreground">Security & governance</p>
        </div>
      </motion.div>

      <motion.div
        className="absolute -right-2 md:-right-6 bottom-20 glass rounded-2xl px-3.5 py-2.5 flex items-center gap-2.5 shadow-lg"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      >
        <div className="w-8 h-8 rounded-full bg-success/15 text-success flex items-center justify-center">
          <CheckCircle2 className="w-4 h-4" />
        </div>
        <div>
          <p className="text-[11px] font-semibold text-foreground">98% retention</p>
          <p className="text-[10px] text-muted-foreground">consulting clients</p>
        </div>
      </motion.div>
    </div>
  );
}
