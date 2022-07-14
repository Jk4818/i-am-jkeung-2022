import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";


import Layout from '../components/Layout.js';
import StarParticle from '../components/StarParticle.js';

import "../styles/tsparticles.css";


function Production(props) {
  return (
    <Layout>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='flex flex-col justify-center items-center h-full w-screen overflow-x-hidden'>

          <section className='mt-40 relative w-full flex flex-col gap-12 justify-center items-center uppercase text-white'>
            
            <h2 className='font-semibold tracking-[0.75rem] z-10'>The Space</h2>
            <h1 className='text-center w-32 h-max break-all font-black text-9xl z-10'>Bet</h1>
                        
            <div className='-mt-40 z-0 '>
              <StaticImage placeholder='none' layout='constrained' src="../assets/images/eclipse.png" alt="kew-house" />
            </div>

            <h1 className='-mt-[60%] mb-[20rem] text-center w-32 h-max break-all font-black text-9xl z-10'>Ween</h1>

            <h2 className='text-lg font-semibold tracking-[0.75rem] drop-shadow-[0_0_10px_rgba(255,255,255,1)]'>To Be Announced</h2>
            
            <div className='absolute top-0 left-0 w-full h-full'>
              <StarParticle />
            </div>
          </section>

      </motion.div>

    </Layout>
  );
}

export default Production;