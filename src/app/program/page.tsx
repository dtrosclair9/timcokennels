import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SITE, STAGES } from '@/lib/site'
import { PhotoStrip, CtaBand, RetrieverMark } from '@/components/Sections'

export const metadata: Metadata = {
  title: 'The Program – Retriever Board-and-Train in Thibodaux, LA',
  description:
    'TIMCO Kennels board-and-train: basic obedience, basic retriever, and advanced retriever — force fetch, marks, blind retrieves, hand signals, and duck-blind etiquette. 3 to 9 month programs in Thibodaux, LA. Insured.',
  alternates: { canonical: `${SITE.baseUrl}/program` },
  openGraph: {
    title: 'The Program – Retriever Board-and-Train | TIMCO Kennels',
    description: 'Basic obedience through advanced retriever. 3 to 9 month board-and-train in Thibodaux, LA.',
    url: `${SITE.baseUrl}/program`,
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Retriever Board-and-Train',
  serviceType: 'Gun dog / retriever training',
  description:
    'Labrador and retriever board-and-train in Thibodaux, LA — basic obedience through advanced retriever work, including force fetch, marks, blind retrieves, hand signals, and duck-blind etiquette. Programs run 3 to 9 months.',
  url: `${SITE.baseUrl}/program`,
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
  areaServed: SITE.serviceArea.cities.map((c) => ({ '@type': 'City', name: c })),
}

const included = [
  'Board &amp; daily training at our facility',
  'One dedicated trainer per dog',
  'Daily field &amp; water work',
  'Obedience foundation (sit, stay, here, kennel, heel)',
  'Force fetch &amp; reliable delivery to hand',
  'Single &amp; multiple marks',
  'Hand signals &amp; blind retrieves',
  'Duck-blind etiquette &amp; steadiness',
  'Honest progress updates through the program',
]

export default function ProgramPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="relative bg-primary text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/retriever-hero-boat.jpg" alt="Two retrievers riding in a flat-bottom boat through a Louisiana swamp" fill priority className="object-cover opacity-40" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/40" />
        </div>
        <div className="relative container-wide py-24 md:py-32">
          <p className="section-label text-accent-light">Board-and-Train</p>
          <h1 className="heading-hero text-white mt-4 max-w-4xl text-balance">
            The <span className="text-accent-light">program</span>.
          </h1>
          <p className="lede text-gray-200 mt-6 max-w-2xl">
            One continuous board-and-train that takes a willing dog from sit-and-stay
            all the way to steady-to-shot. Programs run {SITE.programRange} depending on the
            dog, his starting point, and how far you want to go.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-accent text-xs">Ask About Openings</Link>
            <a href={`tel:${SITE.phoneRaw}`} className="btn-outline-light text-xs">Call {SITE.phoneDisplay}</a>
          </div>
        </div>
      </section>

      {/* Stages */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="section-label">How It Works</p>
            <h2 className="heading-xl text-primary mt-3 text-balance">Three stages, run in order.</h2>
            <p className="text-gray-700 mt-5 leading-relaxed">
              Every dog starts at the foundation and moves up only when he&apos;s solid. Where your dog
              starts depends on what he already knows — and the program ends when he&apos;s where you need him.
            </p>
          </div>

          <div className="space-y-6">
            {STAGES.map((s, i) => (
              <article key={s.key} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-gray-50 border-l-4 border-accent p-8">
                <div className="md:col-span-2">
                  <p className="font-display text-6xl text-accent/40 font-bold">{s.n}</p>
                </div>
                <div className="md:col-span-10">
                  <h3 className="heading-md text-primary">{s.title}</h3>
                  <p className="text-xs font-bold uppercase tracking-mega text-accent mt-1">{s.short}</p>
                  <p className="text-gray-700 mt-4 leading-relaxed max-w-3xl">{s.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="section-padding bg-gray-50">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative aspect-[4/5] overflow-hidden order-2 lg:order-1">
              <Image src="/images/kennel-yellow-lab-hallway.jpg" alt="A yellow Lab in the TIMCO Kennels training facility hallway in Thibodaux" fill className="object-cover" sizes="(max-width:1024px) 100vw, 40vw" />
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="mb-4"><RetrieverMark tone="field" className="h-12" /></div>
              <p className="section-label">What&apos;s Included</p>
              <h2 className="heading-xl text-primary mt-3 text-balance">Everything in one board-and-train.</h2>
              <p className="text-gray-700 mt-5 leading-relaxed">
                Your dog lives and trains at the facility for the length of the program. One quote
                covers board, daily training, and field work — you drop him off and pick up a finished dog.
              </p>
              <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {included.map((it) => (
                  <li key={it} className="flex items-start gap-2.5 text-sm text-gray-800">
                    <svg className="w-4 h-4 text-accent mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    <span dangerouslySetInnerHTML={{ __html: it }} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <p className="section-label">Who It&apos;s For</p>
            <h2 className="heading-xl text-primary mt-3 text-balance">Built for working gun dogs.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="bg-gray-50 p-8 border-t-4 border-accent">
              <h3 className="heading-sm text-primary">Labs &amp; retrievers</h3>
              <p className="text-sm text-gray-700 mt-3 leading-relaxed">
                Set up for Labradors and retriever breeds specifically — the dogs bred to hunt waterfowl and upland. Tell us your dog and we&apos;ll talk through fit.
              </p>
            </article>
            <article className="bg-gray-50 p-8 border-t-4 border-accent">
              <h3 className="heading-sm text-primary">Hunters &amp; gun-dog owners</h3>
              <p className="text-sm text-gray-700 mt-3 leading-relaxed">
                Owners who want a dog steady in the blind, reliable on marks, and capable of a blind retrieve — not just a pet who sits on command.
              </p>
            </article>
            <article className="bg-gray-50 p-8 border-t-4 border-accent">
              <h3 className="heading-sm text-primary">Pups &amp; older dogs</h3>
              <p className="text-sm text-gray-700 mt-3 leading-relaxed">
                Young dogs ready to start, or older dogs that need finishing. We tailor where the program begins to the dog in front of us.
              </p>
            </article>
          </div>
          <p className="text-center text-sm text-gray-500 mt-8 max-w-xl mx-auto">
            We don&apos;t breed or sell puppies — TIMCO Kennels is strictly board-and-train. If you&apos;re still sourcing a dog, we&apos;re glad to talk through what to look for.
          </p>
        </div>
      </section>

      <PhotoStrip
        label="In the Field"
        heading="Where the work happens."
        photos={[
          { src: '/images/retriever-sunset-1.jpg', alt: 'Three Labradors running toward the camera at sunset in the Bayou Region' },
          { src: '/images/kennel-pack-action.jpg', alt: 'A pack of Labradors working in the TIMCO Kennels yard' },
          { src: '/images/retriever-hero-boat.jpg', alt: 'Two retrievers in a flat-bottom boat through a Louisiana swamp' },
          { src: '/images/kennel-three-labs-picnic.jpg', alt: 'Three Labradors on the grass at a picnic table near the kennel' },
          { src: '/images/kennel-white-lab-alert.jpg', alt: 'A white Lab standing alert on a bench at TIMCO Kennels' },
          { src: '/images/retriever-sunset-2.jpg', alt: 'Three Labradors spread across a field at sunset' },
        ]}
      />

      <CtaBand
        heading="Ready to get him finished?"
        body="Send his age, where he's at on obedience and retrieving, and what you want him doing by season. Tim will follow up about current openings and which stage to start him in."
        note={`Insured · ${SITE.runs} runs · Programs run ${SITE.programRange} · Pricing by program — ask`}
      />
    </>
  )
}
