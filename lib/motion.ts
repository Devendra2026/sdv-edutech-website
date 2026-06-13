'use client'

import { AnimatePresence as FramerAnimatePresence, m, type HTMLMotionProps } from 'framer-motion'
import { useSyncExternalStore } from 'react'

function subscribeReducedMotion(callback: () => void) {
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
  mq.addEventListener('change', callback)
  return () => mq.removeEventListener('change', callback)
}

function getReducedMotionSnapshot() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function getReducedMotionServerSnapshot() {
  return false
}

export function usePrefersReducedMotion() {
  return useSyncExternalStore(subscribeReducedMotion, getReducedMotionSnapshot, getReducedMotionServerSnapshot)
}

const noMotionProps: HTMLMotionProps<'div'> = {
  initial: false,
  animate: false,
  whileInView: undefined,
  whileHover: undefined,
  whileTap: undefined,
  transition: { duration: 0 },
}

export function useMotionProps<T extends HTMLMotionProps<'div'>>(props: T): T {
  const reduced = usePrefersReducedMotion()
  if (reduced) {
    return { ...props, ...noMotionProps } as T
  }
  return props
}

export const motion = m
export const AnimatePresence = FramerAnimatePresence
