/** @type {import('next').NextConfig} */

// Ace Arena Poker is its own Vercel project (acearena-poker-site), built with
// basePath "/acearenapoker". Forward that path to it so it lives at predicta.us/acearenapoker.
const ACE_ARENA = "https://acearena-poker-site.vercel.app";

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      { source: "/acearenapoker", destination: `${ACE_ARENA}/acearenapoker` },
      { source: "/acearenapoker/:path*", destination: `${ACE_ARENA}/acearenapoker/:path*` },
    ];
  },
};
export default nextConfig;
