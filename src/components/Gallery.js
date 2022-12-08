import React from 'react';
import { StaticImage } from "gatsby-plugin-image";


function Gallery(props) {
  return (
    <div className='w-full h-max bg-red-400'>
      <div className='grid grid-cols-24 grid-rows-2 gap-2 lg:gap-4'>
        <div className='self-end col-span-9 flex flex-col-reverse '>
          <StaticImage placeholder='none' layout='constrained' src="../assets/images/prints/wast_water.png" alt="wast_water" />

          <header className='my-2 text-xs font-tinos'>
            <h1 className='font-black italic'>Central Park — </h1>
            <p>New York City - USA</p>
          </header>
        </div>
        <div className='self-end col-span-6 flex flex-col-reverse '>
          <StaticImage placeholder='none' layout='constrained' src="../assets/images/prints/building.png" alt="building" />

          <header className='my-2 text-xs font-tinos'>
            <h1 className='font-black italic'>Central Park — </h1>
            <p>New York City - USA</p>
          </header>
        </div>
        <div className='self-end col-span-9 flex flex-col-reverse '>
          <StaticImage placeholder='none' layout='constrained' src="../assets/images/prints/nyc_skyline.png" alt="nyc_skyline" />

          <header className='my-2 text-xs font-tinos'>
            <h1 className='font-black italic'>Central Park — </h1>
            <p>New York City - USA</p>
          </header>
        </div>
        <div className='col-span-7'>
          <StaticImage placeholder='none' layout='constrained' src="../assets/images/prints/palm_tree.png" alt="palm_tree" />

          <header className='my-2 text-xs font-tinos'>
            <h1 className='font-black italic'>Central Park — </h1>
            <p>New York City - USA</p>
          </header>
        </div>
        <div className='col-span-9'>
          <StaticImage placeholder='none' layout='constrained' src="../assets/images/prints/manhattan_bridge.png" alt="manhattan_bridge" />

          <header className='my-2 text-xs font-tinos'>
            <h1 className='font-black italic'>Central Park — </h1>
            <p>New York City - USA</p>
          </header>
        </div>
        <div className='col-span-8'>

          <StaticImage placeholder='none' layout='constrained' src="../assets/images/prints/park.png" alt="park" />

          <header className='my-2 text-xs font-tinos'>
            <h1 className='font-black italic'>Central Park — </h1>
            <p>New York City - USA</p>
          </header>

        </div>
      </div>
    </div>
  );
}

export default Gallery;