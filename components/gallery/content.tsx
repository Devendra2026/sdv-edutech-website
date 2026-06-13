import dynamic from 'next/dynamic'

const GalleryGrid = dynamic(() => import('./gallery-lightbox').then(m => ({ default: m.GalleryGrid })), {
  loading: () => (
    <section className='py-16'>
      <div className='max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4'>
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className='aspect-square bg-muted rounded-xl animate-pulse' />
        ))}
      </div>
    </section>
  ),
})

export default function PhotoGallery() {
  return (
    <main className='min-h-screen'>
      <GalleryGrid />
    </main>
  )
}
