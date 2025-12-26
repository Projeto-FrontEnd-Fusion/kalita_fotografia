import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images : {
    domains : ["res.cloudinary.com"],
    qualities: [25, 50, 75, 100],
  },
  eslint : {
    ignoreDuringBuilds : true
  }
};

export default nextConfig;
