const OFFICE_ADDRESS = 'STPI, IT Park, Sector-D, Shahstripuram, Sikandra, Agra, Uttar Pradesh, India - 282007'

const embedSrc = `https://www.google.com/maps?q=${encodeURIComponent(OFFICE_ADDRESS)}&output=embed`
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(OFFICE_ADDRESS)}`

type GoogleMapEmbedProps = {
  className?: string
  title?: string
}

export default function GoogleMapEmbed({
  className = '',
  title = 'SDV Edutech office location on Google Maps',
}: GoogleMapEmbedProps) {
  return (
    <div className={`relative flex flex-col ${className}`}>
      <div className='relative w-full aspect-4/3 min-h-72 sm:min-h-80 glass rounded-2xl overflow-hidden border border-border/80 shadow-lg shadow-primary/5 ring-1 ring-primary/10'>
        <iframe
          title={title}
          src={embedSrc}
          className='absolute inset-0 w-full h-full border-0'
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          sandbox='allow-scripts allow-popups allow-popups-to-escape-sandbox allow-forms'
          allowFullScreen
        />
      </div>
      <a
        href={mapsUrl}
        target='_blank'
        rel='noopener noreferrer'
        className='mt-3 text-sm font-medium text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1'
      >
        Open in Google Maps
        <span aria-hidden>↗</span>
      </a>
    </div>
  )
}

export { OFFICE_ADDRESS, mapsUrl }
