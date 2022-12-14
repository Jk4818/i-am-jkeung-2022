import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import { FaArrowRight } from 'react-icons/fa';

function MenuItem({ children }) {
  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      x: -22,
      y: 20,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };

  return (
    <motion.li variants={variants} whileHover={{ x: 10 }} >
      <Link
        to={`/${children.toLowerCase()}/`}
        activeStyle={{ color: "#D67860" }}
        className='group flex items-center gap-2 capitalize'
      >
        <span className=' text-sm opacity-0 md:group-hover:opacity-100 transition-all'>
          <FaArrowRight />
        </span>
        {children}
      </Link>
    </motion.li>
  );
}

export default MenuItem;