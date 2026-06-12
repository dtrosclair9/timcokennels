import Image from 'next/image'
import Link from 'next/link'
import { SITE } from '@/lib/site'

/** Small centered retriever silhouette used as a section divider / accent. */
export function RetrieverMark({ tone = 'field', className = '' }: { tone?: 'field' | 'pine' | 'cream'; className?: string }) {
  return (
    <Image
      src={`/images/retriever-${tone}.png`}
      alt=""
      width={120}
      height={116}
      className={`w-auto ${className}`}
      aria-hidden="true"
    />
  )
}

export function StatBar({ items }: { items: { label: string; value: string }[] }) {
  return (
    <div className="relative border-t border-white/10 bg-primary-dark/60">
      <div className="container-wide py-5 grid grid-cols-2 md:grid-cols-4 gap-y-3 text-xs sm:text-sm">
        {items.map((it) => (
          <div key={it.label} className="flex items-center gap-3">
            <span className="block w-1 h-6 bg-accent" aria-hidden="true" />
            <div>
              <p className="text-[10px] font-bold uppercase tracking-mega text-gray-400">{it.label}</p>
              <p className="font-display font-semibold uppercase tracking-wide text-white">{it.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function PhotoStrip({
  label,
  heading,
  photos,
  cols = 3,
}: {
  label: string
  heading: string
  photos: { src: string; alt: string }[]
  cols?: 2 | 3
}) {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p className="section-label">{label}</p>
            <h2 className="heading-lg text-primary mt-3 text-balance max-w-lg">{heading}</h2>
          </div>
          <p className="text-gray-600 max-w-sm text-sm">
            Real dogs, real field work. {SITE.serviceArea.primaryRegion}, Louisiana.
          </p>
        </div>
        <div className={`grid grid-cols-2 ${cols === 3 ? 'md:grid-cols-3' : ''} gap-3`}>
          {photos.map((p) => (
            <div key={p.src} className="relative aspect-[4/3] overflow-hidden bg-gray-100">
              <Image src={p.src} alt={p.alt} fill className="object-cover" sizes="(max-width:768px) 50vw, 33vw" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CtaBand({
  heading,
  body,
  note,
}: {
  heading: string
  body: string
  note?: string
}) {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-wide">
        <div className="bg-white shadow-lg p-10 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="section-label">Next Step</p>
            <h2 className="heading-xl text-primary mt-3 text-balance">{heading}</h2>
            <p className="text-gray-700 mt-5 leading-relaxed">{body}</p>
          </div>
          <div className="flex flex-col gap-3">
            <Link href="/contact" className="btn-accent">Ask About Openings</Link>
            <a href={`tel:${SITE.phoneRaw}`} className="btn-outline-dark">Call {SITE.phoneDisplay}</a>
            {note && <p className="text-xs text-gray-500 text-center mt-2">{note}</p>}
          </div>
        </div>
      </div>
    </section>
  )
}

export function AreaBand() {
  return (
    <section className="bg-primary text-white py-16 border-y border-white/10">
      <div className="container-wide text-center">
        <p className="section-label">Where Dogs Come From</p>
        <h2 className="heading-lg mt-3 max-w-2xl mx-auto text-balance">
          Based in <span className="text-accent-light">{SITE.address.city}</span>. Dogs come in from across the Bayou Region.
        </h2>
        <div className="mt-8 flex flex-wrap gap-2 justify-center">
          {SITE.serviceArea.cities.map((c) => (
            <span key={c} className="inline-block border border-white/20 text-xs font-bold uppercase tracking-mega px-4 py-2">
              {c}, LA
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
