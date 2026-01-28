import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/**",
      },
    ],
    qualities: [25, 50, 75, 100],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
