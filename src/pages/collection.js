import React, { useState } from 'react';
import { motion } from "framer-motion";

import Layout from '../components/Layout.js';
import PhotoLoader from '../components/PhotoLoader.js';

import Video from "../components/Video.js";
import ShowReelVideo from "../assets/videos/showreel-2022.mp4";
import PurpleVideo from "../assets/videos/purple.mp4";


function Collection(props) {
	const [active, setActive] = useState(true);
	return (
		<motion.main 
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		exit={{opacity: 0 }}
		className='overflow-x-hidden'>
			<PhotoLoader active={active} setActive={setActive} />
			{!active && (
				<Layout>
					<div className="w-screen flex flex-col justify-center items-center uppercase bg-bg-light ">

						<div id="hero-container" className="w-full h-screen">
							<div className='relative w-full h-full pointer-events-none'>
								<Video
									videoSrc={ShowReelVideo}
									videoTitle="Reel-22"
								/>
							</div>
						</div>
						<div id="hero-container" className="w-full h-screen">
							<div className='relative w-full h-full pointer-events-none'>
								<Video
									videoSrc={PurpleVideo}
									videoTitle="IJFLSPT"
								/>
							</div>
						</div>
					</div>
				</Layout>
			)}
		</motion.main>
	);
}

export default Collection;