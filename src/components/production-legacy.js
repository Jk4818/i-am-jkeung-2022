import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import { motion } from "framer-motion";


import Layout from './Layout.js';
import StarParticle from './StarParticle.js';

import ReleaseCard from "./ReleaseCard.js";
import MixingImage from "./MixingImage.js";

import "../styles/tsparticles.css";



function ProductionLegacy(props) {

  const variant = {
    hidden: { opacity: 0, y: "20%" },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
      },
    }
  };

  const tbaVariant = {
    hidden: { scale: 0.9, opacity: 0, y: "20%" },
    visible: {
      scale: 1,
      y: 0,
      opacity: 1,
      transition: {
        duration: 4,
      },
    }
  };


  let featSongs = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(filter: {frontmatter: {featured: {eq: true}}}) {
          edges {
            node {
              id
              frontmatter {
                featured
                album
                artist
                title
                tags
                date(formatString: "DD MMMM, YYYY")
                image {
                  childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED, height: 500, aspectRatio: 1)
                  }
                }
                featuredImgAlt
                sourceLink {
                  url
                  alt
                }
              }
              html
              
              featuredImg {
                childImageSharp {
                  gatsbyImageData(layout: CONSTRAINED, height: 100, aspectRatio: 1)
                }
              }
            }
          }
        }
      }  
      
    `
  );


  return (
    <div className='overflow-x-hidden'>
      <Layout>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='flex flex-col gap-32 justify-center items-center w-screen bg-gradient-to-b from-black via-white to-text-red'>

          <section className='mt-40 relative w-full flex flex-col gap-12 justify-center items-center uppercase text-white'>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: "all" }}
              variants={variant}
              className='font-semibold tracking-[0.75rem] mb-20 '>
              The Space
            </motion.h2>

            <div className='w-full max-w-[120rem] h-max flex flex-col items-center  relative z-10'>
              <motion.h1
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: "all" }}
                variants={variant}
                className='text-center w-32 h-max break-all font-black text-9xl z-10'>Bet
              </motion.h1>

              <motion.h1
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: "all" }}
                variants={variant}
                className='mt-[33vw] text-center w-32 h-max break-all font-black text-9xl z-10'>
                Ween
              </motion.h1>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={variant}
                className="absolute w-full h-max top-0 bottom-0 left-0 right-0 m-auto">
                <StaticImage placeholder='none' layout='constrained' src="../assets/images/eclipse.png" alt="Eclipse" />
              </motion.div>
            </div>


            <div className='flex items-center justify-center h-screen'>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: "all" }}
                variants={tbaVariant}
                className='text-lg font-semibold tracking-[0.75rem] drop-shadow-[0_0_4px_rgba(255,255,255,1)]'>
                To Be Announced
              </motion.h2>
            </div>


            <div className='absolute z-0 top-0 left-0 w-full h-full'>
              <StarParticle />
            </div>
          </section>


          <section className='w-full h-max lg:h-screen flex flex-col gap-10 px-4 md:p-12'>
            <h3 className='text-lg tracking-wide font-archivo text-white font-semibold'>Latest Releases</h3>

            <div className='w-full h-full flex justify-center items-center'>
              <motion.ul
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.7, staggerChildren: 0.1 }}
                className='w-full max-w-[1920px] h-full flex flex-col lg:flex-row flex-wrap lg:justify-between gap-6 md:gap-10'>

                {featSongs.allMarkdownRemark.edges.slice(0, 4).map((song, index) => (
                  <ReleaseCard song={song} index={index} />
                ))}

              </motion.ul>
            </div>
          </section>


          <section className='w-full h-full flex flex-col items-center md:gap-10 '>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: "all" }}
              variants={variant}
              className='text-6xl lg:text-9xl text-center tracking-wide font-archivo text-white font-semibold z-[1]'>In The Box
            </motion.h1>

            <MixingImage />

            <div className='p-4 md:p-12 xl:w-2/5 h-max flex flex-col gap-6 justify-center items-center text-center text-white text-2xl md:text-4xl z-10'>
              <h2 className='font-black'>Mixing & Mastering Services For You</h2>
              <p className='font-rubik font-bold'>With industry standard plugin chains, there are limitless possibilities for clean audio processing with our in box plugins.</p>
            </div>
          </section>

        </motion.div>
      </Layout>
    </div>
  );
}

export default ProductionLegacy;