
import { CtaButton } from '@/components/marketing/cta-button'
import { footerServiceLinks, navLinks, siteConfig, socialLinks } from '@/lib/site-content'
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram, FaLinkedin , FaTwitter, } from 'react-icons/fa6'

const companyLinks = navLinks.filter(l =>
  ['/about', '/clients', '/careers', '/contact', '/gallery', '/portfolio', '/services'].includes(l.href),
)

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className='relative border-t border-border/60 mt-24 glass-header'>
      <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20'>
        <div className='grid grid-cols-1 md:grid-cols-12 gap-12 mb-16'>
          <div className='md:col-span-3'>
            <Link href='/' className='inline-block mb-6'>
              <Image
                src={siteConfig.logo}
                alt={siteConfig.name}
                width={160}
                height={48}
                className='h-14 w-auto rounded-md'
                style={{ width: 'auto' }}
              />
            </Link>
            <p className='text-muted-foreground text-sm leading-relaxed mb-6 max-w-xs'>
              Transforming enterprises through innovative technology and digital solutions.
            </p>
            
            {/* Social Icons Section */}
            <div className='flex gap-3'>
              {[
                { href: 'https://www.linkedin.com/company/131823925/', label: 'LinkedIn', Icon: FaLinkedin },
                { href: socialLinks?.instagram || '#', label: 'Instagram', Icon: FaInstagram },
                { href: socialLinks?.twitter || '#', label: 'Twitter', Icon: FaTwitter },  
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={label}
                  className='w-11 h-11 rounded-full border border-border hover:border-primary hover:bg-primary/5 flex items-center justify-center transition-all text-foreground hover:text-primary'
                >
                  <Icon className='w-4 h-4' />
                </a>
              ))}
            </div>
          </div>

          <div className='md:col-span-2'>
            <h4 className='font-semibold text-foreground text-sm mb-6'>Services</h4>
            <ul className='space-y-3'>
              {footerServiceLinks.map(item => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className='text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group min-h-11'
                  >
                    {item.label}
                    <ArrowRight className='w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity' />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className='md:col-span-2'>
            <h4 className='font-semibold text-foreground text-sm mb-6'>Company</h4>
            <ul className='space-y-3'>
              {companyLinks.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className='text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group min-h-11'
                  >
                    {link.label}
                    <ArrowRight className='w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity' />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className='md:col-span-3'>
            <h4 className='font-semibold text-foreground text-sm mb-6'>Get in Touch</h4>
            <div className='space-y-4'>
              <div className='flex gap-3'>
                <Mail className='w-4 h-4 text-primary shrink-0 mt-1' aria-hidden />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className='text-muted-foreground hover:text-primary transition-colors text-sm'
                >
                  {siteConfig.email}
                </a>
              </div>
              <div className='flex gap-3'>
                <Phone className='w-4 h-4 text-primary shrink-0 mt-1' aria-hidden />
                <a
                  href='tel:+919027811488'
                  className='text-muted-foreground hover:text-primary transition-colors text-sm'
                >
                  {siteConfig.phone}
                </a>
              </div>
              <div className='flex gap-3'>
                <MapPin className='w-4 h-4 text-primary shrink-0 mt-1' aria-hidden />
                <span className='text-muted-foreground text-sm'>{siteConfig.address}</span>
              </div>
            </div>
          </div>
        </div>

        <div className='h-px bg-border mb-8' />

        <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
          <p className='text-muted-foreground text-xs'>
            &copy; {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <div className='flex flex-wrap justify-center gap-6'>
            {[
              { href: '/privacy-policy', label: 'Privacy Policy' },
              { href: '/terms-of-service', label: 'Terms of Service' },
              { href: '/cookie-policy', label: 'Cookie Policy' },
            ].map(link => (
              <Link
                key={link.href}
                href={link.href}
                className='text-muted-foreground hover:text-primary transition-colors text-xs min-h-11 flex items-center'
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
