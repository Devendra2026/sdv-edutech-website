import PhotoGallery from '@/components/gallery/content'
import { createPageMetadata } from '@/lib/metadata'

export const metadata = createPageMetadata({
  title: 'Gallery',
  description: 'Photo gallery of SDV Edutech projects, certifications, field work, and enterprise deployments.',
  path: '/gallery',
})

export default function GalleryPage() {
  return <PhotoGallery />
}
