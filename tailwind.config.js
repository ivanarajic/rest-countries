/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-primary': 'hsl(var(--color-bg-dark) / <alpha-value>)',
        'light-primary': 'hsl(var(--color-bg-light) / <alpha-value>)',
        'elements-dark': 'hsl(var(--color-dark-elements) / <alpha-value>)',
        'light-secondary': 'hsl(var(--color-light-text) / <alpha-value>)',
        'light-input': 'hsl(var(--color-light-input) / <alpha-value>)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
