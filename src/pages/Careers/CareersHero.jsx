import React from 'react';
import { motion } from 'motion/react';

const CareersHero = () => {
    return (
        <div className='flex flex-col md:flex-row max-w-5xl m-auto text-white my-16 p-2 sm:p-2 md:p-0'>
            <div className='flex flex-col md:justify-start z-10 md:items-start max-h-fit justify-center items-center text-center md:text-start bg-neutral-950 p-16 rounded-br-4xl rounded-tl-4xl'>
                <motion.h1 className='text-4xl/10 font-medium'>
                    Welcome to <motion.p className='accent-text'>OpenBank Careers!</motion.p>
                </motion.h1>
                <motion.p className='text-sm p-2 md:pl-0 font-light'>
                    Join our team and embark on a rewarding journey in the banking industry. At OpenBank, we are committed to fostering a culture of excellence and providing opportunities for professional growth. With a focus on innovation, customer service, and integrity, we strive to make a positive impact in the lives of our customers and communities. Join us today and be a part of our mission to shape the future of banking.
                </motion.p>
            </div>
            <div className='flex flex-col justify-center items-center -ml-20'>
                <motion.img
                    src='/assets/image.png'
                    className='h-full w-full object-contain'
                >
                </motion.img>
            </div>
        </div>
    )
}

export default CareersHero