import type { NextConfig } from "next";

// 外部APIの画像使用時は「next-config.ts」で外部ドメインの許可が必要
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.dog.ceo",
      },
    ],
  },
};

export default nextConfig;
