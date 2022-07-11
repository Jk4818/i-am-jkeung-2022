import React from 'react';
import "../styles/video.css";

const Video = ({ videoSrc, videoTitle, ...props }) => (
    <div className="relative w-full h-full flex justify-center items-center ">
        <video loop autoPlay muted>
            <source src={videoSrc} type="video/mp4" />
        </video>

        <div id='heading' className='absolute top-0 left-0 w-full h-full flex justify-center items-center font-archivo text-7xl font-black text-white'>
            <h1 className=''>{videoTitle}</h1>
        </div>
    </div>
)

export default Video;