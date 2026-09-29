import type { NextConfig } from 'next';
const config: NextConfig = { output: 'export', distDir: process.env.NODE_ENV === 'development' ? '.next-dev' : '.next-production', trailingSlash: true, images: { unoptimized: true }, poweredByHeader: false, devIndicators: false };
export default config;
