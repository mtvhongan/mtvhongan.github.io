/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '',
  reactStrictMode: true,
  images: {
    domains: ['placehold.co'],
  },
  swcMinify: true,
  // The `src` directory is now the source directory
  distDir: 'build',
};

module.exports = nextConfig;