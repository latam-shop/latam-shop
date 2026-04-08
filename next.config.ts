import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['cdn.sanity.io'],
  },
  output: 'standalone',
};

export default nextConfig;
