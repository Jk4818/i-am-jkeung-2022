import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "gatsby";

import "../styles/video.css";


const IndexPage = () => {
	return (
				<main>
					<title>Home Page</title>
					<div className="w-screen h-screen flex flex-col gap-6 justify-center items-center uppercase bg-bg-light">

						<motion.div
								initial={{ y: "-100%", opacity: 0 }}
								animate={{ y: "0%", opacity: 1 }}
								exit={{ y: "-100%", opacity: 0 }}
								transition={{ duration: 0.5 }}
								className="flex h-24 w-full items-center justify-center text-8xl font-archivo font-black ">
							<h1 className="h-full text-main-black"> Snap &&nbsp;</h1>
							<h1 className="h-full w-72 overflow-visible filled-text change-text"> Flicks</h1>
						</motion.div>

						<motion.h2
							initial={{ y: "100%", opacity: 0 }}
							animate={{ y: "0%", opacity: 1 }}
							exit={{ y: "100%", opacity: 0 }}
							transition={{ duration: 0.5 }}
							className="font-anton text-5xl text-main-gray">
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
				</main>
	)
}

export default IndexPage
