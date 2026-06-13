'use client'

import { MotionSection } from '@/components/providers/motion-section'
import { motion } from '@/lib/motion'
import { navLinks } from '@/lib/site-content'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function DesktopNav() {
  const pathname = usePathname()

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href))

  return (
    <MotionSection>
      <div className='hidden md:flex items-center gap-0.5'>
        {navLinks.map(link => {
          const active = isActive(link.href)
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-colors min-h-11 flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                active ? 'text-primary' : 'text-foreground/80 hover:text-primary hover:bg-primary/5'
              }`}
            >
              {link.label}
              {active && (
                <motion.span
                  layoutId='nav-active'
                  className='absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-linear-to-r from-primary to-secondary'
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
            </Link>
          )
        })}
      </div>
    </MotionSection>
  )
}
