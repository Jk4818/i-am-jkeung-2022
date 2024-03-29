import React, { useState }  from 'react';
import { motion } from "framer-motion";
import { Link } from "gatsby";

import PhotoLoader from '../components/PhotoLoader.js';


import "../styles/video.css";

const IndexPage = () => {

	const [active, setActive] = useState(true);

	return (
		<motion.main
		initial={{ opacity: 0, }}
		animate={{ opacity: 1,}}
		exit={{ opacity: 0, }}
		transition={{
				duration: 0.7
		}}>
			<title>Home Page</title>
      	<PhotoLoader active={active} setActive={setActive} />

				<div className="w-screen h-screen flex flex-col gap-6 justify-center items-center uppercase bg-bg-light">

					<motion.div
						initial={{ y: "-100%", opacity: 0 }}
						animate={{ y: "0%", opacity: 1 }}
						exit={{ y: "-100%", opacity: 0 }}
						transition={{ duration: 0.5 }}
						className="flex h-16 sm:h-28 w-full items-center justify-center text-5xl sm:text-7xl lg:text-8xl font-archivo font-black overflow-visible">
						<h1 className="w-max h-full text-main-black "> Snap &&nbsp;</h1>
						<h1 className="h-full sm:-mr-[8rem] sm:w-[20rem] lg:w-[28rem] overflow-clip filled-text change-text"> Flicks</h1>
					</motion.div>

					<motion.h2
						initial={{ y: "100%", opacity: 0 }}
						animate={{ y: "0%", opacity: 1 }}
						exit={{ y: "100%", opacity: 0 }}
						transition={{ duration: 0.5 }}
						className="font-anton text-5xl text-main-gray text-center">
						By Jason Keung
					</motion.h2>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.5 }}
						className="mt-14 w-40 h-16">
						<Link to="/collection/" >
							<button className="w-full h-full rounded-2xl border-4 border-main-black bg-bg-light uppercase font-archivo font-semibold text-2xl text-main-black hero-button-shadow">
								Enter
							</button>
						</Link>
					</motion.div>
				</div>

		</motion.main>

	)
}

export default IndexPage
