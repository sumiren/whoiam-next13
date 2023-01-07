/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["t.co", "twitter.com", "pic.twitter.com", "pbs.twimg.com"],
  },
}

module.exports = nextConfig
