'use client'

import { type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

import { inputGroupAddonVariants } from './input-group-variants'

function InputGroupAddon({
  className,
  align = 'inline-start',
  ...props
}: React.ComponentProps<'label'> & VariantProps<typeof inputGroupAddonVariants>) {
  return (
    <label
      data-slot='input-group-addon'
      data-align={align}
      className={cn(inputGroupAddonVariants({ align }), className)}
      onMouseDown={e => {
        if ((e.target as HTMLElement).closest('button')) {
          return
        }
        e.preventDefault()
        e.currentTarget.parentElement?.querySelector<HTMLElement>('[data-slot=input-group-control]')?.focus()
      }}
      {...props}
    />
  )
}

export { InputGroupAddon }
