import type { Metadata } from 'next'
import { GunDogLanding, buildGunDogMetadata, type GunDogLandingData } from '@/components/GunDogLanding'
import { SITE } from '@/lib/site'

const data: GunDogLandingData = {
  slug: 'gun-dog-training-louisiana',
  place: 'Louisiana',
  placeLabel: 'Louisiana',
  region: 'Statewide',
  areaServedType: 'State',
  areaServedName: 'Louisiana',
  serviceType: 'Gun Dog Training',
  heroLead: 'Gun dog & retriever training',
  whyLabel: 'Why hunters drive in',
  whyHeading: 'Gun dog training worth the drive.',
  whyBody:
    'A board-and-train is a months-long, live-in program, so hunters bring dogs from across the state and drive home with a finished retriever. Our kennel sits in Thibodaux, an easy run off Hwy 90 between New Orleans, Baton Rouge, and the coast.',
  metaTitle: 'Gun Dog & Duck Dog Training in Louisiana',
  metaDescription:
    'Louisiana gun dog and duck dog training — a Lab and retriever board-and-train near Houma and Thibodaux, obedience through advanced. We train dogs from across the state.',
  intro:
    'TIMCO Kennels is a Labrador and retriever board-and-train serving hunters across Louisiana, run from our 619 Hwy 308 kennel in Thibodaux. Basic obedience through advanced retriever — marks, blinds, hand signals, and duck-blind etiquette — for the waterfowl and upland hunter who wants a finished dog.',
  hero: {
    image: '/images/retriever-sunset-1.jpg',
    alt: 'Labradors running across an open field at sunset in Louisiana',
  },
  localContext: [
    {
      heading: 'Dogs from across the state',
      body: 'Because board-and-train is a live-in program, distance is not the obstacle it is for a weekly class. Hunters drop off from New Orleans, Baton Rouge, Lafayette, and down the bayou, and pick up a finished dog. The drive happens twice; the training happens daily.',
    },
    {
      heading: 'Built for Louisiana waterfowl',
      body: 'Flooded timber, marsh, rice cuts, and big open water — the dogs that hunt Louisiana need real marks, blind retrieves, and steadiness in a boat. We train on the kind of ground and water a Louisiana duck dog actually works, not a manicured field.',
    },
    {
      heading: 'Duck dog work, done right for the blind',
      body: 'Force fetch, multiple marks, hand signals, and duck-blind etiquette — the finishing that turns a willing Lab into a partner you can run all season. Steady to shot, patient in the blind, reliable on a blind retrieve.',
    },
    {
      heading: 'Board, then bring them home finished',
      body: 'Your dog lives and trains at the kennel for the length of the program, on a schedule every day. You drop off, we put in the months of daily work, and you pick up a dog ready for the season — with honest updates the whole way.',
    },
  ],
  faqs: [
    {
      q: 'Do you take dogs from across Louisiana?',
      a: "Yes. Board-and-train is a live-in program, so hunters bring dogs from New Orleans, Baton Rouge, Lafayette, Houma, and down the bayou. You drop off at our Thibodaux kennel and pick up a finished dog — the distance only matters twice.",
    },
    {
      q: 'How does board-and-train work if I am not local?',
      a: `Your dog stays at our Thibodaux kennel for the length of the program (${SITE.programRange}) and trains daily. Drop-off and pick-up are by appointment, and we send honest progress updates so you know where your dog is even from a distance.`,
    },
    {
      q: 'What is a duck dog program?',
      a: 'It is gun-dog training aimed at waterfowl — obedience and steadiness, then force fetch, marks, blind retrieves, hand signals, and duck-blind etiquette, so your Lab is a reliable partner in the blind and the boat.',
    },
    {
      q: 'What kind of dogs do you take?',
      a: 'Labradors and retriever breeds, set up specifically for gun-dog and waterfowl work. We can talk through other retrieving breeds case by case. We don’t do protection, agility, or pet-only obedience.',
    },
    {
      q: 'Do you breed or sell puppies?',
      a: 'No. TIMCO Kennels is strictly board-and-train — we don’t breed or sell pups. If you’re still sourcing a dog, we’re glad to talk through what to look for in a retriever prospect.',
    },
  ],
  ctaHeading: 'Anywhere in Louisiana — let’s talk.',
  ctaNote: `${SITE.runs} runs · Board-and-train in Thibodaux, LA`,
}

export const metadata: Metadata = buildGunDogMetadata(data)

export default function Page() {
  return <GunDogLanding {...data} />
}
