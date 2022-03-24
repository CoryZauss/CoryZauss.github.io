/** @type {import('next').NextConfig} */
const prod = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  }
}

module.exports = nextConfig
