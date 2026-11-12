/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: '/increase', destination: '/creation', permanent: false },
      { source: '/work/retained-advisory', destination: '/work', permanent: false },
      { source: '/de/work/retained-advisory', destination: '/de/work', permanent: false },
    ]
  },
}

export default nextConfig
