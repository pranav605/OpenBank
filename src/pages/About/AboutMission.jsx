import { BanknotesIcon, BookOpenIcon, BuildingLibraryIcon, BuildingOffice2Icon, CurrencyDollarIcon, PresentationChartBarIcon } from '@heroicons/react/24/solid'
import { motion } from 'motion/react'
import React from 'react'


const AboutMission = () => {
    return (
        <div className='flex text-center justify-center items-center md:text-start md:justify-start md:items-start flex-col w-full max-w-5xl my-16 md:p-0 p-2'>
            <motion.h2 className="accent-text text-3xl/10 font-medium">
                Mission and Vision
            </motion.h2>
            <motion.p className='text-sm font-light text-neutral-400 pt-4'>
                We envision being a leading force in the industry, driven by innovation, integrity, and inclusivity, creating a brighter financial future for individuals and businesses while maintaining a strong commitment to customer satisfaction and community development
            </motion.p>
            <div className='flex flex-col md:flex-row gap-12 w-full mx-auto p-4 md:p-0'>
                <div className='flex md:flex-1/2 justify-center w-full items-center mt-8 p-8 md:border-0 border-b border-lime-400'>
                    <motion.img src='/assets/plant.png' alt='image of a plant' ></motion.img>
                </div>
                <div className='flex-1/2 flex flex-col justify-center items-center md:items-start gap-2 '>
                    <div className='md:border-l md:border-lime-400 p-4'>
                        <motion.h2 className='text-white text-xl font-medium'>
                            Mission
                        </motion.h2>
                        <motion.p className='text-sm font-light text-neutral-400 '>At OpenBank, our mission is to empower our customers to achieve financial success. We are dedicated to delivering innovative banking solutions that cater to their unique needs. Through personalized services, expert guidance, and cutting-edge technology, we aim to build strong, lasting relationships with our customers. Our mission is to be their trusted partner, helping them navigate their financial journey and realize their dreams.</motion.p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col-reverse md:flex-row gap-12 w-full mx-auto mt-8 p-4 md:p-0'>
                <div className='flex-1/2 flex flex-col justify-center items-center md:items-start gap-2 '>
                    <div className='md:border-r md:border-lime-400 p-4'>

                        <motion.h2 className='text-white text-xl font-medium'>
                            Vision
                        </motion.h2>
                        <motion.p className='text-sm font-light text-neutral-400 '> Our vision at OpenBank is to redefine banking by creating a seamless and personalized experience for our customers. We envision a future where banking is accessible, transparent, and tailored to individual preferences. Through continuous innovation and collaboration, we strive to be at the forefront of the industry, setting new standards for customer-centric banking. Our vision is to be the preferred financial institution, known for our unwavering commitment to excellence, trust, and customer satisfaction.</motion.p>
                    </div>
                </div>
                <div className='md:flex-1/2 flex justify-center items-center mt-4 p-8 md:border-0 border-b border-lime-400  '>
                    <motion.img src='/assets/eye.png' alt='image of an eye'></motion.img>
                </div>
            </div>
        </div>
    )
}

export default AboutMission