/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: ["media.rawg.io"],
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.rawg.io",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
