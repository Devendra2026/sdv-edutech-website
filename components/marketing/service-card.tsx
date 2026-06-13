import { serviceHref, type ServiceSlug } from '@/lib/site-content'
import { cn } from '@/lib/utils'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

type ServiceCardProps = {
  slug: ServiceSlug
  title: string
  description: string
  image: string
  icon?: React.ReactNode
  onImageClick?: () => void
  className?: string
}

export function ServiceCard({ slug, title, description, image, icon, onImageClick, className }: ServiceCardProps) {
  return (
    <article
      className={cn(
        'group rounded-2xl border border-border/70 bg-card overflow-hidden shadow-sm',
        'transition-all duration-300 hover:shadow-lg hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0',
        className,
      )}
    >
      <button
        type='button'
        onClick={onImageClick}
        className='relative block w-full aspect-video overflow-hidden cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
        aria-label={`View ${title} image`}
      >
        <Image
          src={image}
          alt={title}
          fill
          className='object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
      </button>
      <div className='p-5 md:p-6 space-y-3'>
        <div className='flex items-start gap-3'>
          {icon && (
            <div className='shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary'>
              {icon}
            </div>
          )}
          <div className='flex-1 min-w-0'>
            <h3 className='font-display text-lg font-semibold text-foreground'>{title}</h3>
            <p className='mt-1.5 text-sm text-muted-foreground leading-relaxed line-clamp-3'>{description}</p>
          </div>
        </div>
        <Link
          href={serviceHref(slug)}
          className='inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors min-h-11'
        >
          Learn more
          <ArrowUpRight className='w-4 h-4' />
        </Link>
      </div>
    </article>
  )
}
