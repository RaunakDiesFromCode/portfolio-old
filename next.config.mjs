import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['i.ibb.co'],
    },
};



export default withNextVideo(nextConfig);