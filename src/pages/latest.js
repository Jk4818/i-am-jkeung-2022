import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { motion } from "framer-motion";
import Layout from '../components/Layout';

function Latest(props) {
  return (
    <Layout>
      <div className='w-screen h-screen overflow-none flex justify-center items-center'>
        <motion.div className='font-archivo text-white w-96 h-1/2 flex flex-col items-center'>

          <div className='w-1/2 aspect-square'>
            <StaticImage className='rounded-full' placeholder='none' layout='constrained' src="../assets/images/tracks/run-to-your-cover.jpg" alt="cover" />
          </div>

          <h1 className='mt-4 text-center'>Run To You <br/> feat. Layla Mehmet, George Chen</h1>

          <ul className='w-3/4 h-max mt-10 text-center flex flex-col justify-center items-center gap-4'>
            <li className='w-full h-max p-2 rounded-lg bg-gray-400'>Spotify</li>
            <li className='w-full h-max p-2 rounded-lg bg-gray-400'>Youtube</li>
          </ul>
        </motion.div>
      </div>
    </Layout>
  );
}

export default Latest;