import React, { useState, useEffect } from 'react';
import { Link } from "gatsby";
import { motion, AnimatePresence } from "framer-motion";

import MenuBurger from "./MenuBurger.js";
import MainMenu from './MainMenu.js';
import Logo from './Logo.js';

function Navbar(props) {

  const [buttonState, setButtonState] = useState(true);

  const [logoShow, setLogoShow] = useState(true);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > 10) { // if scroll down hide the navbar
        setLogoShow(false);
      } else { // if scroll up show the navbar
        setLogoShow(true);
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
    <section className='fixed w-screen h-screen md:h-20  z-[40]'>
      <div className='md:hidden absolute right-0 top-0 w-max h-max p-4 z-[40]'>
        <button onClick={() => setButtonState(!buttonState)}>
          <MenuBurger state={buttonState} />
        </button>
      </div>

      {buttonState && (

        <div className='relative w-full h-full bg-main-black md:bg-transparent  p-12 gap-10 flex flex-col md:flex-row justify-center items-center text-center overflow-hidden'>

          <AnimatePresence>
            {logoShow && (
              <Logo />
            )}
          </AnimatePresence>

          <ul className={`bg-white/70 backdrop-blur-sm p-2 px-6 rounded-lg drop-shadow-lg flex gap-20 md:gap-10 flex-col md:flex-row text-main-black font-archivo font-semibold text-2xl md:text-base`}>

            <li className='hover:scale-105 transition-all'>
              <Link
                to="/prints/"
                activeStyle={{ color: "#D67860" }}
              >
                Prints
              </Link>
            </li>
            <li className='hover:scale-105 transition-all'>
              <Link
                to="/collection/"
                activeStyle={{ color: "#D67860" }}
              >
                Collection
              </Link>
            </li>
            <li className='hover:scale-105 transition-all'>
              <Link
                to="/production/"
                activeStyle={{ color: "#D67860" }}
              >
                Production
              </Link>
            </li>
          </ul>

          <div className='absolute right-12'>
            <MainMenu />
          </div>
        </div>

      )}

    </section>
  );
}

export default Navbar;
