import React from 'react';
import Layout from '../../components/Layout';
import PricingCard from '../../components/PricingCard';
import { graphql } from 'gatsby';
import AudioWaveform from '../../components/AudioWaveform';
import { StaticImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';

function MixMastering({ data }) {

    const { priceList } = data.pricing;

    const mixVariant = {
        visible: {
            opacity: 1, y: 0,
            transition: {
                duration: 1.5,
            },
        },
        hidden: { opacity: 0, y: 20 },
    }

    return (
        <Layout>
            <div className='w-screen h-full bg-prod-dark py-40 px-10 text-white'>

                <div className='grid grid-cols-2 text-white h-full '>
                    <div className='font-archivo font-semibold'>
                        <h1 className='mb-10 text-4xl'>Mixing & Mastering</h1>
                        <p className='mb-32 text-lg'>Specialising in a cappella, orchestral, and rock, my expertise extends across a wide range of styles. I am committed to delivering top-notch results by providing meticulous attention to detail, ensuring your artistic vision is achieved without compromising any technical requirements.
                        </p>

                        <h3>Join me as I compose my way through the captivating realm of film.
                        </h3>
                    </div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 1, staggerChildren: 0.3 }}
                        className='relative w-full h-full bg-red-400'>
                        <motion.div
                            variants={mixVariant}
                            className='absolute w-96 h-96'>
                            <StaticImage className='h-full w-full aspect-square rounded-2xl' placeholder='none' layout='constrained' src="../assets/images/tracks/run_to_you_cover.jpg" alt="run_to_you_cover" />
                        </motion.div>
                        <motion.div
                            variants={mixVariant}
                            className='absolute w-96 h-96'>
                            <StaticImage className='h-full w-full aspect-square rounded-2xl' placeholder='none' layout='constrained' src="../assets/images/tracks/vision_cover.png" alt="vision_cover" />
                        </motion.div>
                        <motion.div
                            variants={mixVariant}
                            className='absolute w-96 h-96'>
                            <StaticImage className='h-full w-full aspect-square rounded-2xl' placeholder='none' layout='constrained' src="../assets/images/tracks/over_the_mile_cover.PNG" alt="over_the_mile_cover" />
                        </motion.div>
                    </motion.div>

                </div>

                <div className='mt-96'>
                    <AudioWaveform title="Over The Mile" composer="Jason Keung" />
                </div>

                <div className='w-full h-full flex flex-wrap gap-6 justify-around'>
                    {priceList.map((item, index) => (
                        <PricingCard
                            key={index}
                            color={item.frontmatter.color}
                            title={item.frontmatter.title}
                            description={item.excerpt}
                            price={item.frontmatter.price}
                            features={item.frontmatter.features}
                            btnText={item.frontmatter.btnText}
                        />
                    ))}
                </div>
            </div>
        </Layout>
    );
}

export default MixMastering;


export const pageQuery = graphql`
query {
    pricing: allMarkdownRemark(filter: {frontmatter: {pricing: {eq: true}}}) {
      priceList: nodes {
        id
        frontmatter {
          title
          price
          features
          btnText
          color
        }
        excerpt
      }
    }
  }
  

`