'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowLeft, CheckCircle, Upload } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const applySchema = z.object({
  fullName: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  phone: z.string().min(10, 'Valid phone required'),
  position: z.string().min(1, 'Select a position'),
  experience: z.string().min(1, 'Select experience range'),
  linkedin: z.union([z.string().url('Enter a valid URL'), z.literal('')]).optional(),
  coverLetter: z.string().optional(),
})

type ApplyFormValues = z.infer<typeof applySchema>

const positions = [
  'Senior Software Engineer',
  'GIS Specialist',
  'Project Manager',
  'Data Analyst',
  'Solutions Architect',
  'QA Engineer',
]

export function CareersApplyForm() {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ApplyFormValues>({
    resolver: zodResolver(applySchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      linkedin: '',
      coverLetter: '',
    },
  })

  const onSubmit = async (_data: ApplyFormValues) => {
    await new Promise(r => setTimeout(r, 800))
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className='py-24 md:py-32'>
        <div className='max-w-2xl mx-auto px-4 text-center space-y-6'>
          <div className='flex justify-center'>
            <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center'>
              <CheckCircle className='w-8 h-8 text-primary' aria-hidden />
            </div>
          </div>
          <h1 className='font-display text-3xl font-bold text-foreground'>Application Submitted</h1>
          <p className='text-muted-foreground'>
            Thank you for your interest. We&apos;ll review your application and contact you within 5–7 business days.
          </p>
          <Button asChild variant='outline' className='min-h-11'>
            <Link href='/careers'>
              <ArrowLeft className='w-4 h-4 mr-2' />
              Back to Careers
            </Link>
          </Button>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className='py-12 md:py-16 border-b border-border'>
        <div className='max-w-4xl mx-auto px-4'>
          <Link
            href='/careers'
            className='inline-flex items-center gap-2 text-primary hover:text-primary/80 text-sm font-medium min-h-11'
          >
            <ArrowLeft className='w-4 h-4' aria-hidden />
            Back to Careers
          </Link>
          <h1 className='mt-4 font-display text-4xl font-bold text-foreground'>Apply Now</h1>
          <p className='mt-3 text-muted-foreground'>
            Join our team and help transform enterprises through innovative technology.
          </p>
        </div>
      </section>

      <section className='py-16 md:py-24'>
        <form onSubmit={handleSubmit(onSubmit)} className='max-w-2xl mx-auto px-4 space-y-8' noValidate>
          <fieldset className='space-y-5'>
            <legend className='text-lg font-semibold text-foreground mb-4'>Personal information</legend>
            <div className='space-y-2'>
              <Label htmlFor='apply-full-name'>Full name *</Label>
              <Input id='apply-full-name' {...register('fullName')} />
              {errors.fullName && <p className='text-destructive text-xs'>{errors.fullName.message}</p>}
            </div>
            <div className='grid md:grid-cols-2 gap-5'>
              <div className='space-y-2'>
                <Label htmlFor='apply-email'>Email *</Label>
                <Input id='apply-email' type='email' {...register('email')} />
                {errors.email && <p className='text-destructive text-xs'>{errors.email.message}</p>}
              </div>
              <div className='space-y-2'>
                <Label htmlFor='apply-phone'>Phone *</Label>
                <Input id='apply-phone' type='tel' {...register('phone')} />
                {errors.phone && <p className='text-destructive text-xs'>{errors.phone.message}</p>}
              </div>
            </div>
            <div className='space-y-2'>
              <Label htmlFor='apply-linkedin'>LinkedIn profile</Label>
              <Input
                id='apply-linkedin'
                type='url'
                {...register('linkedin')}
                placeholder='https://linkedin.com/in/...'
              />
            </div>
          </fieldset>

          <fieldset className='space-y-5'>
            <legend className='text-lg font-semibold text-foreground mb-4'>Position details</legend>
            <div className='grid md:grid-cols-2 gap-5'>
              <div className='space-y-2'>
                <Label htmlFor='apply-position'>Position *</Label>
                <select
                  id='apply-position'
                  {...register('position')}
                  className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm'
                >
                  <option value=''>Select a position</option>
                  {positions.map(pos => (
                    <option key={pos} value={pos}>
                      {pos}
                    </option>
                  ))}
                </select>
                {errors.position && <p className='text-destructive text-xs'>{errors.position.message}</p>}
              </div>
              <div className='space-y-2'>
                <Label htmlFor='apply-experience'>Experience *</Label>
                <select
                  id='apply-experience'
                  {...register('experience')}
                  className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm'
                >
                  <option value=''>Select range</option>
                  <option value='0-2'>0–2 years</option>
                  <option value='2-5'>2–5 years</option>
                  <option value='5-10'>5–10 years</option>
                  <option value='10+'>10+ years</option>
                </select>
                {errors.experience && <p className='text-destructive text-xs'>{errors.experience.message}</p>}
              </div>
            </div>
          </fieldset>

          <fieldset className='space-y-5'>
            <legend className='text-lg font-semibold text-foreground mb-4'>Application details</legend>
            <div className='space-y-2'>
              <Label htmlFor='apply-resume'>Resume / CV *</Label>
              <label
                htmlFor='apply-resume'
                className='flex flex-col items-center border-2 border-dashed border-border rounded-lg p-8 cursor-pointer hover:border-primary/50 transition-colors'
              >
                <Upload className='w-6 h-6 text-muted-foreground mb-2' aria-hidden />
                <span className='text-sm text-muted-foreground'>PDF, DOC up to 10MB</span>
                <input id='apply-resume' type='file' className='sr-only' accept='.pdf,.doc,.docx' required />
              </label>
            </div>
            <div className='space-y-2'>
              <Label htmlFor='apply-cover-letter'>Cover letter</Label>
              <Textarea id='apply-cover-letter' rows={5} {...register('coverLetter')} />
            </div>
          </fieldset>

          <Button type='submit' disabled={isSubmitting} className='w-full min-h-11'>
            {isSubmitting ? 'Submitting...' : 'Submit application'}
          </Button>
          <p className='text-xs text-muted-foreground text-center'>
            By submitting, you agree to our{' '}
            <Link href='/terms-of-service' className='text-primary hover:underline'>
              terms
            </Link>{' '}
            and{' '}
            <Link href='/privacy-policy' className='text-primary hover:underline'>
              privacy policy
            </Link>
            .
          </p>
        </form>
      </section>
    </>
  )
}
