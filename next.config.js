/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'build',
  images: {
    unoptimized: true,
    domains: [
      "api.microlink.io",
    ],
  },
}

module.exports = nextConfig
