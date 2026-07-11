'use client'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { navLinks } from '@/lib/site-content'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href))

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant='ghost' size='icon' className='md:hidden min-h-11 min-w-11' aria-label='Open navigation menu'>
          <Menu className='h-6 w-6' />
        </Button>
      </SheetTrigger>
      <SheetContent side='right' className='w-[min(100vw-2rem,320px)]'>
        <SheetHeader>
          <SheetTitle className='text-left font-display'>Menu</SheetTitle>
        </SheetHeader>
        <nav className='mt-6 flex flex-col gap-1'>
          {navLinks.map(link => {
            const active = isActive(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-4 py-3 text-sm font-medium min-h-11 flex items-center transition-colors ${
                  active ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-muted hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
          <Button asChild className='mt-4 w-full min-h-11' onClick={() => setOpen(false)}>
            <Link href='/sign-up'>Sign-Up</Link>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
