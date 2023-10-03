
import React from 'react';
import { motion } from "framer-motion";

import Navbar from './Navbar';


function Layout({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0, }}
            animate={{ opacity: 1,}}
            exit={{ opacity: 0, }}
            transition={{
                duration: 0.3
            }}
        >
        <div className='z-[100]'>
            <Navbar />
                {children}
        </div>
            </motion.div>
    );
}

export default Layout;