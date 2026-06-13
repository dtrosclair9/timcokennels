import Link from 'next/link'
import Image from 'next/image'
import { NAV_LINKS, SITE } from '@/lib/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary text-gray-300" role="contentinfo">
      <div className="container-wide pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <Image src="/images/retriever-cream.png" alt="" width={120} height={116} className="h-12 w-auto" />
              <Image src="/images/logo-kennels-light.png" alt={SITE.name} width={520} height={162} className="h-9 w-auto" />
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              Labrador and retriever board-and-train out of {SITE.address.street}, {SITE.address.city}, {SITE.address.region}.
              Basic obedience through advanced retriever. Serving {SITE.serviceArea.parishes.join(', ')} parishes.
            </p>
            <p className="mt-4 text-xs uppercase tracking-mega text-gray-500">
              Insured · {SITE.owner}, {SITE.ownerTitle}
            </p>
          </div>

          {/* Explore */}
          <div className="md:col-span-3">
            <h3 className="font-display text-accent-light text-xs font-bold uppercase tracking-mega mb-4">Explore</h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.filter((l) => l.href !== '/').map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm hover:text-accent-light transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link href="/gun-dog-training-louisiana" className="text-sm hover:text-accent-light transition-colors">
                  Gun Dog Training in Louisiana
                </Link>
              </li>
              <li>
                <Link href="/gun-dog-training-thibodaux-la" className="text-sm hover:text-accent-light transition-colors">
                  Gun Dog Training in Thibodaux
                </Link>
              </li>
              <li>
                <Link href="/duck-dog-training-houma-la" className="text-sm hover:text-accent-light transition-colors">
                  Duck Dog Training in Houma
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h3 className="font-display text-accent-light text-xs font-bold uppercase tracking-mega mb-4">Contact</h3>
            <address className="not-italic space-y-3 text-sm">
              <p>
                {SITE.address.street}<br />
                {SITE.address.city}, {SITE.address.region} {SITE.address.postal}
              </p>
              <p>
                <a href={`tel:${SITE.phoneRaw}`} className="hover:text-accent-light transition-colors">
                  {SITE.phoneDisplay}
                </a>
              </p>
              <p>
                <a href={`mailto:${SITE.email}`} className="hover:text-accent-light transition-colors break-all">
                  {SITE.email}
                </a>
              </p>
            </address>
            <Link href="/contact" className="btn-accent text-xs mt-5">
              Ask About Openings
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>&copy; {year} {SITE.legalName}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-accent-light transition-colors">Privacy Policy</Link>
            <span aria-hidden="true">·</span>
            <span>Est. {SITE.established}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
