import React, {useState} from 'react';
import NavButton from './NavButton';

function MainMenu(props) {

  const [menuState, setMenuState] = useState(false);
  
  return (
    <div className={`w-max flex justify-center items-center gap-4 bg-white/70 backdrop-blur-sm p-4 rounded-lg drop-shadow-lg   text-main-black font-archivo font-semibold `}>
      <h1>more</h1>

      <div onClick={() => setMenuState(!menuState)} className=''>
        <NavButton state={menuState} /> 
      </div>
    </div>
  );
}

export default MainMenu;