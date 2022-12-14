import React from "react";

function NavButton({ state }) {

  return (
    <div className="w-4 h-2.5">
      <div className={`w-full h-full grid grid-rows-3 gap-0.5 overflow-hidden  transition ease-in-out duration-300`}>
        <div className={`w-full h-0.5 overflow-hidden ${state && `-rotate-45 translate-y-1`} transition ease-in-out duration-300` }>
          <div className={`w-full h-full ${state ? `bg-white` : `bg-main-black` }`}></div>
        </div>
        <div className="w-full h-0.5 overflow-hidden">
          <div className={`w-full h-full ${state ? `bg-transparent` : `bg-main-black`} transition ease-in-out duration-300`}></div>
        </div>
        <div className={`w-full h-fu1ll overflow-hidden ${state && `rotate-45 -translate-y-1`}  transition ease-in-out duration-300` }>
          <div className={`w-full h-full ${state ? `bg-white` : `bg-main-black` }`}></div>
        </div>
      </div>
    </div>
  );
}

export default NavButton;
