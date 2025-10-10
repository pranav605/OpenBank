import React from 'react';
import { motion } from 'motion/react';

const AboutHero = () => {
    return (
        <div className='flex flex-col md:flex-row max-w-5xl m-auto text-white my-16 p-2 sm:p-2 md:p-0'>
            <div className='flex flex-col md:flex-2/5 md:justify-start z-10 md:items-start max-h-fit justify-center items-center text-center md:text-start bg-neutral-950 p-16 rounded-br-4xl rounded-tl-4xl'>
                <motion.h1 className='text-4xl/10 font-medium'>
                    Where Banking Meets <motion.p className='accent-text'>Excellence!</motion.p>
                </motion.h1>
                <motion.p className='text-sm p-2 md:pl-0 font-light'>
                    At OpenBank, we believe that banking should be more than just transactions. It should be an experience that empowers individuals and businesses to thrive and reach their financial goals. As a trusted financial institution, we are committed to delivering exceptional banking services that go beyond expectations. With a focus on innovation, personalized solutions, and unwavering integrity, we strive to provide the best banking experience for our valued customers. Join us on this exciting journey and discover a new level of banking excellence.
                </motion.p>
            </div>
            <div className='flex flex-col flex-3/5 justify-center items-center -ml-20'>
                <motion.img
                    src='/assets/image.png'
                    className='h-full w-full object-contain'
                >
                </motion.img>
            </div>
        </div>
    )
}

export default AboutHero