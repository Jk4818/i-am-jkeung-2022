import React, { useState } from 'react';
import { motion } from "framer-motion";

import Layout from '../components/Layout.js';
import PhotoLoader from '../components/PhotoLoader.js';

import Video from "../components/Video.js";
import ShowReelVideo from "../assets/videos/showreel-2022.mp4";
import PurpleVideo from "../assets/videos/purple.mp4";


function Collection(props) {
	const [active, setActive] = useState(false);
	return (
		<Layout>
			<motion.main
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className='overflow-x-hidden'>
				<PhotoLoader active={active} setActive={setActive} />
				{!active && (
					<div className="w-screen h-full flex flex-col justify-center items-center uppercase bg-bg-light ">

						<div id="hero-container" className="snarp-start w-full h-screen">
							<div className='relative w-full h-full pointer-events-none'>
								<Video
									videoSrc={ShowReelVideo}
									videoTitle="Reel-23"
								/>
							</div>
						</div>
						<div id="hero-container" className="snap-start w-full h h-screen">
							<div className='relative w-full h-full pointer-events-none'>
								<Video
									videoSrc={PurpleVideo}
									videoTitle="IJFLSPT"
								/>
							</div>
						</div>
					</div>
				)}
			</motion.main>
		</Layout>
	);
}

export default Collection;