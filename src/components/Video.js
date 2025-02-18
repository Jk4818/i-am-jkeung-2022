import React from 'react';
import { motion } from 'framer-motion';
import ProductionHeroTitle from './ProductionHeroTitle';
import RevealAnimation from './RevealAnimation';
import "../styles/video.css";


const Video = ({ videoSrc, videoTitle, videoThumb, videoSubs, ...props }) => (
    <div className="relative w-full h-full flex justify-center items-center ">
        <video
            loop
            autoPlay
            muted
            poster={videoThumb}
            className="w-full h-full object-cover"
        >
            <source src={videoSrc} type="video/mp4" />
        </video>

        {videoTitle === "Studio" ? (
            // Centered Header for "Studio" title
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-center">
                <ul className="z-20 w-11/12">
                    <motion.li
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <ProductionHeroTitle />
                    </motion.li>
                    <li className="mt-4">
                        <RevealAnimation>
                            <h2 className="text-white text-md font-archivo font-semibold uppercase tracking-widest">
                                Chiswick W4, London, United Kingdom
                            </h2>
                        </RevealAnimation>
                    </li>
                </ul>
            </div>
        ) : (
            // Default Heading
            <div
                id="heading"
                className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center font-archivo text-7xl font-black text-white"
            >
                <h1>{videoTitle}</h1>
                {videoSubs && <h2 className="text-4xl">{videoSubs}</h2>}
            </div>
        )}
    </div>
)

export default Video;