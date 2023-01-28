import React from 'react';
import { motion } from "framer-motion";
import Layout from '../components/Layout';

function Latest(props) {
  return (
    <Layout>
      <div className='w-screen h-screen overflow-none flex justify-center items-center'>
        <motion.div className='font-archivo text-white flex-col items-center text-center w-96 bg-red-400 h-1/2'>
          <div>Image</div>
          <h1>Run To You</h1>
          <ul className='w-full h-max mt-4 text-center flex-col justify-center items-center gap-10'>
            <li className='w-3/4 h-max p-2 rounded-full bg-gray-400'>Spotify</li>
            <li className='w-3/4 h-max p-2 rounded-full bg-gray-400'>Youtube</li>
          </ul>
        </motion.div>
      </div>
    </Layout>
  );
}

export default Latest;