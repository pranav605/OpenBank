import React from 'react'
import CheckedPill from '../../components/CheckedPill'
import { motion } from 'motion/react'
import HeroCard from '../../components/HeroCard'
import CurrenciesPill from '../../components/CurrenciesPill'

const LandingHero = () => {
    return (
        <div className='flex flex-col md:flex-row max-w-5xl m-auto gap-8 text-white mt-8 mb-8 '>
            <div className='flex flex-col md:flex-1/2 justify-center items-center gap-2 text-center md:text-start md:items-start'>
                <CheckedPill />
                <motion.h1 className='text-3xl/10 font-medium'>
                    Welcome to OpenBank Empowering Your <motion.p className='accent-text'>Financial Journey</motion.p>
                </motion.h1>
                <motion.p className='text-sm p-2 md:pl-0 font-light'>At OpenBank, our mission is to provide comprehensive banking solutions that empower individuals and businesses to achieve their financial goals. We are committed to delivering personalized and innovative services that prioritize our customers' needs.</motion.p>
                <motion.button className='accent-bg text-black py-4 px-6 mt-4 rounded-4xl'>
                    Open Account
                </motion.button>
            </div>
            <div className='relative flex flex-col  md:flex-1/2 justify-center items-center md:gap-2'>
                <div className='hidden md:block'>
                    <div className='absolute top-2 -right-2'>
                        <motion.img
                            className=''
                            src='src/assets/arrow-lg.png'
                            alt='animated arrow'
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 1 }}
                        ></motion.img>
                    </div>
                    <div className='absolute top-3 right-17'>
                        <motion.img
                            src='src/assets/arrow-xs.png'
                            alt='animated arrow'
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 1 }}
                        ></motion.img>
                    </div>
                    <div className='absolute top-20 -right-2'>
                        <motion.img
                            src='src/assets/arrow-xs.png'
                            alt='animated arrow'
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 1 }}
                        ></motion.img>
                    </div>
                    <div className='absolute top-30 right-10'>
                        <motion.img
                            src='src/assets/arrow-md.png'
                            alt='animated arrow'
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 1 }}
                        ></motion.img>
                    </div>
                    <div className='absolute top-35 right-0'>
                        <motion.img
                            src='src/assets/arrow-sm.png'
                            alt='animated arrow'
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 1 }}
                        ></motion.img>
                    </div>
                    <div className='absolute top-34 -right-10'>
                        <motion.img
                            src='src/assets/arrow-xs.png'
                            alt='animated arrow'
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 1 }}
                        ></motion.img>
                    </div>
                </div>
                <motion.div
                    className='p-4'
                >
                    <HeroCard />
                </motion.div>
                <div className='flex flex-row justify-center w-full md:justify-end'>
                    <CurrenciesPill />
                </div>
            </div>
        </div>
    )
}

export default LandingHero