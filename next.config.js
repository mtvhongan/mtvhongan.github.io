/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: '/',
  trailingSlash: true, // Recommended for static exports
  reactStrictMode: true,
  images: {
    domains: ['placehold.co'],
  },
  swcMinify: true,
};

module.exports = nextConfig;