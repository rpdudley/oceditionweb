/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        serif: ['var(--font-serif)'],
      },
      colors: {
        primary: 'var(--color-primary)',
        neutral: 'var(--color-neutral)',
        white: 'var(--color-white)',
        black: 'var(--color-black)',
      },
      animation: {
        'slide-in': 'slide-in 600ms ease both',
      },
    },
  },
  plugins: [],
}