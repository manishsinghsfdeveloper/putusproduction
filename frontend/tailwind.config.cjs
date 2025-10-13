module.exports = {
  content: ['./index.html','./src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: { ember: '#E11900', ink: '#0B0B0B', paper: '#FAFAFA' },
      fontFamily: { display: ['Playfair Display','serif'], sans: ['Inter','ui-sans-serif','system-ui'] }
    }
  },
  plugins: [],
}
