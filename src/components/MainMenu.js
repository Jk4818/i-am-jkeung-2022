import React, {useState} from 'react';
import NavButton from './NavButton';

function MainMenu(props) {

  const [menuState, setMenuState] = useState(false);
  
  return (
    <div onClick={() => setMenuState(!menuState)} className={`w-max flex justify-center items-center gap-3 ${!menuState ? `bg-white/70` : `bg-main-gray-dark`} backdrop-blur-sm p-1 px-3 rounded-lg drop-shadow-lg font-medium font-archivo cursor-pointer transition-colors`}>
      <h1 className={`${menuState ? `text-white` : `text-main-black`}`}>more</h1>

      <div className='h-full'>
        <NavButton state={menuState} /> 
      </div>
    </div>
  );
}

export default MainMenu;