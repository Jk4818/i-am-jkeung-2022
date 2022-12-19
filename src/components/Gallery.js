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

  const columnSpan =[ 
    'sm:col-span-9',
    'sm:col-span-6',
    'sm:col-span-9',
    'sm:col-span-7',
    'sm:col-span-9',
    'sm:col-span-8',
  ]


  return (
    <div className='w-screen h-max'>
      { 
        <div className='grid grid-cols-1 sm:grid-cols-24  sm:grid-rows-2  gap-6 lg:gap-4 text-xs font-tinos'>

        {gallaryData && gallaryData.images.edges.slice(0,6).map((image, index) => {
          console.log(image);
          return (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              variants={variant}
              key={index}
              className={`${columnSpan[index]} ${index % 6 < 3 && "sm:self-end flex flex-col-reverse"}`}>
              <GalleryImage src={image.node} heading={image.node.base} subheading={image.node.base} alt={image.node.base} reverse={index % 6 < 3 ? true : false} />
            </motion.div>
          )
        })}
      </div>
      }
    </div>
  );
}

export default Gallery;
