/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    domains: ['flowbite.com']
  },
  reactStrictMode: true,
  swcMinify: true,
  webpack (config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            icon: true
          }
        }
      ]
    });

    return config;
  }
};

module.exports = nextConfig;
