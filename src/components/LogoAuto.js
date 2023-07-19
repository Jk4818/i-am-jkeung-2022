import React from 'react';
import { motion } from 'framer-motion';

function LogoAuto(props) {


    const logoVariantsHoverIAM = {
        hidden: {
            y: -20,
            opacity: 0,
        },
        visible: {
            display: 'inline',
            y: 0,
            opacity: 1,
            transition: {
                delay:8,
                duration: 0.5
            },
        }
    };
    const logoVariantsHoverEUNG = {
        hidden: {
            y: -20,
            opacity: 0
        },
        visible: {
            display: 'inline',
            y: 0,
            opacity: 1,
            transition: {
                delay:8.25,
                duration: 0.5
            },
        }
    };




    const logoVariants = {
        hidden: {
            x: 0
        },
        visible: {
            opacity: 1,
            x: -140,
            transition: {
                delay:7,
                duration: 1
            },
        }
    };
    const logoVariantsJK = {
        hidden: {
            x: 0,
            opacity: 1,
        },
        visible: {
            display: 'inline',
            x: 118,
            opacity: 1,
            transition: {
                delay:7,
                duration: 1
            },
        }
    };

    const logoVariantsSTUD = {
        hidden: {
            x: 0,
            opacity: 1,
        },
        visible: {
            display: 'inline',
            x: 280,
            opacity: 1,
            transition: {
                delay:7,
                duration: 1
            },
        }
    };


    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={logoVariants}

            className={`relative w-72 h-20 text-7xl font-archivo font-semibold text-main-gray-darker transition-colors  text-center `}>

            <motion.span
                variants={logoVariantsHoverIAM}
                className="absolute left-0 top-0" >
                iam
            </motion.span>

            <motion.span
                variants={logoVariantsJK}
                className="absolute left-0 top-0 ">
                jk
            </motion.span>

            <motion.span
                variants={logoVariantsHoverEUNG}
                className="absolute left-[10.65rem] top-0">
                eung
            </motion.span>

            <motion.span
                variants={logoVariantsSTUD}
                className="absolute left-[3.25rem] top-0">
                .
                <span className='logo-animate'>studio</span>
            </motion.span>



        </motion.div>
    );
}

export default LogoAuto;