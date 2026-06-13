import type { Metadata } from 'next'
import { GunDogLanding, buildGunDogMetadata, type GunDogLandingData } from '@/components/GunDogLanding'
import { SITE } from '@/lib/site'

const data: GunDogLandingData = {
  slug: 'gun-dog-training-thibodaux-la',
  place: 'Thibodaux',
  placeLabel: 'Thibodaux, LA',
  region: 'Lafourche Parish',
  areaServedType: 'City',
  areaServedName: 'Thibodaux',
  containedIn: 'Lafourche Parish',
  serviceType: 'Gun Dog & Retriever Training',
  heroLead: 'Gun dog & retriever training',
  whyLabel: 'Why Thibodaux',
  whyHeading: 'A Thibodaux kennel that knows the hunting.',
  whyBody:
    'TIMCO Kennels trains out of 619 Hwy 308, Thibodaux — close enough that you can see the runs and the routine, and hunt the same country your dog learns on.',
  metaTitle: 'Gun Dog & Retriever Training in Thibodaux, LA',
  metaDescription:
    'Gun dog and retriever training in Thibodaux, LA — a board-and-train taking Labs from basic obedience through advanced retriever work for Lafourche Parish hunters.',
  intro:
    'TIMCO Kennels is a Thibodaux-based gun dog and retriever board-and-train working out of 619 Hwy 308. Basic obedience through advanced retriever — marks, blinds, hand signals, and duck-blind etiquette — for Lafourche Parish hunters who want a finished dog.',
  hero: {
    image: '/images/retriever-sunset-2.jpg',
    alt: 'Labradors in a field at sunset near Thibodaux, Louisiana',
  },
  localContext: [
    {
      heading: 'Built for Bayou Region hunting',
      body: 'Thibodaux dogs hunt flooded timber, marsh, and rice cuts — not a training field with clipped grass. We run marks, blinds, and water work on the kind of rural ground a Lafourche dog actually hunts, so what they learn holds up come opening day.',
    },
    {
      heading: 'Local — same parish, same kennel',
      body: 'Our kennel is right here on 619 Hwy 308 in Thibodaux. Drop-off and pick-up are easy, and you can come see the runs and the routine before you ever leave your dog. No shipping a dog across the country to a name you found online.',
    },
    {
      heading: 'Consistent, start to finish',
      body: 'Your dog is not passed around. The same hands-on approach that starts them on obedience finishes them on blinds — the consistency a dog needs to actually retain the work over a months-long program.',
    },
    {
      heading: 'Honest about your dog',
      body: 'We tell you where your dog realistically is and how far they can go on your timeline. If they need more foundation before field work, we say so up front — you get a straight answer, not a sales pitch.',
    },
  ],
  faqs: [
    {
      q: 'Do you train gun dogs for hunters around Thibodaux?',
      a: "Yes — that's the core of what TIMCO Kennels does. We're a board-and-train in Thibodaux (Lafourche Parish) for Labs and retrievers, taking dogs from basic obedience through advanced retriever work for waterfowl and upland hunters.",
    },
    {
      q: 'How long is the program?',
      a: `Programs run ${SITE.programRange} depending on the dog, where they're starting, and how far you want to take them. Basic obedience is shorter; full advanced retriever with steady-to-shot and blind work takes longer. We give an honest estimate after we evaluate your dog.`,
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
      q: 'Can I visit the kennel in Thibodaux first?',
      a: "Yes. Drop-offs, pick-ups, and visits are by appointment at 619 Hwy 308, Thibodaux. Reach out and we'll set up a time to walk you through the runs and the program.",
    },
  ],
  ctaHeading: "Hunting around Thibodaux? Let's talk.",
}

export const metadata: Metadata = buildGunDogMetadata(data)

export default function Page() {
  return <GunDogLanding {...data} />
}
