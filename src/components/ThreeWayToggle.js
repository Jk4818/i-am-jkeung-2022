import React from 'react';
import { motion } from 'framer-motion';

function ThreeWayToggle({tabs, selectedTab, handleTabChange}) {

    return (
        <div className='relative min-w-[23rem] w-1/2 max-w-xl h-10'>
            <ul className='w-full h-full p-1 bg-bg-light rounded-full flex justify-around items-center text-center text-prod-dark font-bold'>
                {tabs.map((item) => (
                    <button
                        key={item.label}
                        className={`${item.label === selectedTab.label ? "text-white" : ""} h-full w-1/3 relative transition-colors duration-300`}
                        onClick={() => handleTabChange(item)}
                    >
                        <p className='relative z-10'>{`${item.label}`}</p>
                        {item.label === selectedTab.label ? (
                            <motion.div className="h-full absolute bottom-0 left-0 right-0 bg-[#302E2F] rounded-full z-0" layoutId="focus" />
                        ) : null}
                    </button>
                ))
                }
            </ul>
        </div>
    );
}

export default ThreeWayToggle;