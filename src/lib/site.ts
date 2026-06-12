// Single source of truth for TIMCO Kennels site constants.
// Update domain + formspree ID here before launch — every page reads from this.

export const SITE = {
  name: 'TIMCO Kennels',
  legalName: 'TIMCO Kennels LLC',
  tagline: 'Labrador & Retriever Board-and-Train in Thibodaux, LA',
  baseUrl: 'https://timcokennels.com', // TODO: confirm exact domain spelling before launch (buying 2026-06-12)
  owner: 'Timothy Cailouet',
  ownerShort: 'Tim',
  ownerTitle: 'Owner / Trainer',
  phoneDisplay: '985.665.7298',
  phoneRaw: '+19856657298',
  email: 'timcollc2021@gmail.com', // production — test with daynetrosclair@icloud.com first
  // Formspree routing — set in Formspree dashboard. Fresh endpoint (do NOT reuse the property site's).
  address: {
    street: '619 Hwy 308',
    city: 'Thibodaux',
    region: 'LA',
    postal: '70301',
    country: 'US',
  },
  geo: {
    lat: 29.7969,
    lng: -90.8226,
  },
  serviceArea: {
    parishes: ['Lafourche', 'Terrebonne', 'Assumption'],
    cities: ['Thibodaux', 'Houma', 'Raceland', 'Chackbay', 'Napoleonville', 'Schriever'],
    primaryRegion: 'Bayou Region',
  },
  formspreeId: 'FORMSPREE_ID', // TODO: set real Formspree form ID (fresh endpoint) before launch
  established: 2021,
  runs: 10,
  programRange: '3 to 9 months',
} as const

// The board-and-train is one continuous program that moves through three stages.
export const STAGES = [
  {
    key: 'obedience',
    n: '01',
    title: 'Basic Obedience',
    short: 'The behavior foundation.',
    body: 'Sit, stay, here, kennel, place, heel, and off-lead control. The obedience every working dog needs locked in before any field work begins — calm, steady, and listening.',
  },
  {
    key: 'basic-retriever',
    n: '02',
    title: 'Basic Retriever',
    short: 'A finished retriever on land and water.',
    body: 'Force fetch, marks, delivery to hand, and steadiness. We turn a willing dog into a reliable retriever that picks up, holds, and brings it back clean — on land and in the water.',
  },
  {
    key: 'advanced-retriever',
    n: '03',
    title: 'Advanced Retriever',
    short: 'A dog you can run in the blind.',
    body: 'Hand signals, blind retrieves, multiple marks, and duck-blind etiquette. The polish that makes a dog steady to shot, patient in the blind, and a real partner come the season.',
  },
] as const

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/program', label: 'Program' },
  { href: '/facility', label: 'Facility' },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
] as const
