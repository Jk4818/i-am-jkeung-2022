import React from 'react';
import Layout from '../../components/Layout';
import PricingCard from '../../components/PricingCard';
import { graphql } from 'gatsby';
import AudioWaveform from '../../components/AudioWaveform';
import { StaticImage } from 'gatsby-plugin-image';
import { motion, AnimatePresence } from 'framer-motion';


import audioTrack1 from "../../assets/audio/ApertureShort.mp3";
import audioTrack2 from "../../assets/audio/WaterOfLifeShort.mp3";
import audioTrack3 from "../../assets/audio/LunchInFiveShort.wav";
import RevealAnimation from '../../components/RevealAnimation';



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
                            <p className='mt-10 mb-32 text-xl 2xl:text-2xl'>With years of experience on the composing chair, I can help score the best tracks required for your projects. From emotive soundscapes to orchestral grandeur, I possess the versatility to score for film, TV, games, and adverts. Whether it's capturing the essence of a heartfelt drama or creating an adrenaline-fuelled adventure, each project is ensured to receive the perfect musical accompaniment.
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
                                <StaticImage className='h-full w-full aspect-square rounded-2xl' placeholder='none' layout='constrained' src="../../assets/images/tracks/vision_cover.jpg" alt="vision_cover" />
                            </motion.div>
                            <motion.div
                                variants={mixVariant1}
                                className='-right-10 -bottom-0 xl:-right-0 xl:-bottom-0  absolute w-3/4 lg:w-10/12 max-w-xl aspect-square'>
                                <StaticImage className='h-full w-full aspect-square rounded-2xl' placeholder='none' layout='constrained' src="../../assets/images/tracks/wol_cover.png" alt="water_of_life_cover" />
                            </motion.div>
                            <motion.div
                                variants={mixVariant}
                                className='-right-10 -bottom-0 xl:-right-0 xl:-bottom-0  absolute w-3/4 lg:w-10/12 max-w-xl aspect-square'>
                                <StaticImage className='h-full w-full aspect-square rounded-2xl' placeholder='none' layout='constrained' src="../../assets/images/tracks/over_the_mile_cover.jpg" alt="over_the_mile_cover" />
                            </motion.div>
                        </motion.div>
                    </div>

                </div>

                {typeof window !== 'undefined' && <div className=''>
                    <RevealAnimation width="w-full">
                        <div className=''>
                            <AudioWaveform id="aperture_demo" title="Aperture" composer="Road Not Taken" audioTrack={audioTrack1} progressColor="#CDB4DB" />
                        </div>
                    </RevealAnimation>
                    <RevealAnimation width="w-full">
                        <div className=''>
                            <AudioWaveform id="wol_demo" title="Water Of Life" composer="Road Not Taken" audioTrack={audioTrack2}  progressColor="#BDE0FE" />
                        </div>
                    </RevealAnimation>
                    <RevealAnimation width="w-full">
                        <div className=''>
                            <AudioWaveform id="lif_demo" title="Death Theme" composer="Lunch In Five OST" audioTrack={audioTrack3}  progressColor="#f2d8b8" />
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

                
                <RevealAnimation>
                        <div className='w-full pb-10 flex items-center justify-between'>
                            <h3>For projects that are beyond the scope of any provided packages, please get in contact for a personalised quote on your requirements.</h3>
                        </div>
                </RevealAnimation>
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