import React from 'react';
import NoiseBackground from '../components/NoiseBackground';
import ProductionHeroTitle from '../components/ProductionHeroTitle';
import Layout from '../components/Layout';

function production(props) {
    return (
        <Layout>
            <div className='bg-prod-dark w-screen h-full'>
                <section className='relative w-full h-screen'>
                    <div className=' flex items-center justify-center text-center w-full h-full'>
                        <ul className='z-20'>
                            <li>
                                <ProductionHeroTitle />
                            </li>
                            <li className='mt-4'>
                                <h2 className='text-white text-md font-archivo font-semibold uppercase tracking-widest'>born through Classical, learnt through cinema</h2>
                            </li>
                        </ul>
                    </div>
                    <NoiseBackground >
                        <div className='relative w-full h-full overflow-hidden'>
                            <div className='absolute top-0 left-0 w-full blur-4xl'>
                                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#BDE0FE" d="M31.3,-38.8C45.4,-25.4,65,-20.2,69,-10.2C73.1,-0.3,61.5,14.3,51.2,27.2C40.9,40.1,31.9,51.4,21.6,51.8C11.4,52.3,-0.1,41.9,-17.6,39.4C-35.2,36.9,-58.8,42.3,-68.3,35C-77.8,27.7,-73.1,7.8,-68.7,-11.3C-64.4,-30.4,-60.4,-48.8,-49,-62.7C-37.5,-76.6,-18.8,-86,-5.1,-79.9C8.6,-73.8,17.2,-52.3,31.3,-38.8Z" transform="translate(100 100)" />
                                </svg>
                            </div>
                            <div className='absolute bottom-0 right-0 w-2/3 blur-4xl'>
                                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#D57C61" d="M20.9,-23C29.8,-17.5,41.6,-13.4,44.6,-6.4C47.5,0.6,41.6,10.6,37.4,25.2C33.3,39.7,30.8,58.8,22.4,62.1C14,65.4,-0.4,53,-10.2,42.9C-19.9,32.8,-25.2,25.2,-37.6,15.8C-50,6.5,-69.5,-4.6,-74.5,-19.5C-79.4,-34.3,-69.7,-52.9,-54.8,-57.3C-40,-61.8,-20,-52.1,-7,-43.8C6,-35.4,12,-28.5,20.9,-23Z" transform="translate(100 100)" />
                                </svg>
                            </div>
                            <div className='absolute top-0 right-0 w-1/2 blur-4xl'>
                                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#FF0066" d="M24.4,-30.1C32.4,-22.3,40.2,-15.4,49.2,-3C58.2,9.4,68.3,27.3,61.8,33C55.3,38.6,32.3,32,14.7,36.8C-2.8,41.5,-14.8,57.6,-27.5,59.8C-40.2,62.1,-53.6,50.4,-53.6,37.3C-53.7,24.2,-40.3,9.7,-36.9,-6C-33.4,-21.6,-40,-38.5,-35.5,-46.9C-31,-55.3,-15.5,-55.2,-3.7,-50.8C8.2,-46.4,16.3,-37.8,24.4,-30.1Z" transform="translate(100 100)" />
                                </svg>
                            </div>
                        </div>
                    </NoiseBackground>
                </section>


                <section className='relative w-full h-screen  text-white bg-prod-dark composer-background bg-bottom xl:bg-center'>
                    <div className='w-full h-full py-20 flex flex-col items-center justify-around z-10'>
                        <h3 className='h-max font-inter font-bold text-sm'>You Need</h3>

                        <div className='grid grid-rows-9 grid-cols-5 items-center justify-around'>

                            <div className='w-full h-max row-start-1 col-start-1 xl:col-start-3 col-span-5 xl:col-span-3 row-span-3'>
                                <h1 className='xl:ml-16 text-center xl:text-left text-7xl md:text-9xl font-archivo font-bold'>Film <br />Composer</h1>
                            </div>

                            <div className='w-max h-max py-10 row-start-4 col-start-2 md:col-start-3 col-span-3 md:col-span-1 md:row-span-3 flex m-auto'>
                                <input type="checkbox" name="checkbox" id="toggle" />
                                <label for="toggle" class="switch"></label>
                            </div>

                            <div className='w-full h-max col-start-1 row-start-7 col-span-5 xl:col-span-3 row-span-3'>
                                <h1 className='xl:mr-20 text-center xl:text-right text-7xl md:text-9xl font-archivo font-bold'>Mix Mastering<br />Engineer</h1>
                            </div>

                        </div>
                    </div>

                </section>
            </div>
        </Layout>
    );
}

export default production;