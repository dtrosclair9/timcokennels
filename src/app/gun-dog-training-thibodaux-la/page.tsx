import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SITE } from '@/lib/site'
import { CtaBand } from '@/components/Sections'

const CITY = 'Thibodaux'
const PARISH = 'Lafourche Parish'
const SERVICE = 'Gun Dog & Retriever Training'
const SLUG = 'gun-dog-training-thibodaux-la'
const URL = `${SITE.baseUrl}/${SLUG}`

const intro =
  'TIMCO Kennels is a Thibodaux-based gun dog and retriever board-and-train working out of 619 Hwy 308. Basic obedience through advanced retriever — marks, blinds, hand signals, and duck-blind etiquette — for Lafourche Parish hunters who want a finished dog.'

export const metadata: Metadata = {
  title: `Gun Dog & Retriever Training in ${CITY}, LA – TIMCO Kennels`,
  description: intro,
  alternates: { canonical: URL },
  openGraph: {
    title: `Gun Dog & Retriever Training in ${CITY}, LA | TIMCO Kennels`,
    description: intro,
    url: URL,
  },
}

const localContext = [
  {
    heading: 'Built for Bayou Region hunting',
    body: 'Thibodaux dogs hunt flooded timber, marsh, and rice cuts — not a training field with clipped grass. We run marks, blinds, and water work on the kind of rural ground a Lafourche dog actually hunts, so what he learns holds up come opening day.',
  },
  {
    heading: 'Local — same parish, same kennel',
    body: `Our kennel is right here on ${SITE.address.street} in ${CITY}. Drop-off and pick-up are easy, and you can come see the runs and the routine before you ever leave your dog. No shipping a dog across the country to a name you found online.`,
  },
  {
    heading: 'One trainer, start to finish',
    body: 'Your dog is not handed between staff. The trainer who starts him on obedience is the one who finishes him on blinds — the consistency a dog needs to actually retain the work over a months-long program.',
  },
  {
    heading: 'Honest about your dog',
    body: 'We tell you where your dog realistically is and how far he can go on your timeline. If he needs more foundation before field work, we say so up front — you get a straight answer, not a sales pitch.',
  },
]

const faqs = [
  {
    q: `Do you train gun dogs for hunters around ${CITY}?`,
    a: `Yes — that's the core of what TIMCO Kennels does. We're a board-and-train in ${CITY} (${PARISH}) for Labs and retrievers, taking dogs from basic obedience through advanced retriever work for waterfowl and upland hunters.`,
  },
  {
    q: 'How long is the program?',
    a: `Programs run ${SITE.programRange} depending on the dog, where he's starting, and how far you want to take him. Basic obedience is shorter; full advanced retriever with steady-to-shot and blind work takes longer. We give an honest estimate after we evaluate your dog.`,
  },
  {
    q: 'What kind of dogs do you take?',
    a: 'Labradors and retriever breeds, set up specifically for gun-dog and waterfowl work. We can talk through other retrieving breeds case by case. We don’t do protection, agility, or pet-only obedience.',
  },
  {
    q: 'Do you breed or sell puppies?',
    a: 'No. TIMCO Kennels is strictly board-and-train — we don’t breed or sell pups. If you’re still sourcing a dog, we’re glad to talk through what to look for in a retriever prospect.',
  },
  {
    q: `Can I visit the kennel in ${CITY} first?`,
    a: `Yes. Drop-offs, pick-ups, and visits are by appointment at ${SITE.address.street}, ${SITE.address.city}. Reach out and Tim will set up a time to walk you through the runs and the program.`,
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${URL}#service`,
      name: `${SERVICE} in ${CITY}, LA`,
      description: intro,
      serviceType: 'Gun dog / retriever training',
      url: URL,
      areaServed: { '@type': 'City', name: CITY, containedIn: PARISH },
      provider: {
        '@type': 'LocalBusiness',
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
        { '@type': 'ListItem', position: 3, name: `${SERVICE} in ${CITY}`, item: URL },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
}

export default function GunDogThibodauxPage() {
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
            <span className="text-primary font-semibold">{SERVICE} in {CITY}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-primary text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/retriever-sunset-1.jpg" alt={`Retrievers training at sunset near ${CITY}, Louisiana`} fill priority className="object-cover opacity-40" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/40" />
        </div>
        <div className="relative container-wide py-24 md:py-32">
          <p className="section-label text-accent-light">{CITY}, {PARISH}</p>
          <h1 className="heading-hero text-white mt-4 max-w-4xl text-balance">
            Gun dog &amp; retriever<br />training in <span className="text-accent-light">{CITY}, LA</span>.
          </h1>
          <p className="lede text-gray-200 mt-6 max-w-2xl">{intro}</p>
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
              <p className="section-label">Why {CITY}</p>
              <h2 className="heading-xl text-primary mt-3 text-balance">A {CITY} kennel that knows the hunting.</h2>
              <p className="text-gray-700 mt-6 leading-relaxed">
                TIMCO Kennels trains out of {SITE.address.street}, {SITE.address.city} — close enough that
                you can see the runs, meet the trainer, and hunt the same country your dog learns on.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {localContext.map((c, i) => (
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
            <h2 className="heading-xl text-primary mt-3 text-balance">{CITY} questions, answered.</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f) => (
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
        heading={`Hunting around ${CITY}? Let's talk.`}
        body="Send your dog's age, where he's at on obedience and retrieving, and your timeframe. Tim will follow up about openings and which stage to start him in."
        note={`Insured · ${SITE.runs} runs · ${SITE.address.street}, ${SITE.address.city}`}
      />
    </>
  )
}
