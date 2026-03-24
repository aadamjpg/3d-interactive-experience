'use strict';

const { createSecureServer } = require('http2');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'], // replace with your image sources
  },
  experimental: {
    // Enable experimental features here
    modern: true,
    optimizeCss: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = { fs: false, path: false };
    }
    return config;
  },
};

module.exports = nextConfig;
