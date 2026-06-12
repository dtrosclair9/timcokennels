import type { Metadata } from 'next'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `How ${SITE.legalName} collects and uses information submitted through its website.`,
  alternates: { canonical: `${SITE.baseUrl}/privacy` },
  robots: { index: true, follow: true },
}

const UPDATED = 'June 12, 2026'

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-primary text-white">
        <div className="container-narrow py-16">
          <p className="section-label text-accent-light">Legal</p>
          <h1 className="heading-xl text-white mt-3">Privacy Policy</h1>
          <p className="text-gray-300 mt-4 text-sm">Last updated: {UPDATED}</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-narrow prose-kennels space-y-8 text-gray-700 leading-relaxed">
          <p>
            {SITE.legalName} (&ldquo;TIMCO Kennels,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;) operates this website. This policy
            explains what information we collect, how we use it, and the third-party services involved.
          </p>

          <div>
            <h2 className="heading-sm text-primary mb-3">Information We Collect</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-primary">Contact form details.</strong> When you submit our contact form, we collect the information you provide — your name, phone number, email address, details about your dog, your program interest, and your message.</li>
              <li><strong className="text-primary">Automatic technical data.</strong> Like most websites, our host records basic technical information such as IP address, browser type, and pages visited, in standard server logs.</li>
            </ul>
          </div>

          <div>
            <h2 className="heading-sm text-primary mb-3">How We Use It</h2>
            <p>
              We use the information you submit only to respond to your inquiry, discuss program openings and fit, and
              follow up about training your dog. <strong className="text-primary">We do not sell your information.</strong>
            </p>
          </div>

          <div>
            <h2 className="heading-sm text-primary mb-3">Third-Party Services</h2>
            <p>This site relies on a few third-party services to operate:</p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li><strong className="text-primary">Formspree</strong> processes and delivers contact-form submissions to us by email. Information you enter in the form passes through Formspree.</li>
              <li><strong className="text-primary">Vercel</strong> hosts this website and maintains standard server logs.</li>
              <li><strong className="text-primary">Google Fonts</strong> serves the typefaces used on this site, which may involve a request to Google&apos;s servers.</li>
            </ul>
            <p className="mt-3">Each of these providers handles data under its own privacy policy.</p>
          </div>

          <div>
            <h2 className="heading-sm text-primary mb-3">Cookies &amp; Tracking</h2>
            <p>
              This site does not set advertising or cross-site tracking cookies. Any cookies are limited to what&apos;s
              needed for the site and its third-party services to function.
            </p>
          </div>

          <div>
            <h2 className="heading-sm text-primary mb-3">Contact</h2>
            <p>For any privacy questions, reach us at:</p>
            <address className="not-italic mt-3 space-y-1">
              <p>{SITE.legalName}</p>
              <p>{SITE.address.street}, {SITE.address.city}, {SITE.address.region} {SITE.address.postal}</p>
              <p>
                <a href={`tel:${SITE.phoneRaw}`} className="text-accent hover:text-accent-dark">{SITE.phoneDisplay}</a>
                {' · '}
                <a href={`mailto:${SITE.email}`} className="text-accent hover:text-accent-dark break-all">{SITE.email}</a>
              </p>
            </address>
          </div>

          <p className="text-sm text-gray-500">
            We may update this policy from time to time. Changes will be reflected by the &ldquo;last updated&rdquo; date above.
          </p>
        </div>
      </section>
    </>
  )
}
