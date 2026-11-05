/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [{ source: '/increase', destination: '/creation', permanent: false }]
  },
}

export default nextConfig
