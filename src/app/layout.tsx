import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { SITE } from '@/lib/site'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE.baseUrl),
  title: {
    default: `${SITE.name} | Retriever Board-and-Train in Thibodaux, LA`,
    template: `%s | ${SITE.name}`,
  },
  description:
    'TIMCO Kennels is a Labrador and retriever board-and-train in Thibodaux, LA. Basic obedience through advanced retriever — duck-blind etiquette, hand signals, blind retrieves. 10 runs. Serving Lafourche, Terrebonne, and Assumption parishes.',
  keywords: [
    'retriever training Thibodaux',
    'Labrador board and train Louisiana',
    'gun dog training Louisiana',
    'duck dog training Thibodaux',
    'hunting dog trainer Lafourche Parish',
    'TIMCO Kennels',
  ],
  authors: [{ name: SITE.legalName }],
  other: {
    'geo.region': 'US-LA',
    'geo.placename': SITE.address.city,
    'geo.position': `${SITE.geo.lat};${SITE.geo.lng}`,
    'ICBM': `${SITE.geo.lat}, ${SITE.geo.lng}`,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE.baseUrl,
    siteName: SITE.name,
    images: [
      {
        url: '/images/retriever-hero-boat.jpg',
        width: 1200,
        height: 630,
        alt: `${SITE.name} – Thibodaux, LA`,
      },
    ],
  },
  twitter: { card: 'summary_large_image' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body className="font-sans text-gray-800 antialiased bg-white">
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
