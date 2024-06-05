/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  distDir: 'dist'
};

console.log(`NODE_ENV: ${process.env.NODE_ENV}`);

module.exports = nextConfig;