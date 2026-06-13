export function RecognitionSkeleton() {
  return (
    <section className='py-16 md:py-24' aria-hidden>
      <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
        <div className='h-8 w-48 bg-muted rounded-lg mx-auto mb-4 animate-pulse' />
        <div className='h-10 w-72 bg-muted rounded-lg mx-auto mb-12 animate-pulse' />
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className='h-80 bg-muted rounded-2xl animate-pulse' />
          ))}
        </div>
      </div>
    </section>
  )
}
