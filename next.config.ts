import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config  here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
