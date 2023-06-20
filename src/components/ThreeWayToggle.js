import React from 'react';

function ThreeWayToggle(props) {

    

    return (
        <div className='relative w-1/2 bg-red-400 h-14'>
            <ul className='w-full h-full bg-bg-light rounded-full flex justify-around items-center text-center text-prod-dark'>
                <button className='w-1/3'>Mixing</button>
                <button className=' w-1/3 '>Mastering</button>
                <button className=' w-1/3 '>Combined</button>
            </ul>
            <div className='w-1/3 h-full absolute top-0 left-0 bg-main-gray rounded-full'></div>
        </div>
    );
}

export default ThreeWayToggle;