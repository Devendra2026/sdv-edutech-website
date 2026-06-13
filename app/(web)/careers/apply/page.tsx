import { CareersApplyForm } from '@/components/careers/apply-form'
import { createPageMetadata } from '@/lib/metadata'

export const metadata = createPageMetadata({
  title: 'Apply for a Position',
  description: 'Submit your application to join the SDV Edutech team in engineering, GIS, and technology roles.',
  path: '/careers/apply',
})

export default function CareersApplyPage() {
  return (
    <main className='min-h-screen bg-background'>
      <CareersApplyForm />
    </main>
  )
}
