import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

import NoiseBackground from '../../components/NoiseBackground';
import ProductionHeroTitle from '../../components/ProductionHeroTitle';
import Layout from '../../components/Layout';
import { Link } from 'gatsby';
import RevealAnimation from '../../components/RevealAnimation';
import YoutubeVideo from '../../components/YoutubeVideo';
import StudioBRoll from '../../assets/videos/studio-b-roll.mp4';
import StudioBRollPoster from '../../assets/videos/studio-b-roll-thumb.jpg';
import Video from '../../components/Video';

function Production(props) {

    const [isChecked, setIsChecked] = useState(true);
    const checkHandler = () => {
        setIsChecked(!isChecked);
    };

    return (
        <Layout>
            <div className='bg-prod-dark w-full h-full'>
                <section className='relative w-full h-screen'>
                    {/* <YoutubeVideo videoUrl="https://www.youtube.com/watch?v=LMjLqbfpaq4" /> */}
                    <div className='relative w-full h-full pointer-events-none'>
                        <Video
                            videoSrc={StudioBRoll}
                            videoThumb={StudioBRollPoster}
                            videoTitle="Studio"
                        />
                    </div>
                </section>

                <AnimatePresence>

                    <section className={`relative w-full h-screen  text-white bg-prod-dark overflow-hidden`}>
                        <div className='w-full h-full py-20 flex flex-col items-center justify-around z-10'>
                            <motion.h3
                                initial={{ y: "100%", opacity: 0 }}
                                whileInView={{ y: "0%", opacity: 1, transition: { duration: 0.5, delay: 0.5 } }}
                                viewport={{ once: false, amount: 1 }}
                                className='sm:mt-10 h-max font-inter font-bold text-sm z-10'>You Need</motion.h3>

                            <div className='relative w-full h-full flex items-center justify-center z-10'>


                                <div className='w-max h-max py-10 flex m-auto scale-50 sm:scale-100 active:scale-[0.4] sm:active:scale-95 transition-transform'>
                                    <input type="checkbox" name="checkbox" id="toggle" checked={isChecked} onChange={checkHandler} />
                                    <label htmlFor="toggle" className={`cursor-pointer switch border-4 border-white after:bg-white hover:border-gray-200 hover:after:bg-gray-200`}><div className='hidden'>toggle</div></label>
                                </div>

                                {isChecked &&
                                    <motion.div
                                        initial={{ y: "100%", opacity: 0 }}
                                        animate={{ y: "0%", opacity: 1 }}
                                        exit={{ y: "100%", opacity: 0, transition: { duration: 4.5 } }}
                                        key={"composer"}
                                        className={`absolute top-0 bottom-60 sm:bottom-[28rem] m-auto left-0 xl:left-[29rem] right-0 w-max h-max`}>
                                        <Link to='/production/composing'>
                                            <RevealAnimation>
                                                <h1 className='text-center xl:text-left text-5xl sm:text-9xl md:text-9xl font-archivo font-bold hover:text-gray-300 active:scale-95 transition-all'>Media <br />Composer</h1>
                                            </RevealAnimation>
                                        </Link>
                                    </motion.div>
                                }
                                {!isChecked &&
                                    <motion.div
                                        initial={{ y: "100%", opacity: 0 }}
                                        animate={{ y: "0%", opacity: 1 }}
                                        exit={{ y: "100%", opacity: 0 }}
                                        key={"mixmastering"}
                                        className={`absolute top-60 sm:top-96 bottom-0 m-auto left-0 right-0 xl:right-[35rem] w-max h-max`}>
                                        <Link to='/production/mixmastering'>
                                            <RevealAnimation>
                                                <h1 className=' text-center xl:text-right text-5xl sm:text-8xl md:text-[7rem] font-archivo font-bold hover:text-gray-300 active:scale-95 transition-all'>Mix Mastering<br />Engineer</h1>
                                            </RevealAnimation>
                                        </Link>
                                    </motion.div>
                                }
                            </div>
                        </div>

                        {isChecked ?
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                key={1}
                                className='w-11/12 h-full absolute top-0 bottom-10 left-0 right-0 m-auto composer-background bg-bottom xl:bg-center  bg-prod-dark' />
                            :
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                key={2}
                                className='w-11/12 h-full  absolute top-40 bottom-0 left-0 right-0 m-auto mixing-background bg-top xl:bg-center  bg-prod-dark transition-[translate]' />
                        }



                    </section>
                </AnimatePresence>
            </div>
        </Layout>
    );
}

export default Production;