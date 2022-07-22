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
        animate={{ y: "0%", opacity: 1, transition: { delay: 1}}}
        exit={{ y: "100%",  opacity: 0 }}className='font-atkinson-hyperlegible text-2xl md:text-5xl'>⠊⠍⠁⠛⠊⠝⠑ ⠞⠓⠑ ⠎⠕⠇⠥⠞⠊⠕⠝⠄⠄⠄</motion.h2>
        <motion.div 
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1, transition: { delay: 1.2}}}
        exit={{ y: "100%",  opacity: 0 }}
        className='mt-10 font-archivo uppercase text-center md:text-start text-md md:text-xl '>
          Jason keung is a british photographer, filmmaker, mixing and mastering engineer based in london, uk. <br /><br />

          Enim, cursus mollis adipiscing amet, a massa. Tempus integer tempus aliquam venenatis imperdiet nibh venenatis tellus. Volutpat aliquam nec mi vel malesuada aenean aliquam, ac mi. Sit aliquet lectus egestas sollicitudin pellentesque magna ornare lorem posuere. Nunc lacus eu quis fringilla rhoncus malesuada. Sit sed massa aenean donec natoque netus. Porttitor purus aenean at facilisi purus non sit rhoncus. Amet nisl elementum lorem.
        </motion.div>
      </motion.div>
    </Layout>
  );
}

export default About;