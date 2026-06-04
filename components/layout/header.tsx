'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Clients', href: '/clients' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ]

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href))

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-header border-b border-border/60 shadow-sm' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-3.5 flex items-center justify-between'>
        <Link href='/' className='flex items-center gap-2.5 shrink-0'>
          <div className='bg-linear-to-br from-primary to-accent-glow rounded-xl flex items-center justify-center shadow-lg shadow-primary/25'>
            <Image
              src='/logo.jpeg'
              alt='SDV EDUTECH'
              width={1280}
              height={622}
              className='h-12 w-auto rounded-md'
              priority
            />
          </div>
        </Link>

        <div className='hidden md:flex items-center gap-0.5'>
          {navLinks.map(link => {
            const active = isActive(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
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

        <div className='hidden md:flex items-center gap-4'>
          <Link href='/contact'>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className='px-6 py-2.5 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25'
            >
              Get Started
            </motion.button>
          </Link>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className='md:hidden p-2 hover:bg-muted rounded-lg transition-colors'
          aria-label='Toggle menu'
        >
          {isMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className='md:hidden glass-header border-b border-border/60 overflow-hidden'
          >
            <div className='px-4 py-4 space-y-1'>
              {navLinks.map(link => {
                const active = isActive(link.href)
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-2.5 rounded-lg transition-colors ${
                      active
                        ? 'bg-primary/10 text-primary font-semibold'
                        : 'text-foreground hover:bg-primary/5 hover:text-primary'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <Link href='/contact' onClick={() => setIsMenuOpen(false)}>
                <button className='w-full mt-3 px-4 py-2.5 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors'>
                  Get Started
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
