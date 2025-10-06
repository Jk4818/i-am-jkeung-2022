import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { motion } from "framer-motion";

import Layout from '../components/Layout.js';

function Latest(props) {

  const menuItemVariants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 20,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };

  return (
    <Layout>
      <div className='w-screen h-screen overflow-none flex justify-center items-center'>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1 } }} className='font-archivo text-white w-96 h-1/2 flex flex-col items-center'>
          <div className='w-1/2 aspect-square'>
            <StaticImage className='rounded-full' placeholder='none' layout='constrained' src="../assets/images/tracks/sylva_cover.jpg" alt="cover" />
          </div>
          <h1 className='text-lg mt-4 text-center'>sylva - Piano Single</h1>
          <h1 className='text-sm mt-1 text-center'>Jason Keung</h1>
          <motion.ul initial="closed" animate="open" variants={menuItemVariants} className='w-3/4 h-max mt-10 text-center flex flex-col justify-center items-center gap-4'>

            <a className='w-full' href="https://youtu.be/9lkpSN5BcR8" rel="noreferrer" target="_blank">
              <motion.li initial="closed" animate="open" variants={itemVariants} className='w-full h-max p-2 rounded-lg bg-gray-400 hover:bg-gray-500 transition-all'>Youtube</motion.li>
            </a>
            <a className='w-full' href="https://open.spotify.com/track/6TrCufjG4lIOG585dRDri1?si=d1eed47c7d064782" rel="noreferrer" target="_blank"><motion.li initial="closed" animate="open" variants={itemVariants} className='w-full h-max p-2 rounded-lg bg-gray-400 hover:bg-gray-500 transition-all'>Spotify</motion.li>
            </a>
            <a className='w-full' href="https://music.apple.com/us/album/sylva-single/1842959447" rel="noreferrer" target="_blank"><motion.li initial="closed" animate="open" variants={itemVariants} className='w-full h-max p-2 rounded-lg bg-gray-400 hover:bg-gray-500 transition-all'>Apple Music</motion.li>
            </a>
          </motion.ul>
        </motion.div>
      </div>
    </Layout>
  );
}

export default Latest;