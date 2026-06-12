import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SITE } from '@/lib/site'
import { AreaBand } from '@/components/Sections'

export const metadata: Metadata = {
  title: `About TIMCO Kennels – Meet ${SITE.owner}`,
  description: `${SITE.legalName} is a Labrador and retriever board-and-train run by ${SITE.owner} out of Thibodaux, Louisiana. One dedicated trainer per dog, obedience through advanced retriever work.`,
  alternates: { canonical: `${SITE.baseUrl}/about` },
  openGraph: {
    title: `About ${SITE.name} | Thibodaux, LA`,
    description: `Meet ${SITE.owner}, owner and trainer at ${SITE.name} — retriever board-and-train in Thibodaux, Louisiana.`,
    url: `${SITE.baseUrl}/about`,
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: `About ${SITE.legalName}`,
  url: `${SITE.baseUrl}/about`,
  description: `Learn about ${SITE.legalName} and owner ${SITE.owner}, a retriever board-and-train in Thibodaux, LA.`,
  mainEntity: {
    '@type': 'LocalBusiness',
    name: SITE.legalName,
    founder: {
      '@type': 'Person',
      name: SITE.owner,
      jobTitle: SITE.ownerTitle,
      address: {
        '@type': 'PostalAddress',
        addressLocality: SITE.address.city,
        addressRegion: SITE.address.region,
        addressCountry: SITE.address.country,
      },
    },
    foundingDate: String(SITE.established),
    url: SITE.baseUrl,
    telephone: SITE.phoneRaw,
  },
}

const values = [
  {
    title: 'One Trainer, One Dog',
    body: 'Your dog gets one dedicated trainer start to finish — not handed between staff. Consistency is how a dog learns, so the person who starts him is the person who finishes him.',
  },
  {
    title: 'Honest About the Dog',
    body: "We give you a straight read on where your dog is and how far he can go. If a goal isn't realistic on your timeline, we'll tell you before you commit, not after.",
  },
  {
    title: 'Built for the Blind',
    body: 'This is gun-dog training, not pet obedience. The standard is a dog you can actually run — steady to shot, reliable on marks, and capable of a blind retrieve.',
  },
]

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="bg-primary text-white">
        <div className="container-wide py-20 md:py-28">
          <p className="section-label text-accent-light">About</p>
          <h1 className="heading-xl text-white mt-3 max-w-3xl text-balance">
            One trainer. One {SITE.address.city} kennel.<br />On your dog every day.
          </h1>
          <p className="lede text-gray-300 mt-6 max-w-2xl">
            TIMCO Kennels is a Labrador and retriever board-and-train run by {SITE.owner} out of
            {' '}{SITE.address.street}, {SITE.address.city} — built for hunters who want a finished gun dog.
          </p>
        </div>
      </section>

      {/* Owner */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative aspect-[4/5] overflow-hidden">
              <Image src="/images/tim-portrait.jpg" alt={`${SITE.owner}, owner and trainer at TIMCO Kennels, with a young retriever`} fill className="object-cover" sizes="(max-width:1024px) 100vw, 40vw" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-6 text-white">
                <p className="section-label text-accent-light">{SITE.ownerTitle}</p>
                <p className="heading-md text-white mt-1">{SITE.owner}</p>
              </div>
            </div>
            <div className="lg:col-span-7">
              <p className="section-label">Meet the Trainer</p>
              <h2 className="heading-xl text-primary mt-3 max-w-xl text-balance">A gun-dog kennel, run like one.</h2>
              <div className="mt-6 space-y-5 text-gray-700 leading-relaxed">
                <p>
                  {SITE.owner} runs TIMCO Kennels the way a hunter wants his own dog handled — patient
                  on the foundation, demanding where it counts, and honest about what a dog needs to be
                  a real partner come the season.
                </p>
                <p>
                  Every dog in the program gets one trainer, start to finish, with daily field and water
                  work on the kind of rural ground a Bayou Region dog actually hunts. No revolving handlers,
                  no back-yard shortcuts.
                </p>
                <p>
                  TIMCO Kennels does not breed or sell puppies. We take the dog you already have and turn
                  him into a finished retriever — basic obedience, through basic retriever, through advanced.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-outline-dark text-xs">Work With Tim</Link>
                <a href={`tel:${SITE.phoneRaw}`} className="btn-ghost">{SITE.phoneDisplay} →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-wide">
          <div className="text-center mb-12 max-w-xl mx-auto">
            <p className="section-label">How TIMCO Trains</p>
            <h2 className="heading-xl text-primary mt-3 text-balance">Three things we don&apos;t compromise on.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <article key={v.title} className="bg-white p-8 border-t-4 border-accent shadow-sm">
                <p className="font-display text-5xl text-accent/40 font-bold">0{i + 1}</p>
                <h3 className="heading-sm text-primary mt-3">{v.title}</h3>
                <p className="text-sm text-gray-700 mt-3 leading-relaxed">{v.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <AreaBand />
    </>
  )
}
