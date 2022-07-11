import React from 'react';
import Logo from "../assets/images/logo_fat.png";

function Navbar(props) {
  return (
    <div className='fixed w-screen h-20 p-12 flex flex-row justify-between items-center overflow-hidden z-40'>
      <div className=' w-32 h-auto'><img src={Logo} alt="Logo" /></div>
      <ul className='flex gap-10 flex-row text-text-light font-archivo font-semibold uppercase '>
        <li className='font-limelight text-text-red'>Production</li>
        <li className='hover:text-text-red transition-all'>Collection</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default Navbar;
