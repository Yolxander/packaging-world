/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'hebbkx1anhila5yf.public.blob.vercel-storage.com',
            "maps.googleapis.com"
        ],
    },
    reactStrictMode: true,
    swcMinify: true,
};

export default nextConfig;
