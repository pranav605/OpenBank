import React from 'react'
import CheckedPill from '../../components/CheckedPill'
import { motion } from 'motion/react'
import HeroCard from '../../components/HeroCard'
import CurrenciesPill from '../../components/CurrenciesPill'

const LandingHero = () => {
    return (
        <div className='flex flex-col sm:flex-row max-w-5xl m-auto gap-8 text-white mt-8 mb-8'>
            <div className='flex flex-col sm:flex-1/2 items-center gap-2 text-center sm:text-start sm:items-start'>
                <CheckedPill />
                <motion.h1 className='text-3xl/10 font-medium'>
                    Welcome to OpenBank Empowering Your <motion.p className='accent-text'>Financial Journey</motion.p>
                </motion.h1>
                <motion.p className='text-sm p-2 sm:pl-0 font-light'>At YourBank, our mission is to provide comprehensive banking solutions that empower individuals and businesses to achieve their financial goals. We are committed to delivering personalized and innovative services that prioritize our customers' needs.</motion.p>
                <motion.button className='accent-bg text-black py-4 px-6 mt-4 rounded-4xl'>
                    Open Account
                </motion.button>
            </div>
            <div className='flex flex-col sm: flex-1/2 justify-center items-center gap-2'>
                <div className='p-4'>
                    <HeroCard />
                </div>
                <div className='flex flex-row justify-center w-full sm:justify-end'>
                    <CurrenciesPill/>
                </div>
            </div>
        </div>
    )
}

export default LandingHero