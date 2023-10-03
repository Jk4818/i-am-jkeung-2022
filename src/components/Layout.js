
import React from 'react';
import { motion } from "framer-motion";

import Navbar from './Navbar';


function Layout({ children }) {
    return (
        <div className='z-[100]'>
            <Navbar />
            <motion.div
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 200 }}
                transition={{
                    duration: 0.3
                }}
            >
                {children}
            </motion.div>
        </div>
    );
}

export default Layout;