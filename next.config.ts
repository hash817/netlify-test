import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export',
  images: {
    remotePatterns: [new URL('https://lck.com.sg/cms/**'), new URL('https://kentholidays.lck.com.sg/**')],
  },
  async rewrites() {
    return [
      {
        source: '/cruise/:country',
        destination: '/destinations/:country',
      },
      {
        source: '/cruise/:country/:title/:id',
        destination: '/destinations/:country/:title/:id',
      },
    ]
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
