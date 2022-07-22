import React from 'react';
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";

import { FaSpotify, FaSoundcloud } from 'react-icons/fa';
import { SiApplemusic, SiYoutubemusic, SiBandcamp } from 'react-icons/si';

function ReleaseCard({ song, index }) {

  const soundProviderIcons = [
    { name: "Spotify", html: <FaSpotify /> },
    { name: "Soundcloud", html: <FaSoundcloud /> },
    { name: "Apple Music", html: <SiApplemusic /> },
    { name: "Youtube Music", html: <SiYoutubemusic /> },
    { name: "Bandcamp", html: <SiBandcamp /> },
  ]

  const tailwindGradients = [
    "bg-violet-300 hover:bg-violet-400",
    "bg-sky-300 hover:bg-sky-400",
    "bg-orange-300 hover:bg-orange-400",
    "bg-green-300 hover:bg-green-400",
    "bg-red-300 hover:bg-red-400",
    "bg-teal-300 hover:bg-teal-400",
    "bg-pink-300 hover:bg-pink-400",
  ]

  return (
    <motion.li
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 },
      }}
      key={song.node.id}
      className={`w-full lg:w-[calc(50%-2.5rem)] h-48 md:h-80 flex flex-col font-archivo text-[#181818] divide-y rounded-lg divide-[#606060] transition-all ${tailwindGradients[index]}`}>

      <Link to="/" className='h-3/4 w-full flex justify-between'>
        <div className='w-2/3 h-full p-4 flex flex-col justify-between'>
          <h1 className='text-2xl md:text-4xl'>{song.node.frontmatter.title}</h1>
          <div className='flex items-center gap-4'>
            <div className='w-6 aspect-square'>
              <GatsbyImage className='rounded-full' image={getImage(song.node.featuredImg.childImageSharp.gatsbyImageData)} alt={song.node.frontmatter.featuredImgAlt} />
            </div>
            <h3 className='text-lg'>{song.node.frontmatter.artist}</h3>
          </div>
        </div>
        <div className='h-full  aspect-square flex items-center justify-center p-6'>
          <GatsbyImage class='rounded-lg' image={getImage(song.node.frontmatter.image)} alt={song.node.frontmatter.id} />
        </div>
      </Link>

      <div className='p-4 h-1/4 text-lg text-[#726767] flex gap-4'>
        {song.node.frontmatter.sourceLink.map((link) => (
          <a target="_blank" href={link.url}>
            <div className='group h-full flex gap-2 items-center justify-center hover:text-[#554c4c] '>
              <div className='group-hover:animate-spin'>{soundProviderIcons.find(o => o.name === link.alt).html}</div>
              <p className='hidden md:block group-hover:drop-shadow-md group-hover:transition-all'>{link.alt}</p>

            </div>
          </a>
        ))}
      </div>


    </motion.li>
  );
}

export default ReleaseCard;