import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "api/product",
  //       destination:
  //         "https://glore-bd-backend-node-mongo.vercel.app/api/product",
  //     },
  //   ];
  // },
};

export default nextConfig;
