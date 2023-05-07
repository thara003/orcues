/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverComponentsExternalPackages: ["@tremor/react"],
  },
  images: {
    domains: ["avatar.vercel.sh"],
  },
};

module.exports = nextConfig;
