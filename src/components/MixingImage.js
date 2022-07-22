import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";

function MixingImage(props) {

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

    <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.1 }}
    transition={{ duration: 1, staggerChildren: 0.3 }}
    className=' relative -mt-[5vw] min-w-[70rem] max-w-[120rem] w-full min-h-[35rem] max-h-[60rem] h-[50vw]'>
    <motion.div
      variants={mixVariant}
      className='w-3/4 absolute bottom-0 right-0 left-0 mx-auto z-[0]'>
      <StaticImage layout='constrained' src="../assets/images/mixing/Group_5357.png" alt="laptop" />
    </motion.div>
    <motion.div variants={mixVariant} className='w-1/3 absolute left-10 top-40 z-[2]'>
      <StaticImage layout='constrained' src="../assets/images/mixing/Ellipse_119.png" alt="circle_119" />
    </motion.div>
    <motion.div variants={mixVariant} className='w-2/5 absolute top-4 left-0 right-0 mx-auto z-[2]'>
      <StaticImage layout='constrained' src="../assets/images/mixing/Group_5359.png" alt="cylinder_5359" />
    </motion.div>
    <motion.div variants={mixVariant} className='w-1/4 absolute left-0 right-0 ml-auto mr-64 z-[3]'>
      <StaticImage layout='constrained' src="../assets/images/mixing/Ellipse_113.png" alt="circle_113" />
    </motion.div>
    <motion.div variants={mixVariant} className='w-1/3 absolute left-0 right-0 bottom-0 mt-auto mb-20 mr-auto ml-64 z-[2]'>
      <StaticImage layout='constrained' src="../assets/images/mixing/image_10.png" alt="image_10" />
    </motion.div>
    <motion.div variants={mixVariant} className='w-1/4 absolute top-64 left-0 right-0 ml-auto mr-64 z-[2]'>
      <StaticImage layout='constrained' src="../assets/images/mixing/image_11.png" alt="image_11" />
    </motion.div>
    <motion.div variants={mixVariant} className='w-1/3 absolute bottom-0 right-0 z-0'>
      <StaticImage layout='constrained' src="../assets/images/mixing/Ellipse_118.png" alt="circle_118" />
    </motion.div>
    <motion.div variants={mixVariant} className='w-1/4 absolute -bottom-20 left-0 right-0 ml-40 mr-auto z-[2]'>
      <StaticImage layout='constrained' src="../assets/images/mixing/Ellipse_114.png" alt="circle_114" />
    </motion.div>
    <motion.div variants={mixVariant} className='w-1/4 absolute -bottom-48 left-0 right-0 ml-auto mr-auto z-[2]'>
      <StaticImage layout='constrained' src="../assets/images/mixing/Group_5358.png" alt="cylinder_5358" />
    </motion.div>
  </motion.div>
  );
}

export default MixingImage;