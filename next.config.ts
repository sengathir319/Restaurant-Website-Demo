import type { NextConfig } from "next";

// When deployed to GitHub Pages the site lives at /<repo-name>/.
// The GitHub Actions workflow sets NEXT_PUBLIC_BASE_PATH; locally it is empty.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export", // static site -> ./out
  trailingSlash: true,
  basePath,
  images: { unoptimized: true }, // no image server on GitHub Pages
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  typescript: { ignoreBuildErrors: true },
  reactStrictMode: false,
};

export default nextConfig;
