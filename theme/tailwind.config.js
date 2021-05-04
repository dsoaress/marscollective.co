module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        body: 'var(--color-body)',
        gray: 'var(--color-gray)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        hover: 'var(--color-hover)',
        reverse: 'var(--color-reverse)'
      },
      fontFamily: {
        body: 'var(--font-body)',
        heading: 'var(--font-heading)'
      }
    }
  },
  variants: {
    extend: {
      margin: ['first', 'last']
    }
  }
}
