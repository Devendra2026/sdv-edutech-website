'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, GitBranch, Check } from 'lucide-react';

/**
 * CodeWindowVisual
 * A glass IDE window with a typing-in code body (staggered line reveals),
 * a sidebar file tree, and a passing-tests status bar. Themed to the brand.
 */
export default function CodeWindowVisual({ className = '' }: { className?: string }) {
  const lines: { indent: number; tokens: { w: number; c: string }[] }[] = [
    { indent: 0, tokens: [{ w: 38, c: 'text-secondary' }, { w: 56, c: 'text-primary' }] },
    { indent: 1, tokens: [{ w: 30, c: 'text-foreground/70' }, { w: 70, c: 'text-primary' }, { w: 24, c: 'text-foreground/40' }] },
    { indent: 1, tokens: [{ w: 48, c: 'text-foreground/70' }, { w: 40, c: 'text-secondary' }] },
    { indent: 2, tokens: [{ w: 60, c: 'text-primary' }, { w: 34, c: 'text-foreground/40' }] },
    { indent: 2, tokens: [{ w: 26, c: 'text-foreground/70' }, { w: 80, c: 'text-primary' }] },
    { indent: 1, tokens: [{ w: 18, c: 'text-foreground/40' }] },
    { indent: 0, tokens: [{ w: 44, c: 'text-secondary' }, { w: 64, c: 'text-primary' }, { w: 28, c: 'text-foreground/40' }] },
  ];

  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-4 rounded-[2rem] bg-accent-glow/25 blur-3xl animate-pulse-glow" aria-hidden />
      <motion.div
        className="relative glass glow-ring rounded-[1.6rem] p-5 overflow-hidden"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* title bar */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-3 h-3 rounded-full bg-secondary/70" />
          <span className="w-3 h-3 rounded-full bg-warning/70" />
          <span className="w-3 h-3 rounded-full bg-success/70" />
          <span className="ml-3 text-xs text-muted-foreground flex items-center gap-1.5">
            <Code2 className="w-3.5 h-3.5 text-primary" /> deploy.service.ts
          </span>
        </div>

        <div className="grid grid-cols-[88px_1fr] gap-3">
          {/* file tree */}
          <div className="rounded-xl bg-card/70 border border-border p-3 space-y-2">
            {['src', 'api', 'lib', 'tests'].map((f, i) => (
              <div key={f} className="flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-sm ${i === 1 ? 'bg-primary' : 'bg-muted-foreground/40'}`} />
                <span className="text-[10px] text-muted-foreground">{f}</span>
              </div>
            ))}
          </div>

          {/* code body */}
          <div className="rounded-xl bg-card/70 border border-border p-3.5 space-y-2.5">
            {lines.map((line, i) => (
              <div key={i} className="flex items-center gap-2" style={{ paddingLeft: line.indent * 12 }}>
                <span className="text-[9px] text-muted-foreground/50 w-3 text-right">{i + 1}</span>
                <div className="flex items-center gap-1.5 flex-1">
                  {line.tokens.map((t, j) => (
                    <motion.span
                      key={j}
                      className={`h-2 rounded-full bg-current ${t.c}`}
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: t.w, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.12 + j * 0.06, ease: 'easeOut' }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* status bar */}
        <div className="flex items-center justify-between mt-4 rounded-xl bg-gradient-to-r from-primary to-secondary px-4 py-2.5 text-white">
          <span className="text-xs font-medium flex items-center gap-1.5">
            <GitBranch className="w-3.5 h-3.5" /> main
          </span>
          <motion.span
            className="text-xs font-semibold flex items-center gap-1.5"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, type: 'spring' }}
          >
            <Check className="w-3.5 h-3.5" /> 128 tests passed
          </motion.span>
        </div>
      </motion.div>
    </div>
  );
}
