import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";

import Layout from '../components/Layout';
import Gallery from '../components/Gallery';

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
              className='w-1/2 '>
            <StaticImage placeholder='none' layout='constrained' src="../assets/images/prints/frontal.png" alt="Wales" />
          </motion.div>
        </section>

        <section className="w-full h-max flex items-center justify-center">
          <Gallery />
        </section>

      </div>
    </Layout>
  );
}

export default prints;