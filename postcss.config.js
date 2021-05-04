module.exports = {
  plugins: {
    tailwindcss: { config: `${__dirname}/theme/tailwind.config.js` },
    autoprefixer: {},
    'postcss-nested': {}
  }
}
