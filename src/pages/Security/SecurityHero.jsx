import React from 'react';
import {motion} from 'motion/react'

const SecurityHero = () => {
  return (
            <div className='flex flex-col md:flex-row max-w-5xl m-auto text-white my-16 p-2 sm:p-2 md:p-0'>
            <div className='flex flex-col md:justify-start z-10 md:items-start max-h-fit justify-center items-center text-center md:text-start bg-neutral-950 p-16 rounded-br-4xl rounded-tl-4xl'>
                <motion.h1 className='text-4xl/10 font-medium'>
                    Your Security is <motion.p className='accent-text'>Our Top Priority</motion.p>
                </motion.h1>
                <motion.p className='text-sm p-2 md:pl-0 font-light'>
                    At OpenBank, we understand the importance of keeping your financial information secure. We employ robust security measures and advanced technologies to protect your personal and financial data. Rest assured that when you bank with us, your security is our utmost priority.
                </motion.p>
            </div>
            <div className='flex flex-col justify-center items-center -ml-20'>
                <motion.img
                    src='/assets/security.png'
                    className='h-full w-full object-contain'
                >
                </motion.img>
            </div>
        </div>
  )
}

export default SecurityHero