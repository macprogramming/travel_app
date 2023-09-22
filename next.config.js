/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false
const debug = process.env.NODE_ENV !== 'production';
let basePath = '/'

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
  basePath = `/${repo}`
}
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ]
  },

  // experimental: {
  //   forceSwcTransforms: true
  // },
  // basePath: basePath,
  // assetPrefix: !debug ? '<your-repo-name>' : ''
}

module.exports = nextConfig
