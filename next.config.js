const {
  NextFederationPlugin
} = require('@module-federation/nextjs-mf')
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // images: {
  //   unoptimized: true,
  // },
  webpack: (config, options) => {
    const {
      isServer
    } = options
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
      layers: true,
    }
    config.output.publicPath = 'auto'
    config.plugins.push(
      new NextFederationPlugin({
        name: 'rbGroup',
        remotes: {
          rbIndia: `rbIndia@${process.env.NEXT_PUBLIC_HOST_URL}/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
          rbGlobal: `rbGlobal@${process.env.NEXT_PUBLIC_HOST_URL}/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
        },
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          // './collab': 'src/pages/collab.jsx'
        },
        extraOptions: {
          exposePages: true,
        },
        shared: {
          tailwindcss: {
            singleton: true,
            eager: true
          },
          postcss: {
            singleton: true,
            eager: true
          },
          autoprefixer: {
            singleton: true,
            eager: true
          },
        },
      })
    )
    return config
  },
}

module.exports = nextConfig
