import React, { useState } from 'react';
import { motion } from 'framer-motion';

function ThreeWayToggle(props) {
    const tabs = ["Mixing", "Mastering", "Combined"];
    const [selectedTab, setSelectedTab] = useState(tabs[0]);

console.log(selectedTab);


    return (
        <div className='relative min-w-[23rem] w-1/2 max-w-xl h-10'>
            <ul className='w-full h-full p-1 bg-bg-light rounded-full flex justify-around items-center text-center text-prod-dark font-bold'>
                {tabs.map((item) => (
                    <button
                        key={item}
                        className={`${item === selectedTab ? "text-white" : ""} h-full w-1/3 relative transition-colors duration-300`}
                        onClick={() => setSelectedTab(item)}
                    >
                        <p className='relative z-10'>{`${item}`}</p>
                        {item === selectedTab ? (
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