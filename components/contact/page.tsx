'use client'

import GoogleMapEmbed, { OFFICE_ADDRESS } from '@/components/shared/google-map-embed'
import PageHero from '@/components/shared/page-hero'
import { motion } from '@/lib/motion'
import { CheckCircle2, Clock, Mail, MapPin, Phone, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', company: '', message: '' })
    setTimeout(() => setSubmitted(false), 3500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const contactInfo = [
    { icon: <Phone className='w-5 h-5' />, label: 'Phone', value: '+91 90278 11488', href: 'tel:+919027811488' },

    {
      icon: <Mail className='w-5 h-5' />,
      label: 'Email',
      value: 'info@sdvedutech.in',
      href: 'mailto:info@sdvedutech.in',
    },
    {
      icon: <MapPin className='w-5 h-5' />,
      label: 'Office',
      value: 'Agra, Uttar Pradesh',
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(OFFICE_ADDRESS)}`,
    },
    { icon: <Clock className='w-5 h-5' />, label: 'Hours', value: 'Mon–Sat, 10 AM – 6 PM IST', href: '#' },
  ]

  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-border bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all'

  const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } }
  const item = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } }

  return (
    <main className='min-h-screen'>
      <PageHero
        eyebrow="Let's talk"
        title='Get in Touch with Us'
        highlight='Touch'
        description='Have a question or ready to start your transformation? Our team responds within one business day.'
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
        centered
      />

      <section className='relative pb-16 md:pb-24'>
        <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
          {/* Info cards */}
          <motion.div
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14'
            variants={container}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            {contactInfo.map(info => (
              <motion.a
                key={info.label}
                href={info.href}
                variants={item}
                className='p-6 rounded-2xl glass card-hover text-center group'
              >
                <div className='inline-flex p-3 rounded-xl icon-tile mb-4 group-hover:scale-105 transition-transform'>
                  {info.icon}
                </div>
                <h3 className='font-display font-semibold text-foreground mb-1'>{info.label}</h3>
                <p className='text-muted-foreground text-sm'>{info.value}</p>
              </motion.a>
            ))}
          </motion.div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch'>
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className='glass rounded-2xl p-7 md:p-9'
            >
              <h2 className='font-display text-2xl font-bold text-foreground mb-1'>Send us a Message</h2>
              <p className='text-muted-foreground text-sm mb-7'>We&apos;d love to hear about your project.</p>
              <form onSubmit={handleSubmit} className='space-y-5'>
                <div className='grid sm:grid-cols-2 gap-5'>
                  <div>
                    <label htmlFor='contact-name' className='block text-sm font-medium text-foreground mb-2'>
                      Full Name *
                    </label>
                    <input
                      id='contact-name'
                      type='text'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={inputClass}
                      placeholder='John Doe'
                    />
                  </div>
                  <div>
                    <label htmlFor='contact-email' className='block text-sm font-medium text-foreground mb-2'>
                      Email *
                    </label>
                    <input
                      id='contact-email'
                      type='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={inputClass}
                      placeholder='john@example.com'
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor='contact-company' className='block text-sm font-medium text-foreground mb-2'>
                    Company
                  </label>
                  <input
                    id='contact-company'
                    type='text'
                    name='company'
                    value={formData.company}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder='Your Company'
                  />
                </div>
                <div>
                  <label htmlFor='contact-message' className='block text-sm font-medium text-foreground mb-2'>
                    Message *
                  </label>
                  <textarea
                    id='contact-message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`${inputClass} resize-none`}
                    placeholder='Tell us about your project or inquiry...'
                  />
                </div>
                <motion.button
                  type='submit'
                  className='w-full px-6 py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25'
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message <Send className='w-4 h-4' />
                </motion.button>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className='p-4 rounded-xl bg-success/10 border border-success/30 text-foreground text-sm flex items-center gap-2'
                  >
                    <CheckCircle2 className='w-5 h-5 text-success shrink-0' />
                    Thank you for your message. We&apos;ll get back to you within one business day!
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Google Map */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className='flex flex-col gap-5'
            >
              <GoogleMapEmbed className='flex-1' />
              <div className='glass rounded-2xl p-6 flex items-center gap-4'>
                <div className='icon-tile p-3 w-12 h-12 shrink-0'>
                  <MapPin className='w-5 h-5' />
                </div>
                <div>
                  <h3 className='font-display font-semibold text-foreground'>Visit Us</h3>
                  <p className='text-muted-foreground text-sm'>{OFFICE_ADDRESS}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
