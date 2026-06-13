export default function WebLoading() {
  return (
    <div className='min-h-[50vh] flex items-center justify-center' aria-live='polite' aria-busy='true'>
      <div className='flex flex-col items-center gap-4'>
        <div className='h-10 w-10 rounded-full border-2 border-primary border-t-transparent animate-spin motion-reduce:animate-none' />
        <p className='text-sm text-muted-foreground'>Loading...</p>
      </div>
    </div>
  )
}
