import React from 'react';
import { motion } from 'framer-motion';
import HumaniseText from './helpers/HumaniseText';
import GalleryImage from './GalleryImage';


function Gallery({ gallaryData }) {

  const variant = {
    hidden: {
      opacity: 0, y: "20%",
      transition: {
        staggerChildren: 0.5,
        duration: 0.75,
        ease: "easeInOut",
      },
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        duration: 0.75,
        ease: "easeInOut",
      },
    },
  };

  const columnSpan = [
    [
      'lg:col-span-9',
      'lg:col-span-6',
      'lg:col-span-9',
      'lg:col-span-9',
      'lg:col-span-6',
      'lg:col-span-9',
    ],
    [
      'lg:col-span-8',
      'lg:col-span-7',
      'lg:col-span-9',
      'lg:col-span-9',
      'lg:col-span-9',
      'lg:col-span-6',
    ],
    [
      'lg:col-span-8',
      'lg:col-span-7',
      'lg:col-span-9',
      'lg:col-span-9',
      'lg:col-span-9',
      'lg:col-span-6',
    ],
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
    return noGallery;
  }

  const galleryData = processGalleryData();


  return (
    <div className='w-screen h-max'>
      {galleryData && galleryData.map((gallery, galleryIndex) => {
        return (
          <div key={galleryIndex} className='w-full px-16 lg:px-0 h-max md:mt-10 grid grid-cols-1 lg:grid-cols-24  lg:grid-rows-2  gap-6 lg:gap-4 text-xs font-tinos'>

            {gallery.map((image, index) => {
              console.log(image);
              return (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.6 }}
                  variants={variant}
                  key={index}
                  className={`${columnSpan[galleryIndex][index]} ${index % 6 < 3 && "sm:self-end flex flex-col-reverse"}`}
                  >
                  <GalleryImage src={image} heading={HumaniseText(image.base)} subheading={image.base} alt={image.base} reverse={index % 6 < 3 ? true : false} />
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
