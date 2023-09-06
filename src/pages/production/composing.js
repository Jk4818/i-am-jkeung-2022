import React, { useRef, useState, useCallback, useEffect } from 'react';
import Layout from '../../components/Layout';
import PricingCard from '../../components/PricingCard';
import { graphql } from 'gatsby';
// import AudioWaveform from '../../components/AudioWaveform';
import { StaticImage } from 'gatsby-plugin-image';
import { motion, AnimatePresence } from 'framer-motion';


import audioTrack1 from "../../assets/audio/georg.mp3";
import audioTrack2 from "../../assets/audio/seven.mp3";
import RevealAnimation from '../../components/RevealAnimation';

import { WaveForm, WaveSurfer } from 'wavesurfer-react';

import { BsPlayCircle, BsPauseCircle } from 'react-icons/bs';

import tempTrack from "../../assets/audio/georg.mp3";

function AudioWaveform({id, title, composer, audioTrack, progressColor}) {
    
    const [isPlaying, setIsPlaying] = useState(false);

    const wavesurferRef = useRef();
    const play = useCallback(() => {
        wavesurferRef.current.playPause();

    }, []);

    const handleWSMount = useCallback(
        (waveSurfer) => {
            if (waveSurfer.markers) {
                waveSurfer.clearMarkers();
            }

            wavesurferRef.current = waveSurfer;

            if (wavesurferRef.current) {

                wavesurferRef.current.on("ready", () => {
                    console.log("WaveSurfer is ready");
                });
                wavesurferRef.current.setVolume(0.1);

                wavesurferRef.current.on("play", () => {
                    setIsPlaying(true);
                    console.log("WaveSurfer is playing");
                });
                wavesurferRef.current.on("pause", () => {
                    setIsPlaying(false);
                    console.log("WaveSurfer is paused");
                });

                wavesurferRef.current.on("loading", (data) => {
                    console.log("loading --> ", data);
                });

                if (window) {
                    window.surferidze = wavesurferRef.current;
                }
            }
        },
        []
    );

    //useffect where audioTrack exists set it as waveaudiotrack
    useEffect(() => {
        console.log("Checking for audio track:");
        if (audioTrack) {
            wavesurferRef.current.load(audioTrack);
            console.log("LOADING ACTUAL TRACK");
        }
        else {
            wavesurferRef.current.load(tempTrack);
            console.log("LOADING TEMP TRACK");
        }
    }, [audioTrack, handleWSMount]);

    return (
        <div className='w-full h-full my-10 grid grid-rows-2'>
            <div className='row-start-1 my-10 flex items-center gap-4 text-white'>
                <button onClick={play} className='text-5xl hover:text-main-gray transition-all border-2 p-1 border-transparent focus:border-cyan-200 rounded-lg'>
                    {isPlaying ?
                        <BsPauseCircle />
                        :
                        <BsPlayCircle />
                    }
                </button>
                <h1 className='font-inter font-semibold'>{title} — {composer}</h1>
            </div>

            { audioTrack !== null &&
                <div className='row-start-2 h-full'>
                <WaveSurfer onMount={handleWSMount}>
                    <WaveForm id={id} responsive={true} progressColor={progressColor ? progressColor : "#595959"} cursorWidth={3} barWidth={3} barGap={2} barRadius={3}/>
                </WaveSurfer>
            </div>}
        </div>
    );
}



function Composing({ data }) {


    const { priceList } = data.pricing;

    const mixVariant = {
        visible: {
            opacity: 1, y: 0, rotate: 0,
            transition: {
                duration: 0.75,
            },
        },
        hidden: { opacity: 0, y: 20, rotate: 2 },
    }
    const mixVariant1 = {
        visible: {
            opacity: 1, x: -54, y: -31, rotate: -3,
            transition: {
                duration: 0.75,
            },
        },
        hidden: { opacity: 0 },
    }
    const mixVariant2 = {
        visible: {
            opacity: 1, x: -104, y: -78, rotate: -10,
            transition: {
                duration: 0.75,
            },
        },
        hidden: { opacity: 0 },
    }

    return (
        <Layout>
            <div className='w-full h-full bg-prod-dark pt-40 xl:pt-0 px-10 xl:px-40 text-white'>

                <div className='flex flex-wrap text-white items-center xl:h-screen'>
                    <div className='w-full lg:w-1/2 font-archivo font-semibold'>
                        <RevealAnimation width="w-fit">
                            <h1 className='text-4xl'>Composing & Soundtracks</h1>
                        </RevealAnimation>
                        <RevealAnimation width="w-fit xl:pr-10">
                            <p className='mt-10 mb-32 text-xl 2xl:text-2xl'>With years of experience on the composing chair, I can help score the best tracks required for your projects. From emotive soundscapes to orchestral grandeur, I possess the versatility to score for film, TV, games, and adverts. Whether it's capturing the essence of a heartfelt drama or creating an adrenaline-fuelled adventure, I am able to score for any style, ensuring your project receives the perfect musical accompaniment.
                            </p>
                        </RevealAnimation>

                        <RevealAnimation>
                            <h3 className='font-semibold logo-animate'>Join me as I compose my way through the captivating realm of film.
                            </h3>
                        </RevealAnimation>
                    </div>

                    <div className='w-full lg:w-1/2 h-[40rem] lg:h-full flex items-center justify-center'>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.1 }}
                            transition={{ staggerChildren: 0.35 }}
                            className='relative w-3/4 lg:w-10/12 aspect-square'>
                            <motion.div
                                variants={mixVariant2}
                                className='-right-10 -bottom-0 xl:-right-0 xl:-bottom-0  absolute w-3/4 lg:w-10/12 max-w-xl aspect-square'>
                                <StaticImage className='h-full w-full aspect-square rounded-2xl' placeholder='none' layout='constrained' src="../../assets/images/tracks/run_to_you_cover.jpg" alt="run_to_you_cover" />
                            </motion.div>
                            <motion.div
                                variants={mixVariant1}
                                className='-right-10 -bottom-0 xl:-right-0 xl:-bottom-0  absolute w-3/4 lg:w-10/12 max-w-xl aspect-square'>
                                <StaticImage className='h-full w-full aspect-square rounded-2xl' placeholder='none' layout='constrained' src="../../assets/images/tracks/over_the_mile_cover.jpg" alt="over_the_mile_cover" />
                            </motion.div>
                            <motion.div
                                variants={mixVariant}
                                className='-right-10 -bottom-0 xl:-right-0 xl:-bottom-0  absolute w-3/4 lg:w-10/12 max-w-xl aspect-square'>
                                <StaticImage className='h-full w-full aspect-square rounded-2xl' placeholder='none' layout='constrained' src="../../assets/images/tracks/vision_cover.jpg" alt="vision_cover" />
                            </motion.div>
                        </motion.div>
                    </div>

                </div>

                {typeof window !== 'undefined' && <div className=''>
                    <RevealAnimation width="w-full">
                        <div className=''>
                            <AudioWaveform id="over_the_mile" title="Over The Mile" composer="Jason Keung" audioTrack={audioTrack1} progressColor="#CDB4DB" />
                        </div>
                    </RevealAnimation>
                    <RevealAnimation width="w-full">
                        <div className=''>
                            <AudioWaveform id="water_of_life" title="Water Of Life" composer="Jason Keung" audioTrack={audioTrack2}  progressColor="#BDE0FE" />
                        </div>
                    </RevealAnimation>
                </div>
                }

                <div className='w-full py-20'>
                    <RevealAnimation>
                        <div className='w-full flex items-center justify-between'>
                            <h3>Independant Packages</h3>
                        </div>
                    </RevealAnimation>
                    <div className='mt-20 w-full h-full flex flex-wrap gap-6 justify-around'>
                        <AnimatePresence exitBeforeEnter>
                            {priceList.map((item, i) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.3, delay: i * 0.2 }}
                                    className=' basis-1/4'>
                                    <PricingCard
                                        color={item.frontmatter.color}
                                        title={item.frontmatter.title}
                                        description={item.excerpt}
                                        price={item.frontmatter.price}
                                        features={item.frontmatter.features}
                                        btnText={item.frontmatter.btnText}
                                    />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Composing;


export const pageQuery = graphql`
query {
    pricing: allMarkdownRemark(
        sort: { fields: [frontmatter___price], order: ASC}
        filter: {frontmatter: {pricing: {eq: true} category: {eq: "composing"}}}) {
      priceList: nodes {
        id
        frontmatter {
          title
          price
          features
          btnText
          color
        }
        excerpt
      }
    }
  }
  

`