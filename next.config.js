/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/mtvhongan',
  assetPrefix: '/mtvhongan/', // Important for static assets
  trailingSlash: true, // Recommended for static exports
  reactStrictMode: true,
  images: {
    domains: ['placehold.co'],
  },
  swcMinify: true,
  // The `src` directory is now the source directory
  distDir: 'build',
};

module.exports = nextConfig;