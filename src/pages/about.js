import React from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion";

import Layout from '../components/Layout.js';

function About(props) {


  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='w-screen h-screen text-text-light font-bold flex flex-col md:gap-4 align-left justify-center px-4 md:px-36'>

        <h1 className='font-atkinson-hyperlegible text-3xl md:text-5xl uppercase'>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('1m461n3 7h3 50lu710n...')
                .start();
            }}
          />
        </h1>


        <motion.h2
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1, transition: { delay: 1 } }}
          exit={{ y: "100%", opacity: 0 }} className='font-atkinson-hyperlegible text-2xl md:text-5xl'>⠊⠍⠁⠛⠊⠝⠑ ⠞⠓⠑ ⠎⠕⠇⠥⠞⠊⠕⠝⠄⠄⠄</motion.h2>
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1, transition: { delay: 1.2 } }}
          exit={{ y: "100%", opacity: 0 }}
          className='mt-10 font-archivo uppercase text-center md:text-start text-md md:text-xl '>
          In the realm of visual storytelling and sonic craftsmanship, few artists possess the versatility and expertise of Jacky Penar, a multi-talented British photographer, filmmaker, and mixing and mastering engineer based in the vibrant city of London, UK.
          <br/><br/>

          A trailblazer in both art and technology, Jacky seamlessly bridges the worlds of creativity and innovation. Alongside a thriving career as a full-time cloud and software engineer, Jacky has been making waves in the media and audio industry for over a decade. With a profound passion for pushing boundaries, Jacky's artistry knows no bounds, showcasing a remarkable talent for mixing and producing Acappella, media composition, pop, and trap - genres that transcend traditional norms.
          <br/><br/>

          From mesmerizing music videos and thought-provoking short films to captivating product commercials, Jacky's portfolio stands as a testament to boundless creativity and artistic prowess. Armed with an array of skills that span different domains, Jacky's expertise knows no limits, making him a formidable force across industries.
          <br/><br/>

          Join us on an exhilarating journey through the world of Jacky Penar, where vision and sound unite to create unforgettable experiences. Discover the brilliance that emerges when artistry meets technology, and prepare to be captivated by the extraordinary talent that defines Jacky's remarkable career.
        </motion.div>
      </motion.div>
    </Layout>
  );
}

export default About;