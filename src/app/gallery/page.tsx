import type { Metadata } from 'next'
import Image from 'next/image'
import { SITE } from '@/lib/site'
import { CtaBand } from '@/components/Sections'

export const metadata: Metadata = {
  title: 'Gallery – Retrievers & the Kennel in Thibodaux, LA',
  description:
    'Photos from TIMCO Kennels — Labradors and retrievers in training, the 10-run facility, and field and water work in the Louisiana Bayou Region.',
  alternates: { canonical: `${SITE.baseUrl}/gallery` },
  openGraph: {
    title: 'Gallery | TIMCO Kennels',
    description: 'Labradors, retrievers, and the kennel facility in Thibodaux, LA.',
    url: `${SITE.baseUrl}/gallery`,
  },
}

const photos = [
  { src: '/images/retriever-hero-boat.jpg', alt: 'Two retrievers riding in a boat through a Louisiana bayou' },
  { src: '/images/retriever-sunset-1.jpg', alt: 'Labradors in an open field at sunset in the Bayou Region' },
  { src: '/images/retriever-sunset-2.jpg', alt: 'Labradors out in a field at sunset' },
  { src: '/images/kennel-pack-action.jpg', alt: 'Several dogs out in a field by the fence line at TIMCO Kennels' },
  { src: '/images/kennel-hero.jpg', alt: 'Labradors in a fenced yard with a utility vehicle at TIMCO Kennels' },
  { src: '/images/kennel-three-labs.jpg', alt: 'Three Labradors — golden, yellow, and cream — sitting together on a bench' },
  { src: '/images/kennel-three-labs-picnic.jpg', alt: 'Labradors gathered on the grounds at the kennel' },
  { src: '/images/kennel-white-lab-bench.jpg', alt: 'A yellow Lab on a picnic table by the kennel shed in Thibodaux' },
  { src: '/images/kennel-black-lab-alert.jpg', alt: 'A black Lab sitting alert on the grass at TIMCO Kennels' },
  { src: '/images/kennel-yellow-lab-hallway.jpg', alt: 'A yellow Lab on a bench by the kennel building' },
  { src: '/images/kennel-lab-chair-1.jpg', alt: 'A yellow Lab on a bench by a split-rail fence at the kennel' },
  { src: '/images/kennel-lab-chair-2.jpg', alt: 'A black Lab on a raised platform in golden-hour light at the kennel' },
  { src: '/images/retriever-puppy-kennel.jpg', alt: 'A young retriever in the grass at the kennel' },
  { src: '/images/retriever-puppy-sweet.jpg', alt: 'A young retriever looking up at the camera in the clover' },
]

const schema = {
  '@context': 'https://schema.org',
  '@type': 'ImageGallery',
  name: `${SITE.name} Gallery`,
  url: `${SITE.baseUrl}/gallery`,
  description: 'Photos of Labradors, retrievers, and the kennel facility at TIMCO Kennels in Thibodaux, LA.',
  image: photos.map((p) => `${SITE.baseUrl}${p.src}`),
}

export default function GalleryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="bg-primary text-white">
        <div className="container-wide py-20">
          <p className="section-label text-accent-light">Gallery</p>
          <h1 className="heading-xl text-white mt-3 max-w-3xl text-balance">The dogs, the field, the kennel.</h1>
          <p className="lede text-gray-300 mt-5 max-w-2xl">
            Real dogs and real field work out of {SITE.address.city}. No stock photos — this is the kennel and the country these dogs train on.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {photos.map((p) => (
              <div key={p.src} className="relative aspect-square overflow-hidden bg-gray-100 group">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width:768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        heading="Want your dog in next season's photos?"
        body="Reach out about openings. Tell us where your dog is now and what you want him doing by opening day."
        note={`Insured · ${SITE.runs} runs · ${SITE.address.city}, ${SITE.address.region}`}
      />
    </>
  )
}
