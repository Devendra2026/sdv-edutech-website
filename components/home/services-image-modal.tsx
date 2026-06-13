'use client'

import { AnimatePresence, motion } from '@/lib/motion'
import { X } from 'lucide-react'
import Image from 'next/image'

type ServicesImageModalProps = {
  image: string | null
  alt: string
  onClose: () => void
}

export function ServicesImageModal({ image, alt, onClose }: ServicesImageModalProps) {
  return (
    <AnimatePresence>
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4'
          onClick={onClose}
          role='dialog'
          aria-modal='true'
          aria-label='Service image preview'
        >
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
            className='relative max-w-4xl w-full aspect-video rounded-xl overflow-hidden bg-card'
            onClick={e => e.stopPropagation()}
          >
            <Image src={image} alt={alt} fill className='object-cover' sizes='(max-width: 896px) 100vw, 896px' />
            <button
              type='button'
              onClick={onClose}
              className='absolute top-3 right-3 p-2 rounded-full bg-foreground/70 text-background hover:bg-foreground transition-colors min-h-11 min-w-11 flex items-center justify-center'
              aria-label='Close preview'
            >
              <X className='w-5 h-5' />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
