'use client'

import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className='relative border-t border-border/60 mt-24 glass-header'>
      <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20'>
        {/* Main Footer Grid */}
        <div className='grid grid-cols-1 md:grid-cols-12 gap-12 mb-16'>
          {/* Brand Section */}
          <div className='md:col-span-3'>
            <div className='flex items-center gap-2 mb-6'>
              <Image src='/logo.jpeg' alt='SDV EDUTECH' width={1280} height={622} className='h-15 w-auto rounded-md' />
            </div>
            <p className='text-muted-foreground text-sm leading-relaxed mb-6'>
              Transforming enterprises through innovative technology and digital solutions.
            </p>
            <div className='flex gap-3'>
              <Link
                href='#'
                className='w-9 h-9 rounded-full border border-border hover:border-primary hover:bg-primary/5 flex items-center justify-center transition-all text-foreground hover:text-primary'
              >
                <FaLinkedin className='w-4 h-4' />
              </Link>
              <Link
                href='#'
                className='w-9 h-9 rounded-full border border-border hover:border-primary hover:bg-primary/5 flex items-center justify-center transition-all text-foreground hover:text-primary'
              >
                <FaTwitter className='w-4 h-4' />
              </Link>
            </div>
          </div>

          {/* Services Links */}
          <div className='md:col-span-2'>
            <h4 className='font-semibold text-foreground text-sm mb-6'>Services</h4>
            <ul className='space-y-3'>
              
              <li>
                <Link
                  href='/services'
                  className='text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group'
                >
                  GIS Solutions
                  <ArrowRight className='w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity' />
                </Link>
              </li>
              <li>
                <Link
                  href='/services'
                  className='text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group'
                >
                  Software Development
                  <ArrowRight className='w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity' />
                </Link>
              </li>
              <li>
                <Link
                  href='/services'
                  className='text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group'
                >
                  Training Programs
                  <ArrowRight className='w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity' />
                </Link>
              </li>
              <li>
                <Link
                  href='/services'
                  className='text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group'
                >
                  SBM - SWM Services
                  <ArrowRight className='w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity' />
                </Link>
              </li>
              <li>
                <Link
                  href='/services'
                  className='text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group'
                >
                  OutSourcing / ManPower Services
                  <ArrowRight className='w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity' />
                </Link>
              </li>
              <li>
                <Link
                  href='/services'
                  className='text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group'
                >
                  Payroll Management
                  <ArrowRight className='w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity' />
                </Link>
              </li>
              <li>
                <Link
                  href='/services'
                  className='text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group'
                >
                  Consulting Services
                  <ArrowRight className='w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity' />
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className='md:col-span-2'>
            <h4 className='font-semibold text-foreground text-sm mb-6'>Company</h4>
            <ul className='space-y-3'>
              <li>
                <Link
                  href='/about'
                  className='text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group'
                >
                  About Us
                  <ArrowRight className='w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity' />
                </Link>
              </li>
              <li>
                <Link
                  href='/clients'
                  className='text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group'
                >
                  Clients
                  <ArrowRight className='w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity' />
                </Link>
              </li>
              <li>
                <Link
                  href='/careers'
                  className='text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group'
                >
                  Careers
                  <ArrowRight className='w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity' />
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group'
                >
                  Contact
                  <ArrowRight className='w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity' />
                </Link>
              </li>
               <li>
                <Link
                  href='/gallery'
                  className='text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group'
                >
                  Gallery
                  <ArrowRight className='w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity' />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className='md:col-span-3'>
            <h4 className='font-semibold text-foreground text-sm mb-6'>Get in Touch</h4>
            <div className='space-y-4'>
              <div className='flex gap-3'>
                <Mail className='w-4 h-4 text-primary shrink-0 mt-0.5' />
                <a
                  href='mailto:info@sdvedutech.in'
                  className='text-muted-foreground hover:text-primary transition-colors text-sm'
                >
                  info@sdvedutech.in
                </a>
              </div>
              <div className='flex gap-3'>
                <Phone className='w-4 h-4 text-primary shrink-0 mt-0.5' />
                <a
                  href='tel:+919027811488'
                  className='text-muted-foreground hover:text-primary transition-colors text-sm'
                >
                  +91 90278 11488
                </a>
              </div>
              <div className='flex gap-3'>
                <MapPin className='w-4 h-4 text-primary shrink-0 mt-0.5' />
                <span className='text-muted-foreground text-sm'>
                  STPI, IT Park, Sector-D, Shahstripuram, Sikandra, Agra, Uttar Pradesh, India - 282007
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className='h-px bg-border mb-8' />

        {/* Bottom Footer */}
        <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
          <p className='text-muted-foreground text-xs'>
            &copy; {new Date().getFullYear()} Sdv Edutech Private Limited. All rights reserved.
          </p>
          <div className='flex gap-8'>
            <a href='#' className='text-muted-foreground hover:text-primary transition-colors text-xs'>
              Privacy Policy
            </a>
            <a href='#' className='text-muted-foreground hover:text-primary transition-colors text-xs'>
              Terms of Service
            </a>
            <a href='#' className='text-muted-foreground hover:text-primary transition-colors text-xs'>
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
