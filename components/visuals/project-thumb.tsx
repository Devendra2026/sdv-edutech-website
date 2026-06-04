'use client';

import React from 'react';
import { motion } from 'framer-motion';

type Theme = 'gis' | 'software' | 'survey' | 'network' | 'training' | 'consulting';

/**
 * ProjectThumb — a compact, animated 16:9 cover that visually communicates
 * the project category. Used in portfolio cards in place of stock photos.
 */
export default function ProjectThumb({ theme }: { theme: Theme }) {
  return (
    <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-border bg-gradient-to-br from-primary/12 via-card to-secondary/8">
      <div className="absolute inset-0 blueprint-grid opacity-70" aria-hidden />
      <svg viewBox="0 0 320 200" className="relative w-full h-full text-primary">
        {theme === 'gis' && <Gis />}
        {theme === 'software' && <Software />}
        {theme === 'survey' && <Survey />}
        {theme === 'network' && <Network />}
        {theme === 'training' && <Training />}
        {theme === 'consulting' && <Consulting />}
      </svg>
    </div>
  );
}

function Gis() {
  const pins = [{ x: 90, y: 70 }, { x: 200, y: 110 }, { x: 150, y: 150 }];
  return (
    <>
      <path d="M30 60 L110 38 L170 72 L130 130 L55 138 Z" fill="currentColor" fillOpacity="0.14" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.5" />
      <path d="M160 110 L270 86 L300 160 L210 178 Z" fill="var(--secondary)" fillOpacity="0.12" stroke="var(--secondary)" strokeOpacity="0.45" strokeWidth="1.5" />
      <path className="animate-dash" d="M90 70 C140 92, 150 120, 200 110 S260 150, 280 150" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {pins.map((p, i) => (
        <g key={i}>
          <circle cx={p.x} cy={p.y} r="4.5" fill={i % 2 ? 'var(--secondary)' : 'currentColor'} />
          <circle cx={p.x} cy={p.y} r="4.5" fill="none" stroke={i % 2 ? 'var(--secondary)' : 'currentColor'} strokeWidth="2" className="animate-ring-ping" style={{ transformOrigin: `${p.x}px ${p.y}px`, animationDelay: `${i * 0.6}s` }} />
        </g>
      ))}
    </>
  );
}

function Software() {
  const rows = [
    [40, 60], [70, 40, 24], [54, 70], [38, 50, 30], [62, 36],
  ];
  return (
    <>
      <rect x="34" y="34" width="252" height="132" rx="10" fill="var(--card)" fillOpacity="0.6" stroke="currentColor" strokeOpacity="0.25" />
      <line x1="34" y1="58" x2="286" y2="58" stroke="currentColor" strokeOpacity="0.2" />
      <circle cx="48" cy="46" r="3" fill="var(--secondary)" /><circle cx="60" cy="46" r="3" fill="var(--warning)" /><circle cx="72" cy="46" r="3" fill="var(--success)" />
      {rows.map((r, i) => (
        <g key={i} transform={`translate(50 ${74 + i * 17})`}>
          {r.map((w, j) => {
            const x = r.slice(0, j).reduce((a, b) => a + b + 8, 0);
            return (
              <motion.rect key={j} x={x} y="0" height="7" rx="3.5"
                fill={j === 0 ? 'var(--secondary)' : 'currentColor'} fillOpacity={j === 0 ? 0.7 : 0.4}
                initial={{ width: 0 }} whileInView={{ width: w }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 + j * 0.05 }} />
            );
          })}
        </g>
      ))}
    </>
  );
}

function Survey() {
  const bars = [40, 64, 50, 82, 58, 90];
  return (
    <>
      <motion.path d="M30 120 L80 96 L130 104 L180 70 L230 82 L290 50" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }} />
      {bars.map((h, i) => (
        <motion.rect key={i} x={44 + i * 42} width="22" rx="4" y={170 - h} fill="currentColor" fillOpacity={i === 3 || i === 5 ? 0.7 : 0.3}
          initial={{ height: 0, y: 170 }} whileInView={{ height: h, y: 170 - h }} viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.08 }} />
      ))}
    </>
  );
}

function Network() {
  const c = { x: 160, y: 100 };
  const nodes = [{ x: 60, y: 50 }, { x: 260, y: 54 }, { x: 50, y: 150 }, { x: 268, y: 150 }, { x: 160, y: 36 }];
  return (
    <>
      {nodes.map((n, i) => <line key={i} x1={c.x} y1={c.y} x2={n.x} y2={n.y} stroke="currentColor" strokeOpacity="0.22" strokeWidth="1.5" />)}
      {nodes.map((n, i) => (
        <motion.circle key={`p${i}`} r="3" fill={i % 2 ? 'var(--secondary)' : 'currentColor'}
          initial={{ cx: c.x, cy: c.y, opacity: 0 }} animate={{ cx: [c.x, n.x], cy: [c.y, n.y], opacity: [0, 1, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.3 }} />
      ))}
      {nodes.map((n, i) => <circle key={`n${i}`} cx={n.x} cy={n.y} r="7" fill="var(--card)" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.5" />)}
      <circle cx={c.x} cy={c.y} r="14" fill="currentColor" fillOpacity="0.14" />
      <circle cx={c.x} cy={c.y} r="8" fill="var(--card)" stroke="currentColor" strokeWidth="2" />
    </>
  );
}

function Training() {
  return (
    <>
      <rect x="60" y="50" width="200" height="100" rx="10" fill="var(--card)" fillOpacity="0.6" stroke="currentColor" strokeOpacity="0.25" />
      <motion.path d="M160 60 L235 92 L160 124 L85 92 Z" fill="currentColor" fillOpacity="0.18" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.5"
        initial={{ opacity: 0, y: -6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} />
      <line x1="235" y1="92" x2="235" y2="120" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.5" />
      <circle cx="235" cy="124" r="4" fill="var(--secondary)" />
      <path d="M120 124 L120 138 Q160 152 200 138 L200 124" fill="none" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.5" />
    </>
  );
}

function Consulting() {
  return (
    <>
      {[0, 1, 2, 3].map((i) => (
        <motion.circle key={i} cx="160" cy="100" r={28 + i * 24} fill="none" stroke="currentColor" strokeOpacity={0.28 - i * 0.05} strokeWidth="1.5"
          initial={{ scale: 0.85, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.12 }} style={{ transformOrigin: '160px 100px' }} />
      ))}
      <circle cx="160" cy="100" r="10" fill="currentColor" fillOpacity="0.2" />
      <circle cx="160" cy="100" r="5" fill="var(--secondary)" />
      <circle cx="100" cy="62" r="4" fill="currentColor" /><circle cx="226" cy="74" r="4" fill="currentColor" /><circle cx="210" cy="150" r="4" fill="var(--secondary)" />
    </>
  );
}
