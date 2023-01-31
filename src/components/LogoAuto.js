import React from 'react';
import { useLocation } from '@reach/router';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';

function LogoAuto(props) {

    const url = useLocation().pathname;

    const logoVariants = {
        visible: {
            opacity: 1,
            y: 0,
            x: -140,
            transition: {
                ease: 'easeInOut',
                delay: 1,
            }
        }
    };
    const logoVariantsHoverIAM = {
        visible: {
            display: 'inline',
            y: 0,
            opacity: 1,
        }
    };
    const logoVariantsHoverEUNG = {
        visible: {
            display: 'inline',
            y: 0,
            opacity: 1,
            transition: {
                ease: 'easeInOut',
                delay: 1.4,
            }
        }
    };

    const logoVariantsJK = {
        visible: {
            display: 'inline',
            x: 118,
            opacity: 1,
            transition: {
                ease: 'easeInOut',
                delay: 1,
            }
        }
    };

    const logoVariantsSTUD = {
        visible: {
            display: 'inline',
            x: 280,
            opacity: 1,
            transition: {
                ease: 'easeInOut',
                delay: 1,
            }
        }
    };


    return (
        <motion.div
            initial={{ x: 0 }}
            animate={"visible"}
            variants={logoVariants}
            className={`relative w-72 h-20 text-7xl font-archivo font-semibold text-main-gray-darker transition-colors  text-center `}>

            <Link to='/'>
                <motion.span 
                initial={{ opacity: 0, y: -20 }} 
                variants={logoVariantsHoverIAM}
                transition={{
                    ease: 'easeInOut',
                    delay: 1.3,
                    repeat: Infinity,
                    repeattype: 'mirror',
                    duration: 1.5,
                }} 
                className="absolute left-0 top-0" >iam</motion.span>

                <motion.span exit={{ transition: { delay: 0.3 } }} variants={logoVariantsJK} className="absolute left-0 top-0 ">jk</motion.span>

                <motion.span initial={{ opacity: 0, y: -20 }} variants={logoVariantsHoverEUNG} className="absolute left-[10.65rem] top-0">eung</motion.span>

                <motion.span exit={{ transition: { delay: 0.3 } }} variants={logoVariantsSTUD} className="absolute left-[3.25rem] top-0">
                    .
                    <span className='logo-animate'>studio</span>
                </motion.span>

            </Link>

        </motion.div>
    );
}

export default LogoAuto;