import React from 'react';
import { motion } from "framer-motion";

import Layout from '../components/Layout.js';

import Video from "../components/Video.js";
import ShowReelVideo from "../assets/videos/showreel-2022.mp4";
import ShowReelPoster from "../assets/videos/showreel-2022-thumb.jpg";
import PurpleVideo from "../assets/videos/purple.mp4";
import PurplePoster from "../assets/videos/purple-thumb.jpg";
import IrelandVideo from "../assets/videos/coow-ireland.mp4";
import IrelandPoster from "../assets/videos/coow-ireland-thumb.jpg";
import TakenVideo from "../assets/videos/road-not-taken.mp4";
import TakenPoster from "../assets/videos/road-not-taken-thumb.jpg"
import SicilyVideo from "../assets/videos/coow-sicily.mp4";
import SicilyPoster from "../assets/videos/coow-sicily-thumb.jpg"
import niceVideo from "../assets/videos/coow-nice.mp4";
import nicePoster from "../assets/videos/coow-nice-thumb.png"


function Collection(props) {
	return (
		<Layout>
			<main
				className='overflow-x-hidden'>
				<div className="w-screen h-full flex flex-col justify-center items-center uppercase ">

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }} id="hero-container" className="snarp-start w-full h-screen">
						<div className='relative w-full h-full pointer-events-none'>
							<Video
								videoSrc={niceVideo}
								videoThumb={nicePoster}
								videoTitle="Colours Of The World"
								videoSubs="Nice"
							/>
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }} id="hero-container" className="snarp-start w-full h-screen">
						<div className='relative w-full h-full pointer-events-none'>
							<Video
								videoSrc={ShowReelVideo}
								videoThumb={ShowReelPoster}
								videoTitle="Reel-24"
							/>
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }} id="hero-container" className="snap-start w-full h h-screen">
						<div className='relative w-full h-full pointer-events-none'>
							<Video
								videoSrc={SicilyVideo}
								videoThumb={SicilyPoster}
								videoTitle="Colours Of The World"
								videoSubs="Sicily"
							/>
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }} id="hero-container" className="snap-start w-full h h-screen">
						<div className='relative w-full h-full pointer-events-none'>
							<Video
								videoSrc={IrelandVideo}
								videoThumb={IrelandPoster}
								videoTitle="Colours Of The World"
								videoSubs="Ireland"
							/>
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }} id="hero-container" className="snap-start w-full h-screen">
						<div className='relative w-full h-full '>
							<Video
								videoSrc={TakenVideo}
								videoThumb={TakenPoster}
								videoTitle="The Road Not Taken"
								videoSubs="Trailer"
							/>
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }} id="hero-container" className="snap-start w-full h h-screen">
						<div className='relative w-full h-full pointer-events-none'>
							<Video
								videoSrc={PurpleVideo}
								videoThumb={PurplePoster}
								videoTitle="IJWTSPT"
								videoSubs="I Just Wanted To See Purple Today"
							/>
						</div>
					</motion.div>
				</div>
			</main>
		</Layout>
	);
}

export default Collection;