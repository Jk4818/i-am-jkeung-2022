import React from 'react';
import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';

import LogoAuto from '../components/LogoAuto.js';
function ComingSoon() {
  return (

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="overflow-hidden">

      <div className="w-screen h-screen flex flex-col md:gap-6 justify-center items-center  bg-bg-light">
        <div className='transform scale-50 md:scale-100'>
          <LogoAuto />
        </div>
        <div className='text-sm md:text-lg font-black  text-main-gray-darker text-center uppercase'>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter.typeString('Sit tight')
                .start()
                .pauseFor(4000)
                .deleteAll()
                .typeString('...')
                .pauseFor(3000)
                .deleteAll()
                .typeString("It's Coming.")
                .pauseFor(6000)
            }} />
        </div>
      </div>
    </motion.div>
  );
}

export default ComingSoon;