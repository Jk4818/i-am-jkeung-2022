import React from 'react';

function NoiseBackground({ children }) {
    return (
        <div className='absolute top-0 left-0 w-full h-screen z-0'>
            <div className='absolute top-0 left-0 z-10 w-full h-full bg-gradient-to-t from-prod-dark ' />
            <div className='absolute top-0 left-0 z-0 background-noise w-full h-full flex justify-center items-center'>
                {children}
            </div>
            <svg>
                <filter id='noiseFilter'>
                    <feTurbulence
                        type='turbulence'
                        baseFrequency='0.4'
                        stitchTiles='stitch' />
                    <feColorMatrix in="colorNoise" type="matrix" values="1 0 0 0 0 0 1 0 0  0 0 0 1 0 0 0 0 0 1 0" />
                    <feComposite operator="in" in2="SourceGraphic" result="monoNoise" />
                    <feBlend in="SourceGraphic" in2="monoNoise" mode="screen" />
                </filter>
            </svg>
        </div>
    );
}

export default NoiseBackground;