import React, { useState } from 'react';
import { motion } from 'framer-motion';

function ThreeWayToggle(props) {
    const tabs = ["Mixing", "Mastering", "Combined"];
    const [selectedTab, setSelectedTab] = useState(tabs[0]);

console.log(selectedTab);


    return (
        <div className='relative w-1/2 h-14'>
            <ul className='w-full h-full bg-bg-light rounded-full flex justify-around items-center text-center text-prod-dark font-bold'>
                {tabs.map((item) => (
                    <button
                        key={item}
                        className={`${item === selectedTab ? "text-white" : ""} w-1/3`}
                        onClick={() => setSelectedTab(item)}
                    >
                        <p className=' z-10'>{`${item}`}</p>
                        {item === selectedTab ? (
                            <motion.div className="w-1/3 h-full absolute top-0 left-0 bg-gray-700 opacity-50 rounded-full z-0" layoutId="focus" />
                        ) : null}
                    </button>
                ))
                }
            </ul>
        </div>
    );
}

export default ThreeWayToggle;