import React, { useRef, useState, useCallback, useEffect } from 'react';
import { WaveForm, WaveSurfer } from 'wavesurfer-react';

import { BsPlayCircle, BsPauseCircle } from 'react-icons/bs';

function AudioWaveform({id, title, composer, audioTrack, progressColor}) {
    
    const [isPlaying, setIsPlaying] = useState(false);

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

                wavesurferRef.current.on("ready", () => {
                    console.log("WaveSurfer is ready");
                });
                wavesurferRef.current.setVolume(0.3);

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

    //useffect where audioTrack exists set it as waveaudiotrack
    useEffect(() => {
        console.log("Checking for audio track:");
        if (audioTrack) {
            wavesurferRef.current.load(audioTrack);
            console.log("LOADING TRACK");
        }
    }, [audioTrack, handleWSMount]);

    return (
        <div className='w-full h-full my-10 grid grid-rows-2'>
            <div className='row-start-1 my-10 flex items-center gap-4 text-white'>
                <button onClick={play} className='text-5xl hover:text-main-gray transition-all border-2 p-1 border-transparent focus:border-cyan-200 rounded-lg'>
                    {isPlaying ?
                        <BsPauseCircle />
                        :
                        <BsPlayCircle />
                    }
                </button>
                <h1 className='font-inter font-semibold'>{title} — {composer}</h1>
            </div>

            { audioTrack !== null &&
                <div className='row-start-2 h-full'>
                <WaveSurfer onMount={handleWSMount}>
                    <WaveForm id={id} responsive={true} progressColor={progressColor ? progressColor : "#595959"} cursorWidth={3} barWidth={3} barGap={2} barRadius={3}/>
                </WaveSurfer>
            </div>}
        </div>
    );
}

export default AudioWaveform;