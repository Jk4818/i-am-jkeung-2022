import React, { useEffect } from 'react';
import { StaticImage } from "gatsby-plugin-image";
import GalleryImage from './GalleryImage';


import ManhattanBridge from '../assets/images/prints/manhattan_bridge.png';
import ParkPhoto from '../assets/images/prints/park.png';
import PalmTree from '../assets/images/prints/palm_tree.png';
import Skyline from '../assets/images/prints/nyc_skyline.png';
import WastWater from '../assets/images/prints/wast_water.png';
import Building from '../assets/images/prints/building.png';

function Gallery(props) {



  return (
    <div className='w-screen h-max mx-2 lg:mx-4'>
      <div className='grid grid-cols-24 grid-rows-2 gap-2 lg:gap-4 text-xs font-tinos'>
        <div className='self-end col-span-9 flex flex-col-reverse group '>
          <GalleryImage src={WastWater} heading="Wast Water" subheading="New York City - USA" reverse={true} />
        </div>
        <div className='self-end col-span-6 flex flex-col-reverse '>
          <GalleryImage src={Building} heading="Building" subheading="New York City - USA" reverse={true} />
        </div>
        <div className='self-end col-span-9 flex flex-col-reverse '>
          <GalleryImage src={Skyline} heading="NYC Skyline" subheading="New York City - USA" reverse={true} />
        </div>
        <div className='col-span-7'>
          <GalleryImage src={PalmTree} heading="A Palm Tree" subheading="New York City - North Cyprus" reverse={false} />
        </div>

        <div className='col-span-9'>
          <GalleryImage src={ManhattanBridge} heading="Manhattan Bridge" subheading="New York City - USA" reverse={false} />
        </div>

        <div className='col-span-8'>

          <GalleryImage src={ParkPhoto} heading="Central Park" subheading="New York City - USA" reverse={false} />

        </div>
      </div>
    </div>
  );
}

export default Gallery;