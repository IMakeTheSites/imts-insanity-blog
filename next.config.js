/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: ['cdn.sanity.io'],
  },
  distDir: '.next',
  // webpack(config) {
  //   config.experiments = { ...config.experiments, topLevelAwait: true };
  //   return config;
  // },
};
