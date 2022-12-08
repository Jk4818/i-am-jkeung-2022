import React from 'react';
import { StaticImage } from "gatsby-plugin-image";

import Layout from '../components/Layout';


function prints(props) {
  return (
    <Layout>
      <div className='w-screen h-full bg-white'>

        <seciton className="w-full h-screen flex items-center justify-center">
          <div className='w-1/2 '>
            <StaticImage placeholder='none' layout='constrained' src="../assets/images/prints/frontal.png" alt="Wales" />
          </div>
        </seciton>
      </div>
    </Layout>
  );
}

export default prints;