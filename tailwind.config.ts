import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Outdoorsy gun-dog palette — deep pine green + warm field-green accent.
        // Deliberately distinct from the property/land TIMCO site (charcoal + orange).
        primary: {
          DEFAULT: '#163A29', // deep pine green (dark sections, headings)
          light: '#22543C',
          dark: '#0D2419',
        },
        accent: {
          DEFAULT: '#6B8E3D', // field/moss green (CTAs, labels, dividers)
          light: '#85A957',
          dark: '#54732D',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-oswald)', 'Impact', 'sans-serif'],
      },
      letterSpacing: {
        'mega': '0.18em',
      },
    },
  },
  plugins: [],
}

export default config
