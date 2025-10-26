/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: { darkbg: '#252a2d', panel: '#31373a', soft: '#2e3437' },
      boxShadow: {
        'neumorph-out': '8px 8px 18px rgba(0,0,0,0.6), -8px -8px 18px rgba(255,255,255,0.02)',
        'neumorph-in': 'inset 6px 6px 14px rgba(0,0,0,0.6), inset -6px -6px 14px rgba(255,255,255,0.02)'
      }
    }
  },
  plugins: []
}