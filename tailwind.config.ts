// tailwind.config.ts

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // 1. Configura la familia de fuentes
      fontFamily: {
        // 'sans' será tu fuente por defecto (Lato)
        sans: ['var(--font-lato)'],
        // 'serif' será tu fuente para titulares (Playfair Display)
        serif: ['var(--font-playfair-display)'],
      },
      // 2. No olvides tu paleta de colores aquí
      colors: {
        'primary': '#1C1C1C',
        'accent': '#C0A15E',
        'neutral': '#F8F8F8',
        'text-dark': '#333333',
      },
    },
  },
  plugins: [],
};
export default config;