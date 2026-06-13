import Image from 'next/image'
import Link from 'next/link'
import { SITE } from '@/lib/site'
import { CtaBand } from '@/components/Sections'

export type GunDogLandingData = {
  slug: string // e.g. 'gun-dog-training-louisiana'
  place: string // short name for headings/breadcrumb, e.g. 'Thibodaux' | 'Houma' | 'Louisiana'
  placeLabel: string // accent text in the H1, e.g. 'Thibodaux, LA' | 'Houma, LA' | 'Louisiana'
  region: string // hero sub-label, e.g. 'Lafourche Parish' | 'Terrebonne Parish' | 'Statewide'
  areaServedType: 'State' | 'City'
  areaServedName: string // 'Louisiana' | 'Thibodaux' | 'Houma'
  containedIn?: string // parish (cities only)
  serviceType: string // schema serviceType + breadcrumb service, e.g. 'Gun Dog Training' | 'Duck Dog Training'
  heroLead: string // H1 text before the accent place, e.g. 'Gun dog & retriever training'
  whyLabel: string // 'Why Thibodaux' | 'Why Louisiana'
  whyHeading: string
  whyBody: string
  metaTitle: string
  metaDescription: string
  intro: string
  hero: { image: string; alt: string }
  localContext: { heading: string; body: string }[]
  faqs: { q: string; a: string }[]
  ctaHeading: string
  ctaNote?: string
}

export function buildGunDogMetadata(d: GunDogLandingData) {
  const url = `${SITE.baseUrl}/${d.slug}`
  return {
    title: d.metaTitle, // root layout template appends " | TIMCO Kennels"
    description: d.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: `${d.metaTitle} | ${SITE.name}`,
      description: d.metaDescription,
      url,
    },
  }
}

export function GunDogLanding(d: GunDogLandingData) {
  const url = `${SITE.baseUrl}/${d.slug}`
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: `${d.serviceType} in ${d.place}`,
        description: d.intro,
        serviceType: 'Gun dog / retriever training',
        url,
        areaServed: {
          '@type': d.areaServedType,
          name: d.areaServedName,
          ...(d.containedIn ? { containedIn: d.containedIn } : {}),
        },
        provider: {
          '@type': ['LocalBusiness', 'AnimalTrainingBusiness'],
          name: SITE.legalName,
          telephone: SITE.phoneRaw,
          url: SITE.baseUrl,
          address: {
            '@type': 'PostalAddress',
            streetAddress: SITE.address.street,
            addressLocality: SITE.address.city,
            addressRegion: SITE.address.region,
            postalCode: SITE.address.postal,
            addressCountry: SITE.address.country,
          },
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
          { '@type': 'ListItem', position: 2, name: 'Program', item: `${SITE.baseUrl}/program` },
          { '@type': 'ListItem', position: 3, name: `${d.serviceType} in ${d.place}`, item: url },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: d.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="container-wide py-3 text-xs">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-gray-500 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-accent">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/program" className="hover:text-accent">Program</Link>
            <span aria-hidden="true">/</span>
            <span className="text-primary font-semibold">{d.serviceType} in {d.place}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-primary text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image src={d.hero.image} alt={d.hero.alt} fill priority className="object-cover opacity-40" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/40" />
        </div>
        <div className="relative container-wide py-24 md:py-32">
          <p className="section-label text-accent-light">{d.place} · {d.region}</p>
          <h1 className="heading-hero text-white mt-4 max-w-4xl text-balance">
            {d.heroLead} in<br /><span className="text-accent-light">{d.placeLabel}</span>.
          </h1>
          <p className="lede text-gray-200 mt-6 max-w-2xl">{d.intro}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-accent text-xs">Ask About Openings</Link>
            <a href={`tel:${SITE.phoneRaw}`} className="btn-outline-light text-xs">Call {SITE.phoneDisplay}</a>
          </div>
        </div>
      </section>

      {/* Local context */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <p className="section-label">{d.whyLabel}</p>
              <h2 className="heading-xl text-primary mt-3 text-balance">{d.whyHeading}</h2>
              <p className="text-gray-700 mt-6 leading-relaxed">{d.whyBody}</p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {d.localContext.map((c, i) => (
                <article key={c.heading} className="bg-gray-50 p-6 border-t-4 border-accent">
                  <p className="font-display text-3xl text-accent/30 font-bold">0{i + 1}</p>
                  <h3 className="heading-sm text-primary mt-2">{c.heading}</h3>
                  <p className="text-sm text-gray-700 mt-3 leading-relaxed">{c.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <p className="section-label">FAQ</p>
            <h2 className="heading-xl text-primary mt-3 text-balance">{d.placeLabel} questions, answered.</h2>
          </div>
          <div className="space-y-4">
            {d.faqs.map((f) => (
              <details key={f.q} className="bg-white border border-gray-200 group">
                <summary className="px-6 py-5 cursor-pointer list-none flex items-start justify-between gap-4 hover:bg-gray-50 transition-colors">
                  <span className="font-display font-semibold text-primary text-lg uppercase tracking-tight pr-4">{f.q}</span>
                  <svg className="w-5 h-5 text-accent shrink-0 mt-1 transition-transform group-open:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-sm text-gray-700 leading-relaxed">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        heading={d.ctaHeading}
        body="Send your dog's age, where they're at on obedience and retrieving, and your timeframe. We'll follow up about openings and which stage to start them in."
        note={d.ctaNote ?? `Insured · ${SITE.runs} runs · ${SITE.address.street}, ${SITE.address.city}`}
      />
    </>
  )
}
