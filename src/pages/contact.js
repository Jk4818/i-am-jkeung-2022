import React from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion";

import Layout from '../components/Layout';

const Mailto = ({ email, subject = '', body = '', children }) => {
  let params = subject || body ? '?' : '';
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

  return <a className="md:h-full aspect-square bg-main-black" href={`mailto:${email}${params}`}>{children}</a>;
};

function contact(props) {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='w-screen h-screen flex flex-col gap-10 md:gap-20 items-center justify-center text-white uppercase'>
        <motion.h1
          initial={{ opacity: 0, y: "50%" }}
          animate={{ opacity: 1, y: 0 }}
          className=' font-bold text-5xl md:text-8xl text-center tracking-widest z-0'><Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter.typeString('Say Hello')
              .start()
              .pauseFor(5000)
              .deleteAll()
              .typeString('Or Ask A Question')
              .pauseFor(9000)
              .deleteAll()
              .typeString('Or Not...')
              .pauseFor(10000)
          }}
        /></motion.h1>
        <ul className='min-w-[10rem] w-1/3 h-3/5 md:w-1/2 md:h-1/5 flex flex-col md:flex-row justify-between text-xl font-bold'>

          <Mailto email="foo@bar.baz" subject="Audio Query - IAMJKEUNG" body="---- Audio Subject ----">
            <motion.li
              initial={{
                opacity: 0, y: "50%", borderRadius: "20%", transition: { duration: 0.5 }
              }}
              whileHover={{
                borderRadius: "100%", transition: { duration: 0.5 }
              }}
              whileTap={{ scale: 0.9 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{
                opacity: 0, y: "50%", transition: { duration: 0.5 }
              }}
              className='flex w-full h-full items-center justify-center text-center nm-flat-main-black hover:nm-inset-main-black transition-all'>Audio</motion.li>
          </Mailto>

          <Mailto email="foo@bar.baz" subject="Video Query - IAMJKEUNG" body="---- Video Subject ----">
            <motion.li
              initial={{
                opacity: 0, y: "100%", borderRadius: "100%", transition: { duration: 0.5 }
              }}
              whileHover={{
                borderRadius: "20%", transition: { duration: 0.5 }
              }}
              whileTap={{ scale: 0.9 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{
                opacity: 0, y: "100%", transition: { duration: 0.5 }
              }}
              className='w-full h-full flex items-center justify-center text-center nm-flat-main-black hover:nm-inset-main-black transition-all'>
              Video
            </motion.li>
          </Mailto>

        </ul>
      </motion.div>
    </Layout>
  );
}

export default contact;