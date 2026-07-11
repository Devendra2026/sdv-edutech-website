// 'use client'

// import { galleryImages } from '@/lib/site-content'
// import { X } from 'lucide-react'
// import Image from 'next/image'
// import { useEffect, useRef, useState } from 'react'

// export function GalleryGrid() {
//   const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
//   const dialogRef = useRef<HTMLDialogElement>(null)
//   const selected = selectedIndex !== null ? galleryImages[selectedIndex] : null

//   useEffect(() => {
//     const dialog = dialogRef.current
//     if (!dialog) return

//     if (selectedIndex !== null) {
//       if (!dialog.open) {
//         dialog.showModal()
//       }
//       return
//     }

//     if (dialog.open) {
//       dialog.close()
//     }
//   }, [selectedIndex])

//   return (
//     <>
//       <section className='relative py-16 md:py-24'>
//         <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
//           <div className='text-center mb-12'>
//             <span className='eyebrow-chip'>Gallery</span>
//             <h1 className='mt-4 font-display text-3xl md:text-4xl font-bold text-foreground'>Project Gallery</h1>
//             <p className='mt-4 text-muted-foreground max-w-2xl mx-auto'>
//               Highlights from our field work, certifications, and enterprise deployments.
//             </p>
//           </div>
//           <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
//             {galleryImages.map((item, index) => (
//               <button
//                 key={item.image}
//                 type='button'
//                 onClick={() => setSelectedIndex(index)}
//                 className='relative aspect-square rounded-xl overflow-hidden border border-border/70 bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer group'
//                 aria-label={`View ${item.title}`}
//               >
//                 <Image
//                   src={item.image}
//                   alt={item.title}
//                   fill
//                   className='object-cover transition-transform duration-300 group-hover:scale-105 motion-reduce:group-hover:scale-100'
//                   sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw'
//                 />
//               </button>
//             ))}
//           </div>
//         </div>
//       </section>

//       {selected && (
//         <dialog
//           ref={dialogRef}
//           onClose={() => setSelectedIndex(null)}
//           className='fixed inset-0 z-50 m-0 flex h-full max-h-none w-full max-w-none items-center justify-center border-0 bg-foreground/85 p-4 backdrop:bg-foreground/85'
//         >
//           <div className='relative max-w-5xl w-full aspect-4/3 rounded-xl overflow-hidden bg-card'>
//             <Image
//               src={selected.image}
//               alt={selected.title}
//               fill
//               className='object-contain'
//               sizes='(max-width: 1024px) 100vw, 1024px'
//             />
//             <button
//               type='button'
//               onClick={() => setSelectedIndex(null)}
//               className='absolute top-3 right-3 p-2 rounded-full bg-foreground/70 text-background min-h-11 min-w-11 flex items-center justify-center'
//               aria-label='Close gallery'
//             >
//               <X className='w-5 h-5' />
//             </button>
//           </div>
//         </dialog>
//       )}
//     </>
//   )
// }
'use client'

import { galleryImages } from '@/lib/site-content'
import { X } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export function GalleryGrid() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const selected = selectedIndex !== null ? galleryImages[selectedIndex] : null

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (selectedIndex !== null) {
      if (!dialog.open) {
        dialog.showModal()
      }
      return
    }

    if (dialog.open) {
      dialog.close()
    }
  }, [selectedIndex])

  return (
    <>
      <section className='relative py-16 md:py-24'>
        <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <span className='eyebrow-chip'>Gallery</span>
            <h1 className='mt-4 font-display text-3xl md:text-4xl font-bold text-foreground'>Project Gallery</h1>
            <p className='mt-4 text-muted-foreground max-w-2xl mx-auto'>
              Highlights from our field work, certifications, and enterprise deployments.
            </p>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            {galleryImages.map((item, index) => (
              <button
                key={item.image}
                type='button'
                onClick={() => setSelectedIndex(index)}
                className='relative aspect-square rounded-xl overflow-hidden border border-border/70 bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer group'
                aria-label={`View ${item.title}`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  unoptimized // 👈 External / Private IP restriction bypass karne ke liye
                  className='object-cover transition-transform duration-300 group-hover:scale-105 motion-reduce:group-hover:scale-100'
                  sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw'
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {selected && (
        <dialog
          ref={dialogRef}
          onClose={() => setSelectedIndex(null)}
          className='fixed inset-0 z-50 m-0 flex h-full max-h-none w-full max-w-none items-center justify-center border-0 bg-foreground/85 p-4 backdrop:bg-foreground/85'
        >
          <div className='relative max-w-5xl w-full aspect-4/3 rounded-xl overflow-hidden bg-card'>
            <Image
              src={selected.image}
              alt={selected.title}
              fill
              unoptimized // 👈 Modal me full-size view bypass karne ke liye
              className='object-contain'
              sizes='(max-width: 1024px) 100vw, 1024px'
            />
            <button
              type='button'
              onClick={() => setSelectedIndex(null)}
              className='absolute top-3 right-3 p-2 rounded-full bg-foreground/70 text-background min-h-11 min-w-11 flex items-center justify-center cursor-pointer'
              aria-label='Close gallery'
            >
              <X className='w-5 h-5' />
            </button>
          </div>
        </dialog>
      )}
    </>
  )
}
