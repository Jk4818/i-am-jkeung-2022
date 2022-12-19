import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import GalleryImage from './GalleryImage';


// import ManhattanBridge from '../assets/images/prints/manhattan_bridge.png';
// import ParkPhoto from '../assets/images/prints/park.png';
// import PalmTree from '../assets/images/prints/palm_tree.png';
// import Skyline from '../assets/images/prints/nyc_skyline.png';
// import WastWater from '../assets/images/prints/wast_water.png';
// import Building from '../assets/images/prints/building.png';

function Gallery({ gallaryData }) {

  const variant = {
    hidden: { opacity: 0, y: "20%" },
    visible: {
      y: 0,
      opacity: 1,
    }
  };



  return (
    <div className='w-screen h-max'>
      <div className='grid grid-cols-1 sm:flex sm:flex-wrap gap-6 lg:gap-4 text-xs font-tinos'>

        {gallaryData && gallaryData.images.edges.slice(0,6).map((image, index) => {
          console.log(image);
          return (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              variants={variant}
              key={index}
              className={`${index % 6 < 3 && "sm:self-end flex flex-col-reverse"} sm:basis-1/4`}>
              <GalleryImage src={image.node} heading={image.node.base} subheading={image.node.base} alt={image.node.base} reverse={index % 6 < 3 ? true : false} />
            </motion.div>
          )
        })}

        {/* <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={variant}
          className='sm:self-end sm:col-span-9 flex flex-col-reverse group '>
          <GalleryImage src={WastWater} heading="Wast Water" subheading="New York City - USA" alt="wast_water.png" reverse={true} />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={variant}
          className='sm:self-end sm:col-span-6 flex flex-col-reverse '>
          <GalleryImage src={Building} heading="Building" subheading="New York City - USA" alt="building.png" reverse={true} />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={variant}
          className='sm:self-end sm:col-span-9 flex flex-col-reverse '>
          <GalleryImage src={Skyline} heading="NYC Skyline" subheading="New York City - USA" alt="nyc_skyline.png" reverse={true} />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={variant}
          className='sm:col-span-7'>
          <GalleryImage src={PalmTree} heading="A Palm Tree" subheading="New York City - North Cyprus" alt="palm_tree.png" reverse={false} />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={variant}
          className='sm:col-span-9'>
          <GalleryImage src={ManhattanBridge} heading="Manhattan Bridge" subheading="New York City - USA" alt="manhattan_bridge.png" reverse={false} />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={variant}
          className='sm:col-span-8'>

          <GalleryImage src={ParkPhoto} heading="Central Park" subheading="New York City - USA" alt="park.png" reverse={false} />

        </motion.div> */}
      </div>
    </div>
  );
}

export default Gallery;
