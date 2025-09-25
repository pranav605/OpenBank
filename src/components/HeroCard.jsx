import React from 'react'
import { motion } from 'motion/react'
import { ArrowsRightLeftIcon } from '@heroicons/react/24/solid'
import FloatingCard from './FloatingCard'
const HeroCard = () => {
    return (
        <div className="relative p-6 flex flex-col gap-2 bg-[linear-gradient(214.85deg,_rgba(26,26,26,0)_0%,_#1A1A1A_39.72%)] min-w-80 min-h-96 border border-neutral-800 rounded-md ">
            <motion.div className='absolute top-0 left-0 -translate-x-1/2 -translate-y-10'>
                <FloatingCard/>
            </motion.div>
            <div className='flex flex-col gap-2 rounded-md'>
                <motion.h3 className='text-sm font-medium'>Your Transactions</motion.h3>
                <div className='flex flex-col justify-center items-center gap-2 m-auto'>
                    <div className='box-border
                    flex flex-row justify-between items-center
                    p-[8.2px_12.3px]
                    gap-[51.28px]
                    w-[264.43px] h-[45.41px]
                    bg-[#1C1C1C]
                    border border-[#262626]
                    rounded-[6.15px]
                    flex-none order-0 self-stretch grow-0
                    z-[2]
                    mb-[-10px]'>
                        <div className='flex flex-row gap-2 justify-center items-center'>
                            <div className='w-[24px] h-[24px] rounded-4xl accent-bg text-black flex gap-2 items-center justify-center'>
                                <ArrowsRightLeftIcon height={12} width={12} />
                            </div>
                            <div className='flex flex-col justify-between'>
                                <motion.p className='text-xs font-light'>Transaction</motion.p>
                                <motion.p className='text-sm font-normal'>Joel Kenley</motion.p>
                            </div>
                        </div>
                        <motion.h2 className='text-sm font-medium'>-$68.00</motion.h2>
                    </div>
                    <div className='
                        flex flex-row justify-between items-end
                        p-[8.205px_12.308px]
                        gap-[51.28px]
                        w-[243.91px] h-[45.41px]
                        bg-[#1C1C1C]
                        border border-[#262626]
                        rounded-[6.154px]
                        mb-[-10px]
                        opacity-90
                        z-[1]'>
                        <div className='flex flex-row gap-2 justify-center items-center'>
                            <div className='w-[24px] h-[24px] rounded-4xl accent-bg text-black flex gap-2 items-center justify-center'>
                                <ArrowsRightLeftIcon height={12} width={12} />
                            </div>
                            <div className='flex flex-col justify-between'>
                                <motion.p className='text-xs font-light'>Transaction</motion.p>
                                <motion.p className='text-sm font-normal'>Joel Kenley</motion.p>
                            </div>
                        </div>
                        <motion.h2 className='text-sm font-medium'>-$68.00</motion.h2>
                    </div>
                    <div className='
                        flex flex-row justify-between items-end
                        p-[8.205px_12.308px]
                        w-[222.91px] h-[45.41px]
                        bg-[#1C1C1C]
                        border border-[#262626]
                        rounded-[6.154px]
                        m-[-5px]
                        opacity-50'>
                        <div className='flex flex-row gap-2 justify-center items-center'>
                            <div className='w-[24px] h-[24px] rounded-4xl accent-bg text-black flex gap-2 items-center justify-center'>
                                <ArrowsRightLeftIcon height={12} width={12} />
                            </div>
                            <div className='flex flex-col justify-between'>
                                <motion.p className='text-xs font-light'>Transaction</motion.p>
                                <motion.p className='text-sm font-normal'>Joel Kenley</motion.p>
                            </div>
                        </div>
                        <motion.h2 className='text-sm font-medium'>-$68.00</motion.h2>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-2 mt-2'>
                <motion.h3 className='text-sm font-medium'>Money Exchange</motion.h3>
                <div className='grid grid-cols-2 grid-rows-2 bg-neutral-900 border border-neutral-800'>
                    <div className='flex flex-col p-4 justify-between border-r border-b border-neutral-800'>
                        <motion.p className='font-normal text-xs'>IND</motion.p>
                        <motion.p className='font-light text-xs'>Indian Rupees</motion.p>
                    </div>
                    <div className='flex flex-col p-4 justify-between border-b border-neutral-800'>
                        <motion.p className='font-normal text-xs'>USD</motion.p>
                        <motion.p className='font-light text-xs'>Unites States Dollar</motion.p>
                    </div>
                    <div className='flex flex-col p-4 justify-between border-r border-neutral-800'>
                        <motion.p className='font-medium text-xs'>50,000</motion.p>
                    </div>
                    <div className='flex flex-col p-4 justify-between'>
                        <motion.p className='font-medium text-xs'>563.20</motion.p>
                    </div>
                </div>
                <motion.button className='w-full py-2 accent-text dark-accent-bg text-sm rounded-4xl mt-4'>Exchange</motion.button>
            </div>

        </div>

    )
}

export default HeroCard