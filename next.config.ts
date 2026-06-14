import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/hollap-project",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
