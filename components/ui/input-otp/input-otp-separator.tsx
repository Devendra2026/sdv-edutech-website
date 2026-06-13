'use client'

import { MinusIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function InputOTPSeparator({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div data-slot='input-otp-separator' aria-hidden='true' className={cn('flex items-center', className)} {...props}>
      <hr className='sr-only' />
      <MinusIcon />
    </div>
  )
}

export { InputOTPSeparator }
