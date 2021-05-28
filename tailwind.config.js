module.exports = {
  purge: [],
  // purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    filter: { // defaults to {}
      'none': 'none',
      'grayscale': 'grayscale(1)',
      'invert': 'invert(1)',
      'sepia': 'sepia(1)',
      'blur': 'blur(10px)',
      'brightness': 'brightness(0.1)',
      'custom': 'blur(3px) brightness(0.1)'
    },
    backdropFilter: { // defaults to {}
      'none': 'none',
      'blur': 'blur(10px)',
      'blurfooter': 'blur(30px)',
      'brightness': 'brightness(0.1)',
    },
    extend: {},
  },
  variants: {
    filter: ['responsive'], // defaults to ['responsive']
    backdropFilter: ['responsive'], // defaults to ['responsive']
    extend: {
    },
  },
  plugins: [
    require('tailwindcss-filters'),
  ],
}
