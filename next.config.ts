import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname
  },
  images: {
    dangerouslyAllowSVG: true
  }
};

export default nextConfig;
