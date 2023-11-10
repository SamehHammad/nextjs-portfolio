/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/react-portfolio-starter',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
