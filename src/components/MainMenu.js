import React from 'react';
import NavButton from './NavButton';

function MainMenu(props) {
  return (
    <div className={`w-max flex justify-center items-center gap-4 bg-white/70 backdrop-blur-sm p-4 rounded-lg drop-shadow-lg   text-main-black font-archivo font-semibold `}>
      <h1>more</h1>

      <div className=''>
        <NavButton state={true} /> 
      </div>
    </div>
  );
}

export default MainMenu;