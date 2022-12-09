import React from 'react';
import { StaticImage } from "gatsby-plugin-image";

import Layout from '../components/Layout';
import Gallery from '../components/Gallery';
import GalleryImage from '../components/GalleryImage';

import ParkPhoto from '../assets/images/prints/park.png';

function prints(props) {
  return (
    <Layout>
      <div className='w-screen h-full bg-white'>

        <section className="w-full h-screen flex items-center justify-center">
          <div className='w-1/2 '>
            <StaticImage placeholder='none' layout='constrained' src="../assets/images/prints/frontal.png" alt="Wales" />
          </div>
        </section>

        <section className="w-full h-max flex items-center justify-center">
          <Gallery />
        </section>
        
      </div>
    </Layout>
  );
}

export default prints;