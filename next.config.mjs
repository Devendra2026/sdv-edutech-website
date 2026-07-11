
/** @type {import('next').NextConfig} */
const securityHeaders = [
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
]

const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 100], // 👈 Fixes: quality="100" unconfigured warning
    dangerouslyAllowLocalIP: true, // 👈 Fixes: "resolved to private ip" error
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'sdvedutech.com' },
      { protocol: 'https', hostname: 'tse4.mm.bing.net' },
      { protocol: 'https', hostname: 'niua.in' },
      { protocol: 'https', hostname: 'digitallearning.eletsonline.com' },
      { protocol: 'https', hostname: 'skillsindiafoundation.in' },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
}

export default nextConfig
