import React from 'react';
import MenuBurger from './MenuBurger';

function MenuButton({menuState, setMenuState}) {

  
  return (
    <button onClick={() => setMenuState(!menuState)} className={`relative w-max flex justify-center items-center gap-3 ${!menuState ? `bg-white/70 hover:bg-white` : `bg-main-gray-dark`} backdrop-blur-sm p-1 px-3 rounded-lg shadow-main font-semibold font-archivo cursor-pointer transition-colors`}>

      <h1 className={`${menuState ? `text-white` : `text-main-black`}`}>more</h1>

      <div className='h-full'>
        <MenuBurger state={menuState} /> 
      </div>
    </button>
  );
}

export default MenuButton;