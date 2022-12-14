import React, {useState} from 'react';
import MenuButton from './MenuButton';

function MainMenu(props) {

  
  const [menuState, setMenuState] = useState(false);

  
  return (
    <div className='relative w-full h-full'>
      <div className='relative z-50'>
        <MenuButton menuState={menuState} setMenuState={setMenuState}/>
      </div>

      <div className={`fixed top-6 right-8 w-60 h-96 z-10 bg-gray-200/70 rounded-lg transition-all ${!menuState && `hidden`}`}>
        <ul>
          <li>Home</li>
        </ul>
      </div>
    </div>
  );
}

export default MainMenu;