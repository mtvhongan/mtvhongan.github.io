/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
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

// Add redirects
nextConfig.redirects = async () => {
  return [
    {
      source: '/may-moc-thiet-bi',
      destination: '/automation-equipment-page',
      permanent: true,
    },
    {
      source: '/may-xay-dung',
      destination: '/construction-machinery-page',
      permanent: true,
    },
    {
      source: '/may-nong-nghiep',
      destination: '/agricultural-machinery-page',
      permanent: true,
    },
  ];
};


module.exports = nextConfig;