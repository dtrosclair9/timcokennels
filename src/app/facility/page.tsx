import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SITE } from '@/lib/site'
import { PhotoStrip, CtaBand } from '@/components/Sections'

export const metadata: Metadata = {
  title: '10-Run Retriever Kennel & Facility in Thibodaux, LA',
  description:
    'TIMCO Kennels is a 10-run gun-dog board-and-train facility at 619 Hwy 308 in Thibodaux, LA — daily field and water work, someone on site every day, by appointment.',
  alternates: { canonical: `${SITE.baseUrl}/facility` },
  openGraph: {
    title: 'The Facility – TIMCO Kennels, Thibodaux, LA',
    description: '10 kennel runs at our Hwy 308 headquarters. Daily field and water work.',
    url: `${SITE.baseUrl}/facility`,
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'AnimalTrainingBusiness'],
  name: SITE.legalName,
  description: `${SITE.runs}-run gun-dog board-and-train facility in ${SITE.address.city}, ${SITE.address.region} — daily field and water work, someone on site every day.`,
  url: `${SITE.baseUrl}/facility`,
  telephone: SITE.phoneRaw,
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postal,
    addressCountry: SITE.address.country,
  },
  geo: { '@type': 'GeoCoordinates', latitude: SITE.geo.lat, longitude: SITE.geo.lng },
}

export default function FacilityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="relative bg-primary text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/kennel-runs.jpg" alt="Chain-link kennel runs at the TIMCO Kennels gun-dog facility in Thibodaux, Louisiana" fill priority className="object-cover opacity-40" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/40" />
        </div>
        <div className="relative container-wide py-24 md:py-32">
          <p className="section-label text-accent-light">{SITE.address.street}, {SITE.address.city}</p>
          <h1 className="heading-hero text-white mt-4 max-w-4xl text-balance">
            {SITE.runs} runs.<br /><span className="text-accent-light">One {SITE.address.city} HQ.</span>
          </h1>
          <p className="lede text-gray-200 mt-6 max-w-2xl">
            Your dog boards and trains at our {SITE.address.street} headquarters — the same
            property the crew works out of every day. Someone is on site, and your dog is
            never on the back burner.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-accent text-xs">Ask About Openings</Link>
            <Link href="/program" className="btn-outline-light text-xs">See the Program</Link>
          </div>
        </div>
      </section>

      {/* Detail split */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative aspect-[4/3] overflow-hidden">
              <Image src="/images/kennel-hero.jpg" alt="Labradors in a fenced yard with a utility vehicle at the TIMCO Kennels facility in Thibodaux" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
            </div>
            <div className="lg:col-span-6">
              <p className="section-label">On the Ground</p>
              <h2 className="heading-xl text-primary mt-3 text-balance max-w-md">A working setup, not a back yard.</h2>
              <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Ten kennel runs sized for active working Labs, with daily field and water work on
                  rural ground nearby. This is a training facility — dogs here are on a schedule, not
                  sitting in a crate waiting for the weekend.
                </p>
                <p>
                  Because the kennel shares the HQ with the rest of TIMCO, somebody is on the property
                  every day. Drop-offs and pick-ups are scheduled by appointment so we can walk you
                  through where your dog is in the program.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily routine */}
      <section className="section-padding bg-gray-50">
        <div className="container-wide">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <p className="section-label">A Day at TIMCO</p>
            <h2 className="heading-xl text-primary mt-3 text-balance">Every day moves the dog forward.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="bg-white p-8 border-t-4 border-accent shadow-sm">
              <h3 className="heading-sm text-primary">Morning</h3>
              <p className="text-sm text-gray-700 mt-3 leading-relaxed">
                Kennels cleaned, dogs fed and let out. Obedience and yard work while the ground is cool — the repetition that builds a steady dog.
              </p>
            </article>
            <article className="bg-white p-8 border-t-4 border-accent shadow-sm">
              <h3 className="heading-sm text-primary">Field &amp; water</h3>
              <p className="text-sm text-gray-700 mt-3 leading-relaxed">
                Marks, blinds, and water work on rural ground nearby — the real environment a Bayou Region dog will hunt, not a manicured yard.
              </p>
            </article>
            <article className="bg-white p-8 border-t-4 border-accent shadow-sm">
              <h3 className="heading-sm text-primary">Evening</h3>
              <p className="text-sm text-gray-700 mt-3 leading-relaxed">
                Dogs fed, runs cleaned, everyone settled. A calm, predictable routine keeps a working dog sharp through a months-long program.
              </p>
            </article>
          </div>
        </div>
      </section>

      <PhotoStrip
        label="The Facility"
        heading="Where your dog lives and learns."
        photos={[
          { src: '/images/kennel-four-labs.jpg', alt: 'Four Labradors lined up on the deck at the TIMCO Kennels facility' },
          { src: '/images/kennel-black-lab-alert.jpg', alt: 'A black Lab sitting alert on the grass at TIMCO Kennels' },
          { src: '/images/kennel-lab-chair-1.jpg', alt: 'A yellow Lab on a bench by a split-rail fence at the kennel' },
          { src: '/images/kennel-lab-chair-2.jpg', alt: 'A black Lab on a raised platform at the kennel' },
          { src: '/images/kennel-three-labs.jpg', alt: 'Three Labradors sitting together on a bench at TIMCO Kennels' },
          { src: '/images/kennel-yellow-lab-hallway.jpg', alt: 'A yellow Lab on a bench by the kennel building' },
        ]}
      />

      <CtaBand
        heading="Want to see where they'd stay?"
        body="Reach out to schedule a time. Tim can walk you through the runs, the routine, and where your dog would fit in the program."
        note={`${SITE.address.street}, ${SITE.address.city}, ${SITE.address.region} · By appointment`}
      />
    </>
  )
}
