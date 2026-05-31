/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'lowkey-dark': '#0f0f11',
        'lowkey-dark-secondary': '#1a1a1e',
        'lowkey-dark-tertiary': '#2a2a2e',
        'lowkey-accent': '#b18f51',
        'lowkey-accent-hover': '#ceb76e',
        'lowkey-text': '#ffffff',
        'lowkey-text-secondary': '#b3a67f',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gradient-lowkey': 'linear-gradient(135deg, #0f0f11 0%, #1a1a1e 100%)',
      },
    },
  },
  plugins: [],
};
