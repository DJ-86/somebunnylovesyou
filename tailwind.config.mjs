/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream: '#FDF8F2',
        tan: '#E8D5B7',
        sage: {
          DEFAULT: '#8BAF8A',
          dark: '#5C7A5B',
        },
        terracotta: {
          DEFAULT: '#C4724A',
          light: '#E8A882',
          dark: '#A05A35',
        },
        bunny: {
          brown: '#8B6252',
          dark: '#2C1F15',
          mid: '#5C4A38',
          light: '#8B7355',
        },
      },
      fontFamily: {
        lora: ['Lora', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
