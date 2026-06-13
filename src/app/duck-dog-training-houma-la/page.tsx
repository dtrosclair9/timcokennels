import type { Metadata } from 'next'
import { GunDogLanding, buildGunDogMetadata, type GunDogLandingData } from '@/components/GunDogLanding'
import { SITE } from '@/lib/site'

const data: GunDogLandingData = {
  slug: 'duck-dog-training-houma-la',
  place: 'Houma',
  placeLabel: 'Houma, LA',
  region: 'Terrebonne Parish',
  areaServedType: 'City',
  areaServedName: 'Houma',
  containedIn: 'Terrebonne Parish',
  serviceType: 'Duck Dog & Retriever Training',
  heroLead: 'Duck dog & retriever training',
  whyLabel: 'Why Houma',
  whyHeading: 'A duck dog kennel a short drive from Houma.',
  whyBody:
    'Terrebonne is some of the best waterfowl country in the state, and a Houma duck dog earns its keep in the marsh. Our kennel sits just up the road in Thibodaux — close enough to drop off, see the runs, and hunt the same water your dog trains on.',
  metaTitle: 'Duck Dog & Retriever Training in Houma, LA',
  metaDescription:
    'Duck dog and retriever training near Houma, LA — a Lab board-and-train for Terrebonne Parish waterfowl hunters. Obedience through advanced retriever work.',
  intro:
    'TIMCO Kennels is a Labrador and retriever board-and-train for Houma-area waterfowl hunters, run from our 619 Hwy 308 kennel just up the road in Thibodaux. Basic obedience through advanced retriever — marks, blinds, hand signals, and duck-blind etiquette — for a finished Terrebonne duck dog.',
  hero: {
    image: '/images/retriever-hero-boat.jpg',
    alt: 'Two retrievers riding in a boat through the marsh near Houma, Louisiana',
  },
  localContext: [
    {
      heading: 'Built for Terrebonne marsh',
      body: 'Houma dogs hunt marsh, open water, and flooded ground from Bayou Black to Dularge and Montegut. We train real water work, marks, and boat steadiness — the kind of finishing a Terrebonne duck dog needs, not yard drills on clipped grass.',
    },
    {
      heading: 'A short run from the kennel',
      body: 'Thibodaux to Houma is a quick drive, so dropping off, picking up, and coming to see the runs and the routine is easy. You can hunt the same country your dog learns on instead of shipping them off to a name you found online.',
    },
    {
      heading: 'Duck-blind etiquette & steadiness',
      body: 'Force fetch, multiple marks, hand signals, blind retrieves, and steady-to-shot — the finishing that makes a dog patient in the blind and reliable on a pick-up when the birds are working. A partner, not a project.',
    },
    {
      heading: 'Board, then bring them home finished',
      body: 'Your dog lives and trains at the kennel for the length of the program, on a schedule every day. Drop off, we put in the months of daily work, and you pick up a Houma duck dog ready for the season.',
    },
  ],
  faqs: [
    {
      q: 'Do you train duck dogs for hunters around Houma?',
      a: "Yes. We're a Lab and retriever board-and-train just up the road in Thibodaux, taking Houma-area dogs from basic obedience through advanced retriever work for the Terrebonne marsh and open water.",
    },
    {
      q: 'How far is the kennel from Houma?',
      a: 'A short drive — our kennel is at 619 Hwy 308 in Thibodaux. Drop-off, pick-up, and visits are by appointment, so coming to see the runs and the routine is easy.',
    },
    {
      q: 'How long is the program?',
      a: `Programs run ${SITE.programRange} depending on the dog, where they're starting, and how far you want to take them. We give an honest estimate after we evaluate your dog.`,
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
  ctaHeading: "Hunting around Houma? Let's talk.",
}

export const metadata: Metadata = buildGunDogMetadata(data)

export default function Page() {
  return <GunDogLanding {...data} />
}
