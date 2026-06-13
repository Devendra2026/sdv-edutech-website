'use client'

import GoogleMapEmbed, { OFFICE_ADDRESS } from '@/components/shared/google-map-embed'
import PageHeroStatic from '@/components/shared/page-hero-static'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { siteConfig } from '@/lib/site-content'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle2, Clock, Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Enter a valid email address'),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormValues = z.infer<typeof contactSchema>

const contactInfo = [
  { icon: Phone, label: 'Phone', value: siteConfig.phone, href: 'tel:+919027811488' },
  { icon: Mail, label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  {
    icon: MapPin,
    label: 'Office',
    value: 'Agra, Uttar Pradesh',
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(OFFICE_ADDRESS)}`,
  },
  { icon: Clock, label: 'Hours', value: 'Mon–Sat, 10 AM – 6 PM IST', href: undefined },
]

export function ContactPageContent() {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', company: '', message: '' },
  })

  const onSubmit = async (_data: ContactFormValues) => {
    await new Promise(r => setTimeout(r, 600))
    setSubmitted(true)
    reset()
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <main className='min-h-screen'>
      <PageHeroStatic
        eyebrow="Let's talk"
        title='Get in Touch with Us'
        highlight='Touch'
        description='Have a question or ready to start your transformation? Our team responds within one business day.'
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
        centered
      />

      <section className='relative pb-16 md:pb-24'>
        <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14'>
            {contactInfo.map(({ icon: Icon, label, value, href }) => {
              const inner = (
                <>
                  <div className='inline-flex p-3 rounded-xl icon-tile mb-4'>
                    <Icon className='w-5 h-5' aria-hidden />
                  </div>
                  <h3 className='font-display font-semibold text-foreground mb-1'>{label}</h3>
                  <p className='text-muted-foreground text-sm'>{value}</p>
                </>
              )
              return href ? (
                <a
                  key={label}
                  href={href}
                  className='p-6 rounded-2xl glass card-hover text-center block min-h-11'
                  {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {inner}
                </a>
              ) : (
                <div key={label} className='p-6 rounded-2xl glass text-center'>
                  {inner}
                </div>
              )
            })}
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            <div className='glass rounded-2xl p-7 md:p-9'>
              <h2 className='font-display text-2xl font-bold text-foreground mb-1'>Send us a message</h2>
              <p className='text-muted-foreground text-sm mb-7'>We&apos;d love to hear about your project.</p>

              {submitted && (
                <div className='mb-6 flex items-center gap-2 rounded-lg bg-primary/10 text-primary px-4 py-3 text-sm'>
                  <CheckCircle2 className='w-4 h-4 shrink-0' aria-hidden />
                  Thank you! We&apos;ll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className='space-y-5' noValidate>
                <div className='grid sm:grid-cols-2 gap-5'>
                  <div className='space-y-2'>
                    <Label htmlFor='contact-name'>Full name *</Label>
                    <Input id='contact-name' {...register('name')} placeholder='John Doe' />
                    {errors.name && <p className='text-destructive text-xs'>{errors.name.message}</p>}
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='contact-email'>Email *</Label>
                    <Input id='contact-email' type='email' {...register('email')} placeholder='you@company.com' />
                    {errors.email && <p className='text-destructive text-xs'>{errors.email.message}</p>}
                  </div>
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='contact-company'>Company</Label>
                  <Input id='contact-company' {...register('company')} placeholder='Your organization' />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='contact-message'>Message *</Label>
                  <Textarea
                    id='contact-message'
                    {...register('message')}
                    rows={5}
                    placeholder='Tell us about your project...'
                  />
                  {errors.message && <p className='text-destructive text-xs'>{errors.message.message}</p>}
                </div>
                <Button type='submit' disabled={isSubmitting} className='min-h-11 w-full sm:w-auto'>
                  {isSubmitting ? 'Sending...' : 'Send message'}
                </Button>
              </form>
            </div>

            <div className='rounded-2xl overflow-hidden border border-border min-h-75'>
              <GoogleMapEmbed />
            </div>
          </div>

          <p className='mt-8 text-center text-sm text-muted-foreground'>
            Prefer email?{' '}
            <Link href={`mailto:${siteConfig.email}`} className='text-primary hover:underline'>
              {siteConfig.email}
            </Link>
          </p>
        </div>
      </section>
    </main>
  )
}
