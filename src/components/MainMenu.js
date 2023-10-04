import React from 'react';
import { Link } from 'gatsby';
import { motion, AnimatePresence } from 'framer-motion';
import UseComponentVisible from './helpers/UseComponentVisible';

import MenuButton from './MenuButton';
import MenuItem from './MenuItem';

function MainMenu(props) {

  const { ref, isComponentVisible, setIsComponentVisible } = UseComponentVisible(false);

  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 80% 9%)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: {
      clipPath: "circle(0px at 80% 9%)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  const menuItemVariants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 20,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };



  return (
    <motion.div 
    ref={ref}
    initial={false}
    animate={isComponentVisible ? "open" : "closed"}
    className='relative w-full h-full'>

      <div className='relative z-50'>
        <MenuButton menuState={isComponentVisible} setMenuState={setIsComponentVisible} />
      </div>

      <AnimatePresence>
      <motion.div variants={sidebar} className={`fixed top-0 right-0 md:top-6 md:right-8 w-60 h-72 z-10 p-4 flex flex-col gap-4 justify-center bg-main-gray-darker rounded-bl-xl md:rounded-xl font-archivo text-left text-text-light font-semibold overflow-hidden`}>

        <motion.ul variants={menuItemVariants} className=' text-xl leading-loose tracking-wider '>
          <MenuItem>Collection</MenuItem>
          <MenuItem>Prints</MenuItem>
          <MenuItem>Production</MenuItem>
          {/* <MenuItem>About</MenuItem> */}
          <MenuItem>Contact</MenuItem>
        </motion.ul>

        <motion.ul variants={menuItemVariants}  className='grid grid-rows-2 grid-cols-2 gap-2 text-left text-xs tracking-wider'>
          <motion.li variants={itemVariants} className="hover:text-gray-300 transition-colors">
            <Link to='/'> Tech Portfolio </Link>
          </motion.li>
          <motion.li variants={itemVariants} className="hover:text-gray-300 transition-colors" >
            <a href='https://github.com/Jk4818'  target="_blank"> Github </a>
          </motion.li>
          <motion.li variants={itemVariants} className="hover:text-gray-300 transition-colors" >
            <a href='https://www.youtube.com/@jkeung'  target="_blank"> Youtube </a>
          </motion.li>
          <motion.li variants={itemVariants} className="hover:text-gray-300 transition-colors" >
            <a href='https://www.linkedin.com/in/jkeung/'  target="_blank"> LinkedIn </a>
          </motion.li>
        </motion.ul>

      </motion.div>
      </AnimatePresence>

    </motion.div>
  );
}

export default MainMenu;