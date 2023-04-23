/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["@tremor/react"],
  },
  images: {
    domains: ["avatar.vercel.sh"],
  },
};

module.exports = nextConfig;
