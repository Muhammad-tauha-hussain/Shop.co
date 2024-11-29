/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
      },
      {
        protocol: 'https',
        hostname: 'www.pexels.com', // Pexels homepage is listed here (not needed for images)
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com', // Correct image URL domain
      },
      {
        protocol: 'https',
        hostname: 'www.unsplash.com', // Unsplash homepage (not needed for images)
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com', // Unsplash URL for image sizes
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Correct image URL domain
      },
    ],
  },
};

export default nextConfig;
