import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";

function PhotoLoader({ data }) {

  const variant = {
    show: {
      y: "50%", scaleY: 0,
      transition: {
        duration: 0.5,
      },
    }
  }
  const variantEnd = {
    show: {
      scale: 1.2,
      transition: {
        duration: 1,
        ease: "anticipate"
      },
    }
  }

  const list = {
    hidden: { opacity: 0, transition: {duration: 1.5} },
    show: {
      opacity: 1,
      transition: {
        duration: 1.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    }
  }

  const [active, setActive] = useState(true);

  return (
    <AnimatePresence>
      {active && (
        <motion.div 
        exit={{ opacity: 0, transition: {duration: 1.5}  }}
        className='absolute w-screen h-screen overflow-hidden bg-bg-light z-50'>
          <div className='w-full h-full flex flex-col items-center justify-center font-anton p-4'>
            <motion.h1
              initial={{ y: "-200%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "-200%", opacity: 0 }}
              transition={{ duration: 1.5 }}
              className='mb-auto'>
              Jason Keung
            </motion.h1>
            <div className='w-1/2 max-w-screen-md aspect-[4/3]'>
              <motion.ul
                initial="hidden"
                animate="show"
                exit={{ opacity: 0 }}
                variants={list}
                onAnimationComplete={() => setActive(false)}
                className="w-full h-full relative"
              >
                <motion.li variants={variantEnd} className='absolute bottom-0 left-0'>
                  <StaticImage placeholder='none' aspectRatio={4 / 3} layout='constrained' src="../assets/images/loader/PANA1632.jpg" alt="Wales" />
                </motion.li>
                <motion.li variants={variant} className='absolute bottom-0 left-0'>
                  <StaticImage placeholder='none' aspectRatio={4 / 3} layout='constrained' src="../assets/images/loader/PANA1638.jpg" alt="Wales-2" />
                </motion.li>
                <motion.li variants={variant} className='absolute bottom-0 left-0'>
                  <StaticImage placeholder='none' aspectRatio={4 / 3} layout='constrained' src="../assets/images/loader/PANA5795.jpg" alt="kew-house" />
                </motion.li>
                <motion.li variants={variant} className='absolute bottom-0 left-0'>
                  <StaticImage placeholder='none' aspectRatio={4 / 3} layout='constrained' src="../assets/images/loader/PANA5865.jpg" alt="kew-light" />
                </motion.li>
                <motion.li variants={variant} className='absolute bottom-0 left-0'>
                  <StaticImage placeholder='none' aspectRatio={4 / 3} layout='constrained' src="../assets/images/loader/DSCF5464.jpg" alt="peak-1" />
                </motion.li>
                <motion.li variants={variant} className='absolute bottom-0 left-0'>
                  <StaticImage placeholder='none' backgroundColor='transparent' aspectRatio={4 / 3} layout='constrained' src="../assets/images/loader/DSCF5506-2.jpg" alt="peak-2" />
                </motion.li>
              </motion.ul>
            </div>
            <motion.h1
              initial={{ y: "200%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "200%", opacity: 0 }}
              transition={{ duration: 1.5 }}
              className='mt-auto'>
              Cinematographer & Mixing Engineer
            </motion.h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default PhotoLoader;