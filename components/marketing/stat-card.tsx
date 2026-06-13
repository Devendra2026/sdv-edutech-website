import { cn } from '@/lib/utils'

type StatCardProps = {
  value: string
  label: string
  className?: string
}

export function StatCard({ value, label, className }: StatCardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-border/70 bg-card/80 backdrop-blur-sm p-6 md:p-8 shadow-sm',
        'transition-transform duration-300 hover:-translate-y-1 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0',
        className,
      )}
    >
      <p className='font-display text-3xl md:text-4xl font-bold text-primary'>{value}</p>
      <p className='mt-2 text-sm font-medium text-muted-foreground'>{label}</p>
    </div>
  )
}
