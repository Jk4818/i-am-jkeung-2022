import React from 'react';
import Layout from '../../components/Layout';
import PricingCard from '../../components/PricingCard';
import { graphql } from 'gatsby';
import AudioWaveform from '../../components/AudioWaveform';
import { StaticImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';


import audioTrack1 from "../../assets/audio/over_the_mile.wav";
import audioTrack2 from "../../assets/audio/water_of_life.wav";
import ThreeWayToggle from '../../components/ThreeWayToggle';
import RevealTextAnimation from '../../components/RevealTextAnimation';


function Composing({ data }) {

    const { priceList } = data.pricing;

    const mixVariant = {
        visible: {
            opacity: 1, y: 0, rotate: 0,
            transition: {
                duration: 0.75,
            },
        },
        hidden: { opacity: 0, y:20, rotate: 2 },
    }
    const mixVariant1 = {
        visible: {
            opacity: 1,x:-54, y: -31, rotate: -3,
            transition: {
                duration: 0.75,
            },
        },
        hidden: { opacity: 0 },
    }
    const mixVariant2 = {
        visible: {
            opacity: 1,x:-104, y: -78, rotate: -10,
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
                        <RevealTextAnimation width="w-fit">
                            <h1 className='text-4xl'>Composing & Soundtracks</h1>
                        </RevealTextAnimation>
                        <RevealTextAnimation width="w-fit xl:pr-10">
                            <p className='mt-10 mb-32 text-xl 2xl:text-2xl'>With years of experience on the composing chair, I can help score the best tracks required for your projects. From emotive soundscapes to orchestral grandeur, I possess the versatility to score for film, TV, games, and adverts. Whether it's capturing the essence of a heartfelt drama or creating an adrenaline-fuelled adventure, I am able to score for any style, ensuring your project receives the perfect musical accompaniment.
                            </p>
                        </RevealTextAnimation>

                        <RevealTextAnimation>
                            <h3 className='font-semibold logo-animate'>Join me as I compose my way through the captivating realm of film.
                            </h3>
                        </RevealTextAnimation>
                    </div>

                    <div className='w-full lg:w-1/2 h-[40rem] lg:h-full flex items-center justify-center'>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.1 }}
                            transition={{  staggerChildren: 0.35 }}
                            className='relative w-3/4 lg:w-10/12 aspect-square'>
                            <motion.div
                                variants={mixVariant2}
                                className='-right-10 -bottom-0 xl:-right-0 xl:-bottom-0  absolute w-3/4 lg:w-10/12 max-w-xl aspect-square'>
                                <StaticImage className='h-full w-full aspect-square rounded-2xl' placeholder='none' layout='constrained' src="../assets/images/tracks/run_to_you_cover.jpg"  alt="run_to_you_cover" />
                            </motion.div>
                            <motion.div
                                variants={mixVariant1}
                                className='-right-10 -bottom-0 xl:-right-0 xl:-bottom-0  absolute w-3/4 lg:w-10/12 max-w-xl aspect-square'>
                                <StaticImage className='h-full w-full aspect-square rounded-2xl' placeholder='none' layout='constrained' src="../assets/images/tracks/vision_cover.png"   alt="vision_cover" />
                            </motion.div>
                            <motion.div
                                variants={mixVariant}
                                className='-right-10 -bottom-0 xl:-right-0 xl:-bottom-0  absolute w-3/4 lg:w-10/12 max-w-xl aspect-square'>
                                <StaticImage className='h-full w-full aspect-square rounded-2xl' placeholder='none' layout='constrained' src="../assets/images/tracks/over_the_mile_cover.png" alt="over_the_mile_cover" />
                            </motion.div>
                        </motion.div>
                    </div>

                </div>

                <div className=''>
                    <RevealTextAnimation width="w-full">
                        <div className=''>
                            <AudioWaveform id="over_the_mile" title="Over The Mile" composer="Jason Keung" audioTrack={audioTrack1}/>
                        </div>
                    </RevealTextAnimation>
                    <RevealTextAnimation width="w-full">
                        <div className=''>
                            <AudioWaveform id="water_of_life" title="Water Of Life" composer="Jason Keung" audioTrack={audioTrack2}/>
                        </div>
                    </RevealTextAnimation>
                </div>

                <div className='w-full py-20'>
                    <div className='w-full flex items-center justify-between'>
                        <h3>Independant Packages</h3>
                    </div>
                    <div className='mt-20 w-full h-full flex flex-wrap gap-6 justify-around'>
                        {priceList.map((item, index) => (
                            <PricingCard
                                key={index}
                                color={item.frontmatter.color}
                                title={item.frontmatter.title}
                                description={item.excerpt}
                                price={item.frontmatter.price}
                                features={item.frontmatter.features}
                                btnText={item.frontmatter.btnText}
                            />
                        ))}
                    </div>

                    <div><ThreeWayToggle /></div>
                </div>
            </div>
        </Layout>
    );
}

export default Composing;


export const pageQuery = graphql`
query {
    pricing: allMarkdownRemark(filter: {frontmatter: {pricing: {eq: true} category: {eq: "composing"}}}) {
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