// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['example.com'], // Add the domains of the external images here
    },
  }
  
  export default nextConfig;
  