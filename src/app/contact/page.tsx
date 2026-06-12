import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact – Ask About Retriever Training Openings in Thibodaux, LA',
  description: `Ask TIMCO Kennels about board-and-train openings in Thibodaux, LA. Tell us about your dog and what you want them doing by season. Call ${SITE.phoneDisplay} or send a message.`,
  alternates: { canonical: `${SITE.baseUrl}/contact` },
  openGraph: {
    title: `Contact ${SITE.name} | Thibodaux, LA`,
    description: `Ask about openings and program fit. Call ${SITE.phoneDisplay} or fill out the form.`,
    url: `${SITE.baseUrl}/contact`,
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: `Contact ${SITE.legalName}`,
  url: `${SITE.baseUrl}/contact`,
  description: `Contact page for ${SITE.legalName}, a retriever board-and-train in ${SITE.address.city}, ${SITE.address.region}.`,
  mainEntity: {
    '@type': 'LocalBusiness',
    name: SITE.legalName,
    telephone: SITE.phoneRaw,
    email: SITE.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postal,
      addressCountry: SITE.address.country,
    },
  },
}

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="bg-primary text-white" aria-label="Contact page hero">
        <div className="container-wide py-20">
          <p className="section-label text-accent-light">Get in Touch</p>
          <h1 className="heading-xl text-white mt-3 max-w-3xl text-balance">
            Tell {SITE.ownerShort} about your dog.
          </h1>
          <p className="lede text-gray-300 mt-5 max-w-2xl">
            Where they&apos;re at on obedience and retrieving, and what you want them doing by season. We&apos;ll
            follow up about current openings and which stage to start them in.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white" aria-labelledby="contact-grid-heading">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <aside className="lg:col-span-5 space-y-8">
              <div>
                <h2 id="contact-grid-heading" className="heading-md text-primary mb-6">Reach Out Directly</h2>
                <div className="space-y-5">
                  <ContactRow label="Phone">
                    <a href={`tel:${SITE.phoneRaw}`} className="text-lg font-display font-semibold text-primary hover:text-accent transition-colors">
                      {SITE.phoneDisplay}
                    </a>
                  </ContactRow>
                  <ContactRow label="Email">
                    <a href={`mailto:${SITE.email}`} className="text-primary hover:text-accent transition-colors break-all">
                      {SITE.email}
                    </a>
                  </ContactRow>
                  <ContactRow label="Kennel">
                    <p className="text-primary">
                      {SITE.address.street}<br />
                      {SITE.address.city}, {SITE.address.region} {SITE.address.postal}
                    </p>
                  </ContactRow>
                  <ContactRow label="Visits">
                    <p className="text-primary">Drop-off &amp; pick-up<br />by appointment</p>
                  </ContactRow>
                </div>
              </div>

              <div className="bg-primary text-white p-8">
                <p className="section-label text-accent-light">Openings</p>
                <p className="heading-sm text-white mt-2">{SITE.runs} runs fill up.</p>
                <p className="text-sm text-gray-300 mt-4 leading-relaxed">
                  Programs run {SITE.programRange}, so spots open on a rolling basis. The sooner you
                  reach out, the sooner we can fit your dog into the schedule. Mention your timeframe.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-5">
                <p className="text-xs font-bold uppercase tracking-mega text-gray-500">Sourcing a Dog?</p>
                <p className="text-sm text-gray-700 mt-2 leading-relaxed">
                  We don&apos;t breed or sell puppies, but we&apos;re glad to talk through what to look
                  for in a retriever prospect. Just ask in your message.
                </p>
              </div>
            </aside>

            <div className="lg:col-span-7">
              <div className="bg-gray-50 p-8 md:p-10 border border-gray-100">
                <h2 className="heading-md text-primary mb-6">Send a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function ContactRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-1 h-12 bg-accent shrink-0" aria-hidden="true" />
      <div>
        <p className="text-xs font-bold uppercase tracking-mega text-gray-500 mb-1">{label}</p>
        {children}
      </div>
    </div>
  )
}
