/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
};

module.exports = nextConfig;
