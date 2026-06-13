import { SectionShell } from '@/components/marketing/section-shell'
import { companyStats } from '@/lib/site-content'
import { Shield, TrendingUp, Users, Zap } from 'lucide-react'

const items = [
  {
    icon: TrendingUp,
    title: 'Scalable Solutions',
    description: 'Build systems that grow with your business needs and market demands.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Access industry-leading professionals with proven expertise.',
  },
  {
    icon: Zap,
    title: 'Fast Deployment',
    description: 'Rapid implementation with minimal disruption to operations.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security and compliance standards for all solutions.',
  },
  {
    icon: Shield,
    title: 'ISO Certified',
    description: 'ISO 9001:2015 certified — authenticated and verified quality management.',
  },
]

export default function TransformSection() {
  return (
    <SectionShell>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center'>
        <div className='space-y-8'>
          <div className='space-y-4'>
            <p className='eyebrow text-primary'>The SDV difference</p>
            <h2 className='font-display text-3xl md:text-4xl font-bold text-foreground'>
              Why Choose Sdv Edutech Private Limited?
            </h2>
            <p className='text-lg text-muted-foreground leading-relaxed max-w-prose'>
              We combine deep industry expertise with cutting-edge technology to deliver solutions that transform
              businesses and drive measurable results.
            </p>
          </div>

          <ul className='space-y-4'>
            {items.map(({ icon: Icon, title, description }) => (
              <li
                key={title}
                className='flex gap-4 p-4 rounded-xl border border-border/60 bg-card/50 animate-in fade-in slide-in-from-left-4 duration-500 motion-reduce:animate-none'
              >
                <div className='shrink-0 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary'>
                  <Icon className='w-6 h-6' aria-hidden />
                </div>
                <div>
                  <h3 className='font-semibold text-foreground'>{title}</h3>
                  <p className='mt-1 text-sm text-muted-foreground leading-relaxed'>{description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className='rounded-2xl border border-border/70 bg-card p-8 md:p-10 shadow-lg'>
          <p className='text-sm font-medium text-primary uppercase tracking-wide'>Impact at scale</p>
          <p className='mt-2 font-display text-2xl md:text-3xl font-bold text-foreground'>
            Trusted by {companyStats.enterpriseClients} clients
          </p>
          <p className='mt-4 text-muted-foreground leading-relaxed'>
            With {companyStats.yearsExperience} years of experience and {companyStats.projectsDelivered} projects
            delivered, we help organizations modernize operations and achieve sustainable growth.
          </p>
          <div className='mt-8 grid grid-cols-2 gap-4'>
            {[
              { v: companyStats.projectsDelivered, l: 'Projects' },
              { v: companyStats.enterpriseClients, l: 'Clients' },
              { v: companyStats.employees, l: 'Team members' },
              { v: companyStats.yearsExperience, l: 'Years' },
            ].map(panel => (
              <div key={panel.l} className='rounded-xl bg-muted/60 p-4 text-center'>
                <p className='font-display text-xl font-bold text-primary'>{panel.v}</p>
                <p className='text-xs text-muted-foreground mt-1'>{panel.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  )
}
