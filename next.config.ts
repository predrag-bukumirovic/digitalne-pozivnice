import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Old filter links (/sabloni?kategorija=vencanje) now have their own pages.
      {
        source: "/sabloni",
        has: [{ type: "query", key: "kategorija", value: "(?<kategorija>vencanje|krstenje|rodjendan|proslava-bebe|poslovno)" }],
        destination: "/sabloni/:kategorija",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      // Customers' invitations and calendar files: reachable by link, never listed in search results.
      { source: "/pozivnica/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] },
      { source: "/kalendar/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex" }] },
    ];
  },
};

export default nextConfig;
