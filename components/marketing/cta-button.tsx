import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

type CtaButtonProps = {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'outline' | 'ghost'
  className?: string
  size?: 'default' | 'sm' | 'lg'
}

export function CtaButton({ href, children, variant = 'primary', className, size = 'default' }: CtaButtonProps) {
  const buttonVariant = variant === 'outline' ? 'outline' : variant === 'ghost' ? 'ghost' : 'default'

  return (
    <Button
      asChild
      variant={buttonVariant}
      size={size}
      className={cn(variant === 'primary' && 'shadow-md shadow-primary/20', 'min-h-11', className)}
    >
      <Link href={href}>{children}</Link>
    </Button>
  )
}
