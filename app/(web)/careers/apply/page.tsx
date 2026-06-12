'use client'

// import Footer from '@/components/layout/footer'
// import Header from '@/components/layout/header'
import { motion } from '@/lib/motion'
import { ArrowLeft, CheckCircle, Upload } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

export default function CareersApplyPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    resume: '',
    coverLetter: '',
    linkedin: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const positions = [
    'Senior Software Engineer',
    'GIS Specialist',
    'Project Manager',
    'Data Analyst',
    'Solutions Architect',
    'QA Engineer',
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setSubmitted(true)
    }, 1000)
  }

  if (submitted) {
    return (
      <main className='min-h-screen bg-background'>
        {/* <Header /> */}
        <section className='py-24 md:py-32'>
          <div className='max-w-2xl mx-auto px-4 md:px-6'>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className='text-center space-y-6'
            >
              <div className='flex justify-center'>
                <div className='w-16 h-16 bg-green-50 rounded-full flex items-center justify-center'>
                  <CheckCircle className='w-8 h-8 text-green-600' />
                </div>
              </div>
              <div>
                <h1 className='text-3xl md:text-4xl font-bold text-foreground mb-3'>Application Submitted</h1>
                <p className='text-lg text-muted-foreground mb-8'>
                  Thank you for your interest in joining SDV EDUTECH. We&apos;ve received your application and will
                  review it shortly. Our team will contact you within 5-7 business days.
                </p>
              </div>
              <Link
                href='/careers'
                className='inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:bg-muted transition-colors text-foreground font-medium'
              >
                <ArrowLeft className='w-4 h-4' />
                Back to Careers
              </Link>
            </motion.div>
          </div>
        </section>
        {/* <Footer /> */}
      </main>
    )
  }

  return (
    <main className='min-h-screen bg-background'>
      {/* <Header /> */}

      {/* Hero Section */}
      <section className='py-12 md:py-16 border-b border-border'>
        <div className='max-w-4xl mx-auto px-4 md:px-6'>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link
              href='/careers'
              className='inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6 font-medium text-sm'
            >
              <ArrowLeft className='w-4 h-4' />
              Back to Careers
            </Link>
            <h1 className='text-4xl md:text-5xl font-bold text-foreground mb-4'>Apply Now</h1>
            <p className='text-lg text-muted-foreground'>
              Join our team and help us transform enterprises through innovative technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className='py-16 md:py-24'>
        <div className='max-w-2xl mx-auto px-4 md:px-6'>
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            onSubmit={handleSubmit}
            className='space-y-8'
          >
            {/* Personal Information */}
            <div>
              <h2 className='text-lg font-semibold text-foreground mb-6'>Personal Information</h2>
              <div className='space-y-5'>
                <div>
                  <label htmlFor='apply-full-name' className='block text-sm font-medium text-foreground mb-2'>
                    Full Name *
                  </label>
                  <input
                    id='apply-full-name'
                    type='text'
                    name='fullName'
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-2.5 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-foreground placeholder-muted-foreground'
                    placeholder='John Doe'
                  />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                  <div>
                    <label htmlFor='apply-email' className='block text-sm font-medium text-foreground mb-2'>
                      Email Address *
                    </label>
                    <input
                      id='apply-email'
                      type='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className='w-full px-4 py-2.5 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-foreground placeholder-muted-foreground'
                      placeholder='john@example.com'
                    />
                  </div>
                  <div>
                    <label htmlFor='apply-phone' className='block text-sm font-medium text-foreground mb-2'>
                      Phone Number *
                    </label>
                    <input
                      id='apply-phone'
                      type='tel'
                      name='phone'
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className='w-full px-4 py-2.5 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-foreground placeholder-muted-foreground'
                      placeholder='+91 98765 43210'
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor='apply-linkedin' className='block text-sm font-medium text-foreground mb-2'>
                    LinkedIn Profile
                  </label>
                  <input
                    id='apply-linkedin'
                    type='url'
                    name='linkedin'
                    value={formData.linkedin}
                    onChange={handleChange}
                    className='w-full px-4 py-2.5 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-foreground placeholder-muted-foreground'
                    placeholder='https://linkedin.com/in/johndoe'
                  />
                </div>
              </div>
            </div>

            {/* Position Information */}
            <div className='pt-4'>
              <h2 className='text-lg font-semibold text-foreground mb-6'>Position Details</h2>
              <div className='space-y-5'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                  <div>
                    <label className='block text-sm font-medium text-foreground mb-2'>Position Applied For *</label>
                    <select
                      name='position'
                      value={formData.position}
                      onChange={handleChange}
                      required
                      className='w-full px-4 py-2.5 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-foreground'
                    >
                      <option value=''>Select a position</option>
                      {positions.map(pos => (
                        <option key={pos} value={pos}>
                          {pos}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-foreground mb-2'>Years of Experience *</label>
                    <select
                      name='experience'
                      value={formData.experience}
                      onChange={handleChange}
                      required
                      className='w-full px-4 py-2.5 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-foreground'
                    >
                      <option value=''>Select range</option>
                      <option value='0-2'>0-2 years</option>
                      <option value='2-5'>2-5 years</option>
                      <option value='5-10'>5-10 years</option>
                      <option value='10+'>10+ years</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Application Details */}
            <div className='pt-4'>
              <h2 className='text-lg font-semibold text-foreground mb-6'>Application Details</h2>
              <div className='space-y-5'>
                <div>
                  <label htmlFor='apply-resume' className='block text-sm font-medium text-foreground mb-2'>
                    Resume / CV *
                  </label>
                  <label
                    htmlFor='apply-resume'
                    className='block border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer'
                  >
                    <Upload className='w-6 h-6 text-muted-foreground mx-auto mb-3' />
                    <p className='text-sm text-foreground mb-1'>Click to upload or drag and drop</p>
                    <p className='text-xs text-muted-foreground'>PDF, DOC up to 10MB</p>
                    <input
                      id='apply-resume'
                      type='file'
                      name='resume'
                      onChange={handleChange}
                      required
                      className='hidden'
                      accept='.pdf,.doc,.docx'
                    />
                  </label>
                </div>

                <div>
                  <label htmlFor='apply-cover-letter' className='block text-sm font-medium text-foreground mb-2'>
                    Cover Letter
                  </label>
                  <textarea
                    id='apply-cover-letter'
                    name='coverLetter'
                    value={formData.coverLetter}
                    onChange={handleChange}
                    rows={5}
                    className='w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-foreground placeholder-muted-foreground resize-none'
                    placeholder="Tell us why you'd be a great fit for this role..."
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className='pt-4'>
              <button
                type='submit'
                disabled={isLoading}
                className='w-full px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all'
              >
                {isLoading ? 'Submitting...' : 'Submit Application'}
              </button>
              <p className='text-xs text-muted-foreground text-center mt-4'>
                By submitting, you agree to our terms and acknowledge our privacy policy.
              </p>
            </div>
          </motion.form>
        </div>
      </section>

      {/* <Footer /> */}
    </main>
  )
}
