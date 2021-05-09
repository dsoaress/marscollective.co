module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.js', './components/**/*.js'],
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
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'var(--color-body)',
            a: {
              color: 'var(--color-primary)',
              '&:hover': {
                color: 'var(--color-hover)'
              }
            },
            h1: {
              color: 'var(--color-body)'
            },
            h2: {
              color: 'var(--color-body)'
            },
            h3: {
              color: 'var(--color-body)'
            },
            h4: {
              color: 'var(--color-body)'
            },
            h5: {
              color: 'var(--color-body)'
            },
            h6: {
              color: 'var(--color-body)'
            },
            img: {
              'border-radius': '1.5rem'
            }
          }
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp')
  ]
}
