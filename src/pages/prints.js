import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";

import Layout from '../components/Layout';
import Gallery from '../components/Gallery';
import GalleryImage from '../components/GalleryImage';
import PeakPhoto from '../assets/images/prints/peak.png';

function prints(props) {

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

  return (
    <Layout>
      <div className='w-screen h-full bg-white'>

        <section className="w-full h-screen flex items-center justify-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.6 }}
            variants={variant}
            className='w-full sm:w-1/2 max-w-[80rem]'>
            <StaticImage placeholder='none' layout='constrained' src="../assets/images/prints/frontal.png" alt="book_front" />
          </motion.div>
        </section>

        <section className="w-full h-max flex items-center justify-center">
          <Gallery />
        </section>

        <section className="w-full h-screen flex items-center justify-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.6 }}
            variants={variant}
            className='w-3/4  text-center font-tinos'>

            <GalleryImage src={PeakPhoto} heading="The Peak" subheading="Scafell Pike - Lake District, UK" reverse={false} />

          </motion.div>
        </section>

        <section className="w-full h-screen px-10 items-center justify-center grid grid-cols-3 gap-10">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, }}
            variants={variant}
            className='w-full col-span-2'>
            <StaticImage placeholder='none' layout='constrained' src="../assets/images/prints/frontal_inside.png" alt="book_inside" />
          </motion.div>

          <div className='h-1/2 font-inter flex flex-col gap-2'>
            <h1 className='font-tinos text-lg font-bold'>Limited Edition Prints</h1>
            <p>My limited edition prints are available in edition sizes from 5-50 (depending on the size and image). These photographs are my favourite from my total portfolio of work. I only choose images that I feel will be complimented by the printing process and look amazing when framed.
            </p>
            <h2 className='mt-4 font-bold'>Archival Papers</h2>
            <p>All images are printed on <span className='font-bold'>Hahnemühle Photo Rag®.</span> <br/>
              <span className='italic'>188 · gsm · 100% cotton · white</span></p>
            <h2 className='mt-4 font-bold'>Order / Delivery Process</h2>
            <p>
              Delivery in the UK takes 2-3 business days and the rest of the world 7-10 days. Please note that currently Covid is adding around 7 days onto these times.

              All A3 prints are shipped in presentation boxes flat and A2 and A1 prints are shipped in tubes. I have had the tubes designed specifically to ship these sizes and they are much wider than usual tubes so that they don’t hold their curve.</p>
          </div>
        </section>

      </div>
    </Layout>
  );
}

export default prints;