import { BanknotesIcon, BookOpenIcon, BuildingLibraryIcon, BuildingOffice2Icon, CurrencyDollarIcon, PresentationChartBarIcon } from '@heroicons/react/24/solid'
import { motion } from 'motion/react'
import React from 'react'


const LandingUseCases = () => {
    return (
        <div className='flex text-center justify-center items-center md:text-start md:justify-start md:items-start flex-col w-full max-w-5xl'>
            <motion.h2 className="accent-text text-3xl/10 font-medium">
                Use Cases
            </motion.h2>
            <motion.p className='text-sm font-light text-neutral-400 pt-4'>
                At OpenBank, we cater to the diverse needs of individuals and businesses alike, offering a wide range of financial solutions
            </motion.p>
            <div className='flex flex-col md:flex-row gap-12 w-full mx-auto'>
                <div className='flex-1/2 justify-center items-center mt-8'>
                    <div className='grid grid-cols-2 gap-4 bg-neutral-900 border border-neutral-800 rounded-md p-8 md:max-w-full'>
                        <div className='flex flex-col items-center justify-center text-center border border-neutral-800 rounded-md p-6'>
                            <div className="h-16 w-16 flex items-center justify-center rounded-full dark-accent-bg">
                                <BanknotesIcon className="h-8 w-8 accent-text" />
                            </div>
                            <motion.p className="text-white text-lg font-medium text-center">
                                Managing Personal Finances
                            </motion.p>
                        </div>
                        <div className='flex flex-col items-center justify-center text-center border border-neutral-800 rounded-md p-6'>
                            <div className="h-16 w-16 flex items-center justify-center rounded-full dark-accent-bg ">
                                <CurrencyDollarIcon className="h-8 w-8 accent-text" />
                            </div>
                            <motion.p className="text-white text-lg font-medium text-center">
                                Saving for the Future
                            </motion.p>
                        </div>
                        <div className='flex flex-col items-center justify-center text-center border border-neutral-800 rounded-md p-6'>
                            <div className="h-16 w-16 flex items-center justify-center rounded-full dark-accent-bg ">
                                <BuildingLibraryIcon className="h-8 w-8 accent-text" />
                            </div>
                            <motion.p className="text-white text-lg font-medium text-center">
                                Homeownership
                            </motion.p>
                        </div>
                        <div className='flex flex-col items-center justify-center text-center border border-neutral-800 rounded-md p-6'>
                            <div className="h-16 w-16 flex items-center justify-center rounded-full dark-accent-bg ">
                                <BookOpenIcon className="h-8 w-8 accent-text" />
                            </div>
                            <motion.p className="text-white text-lg font-medium text-center">
                                Education Funding
                            </motion.p>
                        </div>
                    </div>
                </div>
                <div className='flex-1/2 flex flex-col justify-center items-center md:items-start gap-2 '>
                    <motion.h2 className='text-white text-xl font-medium'>
                        For Individuals
                    </motion.h2>
                    <motion.p className='text-sm font-light text-neutral-400 '>For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers</motion.p>

                    <motion.div className='flex flex-col md:flex-row justify-center items-center md:items-start'>
                        <div className='flex flex-col flex-1/3 justify-center items-center md:items-start gap-2 pl-0 p-6'>
                            <motion.p className='text-5xl font-medium accent-text'>
                                78%
                            </motion.p>
                            <motion.p className='text-sm font-light text-center md:text-start text-neutral-400'>
                                Secure Retirement Planning
                            </motion.p>
                        </div>
                        <div className='flex flex-col flex-1/3 justify-center items-center md:items-start pl-0 gap-2  p-6'>
                            <motion.p className='text-5xl font-medium accent-text'>
                                63%
                            </motion.p>
                            <motion.p className='text-sm font-light text-center md:text-start text-neutral-400'>
                                Manageable Debt Consolidation
                            </motion.p>
                        </div>
                        <div className='flex flex-col flex-1/3 justify-center items-center md:items-start gap-2 pl-0 p-6'>
                            <motion.p className='text-5xl font-medium accent-text'>
                                91%
                            </motion.p>
                            <motion.p className='text-sm font-light text-center md:text-start text-neutral-400'>
                                Reducing financial burdens
                            </motion.p>
                        </div>
                    </motion.div>
                    <motion.button className='accent-dark-bg border border-neutral-700 rounded-full text-neutral-400 py-4 px-4'>
                        Learn More
                    </motion.button>
                </div>
            </div>
            <div className='flex flex-col md:flex-row gap-12 w-full mx-auto mt-8'>
                <div className='flex-1/2 flex flex-col justify-center items-center md:items-start gap-2 '>
                    <motion.h2 className='text-white text-xl font-medium'>
                        For Business
                    </motion.h2>
                    <motion.p className='text-sm font-light text-neutral-400 '> For businesses, we empower growth with working capital solutions that optimize cash flow, and our tailored financing options fuel business expansion. Whatever your financial aspirations, OpenBank is committed to providing the right tools and support to achieve them</motion.p>

                    <motion.div className='flex flex-col md:flex-row justify-center items-center md:items-start'>
                        <div className='flex flex-col flex-1/3 justify-center items-center md:items-start gap-2 pl-0 p-6'>
                            <motion.p className='text-5xl font-medium accent-text'>
                                65%
                            </motion.p>
                            <motion.p className='text-sm font-light text-center md:text-start text-neutral-400'>
                                Cash Flow Management
                            </motion.p>
                        </div>
                        <div className='flex flex-col flex-1/3 justify-center items-center md:items-start pl-0 gap-2  p-6'>
                            <motion.p className='text-5xl font-medium accent-text'>
                                70%
                            </motion.p>
                            <motion.p className='text-sm font-light text-center md:text-start text-neutral-400'>
                                Drive Business Expansion
                            </motion.p>
                        </div>
                        <div className='flex flex-col flex-1/3 justify-center items-center md:items-start gap-2 pl-0 p-6'>
                            <motion.p className='text-5xl font-medium accent-text'>
                                45%
                            </motion.p>
                            <motion.p className='text-sm font-light text-center md:text-start text-neutral-400'>
                                Streamline payroll processing
                            </motion.p>
                        </div>
                    </motion.div>
                    <motion.button className='accent-dark-bg border border-neutral-700 rounded-full text-neutral-400 py-4 px-4'>
                        Learn More
                    </motion.button>
                </div>
                <div className='flex-1/2 justify-center items-center mt-4'>
                    <div className='grid grid-cols-2 gap-4 bg-neutral-900 border border-neutral-800 rounded-md p-8 md:max-w-full'>
                        <div className='flex flex-col items-center justify-center text-center border border-neutral-800 rounded-md p-6'>
                            <div className="h-16 w-16 flex items-center justify-center rounded-full dark-accent-bg">
                                <BuildingOffice2Icon className="h-8 w-8 accent-text" />
                            </div>
                            <motion.p className="text-white text-lg font-medium text-center">
                                Startups and Entrepreneurs
                            </motion.p>
                        </div>
                        <div className='flex flex-col items-center justify-center text-center border border-neutral-800 rounded-md p-6'>
                            <div className="h-16 w-16 flex items-center justify-center rounded-full dark-accent-bg ">
                                <BanknotesIcon className="h-8 w-8 accent-text" />
                            </div>
                            <motion.p className="text-white text-lg font-medium text-center">
                                Cash Flow Management
                            </motion.p>
                        </div>
                        <div className='flex flex-col items-center justify-center text-center border border-neutral-800 rounded-md p-6'>
                            <div className="h-16 w-16 flex items-center justify-center rounded-full dark-accent-bg ">
                                <PresentationChartBarIcon className="h-8 w-8 accent-text" />
                            </div>
                            <motion.p className="text-white text-lg font-medium text-center">
                                Business Expansion
                            </motion.p>
                        </div>
                        <div className='flex flex-col items-center justify-center text-center border border-neutral-800 rounded-md p-6'>
                            <div className="h-16 w-16 flex items-center justify-center rounded-full dark-accent-bg ">
                                <CurrencyDollarIcon className="h-8 w-8 accent-text" />
                            </div>
                            <motion.p className="text-white text-lg font-medium text-center">
                                Payment Solutions
                            </motion.p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingUseCases