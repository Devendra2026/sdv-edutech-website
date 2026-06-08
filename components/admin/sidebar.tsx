'use client'

import { motion } from '@/lib/motion'
import { BarChart3, Briefcase, FileText, LayoutDashboard, LogOut, Menu, Settings, Users, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/admin' },
  { icon: Users, label: 'Users', href: '/admin/users' },
  { icon: Briefcase, label: 'Projects', href: '/admin/projects' },
  { icon: FileText, label: 'Surveys', href: '/admin/surveys' },
  { icon: BarChart3, label: 'Reports', href: '/admin/reports' },
  { icon: Settings, label: 'Settings', href: '/admin/settings' },
]

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile Toggle */}
      <div className='md:hidden fixed top-4 right-4 z-40'>
        <button
          type='button'
          onClick={() => setIsOpen(!isOpen)}
          className='p-2 rounded-lg bg-card border border-border hover:bg-muted transition-colors'
          aria-label='Toggle sidebar menu'
        >
          {isOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
        </button>
      </div>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: isOpen ? 0 : 0 }}
        className={`${
          isOpen ? 'fixed' : 'hidden'
        } md:block md:sticky md:top-0 h-screen w-64 bg-sidebar text-sidebar-foreground border-r border-sidebar-border overflow-y-auto z-30`}
      >
        <div className='p-6'>
          {/* Logo */}
          <Link href='/' className='flex items-center gap-2 mb-8'>
            <div className='w-10 h-10 bg-sidebar-primary rounded-lg flex items-center justify-center'>
              <span className='text-sidebar-primary-foreground font-bold'>SDV</span>
            </div>
            <div>
              <h1 className='font-bold text-sm'>SDV EDUTECH</h1>
              <p className='text-xs text-sidebar-foreground/60'>Admin</p>
            </div>
          </Link>

          {/* Menu Items */}
          <nav className='space-y-2'>
            {menuItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className='flex items-center gap-3 px-4 py-3 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors'
              >
                <item.icon className='w-5 h-5' />
                <span className='text-sm font-medium'>{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Logout */}
          <div className='border-t border-sidebar-border mt-8 pt-8'>
            <button
              type='button'
              className='w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors text-sm font-medium'
            >
              <LogOut className='w-5 h-5' />
              Logout
            </button>
          </div>
        </div>
      </motion.aside>

      {/* Mobile Overlay */}
      {isOpen && <div className='fixed inset-0 bg-black/50 md:hidden z-20' onClick={() => setIsOpen(false)}></div>}
    </>
  )
}
