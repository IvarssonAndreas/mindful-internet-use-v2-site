// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/


const moduleExports = {
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
