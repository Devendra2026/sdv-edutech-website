'use client'

import { domAnimation, LazyMotion } from 'framer-motion'

export function MotionSection({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  )
}
