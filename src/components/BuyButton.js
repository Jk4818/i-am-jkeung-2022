import React from 'react';

function BuyButton(props) {
  return (
    <div className={`relative w-max flex justify-center items-center backdrop-blur-sm p-2 px-8 rounded-lg shadow-main font-semibold font-archivo cursor-pointer group hover:bg-main-gray-dark transition-colors`}>

      <h1 className={`text-main-gray-dark group-hover:text-text-light transition-colors`}>Coming Soon</h1>
    </div>
  );
}

export default BuyButton;