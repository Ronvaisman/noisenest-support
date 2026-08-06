import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/noisenest-support",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
