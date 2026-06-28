import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  transpilePackages: ["framer-motion"],
  webpack: (config, { dev, isServer }) => {
    // Disable Webpack disk cache in development to prevent ChunkLoadErrors and cache corruption
    if (dev && !isServer) {
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;
