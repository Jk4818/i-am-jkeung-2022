import React, { useEffect } from 'react';
import { StaticImage } from "gatsby-plugin-image";

function GalleryImage({src, heading, subheading, reverse}) {

  // function that translates imageHover towards cursor when hovering over image
  useEffect(() => {
    const imageHoverContainer = document.getElementById(heading + "-hover-container");
    const imageHover = document.getElementById(heading + "-hover");
    imageHover.style.transition = 'transform 0.3s ease-out';

    function translateImage(e) {
      const { offsetWidth: width, offsetHeight: height } = imageHover;
      let { offsetX: x, offsetY: y } = e;
      
      const xWalk = Math.round((x / width * 100) - 50) / 4;
      const yWalk = Math.round((y / height * 100) - 50) / 4;
      

      console.log(xWalk, yWalk);
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
  }, []);

  return (

    <div id={heading + "-hover-container"} className={`w-full ${reverse && `flex flex-col-reverse`} group `}>

      <div className='w-full overflow-hidden'>
        <div id={heading + "-hover"} className='w-full'>
          <img className='w-full' placeholder='none' layout='constrained' src={src} alt={heading} />
        </div>
      </div>
      
      <header className='my-2'>
        <h1 className='font-black italic'>{heading} —</h1>
        <p>{subheading}</p>
      </header>
    </div>
  );
}

export default GalleryImage;