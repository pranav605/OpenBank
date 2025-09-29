import React, { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ArchiveBoxArrowDownIcon, BanknotesIcon, BriefcaseIcon } from '@heroicons/react/24/solid';

const LandingProducts = () => {
    const [activeTab, setActiveTab] = useState('ind');
    return (
        <div className='flex flex-col my-16 text-white w-full max-w-5xl mx-auto md:p-0 p-2'>
            <div className='flex flex-col md:flex-row justify-center items-center text-center gap-8 md:text-start md:justify-between md:items-end w-full'>
                <div className='flex flex-col gap-4'>
                    <motion.h1 className='text-white text-3xl/10 font-medium'>
                        Our <motion.span className='accent-text'>Products</motion.span>
                    </motion.h1>
                    <motion.p className='text-sm font-light text-neutral-400'>
                        Discover a range of comprehensive and customizable banking products at OpenBank, designed to suit your<br /> unique financial needs and aspirations
                    </motion.p>
                </div>
                <div className='flex flex-row space-x-1 h-16 p-2 dark-accent-bg rounded-full '>
                    <button
                        className='relative rounded-full px-3 py-1.5 text-sm font-medium text-white transition focus-visible:outline-2'
                        style={{
                            WebkitTapHighlightColor: "transparent",
                        }}
                        onClick={() => setActiveTab('ind')}
                    >
                        {activeTab === 'ind' && (
                            <motion.span
                                layoutId='bubble'
                                className='absolute inset-0 z-10 accent-bg mix-blend-difference'
                                style={{ borderRadius: 9999 }}
                                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        For Individuals
                    </button>
                    <button
                        className='relative rounded-full px-3 py-1.5 text-sm font-medium text-whitetransition focus-visible:outline-2'
                        style={{
                            WebkitTapHighlightColor: "transparent",
                        }}
                        onClick={() => setActiveTab('bus')}
                    >
                        {activeTab === 'bus' && (
                            <motion.span
                                layoutId='bubble'
                                className='absolute inset-0 z-10 accent-bg mix-blend-difference'
                                style={{ borderRadius: 9999 }}
                                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        For Businesses
                    </button>
                </div>
            </div>
            <AnimatePresence mode='wait'>
                {activeTab === 'ind' ? (
                    <motion.div
                        key="ind-cards"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }} className='flex flex-col md:flex-row space-x-1 mt-16 divide-y md:divide-y-0 md:divide-x divide-neutral-800'>
                        <div className='flex flex-col flex-1/3 justify-center items-center gap-2 md:px-6 p-6'>
                            <div className='h-16 w-16 dark-accent-bg flex justify-center items-center rounded-full'>
                                <BriefcaseIcon hanging={24} width={24} fill='#CAFF33' />
                            </div>
                            <motion.p className='text-lg font-normal'>
                                Checking Accounts
                            </motion.p>
                            <motion.p className='text-sm font-light text-center text-neutral-400'>
                                Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access.
                            </motion.p>
                        </div>
                        <div className='flex flex-col flex-1/3 justify-center items-center gap-2 md:px-6 p-6'>
                            <div className='h-16 w-16 dark-accent-bg flex justify-center items-center rounded-full'>
                                <ArchiveBoxArrowDownIcon hanging={24} width={24} fill='#CAFF33' />
                            </div>
                            <motion.p className='text-lg font-normal'>
                                Savings Accounts
                            </motion.p>
                            <motion.p className='text-sm font-light text-center text-neutral-400'>
                                Build your savings with our competitive interest rates and flexible savings account options. Whether you're saving for a specific goal or want to grow your wealth over time, we have the right account for you.
                            </motion.p>
                        </div>
                        <div className='flex flex-col flex-1/3 justify-center items-center gap-2 md:px-6 p-6'>
                            <div className='h-16 w-16 dark-accent-bg flex justify-center items-center rounded-full'>
                                <BanknotesIcon hanging={24} width={24} fill='#CAFF33' />
                            </div>
                            <motion.p className='text-lg font-normal'>
                                Loans and Mortgages
                            </motion.p>
                            <motion.p className='text-sm font-light text-center text-neutral-400'>
                                Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need.
                            </motion.p>
                        </div>
                    </motion.div>
                )
                    :
                    (
                        <motion.div
                            key="bus-cards"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }} className='flex flex-col md:flex-row space-x-1 mt-16 divide-y md:divide-y-0 md:divide-x divide-neutral-800'>
                            <div className='flex flex-col flex-1/3 justify-center items-center gap-2 md:px-6 p-6'>
                                <div className='h-16 w-16 dark-accent-bg flex justify-center items-center rounded-full'>
                                    <BriefcaseIcon hanging={24} width={24} fill='#CAFF33' />
                                </div>
                                <motion.p className='text-lg font-normal'>
                                    Business Accounts
                                </motion.p>
                                <motion.p className='text-sm font-light text-center text-neutral-400'>
                                    Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access.
                                </motion.p>
                            </div>
                            <div className='flex flex-col flex-1/3 justify-center items-center gap-2 md:px-6 p-6'>
                                <div className='h-16 w-16 dark-accent-bg flex justify-center items-center rounded-full'>
                                    <ArchiveBoxArrowDownIcon hanging={24} width={24} fill='#CAFF33' />
                                </div>
                                <motion.p className='text-lg font-normal'>
                                    Tax Accounts
                                </motion.p>
                                <motion.p className='text-sm font-light text-center text-neutral-400'>
                                    Build your savings with our competitive interest rates and flexible savings account options. Whether you're saving for a specific goal or want to grow your wealth over time, we have the right account for you.
                                </motion.p>
                            </div>
                            <div className='flex flex-col flex-1/3 justify-center items-center gap-2 md:px-6 p-6'>
                                <div className='h-16 w-16 dark-accent-bg flex justify-center items-center rounded-full'>
                                    <BanknotesIcon hanging={24} width={24} fill='#CAFF33' />
                                </div>
                                <motion.p className='text-lg font-normal'>
                                    Loans and Mortgages
                                </motion.p>
                                <motion.p className='text-sm font-light text-center text-neutral-400'>
                                    Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need.
                                </motion.p>
                            </div>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </div>
    )
}

export default LandingProducts