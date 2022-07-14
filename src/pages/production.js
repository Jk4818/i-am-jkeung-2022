import React from 'react';
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import { motion } from "framer-motion";


import Layout from '../components/Layout.js';
import StarParticle from '../components/StarParticle.js';

import "../styles/tsparticles.css";


function Production(props) {

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
                color
                featuredImgAlt
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

            <div className='absolute top-20 z-10'>
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
                className='mt-80 text-center w-32 h-max break-all font-black text-9xl z-10'>
                Ween
              </motion.h1>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={variant}>
              <StaticImage placeholder='none' layout='constrained' src="../assets/images/eclipse.png" alt="kew-house" />
            </motion.div>

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


          <section className='w-full h-screen p-12 flex flex-col gap-10 '>
            <h3 className='text-lg tracking-wide font-archivo text-white font-semibold'>Latest Releases</h3>

            <div className='w-full h-full'>
              <ul className='w-full h-full flex  flex-wrap justify-between gap-10'>

                {featSongs.allMarkdownRemark.edges.slice(0, 4).map((song) => (
                  <li
                    key={song.node.id}
                    className='w-[calc(50%-2.5rem)] h-80 flex flex-col font-archivo bg-text-red rounded-lg divide-gray-800 divide-y'>

                    <div className='h-3/4 w-full flex'>

                      <div className='w-2/3 h-full p-4 flex flex-col justify-between'>
                        <h1 className='text-4xl'>{song.node.frontmatter.title}</h1>
                        <div className='flex items-center gap-4'>

                          <div className='w-6 aspect-square'>
                            <GatsbyImage className='rounded-full' image={getImage(song.node.featuredImg.childImageSharp.gatsbyImageData)} alt={song.node.frontmatter.featuredImgAlt} />
                          </div>
                          
                          <h3 className='text-lg'>{song.node.frontmatter.artist}</h3>
                          
                        </div>
                      </div>

                      <div className='w-1/3 h-full flex items-center justify-center p-6'>
                        <GatsbyImage image={getImage(song.node.frontmatter.image)} alt={song.node.frontmatter.id} />
                      </div>
                    </div>
                    <div className='p-6 h-1/4 text-xl'>Bandcamp</div>


                  </li>
                ))}

              </ul>
            </div>
          </section>


          <section className='w-full p-12 flex flex-col items-center gap-10 '>
            <h1 className='text-9xl tracking-wide font-archivo text-white font-semibold'>In The Box</h1>

            <div className='w-full h-[60rem] bg-black'>

            </div>

            <div className='w-2/5 h-[20rem] text-center'>
              <p className='font-archivo font-semibold text-white text-4xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget porttitor pellentesque pharetra elementum nec quis blandit. Orci, vitae rutrum mauris ut scelerisque elementum.</p>
            </div>
          </section>

        </motion.div>
      </Layout>
    </div>
  );
}

export default Production;