import React, { useState } from 'react';
import { Link } from "gatsby";
import { motion } from "framer-motion";

import NavButton from "./NavButton.js";
import Logo from "../assets/images/logo_fat.png";

function Navbar(props) {


  const [buttonState, setButtonState] = useState(true);

  return (
    <section className='fixed w-screen h-screen md:h-20  z-[40]'>
      <div className='md:hidden absolute right-0 top-0 w-max h-max p-4 z-[40]'>
        <button onClick={() => setButtonState(!buttonState)}>
          <NavButton state={buttonState} />
        </button>
      </div>

      {buttonState && (
        <div className='relative w-full h-full bg-main-black md:bg-transparent  p-12 gap-10 flex flex-col md:flex-row justify-center md:justify-between items-center text-center overflow-hidden'>

          <div className='hidden md:block w-32 h-auto'><Link to='/'><img src={Logo} alt="Logo" /></Link></div>
          <ul className='flex gap-20 md:gap-10 flex-col md:flex-row text-text-light font-archivo font-semibold uppercase text-3xl md:text-base'>
            <li className='hover:scale-105 transition-all font-limelight'>
              <Link
                to="/production/"
                activeStyle={{ color: "#D67860" }}
              >
                Production
              </Link>
            </li>
            <li className='hover:scale-105 transition-all font-rock-salt'>
              <Link
                to="/collection/"
                activeStyle={{ color: "#D67860" }}
              >
                Collection
              </Link>
            </li>
            <li className='hover:scale-105 transition-all '>
              <Link
                to="/about/"
                activeStyle={{ color: "#D67860" }}
              >
                About
              </Link>
            </li>
            <li className='hover:scale-105 transition-all '>
              <Link
                to="/contact/"
                activeStyle={{ color: "#D67860" }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </section>
  );
}

export default Navbar;
