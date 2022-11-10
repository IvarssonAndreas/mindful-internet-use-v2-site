const moduleExports = {
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  // Your existing module.exports
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/fonts/:version/:font',
        headers: [
          {
            key: 'Cache-control',
            value: 'public, immutable, max-age=31536000',
          },
        ],
      },
    ]
  },
}

module.exports = moduleExports
