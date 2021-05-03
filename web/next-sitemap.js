const meta = require('./content/meta')

module.exports = {
  siteUrl: meta.siteUrl,
  generateRobotsTxt: true,
  exclude: ['/studio/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: 'black-listed-bot',
        disallow: ['/studio/*']
      }
    ]
  }
}
