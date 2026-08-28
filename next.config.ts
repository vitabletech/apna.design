import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;

let repo = "";
if (isGithubActions) {
  // Extract repository name from GITHUB_REPOSITORY (e.g., "vitabletech/BihariDesigner")
  const repoName = process.env.GITHUB_REPOSITORY?.replace(/.*?\//, "") || "";
  if (repoName) {
    repo = `/${repoName}`;
  }
}

const nextConfig: NextConfig = {
  output: "export",
  basePath: repo,
  assetPrefix: repo,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
