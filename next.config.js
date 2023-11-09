/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'uxpjdvsvrcfuwktainys.supabase.co',
      },
    ],
  },
};

module.exports = nextConfig;
