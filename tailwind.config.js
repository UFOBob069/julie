/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'light-orange': '#FFF9F2',
        'light-yellow-green': '#D8DFBE',
        'gray-yellow-green': '#5C6244',
        'charcoal': '#3b4430',
        'gold': '#D4AF37',
        'muted-sage': '#A3B5A7',
        'warm-beige': '#F6F1EB',
        'soft-white': '#FAFAFA',
      },
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
        'tt-drugs': ['TT Drugs', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
