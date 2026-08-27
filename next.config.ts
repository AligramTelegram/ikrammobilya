import type { NextConfig } from "next";

const STATIC_ASSET_EXTENSIONS = [
  "webp",
  "png",
  "jpg",
  "jpeg",
  "svg",
  "ico",
  "woff",
  "woff2",
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: `/:path*.(${STATIC_ASSET_EXTENSIONS.join("|")})`,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
