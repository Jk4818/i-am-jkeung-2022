import React from 'react';
import "../styles/video.css";


const Video = ({ videoSrc, videoTitle, videoThumb, ...props }) => (
    <div className="relative w-full h-full flex justify-center items-center ">
        <video loop autoPlay muted poster={videoThumb}>
            <source src={videoSrc} type="video/mp4" />
        </video>

        <div id='heading' className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center font-archivo text-7xl font-black text-white'>
            <h1 className=''>{videoTitle}</h1>
            <h2 className='text-4xl'>{props.videoSubs}</h2>
        </div>
    </div>
)

export default Video;