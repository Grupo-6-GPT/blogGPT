import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        bg:     '#0d0f14',
        bg2:    '#13161e',
        bg3:    '#1b1f2b',
        border: '#252a38',
        muted:  '#8891a8',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config
