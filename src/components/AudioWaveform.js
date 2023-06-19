import React, { useRef, useState, useCallback } from 'react';
import { WaveForm, WaveSurfer } from 'wavesurfer-react';

import { BsPlayCircle, BsPauseCircle } from 'react-icons/bs';
import audioTrack from "../assets/audio/over_the_mile.wav";

function AudioWaveform({title, composer}) {
    
    const [isPlaying, setIsPlaying] = useState(false);
    
    const audioElement = new Audio(audioTrack);
    audioElement.controls = true;


    const wavesurferRef = useRef();

    const play = useCallback(() => {
        wavesurferRef.current.playPause();

    }, []);

    const handleWSMount = useCallback(
        (waveSurfer) => {
            if (waveSurfer.markers) {
                waveSurfer.clearMarkers();
            }

            wavesurferRef.current = waveSurfer;

            if (wavesurferRef.current) {
                wavesurferRef.current.load(audioElement);

                wavesurferRef.current.on("ready", () => {
                    console.log("WaveSurfer is ready");
                });

                wavesurferRef.current.on("play", () => {
                    setIsPlaying(true);
                    console.log("WaveSurfer is playing");
                });
                wavesurferRef.current.on("pause", () => {
                    setIsPlaying(false);
                    console.log("WaveSurfer is paused");
                });

                wavesurferRef.current.on("loading", (data) => {
                    console.log("loading --> ", data);
                });

                if (window) {
                    window.surferidze = wavesurferRef.current;
                }
            }
        },
        []
    );

    return (
        <div className='w-full h-max my-10'>
            <div className='my-10 flex items-center gap-4 text-white'>
                <button onClick={play} className='text-5xl hover:text-main-gray transition-all'>
                    {isPlaying ?
                        <BsPauseCircle />
                        :
                        <BsPlayCircle />
                    }
                </button>
                <h1 className='font-inter font-semibold'>{title} — {composer}</h1>
            </div>

            <WaveSurfer onMount={handleWSMount}>
                <WaveForm id='waveform' cursorWidth={3} barWidth={3} barGap={2} barRadius={3} />
            </WaveSurfer>
        </div>
    );
}

export default AudioWaveform;