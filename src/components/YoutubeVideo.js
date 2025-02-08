import React from "react";
import { motion } from "framer-motion";
import ProductionHeroTitle from "./ProductionHeroTitle";
import RevealAnimation from "./RevealAnimation";
import YouTube from "react-youtube";

function YoutubeVideo({ videoUrl }) {
    // Extract the video ID from the URL
    const videoId = videoUrl.split("v=")[1]?.split("&")[0];

    const opts = {
        playerVars: {
            autoplay: 1,
            controls: 0,
            mute: 1,
            loop: 1,
            modestbranding: 1,
            showinfo: 0,
            rel: 0,
            fs: 0,
            iv_load_policy: 3,
            disablekb: 1,
            playlist: videoId, // Ensures looping
        },
    };

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* YouTube Background */}
            <div className="absolute inset-0 w-full h-full">
                {videoId && (
                    <div className="absolute inset-0 w-full h-full">
                        <YouTube
                            videoId={videoId}
                            opts={opts}
                            className="absolute w-full h-full"
                            iframeClassName="absolute top-0 left-0 w-full h-full scale-[1.5] min-w-full min-h-full object-cover"
                        />
                    </div>
                )}
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                {/* Fade-to-transparent effect at the bottom */}
                <div className="absolute bottom-0 w-full h-32 bg-gradient-to-b from-transparent to-black/0"></div>
            </div>
            {/* Centered Header */}
            <div className='flex items-center justify-center text-center w-full h-full'>
                <ul className='z-20 w-11/12'>
                    <motion.li
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}>
                        <ProductionHeroTitle />
                    </motion.li>
                    <li className='mt-4'>
                        <RevealAnimation>
                            <h2 className='text-white text-md font-archivo font-semibold uppercase tracking-widest'>
                                Chiswick W4, London, United Kingdom
                            </h2>
                        </RevealAnimation>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default YoutubeVideo;
