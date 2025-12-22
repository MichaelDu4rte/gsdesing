import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1600, 1920, 2048, 2560, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512, 640, 800, 1024, 1200, 1600],
    minimumCacheTTL: 60,
    qualities: [75, 90, 95, 100],
  },
};

export default nextConfig;
