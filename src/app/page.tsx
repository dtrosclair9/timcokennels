import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SITE, STAGES } from '@/lib/site'
import { StatBar, PhotoStrip, CtaBand, AreaBand, RetrieverMark } from '@/components/Sections'

export const metadata: Metadata = {
  title: `${SITE.name} | Retriever Board-and-Train in Thibodaux, LA`,
  description:
    'TIMCO Kennels turns Labs and retrievers into finished gun dogs — basic obedience through advanced retriever work, duck-blind etiquette and hand signals. Board-and-train in Thibodaux, LA. 10 runs. Call 985.665.7298.',
  alternates: { canonical: SITE.baseUrl },
  openGraph: {
    title: `${SITE.name} | Retriever Board-and-Train in Thibodaux, LA`,
    description: 'Labrador and retriever board-and-train in Thibodaux, LA. Obedience through advanced retriever work. Call 985.665.7298.',
    url: SITE.baseUrl,
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'AnimalTrainingBusiness'],
      '@id': `${SITE.baseUrl}/#business`,
      name: SITE.legalName,
      alternateName: SITE.name,
      description:
        'Labrador and retriever board-and-train in Thibodaux, Louisiana — basic obedience through advanced retriever work, duck-blind etiquette, and hand signals.',
      url: SITE.baseUrl,
      telephone: SITE.phoneRaw,
      email: SITE.email,
      image: `${SITE.baseUrl}/images/retriever-hero-boat.jpg`,
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: SITE.address.street,
        addressLocality: SITE.address.city,
        addressRegion: SITE.address.region,
        postalCode: SITE.address.postal,
        addressCountry: SITE.address.country,
      },
      geo: { '@type': 'GeoCoordinates', latitude: SITE.geo.lat, longitude: SITE.geo.lng },
      areaServed: SITE.serviceArea.cities.map((c) => ({ '@type': 'City', name: c })),
      foundingDate: String(SITE.established),
      knowsAbout: ['Retriever training', 'Gun dog training', 'Duck dog training', 'Labrador board and train'],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE.baseUrl}/#website`,
      url: SITE.baseUrl,
      name: SITE.name,
      publisher: { '@id': `${SITE.baseUrl}/#business` },
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* HERO */}
      <section className="relative bg-primary text-white overflow-hidden" aria-label="Hero">
        <div className="absolute inset-0">
          <Image
            src="/images/retriever-sunset-1.jpg"
            alt="Three Labrador retrievers running across a field at sunset in the Louisiana Bayou Region"
            fill
            priority
            className="object-cover opacity-45"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary/30" />
        </div>

        <div className="relative container-wide py-28 md:py-40 lg:py-44">
          <p className="section-label text-accent-light">{SITE.address.city}, {SITE.address.region} · Board-and-Train</p>
          <h1 className="heading-hero text-white mt-5 max-w-4xl text-balance">
            Finished<br />
            <span className="text-accent-light">retrievers</span><br />
            for the blind.
          </h1>
          <p className="lede text-gray-200 mt-7 max-w-xl">
            TIMCO Kennels takes Labs and retrievers from basic obedience all the way
            to advanced field work — hand signals, blind retrieves, and duck-blind
            etiquette. {SITE.runs} runs, hands-on training, daily field work.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-accent text-sm">Ask About Openings</Link>
            <Link href="/program" className="btn-outline-light text-sm">See the Program</Link>
          </div>
        </div>

        <StatBar
          items={[
            { label: 'Programs', value: SITE.programRange },
            { label: 'Kennel Runs', value: String(SITE.runs) },
            { label: 'HQ', value: `${SITE.address.city}, ${SITE.address.region}` },
            { label: 'Insured', value: 'Crew + Equipment' },
          ]}
        />
      </section>

      {/* PROGRAM TEASER */}
      <section className="section-padding bg-gray-50" aria-labelledby="program-heading">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="flex justify-center mb-5"><RetrieverMark tone="field" className="h-14" /></div>
            <p className="section-label">The Program</p>
            <h2 id="program-heading" className="heading-xl text-primary mt-3 text-balance">
              Three stages. One finished dog.
            </h2>
            <p className="lede mt-5">
              The board-and-train moves through three stages — start to finish, on a {SITE.programRange.toLowerCase()} program depending on the dog and the goal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STAGES.map((s) => (
              <article key={s.key} className="bg-white border-t-4 border-accent p-8 shadow-sm">
                <p className="font-display text-5xl text-accent/30 font-bold">{s.n}</p>
                <h3 className="heading-sm text-primary mt-2">{s.title}</h3>
                <p className="text-sm text-gray-700 mt-3 leading-relaxed">{s.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/program" className="btn-ghost">
              Full program details
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* FACILITY SPLIT */}
      <section className="section-padding bg-white" aria-labelledby="facility-heading">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/kennel-hero.jpg"
                alt="Labradors in a fenced yard with a utility vehicle at TIMCO Kennels in Thibodaux, Louisiana"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
            </div>
            <div className="lg:col-span-6">
              <p className="section-label">The Facility</p>
              <h2 id="facility-heading" className="heading-xl text-primary mt-3 max-w-md text-balance">
                {SITE.runs} runs. One {SITE.address.city} HQ.
              </h2>
              <p className="text-gray-700 mt-6 leading-relaxed">
                Your dog boards and trains at our {SITE.address.street} headquarters — the
                same property where the crew is on site every day. Daily field and water
                work on rural ground nearby, not a back-yard hobby setup. Drop-offs and
                pick-ups by appointment.
              </p>
              <div className="mt-8">
                <Link href="/facility" className="btn-outline-dark text-xs">See the Facility</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PhotoStrip
        label="The Dogs"
        heading="What a finished retriever looks like."
        photos={[
          { src: '/images/retriever-hero-boat.jpg', alt: 'Two retrievers riding in a boat through a Louisiana bayou' },
          { src: '/images/kennel-black-lab-alert.jpg', alt: 'A black Lab sitting alert on the grass at TIMCO Kennels' },
          { src: '/images/kennel-lab-chair-1.jpg', alt: 'A yellow Lab on a bench by a split-rail fence at the kennel' },
          { src: '/images/kennel-yellow-lab-hallway.jpg', alt: 'A yellow Lab on a bench by the TIMCO Kennels building' },
          { src: '/images/retriever-puppy-sweet.jpg', alt: 'A young retriever in the clover looking at the camera' },
          { src: '/images/kennel-three-labs-picnic.jpg', alt: 'Labradors gathered on the grounds at TIMCO Kennels' },
        ]}
      />

      {/* ABOUT SNIPPET */}
      <section className="section-padding bg-gray-50" aria-labelledby="about-heading">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative aspect-[4/5] overflow-hidden order-2 lg:order-1">
              <Image
                src="/images/kennel-three-labs.jpg"
                alt="Three Labradors — golden, yellow, and cream — sitting together on a bench at TIMCO Kennels"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 40vw"
              />
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2">
              <p className="section-label">About TIMCO Kennels</p>
              <h2 id="about-heading" className="heading-xl text-primary mt-3 max-w-lg text-balance">
                Hands-on training. Every day.
              </h2>
              <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
                <p>
                  TIMCO Kennels is owned by <strong className="text-primary">{SITE.owner}</strong> out of {SITE.address.city} —
                  a board-and-train built for hunters and gun-dog owners who want a finished
                  retriever, not a weekend obedience class.
                </p>
                <p>
                  Every dog gets consistent, hands-on training start to finish. We don&apos;t breed or sell
                  pups — we take the dog you already love and turn them into a partner you can run
                  in the field and the blind.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/about" className="btn-outline-dark text-xs">Meet Tim</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AreaBand />

      <CtaBand
        heading="Got a dog ready to work?"
        body="Send your dog's age, where they're at on obedience and retrieving, and what you want them doing by season. We'll follow up about current openings and program fit."
        note={`Insured · ${SITE.runs} runs · Programs run ${SITE.programRange}`}
      />
    </>
  )
}
