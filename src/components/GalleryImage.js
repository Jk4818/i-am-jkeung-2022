import React, { useEffect } from 'react';
import { StaticImage } from "gatsby-plugin-image";

function GalleryImage(props) {

  // function that translates imageHover towards cursor when hovering over image
  useEffect(() => {
    const imageHoverContainer = document.getElementById('image-hover-container');
    const imageHover = document.getElementById('image-hover');
    imageHover.style.transition = 'transform 0.3s ease-out';

    function translateImage(e) {
      const { offsetWidth: width, offsetHeight: height } = imageHover;
      let { offsetX: x, offsetY: y } = e;
      
      console.log(x, y);
      const xWalk = Math.round((x / width * 100) - 50) / 4;
      const yWalk = Math.round((y / height * 100) - 50) / 4;

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

    <div id='image-hover-container' className='self-end col-span-9 flex flex-col-reverse group '>

      <div className=' w-96 overflow-hidden'>
        <div id='image-hover' className='w-full'>
          <StaticImage placeholder='none' layout='constrained' src="../assets/images/prints/wast_water.png" alt="wast_water" />
        </div>
      </div>
      
      <header className='my-2'>
        <h1 className='font-black italic'>Central Park — </h1>
        <p>New York City - USA</p>
      </header>
    </div>
  );
}

export default GalleryImage;