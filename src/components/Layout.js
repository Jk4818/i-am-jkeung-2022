
import React from 'react';
import { motion } from "framer-motion";
import { useLocation } from '@reach/router';

import { FiGithub, FiYoutube } from 'react-icons/fi';

import Navbar from './Navbar';


function Layout({ children }) {
    const url = useLocation().pathname;
    return (
        <motion.div
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, }}
            exit={{ opacity: 0, }}
            transition={{
                duration: 0.3
            }}
        >
            <div className={`z-[100] h-full ${ !url.includes("contact") && "bg-prod-dark"}`}>
                <Navbar />

                {children}

                {!url.includes("prints") &&
                    <footer className="font-roboto-mono tracking-wide text-blue-gray text-sm text-center p-4 mx-6 text-white z-[100] ">
                        <div className="flex flex-col gap-2 items-center">
                            <a href="https://github.com/Jk4818/i-am-jkeung-2022" target="_blank" rel="noreferrer" className="hover:text-orange-300 transition-all">
                                <p>Designed & Developed with ❤️ by Jason Keung {new Date().getFullYear().toString()}</p>
                            </a>
                            <span className="flex gap-5">
                                <a href="https://github.com/Jk4818/" target="_blank" rel="noreferrer" className="hover:text-orange-300 transition-all">
                                    <FiGithub size="20" />
                                </a>
                                <a href="https://www.youtube.com/channel/UCP5JJh8VukJMU1jd0BUhjgQ" target="_blank" rel="noreferrer" className="hover:text-orange-300 transition-all">
                                    <FiYoutube size="20" />
                                </a>
                            </span>
                        </div>
                    </footer>
                }

            </div>
        </motion.div>
    );
}

export default Layout;