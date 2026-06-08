'use client'

import Image from 'next/image'
import { useState } from 'react'

const galleryImages = [
  {
    title: '  - ',
    image: 'https://sdvedutech.com/public/site_setting_img/1751533990.jpeg',
  },
  {
    title: ' - ',
    image: 'https://sdvedutech.com/public/site_setting_img/1751535131.jpeg',
  },
  {
    title: ' - ',
    image: 'https://sdvedutech.com/public/site_setting_img/1751535503.jpeg',
  },
  {
    title: ' - ',
    image: 'https://sdvedutech.com/public/site_setting_img/1751537709.jpeg',
  },
  {
    title: ' -',
    image: 'https://sdvedutech.com/public/site_setting_img/1751612460.jpeg',
  },
  {
    title: ' - ',
    image: 'https://sdvedutech.com/public/site_setting_img/1751612517.jpeg',
  },
  {
    title: '  -  ',
    image: 'https://sdvedutech.com/public/site_setting_img/1751612545.jpeg',
  },
  {
    title: ' - ',
    image: 'https://sdvedutech.com/public/site_setting_img/1751612613.jpeg',
  },
  {
    title: '  -',
    image: 'https://sdvedutech.com/public/site_setting_img/1751612630.jpeg',
  },
  {
    title: ' - ',
    image: 'https://sdvedutech.com/public/site_setting_img/1751613787.jpeg',
  },
  {
    title: ' - ',
    image: 'https://sdvedutech.com/public/site_setting_img/1751625792.jpeg',
  },
  {
    title: ' - ',
    image: 'https://sdvedutech.com/public/site_setting_img/1751625808.jpeg',
  },
  {
    title: ' - ',
    image: 'https://sdvedutech.com/public/site_setting_img/1751625985.jpeg',
  },
  {
    title: ' - ',
    image: 'https://sdvedutech.com/public/site_setting_img/1751626415.jpeg',
  },
  {
    title: ' - ',
    image: 'https://sdvedutech.com/public/site_setting_img/1751627280.jpeg',
  },
  {
    title: '  - ',
    image: 'https://sdvedutech.com/public/site_setting_img/1755257001.jpeg',
  },
  {
    title: ' - ',
    image: 'https://sdvedutech.com/public/site_setting_img/1756969712.jpeg',
  },
  {
    title: ' - ',
    image: 'https://sdvedutech.com/public/site_setting_img/1756969757.jpeg',
  },
  {
    title: '  -  ',
    image: 'https://sdvedutech.com/public/site_setting_img/1756969787.jpeg',
  },
]

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <>
      <section className='relative overflow-hidden py-20 bg-gradient-to-b from-sky-50 via-white to-blue-50'>
        {/* Premium Grid Background */}
        <div
          className='absolute inset-0 opacity-50'
          style={{
            backgroundImage: `
              linear-gradient(rgba(59,130,246,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59,130,246,0.08) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Glow Effects */}
        <div className='absolute top-0 left-0 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl' />
        <div className='absolute top-40 right-0 w-96 h-96 bg-cyan-200/40 rounded-full blur-3xl' />
        <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-sky-100/40 rounded-full blur-3xl' />

        <div className='relative z-10 max-w-7xl mx-auto px-4'>
          {/* Section Header */}
          <div className='text-center mb-14'>
            <span className='inline-block px-4 py-1 text-sm font-semibold tracking-[3px] uppercase text-blue-600 bg-blue-100 rounded-full'>
              Gallery
            </span>

            <h2 className='mt-5 text-4xl md:text-5xl font-bold text-blue-900'>Photo Gallery</h2>

            <p className='mt-4 text-black-600 max-w-2xl mx-auto'>
              Explore memorable moments, events, workshops, awareness programs, and achievements through our gallery.
            </p>

            <div className='w-28 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mt-6' />
          </div>

          {/* Gallery Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {galleryImages.map(item => (
              <div
                key={item.image}
                onClick={() => setSelectedImage(item.image)}
                className='
                  group
                  cursor-pointer
                  bg-white/90
                  backdrop-blur-sm
                  rounded-3xl
                  overflow-hidden
                  border border-gray-200
                  shadow-md
                  hover:shadow-2xl
                  hover:-translate-y-2
                  transition-all
                  duration-500
                '
              >
                {/* Image */}
                <div className='relative h-72 overflow-hidden'>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className='
                      object-cover
                      group-hover:scale-110
                      transition-transform
                      duration-700
                    '
                  />

                  <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent' />
                </div>

                {/* Content */}
                <div className='p-5'>
                  <h3 className='text-center font-semibold text-gray-800 text-lg'>{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen Popup */}
      {selectedImage && (
        <div
          className='fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4'
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            type='button'
            onClick={() => setSelectedImage(null)}
            aria-label='Close image preview'
            className='
              absolute
              top-5
              right-6
              text-white
              text-5xl
              font-light
              hover:scale-110
              transition
            '
          >
            ×
          </button>

          {/* Image */}
          <div className='relative w-full max-w-7xl h-[85vh]' onClick={e => e.stopPropagation()}>
            <Image src={selectedImage} alt='Preview' fill className='object-contain' priority />
          </div>
        </div>
      )}
    </>
  )
}
