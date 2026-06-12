import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        surface: '#0F0F11',
        birch: '#E3D9BD',
        amber: '#B8853A',
      },
      fontFamily: {
        fraunces: ['var(--font-fraunces)', 'Georgia', 'serif'],
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        page: '1100px',
      },
      letterSpacing: {
        label: '0.26em',
        nav: '0.24em',
        tight: '-0.025em',
      },
    },
  },
  plugins: [],
}

export default config
