import { cn } from '@/lib/utils'

type SectionShellProps = {
  id?: string
  children: React.ReactNode
  className?: string
  innerClassName?: string
}

export function SectionShell({ id, children, className, innerClassName }: SectionShellProps) {
  return (
    <section id={id} className={cn('relative py-16 md:py-24', className)}>
      <div className={cn('relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8', innerClassName)}>{children}</div>
    </section>
  )
}
