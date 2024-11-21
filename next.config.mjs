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
          hostname: 'www.pexels.com',
        },
        {
            protocol: 'https',
            hostname: 'images.pexels.com', // Added this line
          },
        {
          protocol: 'https',
          hostname: 'www.unsplash.com',
        },
        {
          protocol: 'https',
          hostname: 'plus.unsplash.com',
        },
        {
          protocol: 'https',
          hostname: 'images.unsplash.com', // Added this line
        },
      ],
    },
  };
  
  export default nextConfig;
  