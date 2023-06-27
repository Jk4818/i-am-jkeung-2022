import React from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import RevealTextAnimation from './RevealTextAnimation';

function PricingCard({ color, title, description, price, features, btnText }) {
    return (
        <div
            style={{ backgroundColor: color }}
            className='flex min-h-[428px] w-[23rem] flex-col rounded-3xl p-8 text-prod-dark font-archivo'
        >
            <RevealTextAnimation>
                <h2 className='mb-5 text-xl font-bold'>{title}</h2>
            </RevealTextAnimation>

            <RevealTextAnimation>
                <div className='mb-5 flex items-end text-6xl font-bold'>
                    {price ? (
                        <>
                            <div>£{price}</div>
                        </>
                    ) : (
                        'Free'
                    )}
                </div>
            </RevealTextAnimation>
            <RevealTextAnimation>
                <p className='mb-5'>{description}</p>
            </RevealTextAnimation>
            <ul className='mb-10 flex flex-col gap-y-2 font-semibold'>
                {features.map((feature, index) => (
                    <RevealTextAnimation>
                        <li className='flex items-center gap-2' key={index}>
                            <div><BsFillCheckCircleFill /></div>
                            {feature}
                        </li>
                    </RevealTextAnimation>
                ))}
            </ul>

            {btnText ? 
            (<button className='mt-auto rounded-full bg-prod-dark py-3 px-6 text-lg text-white'>{btnText}</button>)
                :
            (<div className='mt-auto rounded-full bg-main-gray py-3 px-6 text-lg text-white text-center'>Contact For More Info</div>)
            }

        </div>
    );
}

export default PricingCard;