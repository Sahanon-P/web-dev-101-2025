import type { NextConfig } from "next";
const API_URL = process.env.API_URL || "http://localhost:3100";
const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${API_URL}/:path*`,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3100",
      },
    ],
  },
};

export default nextConfig;
