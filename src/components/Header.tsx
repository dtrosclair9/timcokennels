'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { NAV_LINKS, SITE } from '@/lib/site'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`bg-white sticky top-0 z-50 transition-shadow duration-200 ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      } border-b border-gray-100`}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between h-20">
          {/* Lockup: retriever + wordmark */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label={`${SITE.name} – Home`}>
            <Image
              src="/images/retriever-pine.png"
              alt=""
              width={150}
              height={145}
              className="h-11 w-auto md:h-12"
              priority
            />
            <Image
              src="/images/logo-kennels-dark.png"
              alt={SITE.name}
              width={520}
              height={162}
              className="h-9 md:h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {NAV_LINKS.map((l) => (
              <NavLink key={l.href} href={l.href} label={l.label} pathname={pathname} />
            ))}
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="btn-accent text-xs ml-3"
              aria-label={`Call ${SITE.name} at ${SITE.phoneDisplay}`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {SITE.phoneDisplay}
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            className="lg:hidden text-primary p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            {menuOpen ? (
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <nav id="mobile-nav" className="lg:hidden border-t border-gray-100 py-4" aria-label="Mobile navigation">
            <div className="flex flex-col">
              {NAV_LINKS.map((l) => (
                <MobileLink key={l.href} href={l.href} label={l.label} pathname={pathname} />
              ))}
              <a href={`tel:${SITE.phoneRaw}`} className="btn-accent text-xs mt-4 mx-2">
                Call {SITE.phoneDisplay}
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

function NavLink({ href, label, pathname }: { href: string; label: string; pathname: string }) {
  const active = pathname === href
  return (
    <Link
      href={href}
      className={`px-4 py-2 text-sm font-semibold uppercase tracking-wider transition-colors ${
        active ? 'text-accent' : 'text-primary hover:text-accent'
      }`}
    >
      {label}
    </Link>
  )
}

function MobileLink({ href, label, pathname }: { href: string; label: string; pathname: string }) {
  const active = pathname === href
  return (
    <Link
      href={href}
      className={`px-2 py-3 text-base font-semibold uppercase tracking-wider transition-colors ${
        active ? 'text-accent' : 'text-primary hover:text-accent'
      }`}
    >
      {label}
    </Link>
  )
}
