import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Force static export - generates only static HTML files
  output: 'export',
  
  // Ensure images work with static export
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
