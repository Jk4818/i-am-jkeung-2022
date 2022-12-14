import React, { useState } from 'react';
import { Link } from "gatsby";
import { motion } from "framer-motion";

import MenuBurger from "./MenuBurger.js";
import MainMenu from './MainMenu.js';

function Navbar(props) {

  const url = typeof window !== 'undefined' ? window.location.pathname : '';

  const [buttonState, setButtonState] = useState(true);

  return (
    <section className='fixed w-screen h-screen md:h-20  z-[40]'>
      <div className='md:hidden absolute right-0 top-0 w-max h-max p-4 z-[40]'>
        <button onClick={() => setButtonState(!buttonState)}>
          <MenuBurger state={buttonState} />
        </button>
      </div>

      {buttonState && (
        <div className='relative w-full h-full bg-main-black md:bg-transparent  p-12 gap-10 flex flex-col md:flex-row justify-center md:justify-between items-center text-center overflow-hidden'>

          <div className='hidden md:block w-32 h-auto text-lg font-archivo font-semibold text-main-black'><Link to='/'>iamjkeung.studio</Link></div>
          <ul className={`bg-white/70 backdrop-blur-sm p-2 rounded-lg drop-shadow-lg flex gap-20 md:gap-10 flex-col md:flex-row text-main-black font-archivo font-semibold text-2xl md:text-base`}>

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
          <div>
            <MainMenu />
          </div>
        </div>
      )}

    </section>
  );
}

export default Navbar;
