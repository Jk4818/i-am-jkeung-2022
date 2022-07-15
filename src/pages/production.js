import React from 'react';
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import { motion } from "framer-motion";


import Layout from '../components/Layout.js';
import StarParticle from '../components/StarParticle.js';

import "../styles/tsparticles.css";

import { FaSpotify, FaSoundcloud } from 'react-icons/fa';
import { SiApplemusic, SiYoutubemusic, SiBandcamp } from 'react-icons/si';



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

  const soundProviderIcons = [
    { name: "Spotify", html: <FaSpotify /> },
    { name: "Soundcloud", html: <FaSoundcloud /> },
    { name: "Apple Music", html: <SiApplemusic /> },
    { name: "Youtube Music", html: <SiYoutubemusic /> },
    { name: "Bandcamp", html: <SiBandcamp /> },
  ]

  const tailwindGradients = [
    "bg-gradient-to-bl from-rose-400 via-fuchsia-500 to-indigo-500",
    "bg-gradient-to-bl from-rose-400 to-orange-300",
    "bg-gradient-to-bl from-red-500 to-red-800",
    "bg-gradient-to-bl from-orange-300 to-rose-300",
    "bg-gradient-to-bl from-rose-300 to-rose-500",
    "bg-conic-to-bl from-indigo-200 via-slate-600 to-indigo-200",
    "Pastel bg-gradient-to-tr from-violet-500 to-orange-300",
    "bg-conic-to-br from-orange-900 via-amber-100 to-orange-900",
    "bg-conic-to-bl from-red-900 via-violet-200 to-orange-500",
    "bg-radial-at-bl from-amber-200 via-violet-600 to-sky-900",
  ]

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

  const mixVariant = {
    visible: {
      opacity: 1, y: 0,
      transition: {
        duration: 1.5,
      },
    },
    hidden: { opacity: 0, y: 20 },
  }

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
              <motion.ul
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1, staggerChildren: 0.3 }}
                className='w-full h-full flex  flex-wrap justify-between gap-10'>

                {featSongs.allMarkdownRemark.edges.slice(0, 4).map((song, index) => (
                  <motion.li
                    variants={{
                      visible: { opacity: 1, y: 0 },
                      hidden: { opacity: 0, y: 20 },
                    }}
                    key={song.node.id}
                    className={`w-[calc(50%-2.5rem)] h-80 flex flex-col font-archivo text-[#181818] divide-y rounded-lg divide-[#606060] ${tailwindGradients[index]}`}>

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
                    <div className='p-4 h-1/4 text-lg text-[#606060] flex gap-4'>
                      {song.node.frontmatter.sourceLink.map((link) => (
                        <div className='group h-full flex gap-2 items-center justify-center '>
                          <div className='group-hover:animate-spin'>{soundProviderIcons.find(o => o.name === link.alt).html}</div>
                          <a className='group-hover:drop-shadow-md group-hover:transition-all' href={link.url}>{link.alt}</a>
                        </div>
                      ))}
                    </div>


                  </motion.li>
                ))}

              </motion.ul>
            </div>
          </section>


          <section className='w-full flex flex-col items-center gap-10 '>
            <h1 className='text-9xl tracking-wide font-archivo text-white font-semibold'>In The Box</h1>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1, staggerChildren: 0.3 }}
              className='relative -mt-24 w-full h-[60rem]'>
              <motion.div
                variants={mixVariant}
                className='w-3/4 absolute bottom-0 right-0 left-0 mx-auto z-[1]'>
                <StaticImage layout='constrained' src="../assets/images/mixing/Group_5357.png" alt="laptop" />
              </motion.div>
              <motion.div variants={mixVariant} className='w-1/3 absolute left-10 top-40z-[2]'>
                <StaticImage layout='constrained' src="../assets/images/mixing/Ellipse_119.png" alt="circle_119" />
              </motion.div>
              <motion.div variants={mixVariant} className='w-2/5 absolute top-4 left-0 right-0 mx-auto z-[2]'>
                <StaticImage layout='constrained' src="../assets/images/mixing/Group_5359.png" alt="cylinder_5359" />
              </motion.div>
              <motion.div variants={mixVariant} className='w-1/4 absolute left-0 right-0 ml-auto mr-64 z-[3]'>
                <StaticImage layout='constrained' src="../assets/images/mixing/Ellipse_113.png" alt="circle_113" />
              </motion.div>
              <motion.div variants={mixVariant} className='w-1/3 absolute left-0 right-0 bottom-0 mt-auto mb-20 mr-auto ml-64 z-[2]'>
                <StaticImage layout='constrained' src="../assets/images/mixing/Image_10.png" alt="image_10" />
              </motion.div>
              <motion.div variants={mixVariant} className='w-1/4 absolute top-64 left-0 right-0 ml-auto mr-64 z-[2]'>
                <StaticImage layout='constrained' src="../assets/images/mixing/Image_11.png" alt="image_11" />
              </motion.div>
              <motion.div variants={mixVariant} className='w-1/3 absolute bottom-0 right-0 z-0'>
                <StaticImage layout='constrained' src="../assets/images/mixing/ellipse_118.png" alt="circle_118" />
              </motion.div>
              <motion.div variants={mixVariant} className='w-1/4 absolute -bottom-20 left-0 right-0 ml-40 mr-auto z-[2]'>
                <StaticImage layout='constrained' src="../assets/images/mixing/ellipse_114.png" alt="circle_114" />
              </motion.div>
              <motion.div variants={mixVariant} className='w-1/4 absolute -bottom-48 left-0 right-0 ml-auto mr-auto z-[2]'>
                <StaticImage layout='constrained' src="../assets/images/mixing/Group_5358.png" alt="cylinder_5358" />
              </motion.div>
            </motion.div>

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