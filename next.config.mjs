/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: '/notes', destination: '/writings', permanent: true },
      { source: '/notes/:slug', destination: '/writings/:slug', permanent: true },
    ]
  },
}

export default nextConfig
