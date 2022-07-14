import React from 'react';
import { Link } from "gatsby";
import Logo from "../assets/images/logo_fat.png";

function Navbar(props) {
  return (
    <div className='fixed w-screen h-20 p-12 flex flex-row justify-between items-center overflow-hidden z-40'>
      <div className=' w-32 h-auto'><Link to='/'><img src={Logo} alt="Logo" /></Link></div>
      <ul className='flex gap-10 flex-row text-text-light font-archivo font-semibold uppercase '>
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
  );
}

export default Navbar;
