import React from 'react';

import { BsFillCheckCircleFill } from 'react-icons/bs';
import RevealAnimation from './RevealAnimation';

function PricingCard({ color, title, description, price, features, btnText }) {
    return (
        <div
            style={{ backgroundColor: color }}
            className='flex min-h-[428px] w-[23rem] flex-col rounded-3xl p-8 text-prod-dark font-archivo'
        >
            <RevealAnimation>
                <h2 className='mb-5 text-xl font-bold'>{title}</h2>
            </RevealAnimation>

            <RevealAnimation>
                <div className='flex items-end text-sm font-semibold'>
                    From.
                </div>
            </RevealAnimation>
            <RevealAnimation>
                <div className='mb-5 flex items-end text-6xl font-bold'>
                    {price ? (
                        <>
                            <div>£{price}</div>
                        </>
                    ) : (
                        'Free'
                    )}
                </div>
            </RevealAnimation>
            <RevealAnimation>
                <p className='mb-5 font-semibold'>{description}</p>
            </RevealAnimation>
            <ul className='mb-10 flex flex-col gap-y-2 font-bold'>
                {features.map((feature, index) => (
                    <RevealAnimation>
                        <li className='flex items-center gap-2' key={index}>
                            <div><BsFillCheckCircleFill /></div>
                            {feature}
                        </li>
                    </RevealAnimation>
                ))}
            </ul>

            <RevealAnimation width="w-full">
                {btnText ?
                (<button className='w-full mt-auto rounded-full bg-prod-dark hover:bg-gray-700 transition-colors py-3 px-6 text-lg text-white'>{btnText}</button>)
                    :
                (<div className='mt-auto rounded-full bg-gray-400 py-3 px-6 text-lg text-white text-center'>Contact For More Info</div>)
                }
            </RevealAnimation>

        </div>
    );
}

export default PricingCard;