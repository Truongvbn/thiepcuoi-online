import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      { source: '/v1', destination: '/v1.html' },
      { source: '/v2', destination: '/v2.html' },
      { source: '/v3', destination: '/v3.html' },
      { source: '/v4', destination: '/v4.html' },
      { source: '/v5', destination: '/v5.html' },
      { source: '/v6', destination: '/v6.html' },
    ]
  },
}

export default nextConfig
