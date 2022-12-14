import React from 'react';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';

function Logo(props) {

  const url = typeof window !== 'undefined' ? window.location.pathname : '';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`absolute left-2 top-2 md:top-auto md:left-12 w-32 h-auto text-lg font-archivo font-semibold ${url.includes("prints") ? "text-main-gray-dark" : "text-text-light"} hover:text-main-gray-darker transition-colors`}>
      <Link to='/'>iamjkeung.<span className='logo-animate'>studio</span></Link>
    </motion.div>
  );
}

export default Logo;