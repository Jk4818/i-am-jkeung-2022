import React, { useEffect } from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image";

function GalleryImage({ data, src, heading, subheading, alt, reverse }) {

  const image = getImage(src);

  // function that translates imageHover towards cursor when hovering over image
  useEffect(() => {
    const imageHoverContainer = document.getElementById(heading + "-hover-container");
    const imageHover = document.getElementById(heading + "-hover");
    imageHover.style.transition = 'transform 0.3s ease-out';

    function translateImage(e) {
      const { offsetWidth: width, offsetHeight: height } = imageHover;
      let { offsetX: x, offsetY: y } = e;

      const xWalk = Math.round((x / width * 100) - 50) / 4;
      const yWalk = Math.round((y / height * 100) - 50) / 6;

      imageHover.style.transform = `scale(1.1) translate(${xWalk}px, ${yWalk}px`;
    }

    imageHoverContainer.addEventListener('mousemove', translateImage);
    imageHoverContainer.addEventListener('mouseleave', () => {
      imageHover.style.transform = `scale(1.0) translate(0px, 0px)`;
    });


    return () => {
      imageHoverContainer.removeEventListener('mousemove', translateImage);
      imageHoverContainer.removeEventListener('mouseleave', () => {
        imageHover.style.transform = `scale(1.0) translate(0px, 0px)`;

      });
    }
  }, [heading]);

  return (

    <div id={heading + "-hover-container"} className={`w-full ${!reverse && ` flex flex-col `} sm:flex-col-reverse group `}>

      <header className='flex text-base sm:text-sm sm:block my-2  lg:text-base lg:leading-5'>
        <h1 className='hidden lg:block font-black sm:italic'>{heading} — <span className='font-medium sm:normal-case'>{subheading}</span></h1>

      </header>

      <div className='w-full overflow-hidden'>
        <div id={heading + "-hover"} className='w-full'>
          {src && <GatsbyImage image={image} alt={alt} />}
        </div>
      </div>

    </div>
  );
}

export default GalleryImage;
