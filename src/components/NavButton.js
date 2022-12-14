import React from "react";

function NavButton({ state }) {

  return (
    <div className="w-5 h-5">
      <div className={`w-full h-full grid grid-rows-3  gap-1 overflow-hidden  transition ease-in-out duration-300`}>
        <div className={`w-full h-full overflow-hidden ${state && `-rotate-45 translate-y-1.5`} transition ease-in-out duration-300` }>
          <div className="w-full h-full bg-main-black"></div>
        </div>
        <div className="w-full h-full overflow-hidden">
          <div className={`w-full h-full ${state ? `hidden` : `bg-main-black`} transition ease-in-out duration-300`}></div>
        </div>
        <div className={`w-full h-full overflow-hidden ${state && `rotate-45 -translate-y-1.5`}  transition ease-in-out duration-300` }>
          <div className="w-full h-full bg-main-black"></div>
        </div>
      </div>
    </div>
  );
}

export default NavButton;
