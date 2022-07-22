import React from "react";

function NavButton({state}) {

  return (
    <div className="w-8 h-8">
      <div className={`w-full h-full grid grid-cols-3 flex-wrap gap-1 overflow-hidden ${state && `-rotate-180`} transition ease-in-out duration-300`}>
        <div className="w-full aspect-square overflow-hidden">
          <div className="w-full h-full bg-white"></div>
        </div>
        <div className="w-full aspect-square overflow-hidden">
          <div className={`w-full h-full ${state ? `bg-tansparent` : `bg-white`} transition ease-in-out duration-300`}></div>
        </div>
        <div className="w-full aspect-square overflow-hidden">
          <div className="w-full h-full bg-white"></div>
        </div>

        <div className="w-full aspect-square overflow-hidden">
          <div className={`w-full h-full ${state ? `bg-tansparent` : `bg-white`} transition ease-in-out duration-300`}></div>
        </div>

        <div className="w-full aspect-square overflow-hidden">
          <div className="w-full h-full bg-white"></div>
        </div>
        <div className="w-full aspect-square overflow-hidden">
          <div className={`w-full h-full ${state ? `bg-tansparent` : `bg-white`} transition ease-in-out duration-300`}></div>
        </div>

        <div className="w-full aspect-square overflow-hidden">
          <div className="w-full h-full bg-white"></div>
        </div>
        <div className="w-full aspect-square overflow-hidden">
          <div className={`w-full h-full ${state ? `bg-tansparent` : `bg-white`} transition ease-in-out duration-300`}></div>
        </div>

        <div className="w-full aspect-square overflow-hidden">
          <div className="w-full h-full bg-white"></div>
        </div>
      </div>
    </div>
  );
}

export default NavButton;
