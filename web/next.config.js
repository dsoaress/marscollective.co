const withPWA = require('next-pwa')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

const nextConfig = {
  i18n: {
    locales: ['en', 'es', 'pt'],
    defaultLocale: 'en'
  },
  images: { domains: ['cdn.sanity.io'] },
  future: { webpack5: false },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/pwa')
    }
    return config
  },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development'
  }
}

module.exports = withBundleAnalyzer(withPWA(nextConfig))
