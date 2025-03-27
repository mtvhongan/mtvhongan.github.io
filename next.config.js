/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

// Read deployment mode from environment variable or use default
const isStaticExport = process.env.EXPORT_MODE === 'static';

const nextConfig = {
  // Conditionally apply output: 'export' only when static mode is enabled
  ...(isStaticExport && {
    output: 'export',
    // Any other static-specific configurations
  }),

  // You can add dynamic-specific configurations here
  ...(!isStaticExport && {
    // Any configurations specific to dynamic mode with backend
  }),

  assetPrefix: '/',
  trailingSlash: true, // Recommended for static exports
  reactStrictMode: true,
  images: {
    domains: ['placehold.co'],
    unoptimized: true,
  },
  swcMinify: true,
  webpack: (config, { isServer, dev }) => {
    // Enable fast refresh explicitly
    if (dev && !isServer) {
      // Add React Refresh webpack plugin
      config.devtool = 'eval-source-map';
    }
    return config;
  },
  // Enable page reloading when server-side changes are made
  onDemandEntries: {
    // Period (in ms) where the server will keep pages in memory
    maxInactiveAge: 25 * 1000,
    // Number of pages that should be kept in memory
    pagesBufferLength: 4,
  },
};

module.exports = withBundleAnalyzer(nextConfig);