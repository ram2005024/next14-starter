/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
      },
      {
        protocol: "https",
        hostname: "scontent.fktm17-1.fna.fbcdn.net",
      },
    ],
  },
};

module.exports = nextConfig;
