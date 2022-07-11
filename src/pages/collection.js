import React from 'react';

import Layout from '../components/Layout.js';
import PhotoLoader from '../components/PhotoLoader.js';

import Video from "../components/Video.js";
import ShowReelVideo from "../assets/videos/showreel-2022.mp4";


function Collection(props) {
	return (
		<main>
			<PhotoLoader />
			<Layout>
				<div className="w-screen h-screen flex justify-center items-center uppercase bg-bg-light overflow-hidden">

					<div id="hero-container" className="w-full h-full">
						<div className='relative w-full h-full pointer-events-none'>
							<Video
								videoSrc={ShowReelVideo}
								videoTitle="Reel-22"
							/>
						</div>
					</div>
				</div>
			</Layout>
		</main>
	);
}

export default Collection;