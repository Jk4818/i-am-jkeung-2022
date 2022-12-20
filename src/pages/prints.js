import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import { graphql } from 'gatsby';
import { motion } from "framer-motion";

import Layout from '../components/Layout';
import Gallery from '../components/Gallery';
import GalleryImage from '../components/GalleryImage';
import PeakPhoto from '../assets/images/prints/peak.png';
import BuyButton from '../components/BuyButton';

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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='w-full h-full bg-white px-2 lg:px-4'>

        <section className="w-full h-screen flex items-center justify-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            variants={variant}
            className='w-full sm:w-1/2 max-w-[80rem]'>
            <StaticImage placeholder='none' layout='constrained' src="../assets/images/prints/frontal.png" alt="book_front" />
          </motion.div>
        </section>

        <section className="w-full h-max flex items-center justify-center">
          <Gallery gallaryData={props.data} />
        </section>

        <section className="w-full h-screen flex items-center justify-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            variants={variant}
            className='w-full sm:w-3/4  text-center font-tinos'>

            <StaticImage placeholder='none' layout='constrained' src="../assets/images/prints/peak.png" alt="peak" />
            <header className='flex text-base sm:text-sm sm:block my-2  lg:text-base lg:leading-5'>
              <h1 className='font-black sm:italic'>The Peak — <span className='font-medium sm:normal-case'>Scafell Pike, Lake District, UK</span></h1>

            </header>

          </motion.div>
        </section>

        <section className="w-full min-h-screen h-max py-10 sm:py-0 px-10 items-center justify-center grid grid-rows-1 md:grid-cols-3 gap-10">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, }}
            variants={variant}
            className='w-full row-span-2 md:col-span-2 md:row-span-0'>
            <StaticImage placeholder='none' layout='constrained' src="../assets/images/prints/frontal_inside.png" alt="book_inside" />
          </motion.div>

          <div className='h-max font-inter flex flex-col gap-2'>
            <h1 className='font-tinos text-lg font-bold'>Limited Edition Prints</h1>
            <p>My limited edition prints are available in edition sizes from 5-50 (depending on the size and image). These photographs are my favourite from my total portfolio of work. I only choose images that I feel will be complimented by the printing process and look amazing when framed.
            </p>
            <h2 className='mt-4 font-bold'>Archival Papers</h2>
            <p>All images are printed on <span className='font-bold'>Hahnemühle Photo Rag®.</span> <br />
              <span className='italic'>188 · gsm · 100% cotton · white</span></p>
            <h2 className='mt-4 font-bold'>Order / Delivery Process</h2>
            <p>
              Delivery in the UK takes 2-3 business days and the rest of the world 7-10 days. Please note that currently Covid is adding around 7 days onto these times.

              All A3 prints are shipped in presentation boxes flat and A2 and A1 prints are shipped in tubes. I have had the tubes designed specifically to ship these sizes and they are much wider than usual tubes so that they don’t hold their curve.
            </p>
            <BuyButton />
          </div>

        </section>

      </motion.div>
    </Layout>
  );
}

export default prints;

//gatbsy query for all images in prints folder
export const printQuery = graphql`
  query {
    images: allFile(
      filter: { relativeDirectory: {eq: "prints/gallery"}}
    ) {
      edges {
        node {
          id
          base
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              height: 400
              formats: AUTO
              width: 400
              layout: FULL_WIDTH
              quality: 70
            )
          }
        }
      }
    }
  }
  
`;