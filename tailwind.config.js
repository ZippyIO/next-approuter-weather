/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        'm-night': {
          0: 'var(--mantine-color-night-0)',
          1: 'var(--mantine-color-night-1)',
          2: 'var(--mantine-color-night-2)',
          3: 'var(--mantine-color-night-3)',
          4: 'var(--mantine-color-night-4)',
          5: 'var(--mantine-color-night-5)',
          6: 'var(--mantine-color-night-6)',
          7: 'var(--mantine-color-night-7)',
          8: 'var(--mantine-color-night-8)',
          9: 'var(--mantine-color-night-9)',
          10: 'var(--mantine-color-night-10)',
        },
        'm-dark': {
          0: 'var(--mantine-color-dark-0)',
          1: 'var(--mantine-color-dark-1)',
          2: 'var(--mantine-color-dark-2)',
          3: 'var(--mantine-color-dark-3)',
          4: 'var(--mantine-color-dark-4)',
          5: 'var(--mantine-color-dark-5)',
          6: 'var(--mantine-color-dark-6)',
          7: 'var(--mantine-color-dark-7)',
          8: 'var(--mantine-color-dark-8)',
          9: 'var(--mantine-color-dark-9)',
        },
        'm-gray': {
          0: 'var(--mantine-color-gray-0)',
          1: 'var(--mantine-color-gray-1)',
          2: 'var(--mantine-color-gray-2)',
          3: 'var(--mantine-color-gray-3)',
          4: 'var(--mantine-color-gray-4)',
          5: 'var(--mantine-color-gray-5)',
          6: 'var(--mantine-color-gray-6)',
          7: 'var(--mantine-color-gray-7)',
          8: 'var(--mantine-color-gray-8)',
          9: 'var(--mantine-color-gray-9)',
        },
        'm-red': {
          0: 'var(--mantine-color-red-0)',
          1: 'var(--mantine-color-red-1)',
          2: 'var(--mantine-color-red-2)',
          3: 'var(--mantine-color-red-3)',
          4: 'var(--mantine-color-red-4)',
          5: 'var(--mantine-color-red-5)',
          6: 'var(--mantine-color-red-6)',
          7: 'var(--mantine-color-red-7)',
          8: 'var(--mantine-color-red-8)',
          9: 'var(--mantine-color-red-9)',
        },
        'm-pink': {
          0: 'var(--mantine-color-pink-0)',
          1: 'var(--mantine-color-pink-1)',
          2: 'var(--mantine-color-pink-2)',
          3: 'var(--mantine-color-pink-3)',
          4: 'var(--mantine-color-pink-4)',
          5: 'var(--mantine-color-pink-5)',
          6: 'var(--mantine-color-pink-6)',
          7: 'var(--mantine-color-pink-7)',
          8: 'var(--mantine-color-pink-8)',
          9: 'var(--mantine-color-pink-9)',
        },
        'm-grape': {
          0: 'var(--mantine-color-grape-0)',
          1: 'var(--mantine-color-grape-1)',
          2: 'var(--mantine-color-grape-2)',
          3: 'var(--mantine-color-grape-3)',
          4: 'var(--mantine-color-grape-4)',
          5: 'var(--mantine-color-grape-5)',
          6: 'var(--mantine-color-grape-6)',
          7: 'var(--mantine-color-grape-7)',
          8: 'var(--mantine-color-grape-8)',
          9: 'var(--mantine-color-grape-9)',
        },
        'm-violet': {
          0: 'var(--mantine-color-violet-0)',
          1: 'var(--mantine-color-violet-1)',
          2: 'var(--mantine-color-violet-2)',
          3: 'var(--mantine-color-violet-3)',
          4: 'var(--mantine-color-violet-4)',
          5: 'var(--mantine-color-violet-5)',
          6: 'var(--mantine-color-violet-6)',
          7: 'var(--mantine-color-violet-7)',
          8: 'var(--mantine-color-violet-8)',
          9: 'var(--mantine-color-violet-9)',
        },
        'm-indigo': {
          0: 'var(--mantine-color-indigo-0)',
          1: 'var(--mantine-color-indigo-1)',
          2: 'var(--mantine-color-indigo-2)',
          3: 'var(--mantine-color-indigo-3)',
          4: 'var(--mantine-color-indigo-4)',
          5: 'var(--mantine-color-indigo-5)',
          6: 'var(--mantine-color-indigo-6)',
          7: 'var(--mantine-color-indigo-7)',
          8: 'var(--mantine-color-indigo-8)',
          9: 'var(--mantine-color-indigo-9)',
        },
        'm-blue': {
          0: 'var(--mantine-color-blue-0)',
          1: 'var(--mantine-color-blue-1)',
          2: 'var(--mantine-color-blue-2)',
          3: 'var(--mantine-color-blue-3)',
          4: 'var(--mantine-color-blue-4)',
          5: 'var(--mantine-color-blue-5)',
          6: 'var(--mantine-color-blue-6)',
          7: 'var(--mantine-color-blue-7)',
          8: 'var(--mantine-color-blue-8)',
          9: 'var(--mantine-color-blue-9)',
        },
        'm-cyan': {
          0: 'var(--mantine-color-cyan-0)',
          1: 'var(--mantine-color-cyan-1)',
          2: 'var(--mantine-color-cyan-2)',
          3: 'var(--mantine-color-cyan-3)',
          4: 'var(--mantine-color-cyan-4)',
          5: 'var(--mantine-color-cyan-5)',
          6: 'var(--mantine-color-cyan-6)',
          7: 'var(--mantine-color-cyan-7)',
          8: 'var(--mantine-color-cyan-8)',
          9: 'var(--mantine-color-cyan-9)',
        },
        'm-teal': {
          0: 'var(--mantine-color-teal-0)',
          1: 'var(--mantine-color-teal-1)',
          2: 'var(--mantine-color-teal-2)',
          3: 'var(--mantine-color-teal-3)',
          4: 'var(--mantine-color-teal-4)',
          5: 'var(--mantine-color-teal-5)',
          6: 'var(--mantine-color-teal-6)',
          7: 'var(--mantine-color-teal-7)',
          8: 'var(--mantine-color-teal-8)',
          9: 'var(--mantine-color-teal-9)',
        },
        'm-green': {
          0: 'var(--mantine-color-green-0)',
          1: 'var(--mantine-color-green-1)',
          2: 'var(--mantine-color-green-2)',
          3: 'var(--mantine-color-green-3)',
          4: 'var(--mantine-color-green-4)',
          5: 'var(--mantine-color-green-5)',
          6: 'var(--mantine-color-green-6)',
          7: 'var(--mantine-color-green-7)',
          8: 'var(--mantine-color-green-8)',
          9: 'var(--mantine-color-green-9)',
        },
        'm-lime': {
          0: 'var(--mantine-color-lime-0)',
          1: 'var(--mantine-color-lime-1)',
          2: 'var(--mantine-color-lime-2)',
          3: 'var(--mantine-color-lime-3)',
          4: 'var(--mantine-color-lime-4)',
          5: 'var(--mantine-color-lime-5)',
          6: 'var(--mantine-color-lime-6)',
          7: 'var(--mantine-color-lime-7)',
          8: 'var(--mantine-color-lime-8)',
          9: 'var(--mantine-color-lime-9)',
        },
        'm-yellow': {
          0: 'var(--mantine-color-yellow-0)',
          1: 'var(--mantine-color-yellow-1)',
          2: 'var(--mantine-color-yellow-2)',
          3: 'var(--mantine-color-yellow-3)',
          4: 'var(--mantine-color-yellow-4)',
          5: 'var(--mantine-color-yellow-5)',
          6: 'var(--mantine-color-yellow-6)',
          7: 'var(--mantine-color-yellow-7)',
          8: 'var(--mantine-color-yellow-8)',
          9: 'var(--mantine-color-yellow-9)',
        },
        'm-orange': {
          0: 'var(--mantine-color-orange-0)',
          1: 'var(--mantine-color-orange-1)',
          2: 'var(--mantine-color-orange-2)',
          3: 'var(--mantine-color-orange-3)',
          4: 'var(--mantine-color-orange-4)',
          5: 'var(--mantine-color-orange-5)',
          6: 'var(--mantine-color-orange-6)',
          7: 'var(--mantine-color-orange-7)',
          8: 'var(--mantine-color-orange-8)',
          9: 'var(--mantine-color-orange-9)',
        },
      },
      lineHeight: {
        'm-xs': 'var(--mantine-line-height-xs)',
        'm-sm': 'var(--mantine-line-height-sm)',
        'm-md': 'var(--mantine-line-height-md)',
        'm-lg': 'var(--mantine-line-height-lg)',
        'm-xl': 'var(--mantine-line-height-xl)',
      },
      fontFamily: {
        'm-default': 'var(--mantine-font-family)',
        'm-mono': 'var(--mantine-font-family-monospace)',
        'm-headings': 'var(--mantine-font-family-headings)',
        'geist-sans': ['var(--font-geist-sans)'],
        'geist-mono': ['var(--font-geist-mono)'],
      },
      fontSize: {
        'm-xs': 'var(--mantine-font-size-xs)',
        'm-sm': 'var(--mantine-font-size-sm)',
        'm-md': 'var(--mantine-font-size-md)',
        'm-lg': 'var(--mantine-font-size-lg)',
        'm-xl': 'var(--mantine-font-size-xl)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        'm-default': 'var(--mantine-radius-default)',
        'm-xs': 'var(--mantine-radius-xs)',
        'm-sm': 'var(--mantine-radius-sm)',
        'm-md': 'var(--mantine-radius-md)',
        'm-lg': 'var(--mantine-radius-lg)',
        'm-xl': 'var(--mantine-radius-xl)',
      },
      boxShadow: {
        'm-xs': 'var(--mantine-shadow-xs)',
        'm-sm': 'var(--mantine-shadow-sm)',
        'm-md': 'var(--mantine-shadow-md)',
        'm-lg': 'var(--mantine-shadow-lg)',
        'm-xl': 'var(--mantine-shadow-xl)',
      },
      margin: {
        'm-xs': 'var(--mantine-spacing-xs)',
        'm-sm': 'var(--mantine-spacing-sm)',
        'm-md': 'var(--mantine-spacing-md)',
        'm-lg': 'var(--mantine-spacing-lg)',
        'm-xl': 'var(--mantine-spacing-xl)',
      },
      padding: {
        'm-xs': 'var(--mantine-spacing-xs)',
        'm-sm': 'var(--mantine-spacing-sm)',
        'm-md': 'var(--mantine-spacing-md)',
        'm-lg': 'var(--mantine-spacing-lg)',
        'm-xl': 'var(--mantine-spacing-xl)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  plugins: [require('tailwind-scrollbar')],
};
