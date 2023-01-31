import React from 'react';
import { useLocation } from '@reach/router';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';

function Logo(props) {

  const url = useLocation().pathname;
  const logoVariantsHoverIAM = {
    visible: {
      display: 'inline',
      y: 0,
      opacity: 1,
      transition: {
        ease: 'easeInOut',
      }
    }
  };
  const logoVariantsHoverEUNG = {
    visible: {
      display: 'inline',
      y: 0,
      opacity: 1,
      transition: {
        ease: 'easeInOut',
        delay: 0.1,
      }
    }
  };

  const logoVariantsJK = {
    visible: {
      display: 'inline',
      x: 30,
      opacity: 1,
      transition: {
        ease: 'easeInOut',
      }
    }
  };

  const logoVariantsSTUD = {
    visible: {
      display: 'inline',
      x: 70,
      opacity: 1,
      transition: {
        ease: 'easeInOut',
      }
    }
  };


  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={"visible"}
      className={`absolute left-2 top-2 md:top-auto md:left-12 w-36 h-7 text-lg font-archivo font-semibold ${(url.includes("prints") ) ? "text-main-gray-dark" : "text-text-light"} transition-colors  text-left `}>

      <Link to='/'>
        <motion.span initial={{ opacity: 0, y:-20 }} variants={logoVariantsHoverIAM} className="absolute left-0 top-0" >iam</motion.span>
        <motion.span exit={{ }} variants={logoVariantsJK} className="absolute left-0 top-0 ">jk</motion.span>

        <motion.span initial={{ opacity: 0, y:-20 }} variants={logoVariantsHoverEUNG} className="absolute left-[2.65rem] top-0">eung</motion.span>
        <motion.span initial={{  }} variants={logoVariantsSTUD} className="absolute left-3 top-0">
          .
          <span className='logo-animate'>studio</span>
        </motion.span>

      </Link>

    </motion.div>
  );
}

export default Logo;