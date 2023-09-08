import React, { useState, useEffect } from 'react';
import { Link } from "gatsby";
import { motion, AnimatePresence } from "framer-motion";

import MainMenu from './MainMenu.js';
import Logo from './Logo.js';

function Navbar(props) {


  const [logoShow, setLogoShow] = useState(true);
  const [menuShow, setMenuShow] = useState(true);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > 100) { // if scroll down hide the navbar
        setLogoShow(false);
      }else { // if scroll up show the navbar
        setLogoShow(true);
      }

      if (window.scrollY >= window.innerHeight) {
        setMenuShow(false);
      } else {
        setMenuShow(true);
      }
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, []);

  return (
    <section className='fixed w-screen h-20  z-[40]'>
      <div className='relative w-full h-full bg-transparent  p-12 gap-10 flex flex-row justify-center items-center text-center overflow-hidden'>

        <AnimatePresence>
          {logoShow && (
            <Logo />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {menuShow && (
            <motion.ul
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`bg-white/70 hidden md:flex flex-row  hover:bg-white backdrop-blur-sm p-2 px-6 rounded-lg shadow-main gap-10 text-main-gray-dark font-archivo font-semibold transition-colors`}>
              <li className='hover:text-main-gray-darker transition-all'>
                <Link
                  to="/prints/"
                  activeStyle={{ color: "#D67860" }}
                >
                  Prints
                </Link>
              </li>
              <li className='hover:text-main-gray-darker transition-all'>
                <Link
                  to="/collection/"
                  activeStyle={{ color: "#D67860" }}
                >
                  Collection
                </Link>
              </li>
              <li className='hover:text-main-gray-darker transition-all'>
                <Link
                  to="/production/"
                  activeStyle={{ color: "#D67860" }}
                >
                  Production
                </Link>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>

        <div className='absolute right-2 top-2 md:top-auto md:right-12'>
          <MainMenu />
        </div>
      </div>

    </section>
  );
}

export default Navbar;
