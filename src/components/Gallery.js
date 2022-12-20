import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import GalleryImage from './GalleryImage';


function Gallery({ gallaryData }) {

  const variant = {
    hidden: { opacity: 0, y: "20%" },
    visible: {
      y: 0,
      opacity: 1,
    }
  };

  const columnSpan = [
    'sm:col-span-9',
    'sm:col-span-6',
    'sm:col-span-9',
    'sm:col-span-7',
    'sm:col-span-9',
    'sm:col-span-8',
  ]

  // function that processes gallery data and returns array of gallery images grouped by every 6
  const processGalleryData = () => {
    let images = [];
    let noGallery = [];
    gallaryData.images.edges.forEach((image) => {
      images.push(image.node);
    });
    for (let i = 0; i < images.length; i += 6) {
      noGallery.push(images.slice(i, i + 6));
    }
    return [images, noGallery];
  }

  const [images, noGalleries] = processGalleryData();


  return (
    <div className='w-screen h-max'>
      {noGalleries && noGalleries.map((gallery, index) => {
        return (
          <div className='grid grid-cols-1 sm:grid-cols-24  sm:grid-rows-2  gap-6 lg:gap-4 text-xs font-tinos'>

            {images && images.slice(0, 6).map((image, index) => {
              console.log(image);
              return (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.6 }}
                  variants={variant}
                  key={index}
                  className={`${columnSpan[index]} ${index % 6 < 3 && "sm:self-end flex flex-col-reverse"}`}>
                  <GalleryImage src={image} heading={image.base} subheading={image.base} alt={image.base} reverse={index % 6 < 3 ? true : false} />
                </motion.div>
              )
            })}
          </div>
        )
      })}

    </div>
  );
}

export default Gallery;
