import Image from 'next/image'

type PageHeroImageProps = {
  src: string
  alt: string
  aspectClassName?: string
}

export function PageHeroImage({ src, alt, aspectClassName = 'aspect-5/4' }: PageHeroImageProps) {
  return (
    <div className='relative w-full max-w-lg mx-auto lg:mx-0 lg:ml-auto'>
      <div className='relative rounded-2xl overflow-hidden border border-border/80 shadow-xl bg-card'>
        <div className={`relative w-full ${aspectClassName}`}>
          <Image src={src} alt={alt} fill priority className='object-cover' sizes='(max-width: 1024px) 0px, 50vw' />
        </div>
      </div>
    </div>
  )
}

export function createPageHeroVisual(src: string, alt: string, aspectClassName?: string) {
  function PageHeroVisual() {
    return <PageHeroImage src={src} alt={alt} aspectClassName={aspectClassName} />
  }
  PageHeroVisual.displayName = 'PageHeroVisual'
  return PageHeroVisual
}
