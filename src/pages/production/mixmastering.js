import React, { useEffect, useState } from 'react';
import NoiseBackgroundSVG from '../../components/NoiseBackgroundSVG';
import Layout from '../../components/Layout';
import PricingCard from '../../components/PricingCard';
import { graphql } from 'gatsby';
import AudioWaveform from '../../components/AudioWaveform';
import { StaticImage } from 'gatsby-plugin-image';
import { motion, AnimatePresence } from 'framer-motion';


import ThreeWayToggle from '../../components/ThreeWayToggle';
import RevealAnimation from '../../components/RevealAnimation';

import audioTrack from "../../assets/audio/DIROShort.mp3";
import audioTrack1 from "../../assets/audio/SevenShort.wav";
// import audioTrack2 from "../../assets/audio/HardestPartCover.wav";
import audioTrack3 from "../../assets/audio/JuliaShort.mp3";
import NoiseBackground from '../../components/NoiseBackground';

function MixMastering({ data }) {


    const mixPricing = data.mixingPrices.priceList;
    const masterPricing = data.masterPrices.priceList;
    const combinedPricing = data.combinedPrices.priceList;

    const tabs = [
        { label: "Mixing", value: mixPricing },
        { label: "Mastering", value: masterPricing },
        { label: "Combined", value: combinedPricing }
    ];
    const [selectedTab, setSelectedTab] = useState(tabs[0]);
    const handlePackageTypeChange = (tab) => {
        setSelectedTab(tab);
    }

    useEffect(() => {
        console.log(selectedTab);
    }, [selectedTab])



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
                    <NoiseBackgroundSVG/>
                    
                        <RevealAnimation width="w-fit">
                            <h1 className='text-4xl'>Mixing & Mastering</h1>
                        </RevealAnimation>
                        <RevealAnimation width="w-fit">
                            <p className='mt-10 mb-32 text-2xl'>Specialising in a cappella, orchestral, and pop, my expertise extends across a wide range of styles. I am committed to delivering top-notch results by providing meticulous attention to detail, ensuring your artistic vision is achieved without compromising any technical requirements.
                            </p>
                        </RevealAnimation>

                        <RevealAnimation>
                            <h3 className='font-semibold logo-animate'>Let's find your sound together, where every note has its perfect place.
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
                                <StaticImage className='h-full w-full aspect-square rounded-2xl' placeholder='none' layout='constrained' src="../../assets/images/tracks/run_to_you_cover.jpg" alt="Run To You Cover" />
                            </motion.div>
                            <motion.div
                                variants={mixVariant1}
                                className='-right-10 -bottom-0 xl:-right-0 xl:-bottom-0  absolute w-3/4 lg:w-10/12 max-w-xl aspect-square'>
                                <StaticImage className='h-full w-full aspect-square rounded-2xl' placeholder='none' layout='constrained' src="../../assets/images/tracks/aperture_cover.jpg" alt="Aperture Cover" />
                            </motion.div>
                            <motion.div
                                variants={mixVariant}
                                className='-right-10 -bottom-0 xl:-right-0 xl:-bottom-0  absolute w-3/4 lg:w-10/12 max-w-xl aspect-square'>
                                <StaticImage className='h-full w-full aspect-square rounded-2xl' placeholder='none' layout='constrained' src="../../assets/images/tracks/acatalepsy.jpg" alt="Acatalepsy Cover" />
                            </motion.div>
                        </motion.div>
                    </div>

                </div>

                {typeof window !== 'undefined' && 
                <div className='z-50'>
                    <RevealAnimation width="w-full">
                        <div className=''>
                            <AudioWaveform id="darling_its_raining_outside" title="Darling It's Raining Outside" composer="Jason Keung" progressColor="#f7edf0" audioTrack={audioTrack} />
                        </div>
                    </RevealAnimation>
                    <RevealAnimation width="w-full">
                        <div className=''>
                            <AudioWaveform id="seven" title="Seven (Feat. George Chen)" composer="Amatta Mirandari" progressColor="#f2d8b8" audioTrack={audioTrack1} />
                        </div>
                    </RevealAnimation>
                    {/* <RevealAnimation width="w-full">
                        <div className=''>
                            <AudioWaveform id="hardest_part" title="The Hardest Part" composer="Layla Mehmet" progressColor="#CDB4DB" audioTrack={audioTrack2} />
                        </div>
                    </RevealAnimation> */}
                    <RevealAnimation width="w-full">
                        <div className=''>
                            <AudioWaveform id="Julia" title="Julia (Ft. Jeremy)" composer="A Cappella" progressColor="#CDA4AB" audioTrack={audioTrack3} />
                        </div>
                    </RevealAnimation>
                    
                </div>
                }

                <div className='w-full py-20'>

                    <RevealAnimation>
                        <div className='w-full flex items-center justify-between'>
                            <h3>Independant Packages - Pay per product, not per hour</h3>
                        </div>
                    </RevealAnimation>

                    <RevealAnimation>
                        <div className='mt-10 w-full flex justify-center'>
                            <ThreeWayToggle tabs={tabs} selectedTab={selectedTab} handleTabChange={handlePackageTypeChange} />
                        </div>
                    </RevealAnimation>

                    <div className='mt-20 w-full h-full flex flex-wrap gap-6 justify-around'>
                        <AnimatePresence exitBeforeEnter>
                            {selectedTab.value.map((item, i) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.3, delay: i * 0.2 }}
                                    className='basis-1/4'>
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

export default MixMastering;


export const pageQuery = graphql`
query {
    mixingPrices: allMarkdownRemark(
        sort: { fields: [frontmatter___price], order: ASC}
        filter: {frontmatter: {pricing: {eq: true}, category: {eq: "mixing"}}}
    ) {
      priceList: nodes {
        id
        frontmatter {
          title
          price
          features
          btnText
          color
          category
        }
        excerpt
      }
    }
    masterPrices: allMarkdownRemark(
        sort: { fields: [frontmatter___price], order: ASC}
      filter: {frontmatter: {pricing: {eq: true}, category: {eq: "master"}}}
    ) {
      priceList: nodes {
        id
        frontmatter {
          title
          price
          features
          btnText
          color
          category
        }
        excerpt
      }
    }
    combinedPrices: allMarkdownRemark(
        sort: { fields: [frontmatter___price], order: ASC}
      filter: {frontmatter: {pricing: {eq: true}, category: {eq: "mixmaster"}}}
    ) {
      priceList: nodes {
        id
        frontmatter {
          title
          price
          features
          btnText
          color
          category
        }
        excerpt
      }
    }
  }
  

`