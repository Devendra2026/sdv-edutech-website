import { SectionShell } from '@/components/marketing/section-shell'
import { StatCard } from '@/components/marketing/stat-card'
import { aboutStats } from '@/lib/site-content'
import { Award, Globe, Users } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: 'MSME Certified',
    description:
      'Recognized as a registered MSME, ensuring compliance, credibility, and quality-driven service delivery.',
  },
  {
    icon: Globe,
    title: 'PAN India Presence',
    description:
      'Extensive service coverage across India with experience in government, corporate, and institutional projects.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Highly skilled professionals delivering reliable, scalable, and innovative technology solutions.',
  },
]

export default function AboutSection() {
  return (
    <SectionShell className='overflow-hidden'>
      <div
        className='absolute inset-0 bg-linear-to-b from-background via-muted/30 to-background pointer-events-none'
        aria-hidden
      />

      <div className='relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
        <div>
          <span className='eyebrow-chip'>Who We Are</span>
          <h2 className='mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight'>
            About Sdv Edutech
          </h2>
          <p className='mt-4 text-xl font-semibold text-primary'>Your Ideal Partner for Technology Solutions</p>
          <p className='mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-prose'>
            Sdv Edutech Private Limited is your trusted partner for integrated digital and technology solutions,
            delivering end-to-end services across AI-enabled IT systems, GIS & smart surveying, intelligent data
            digitization, project consultancy, and capacity building.
          </p>
          <p className='mt-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-prose'>
            We collaborate closely with government bodies and corporate organizations to design and deploy scalable,
            secure, and high-performance solutions.
          </p>
        </div>

        <div className='grid grid-cols-2 gap-4 md:gap-6'>
          {aboutStats.map(stat => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>

      <div className='relative mt-16 md:mt-24 grid gap-6 md:grid-cols-3'>
        {features.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className='rounded-2xl border border-border/70 bg-card p-6 md:p-8 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0'
          >
            <div className='mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10'>
              <Icon className='h-7 w-7 text-primary' aria-hidden />
            </div>
            <h3 className='font-display text-lg font-semibold text-foreground'>{title}</h3>
            <p className='mt-2 text-sm text-muted-foreground leading-relaxed'>{description}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  )
}
