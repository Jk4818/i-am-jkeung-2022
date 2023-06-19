import React from 'react';

function ThreeWayToggle(props) {
    return (
        <div className='w-1/2 bg-red-400 h-14'>
            <ul className='w-full h-full bg-bg-light rounded-full flex justify-around items-center text-center text-prod-dark'>
                <li className='w-1/3'>Mixing</li>
                <li className=' w-1/3 '>Mastering</li>
                <li className=' w-1/3 '>Combined</li>
            </ul>
        </div>
    );
}

export default ThreeWayToggle;