import React from 'react'
import { motion } from 'motion/react';

const AboutPress = () => {
    const data = [
        {
            id: 1,
            imageURL: '/assets/p-1.png',
            title: 'OpenBank Launches New Rewards Program to Enhance Customer Loyalty and Satisfaction',
            location: 'India',
            date: '06/11/2025',
            description: 'OpenBank is pleased to announce the introduction of our new Rewards Program, aimed at rewarding our loyal customers and enhancing their banking experience. The program offers exclusive benefits, discounts, and personalized offers tailored to individual customer preferences. With this initiative, OpenBank reaffirms its commitment to delivering exceptional value and building lasting relationships with our valued customers.'
        },
        {
            id: 2,
            imageURL: '/assets/p-2.png',
            title: 'OpenBank Launches New Rewards Program to Enhance Customer Loyalty and Satisfaction',
            location: 'India',
            date: '06/11/2025',
            description: 'OpenBank is pleased to announce the introduction of our new Rewards Program, aimed at rewarding our loyal customers and enhancing their banking experience. The program offers exclusive benefits, discounts, and personalized offers tailored to individual customer preferences. With this initiative, OpenBank reaffirms its commitment to delivering exceptional value and building lasting relationships with our valued customers.'
        },
        {
            id: 3,
            imageURL: '/assets/p-3.png',
            title: 'OpenBank Launches New Rewards Program to Enhance Customer Loyalty and Satisfaction',
            location: 'India',
            date: '06/11/2025',
            description: 'OpenBank is pleased to announce the introduction of our new Rewards Program, aimed at rewarding our loyal customers and enhancing their banking experience. The program offers exclusive benefits, discounts, and personalized offers tailored to individual customer preferences. With this initiative, OpenBank reaffirms its commitment to delivering exceptional value and building lasting relationships with our valued customers.'
        },
        {
            id: 4,
            imageURL: '/assets/p-4.png',
            title: 'OpenBank Launches New Rewards Program to Enhance Customer Loyalty and Satisfaction',
            location: 'India',
            date: '06/11/2025',
            description: 'OpenBank is pleased to announce the introduction of our new Rewards Program, aimed at rewarding our loyal customers and enhancing their banking experience. The program offers exclusive benefits, discounts, and personalized offers tailored to individual customer preferences. With this initiative, OpenBank reaffirms its commitment to delivering exceptional value and building lasting relationships with our valued customers.'
        },
    ]
    return (
        <div className='flex text-center justify-center items-center md:text-start md:justify-start md:items-start flex-col w-full max-w-5xl my-16 md:p-0 p-2'>
            <motion.h2 className="accent-text text-3xl/10 font-medium">
                Press Releases
            </motion.h2>
            <motion.p className='text-sm font-light text-neutral-400 pt-4'>
                Stay updated with the latest happenings and exciting developments at OpenBank through our press releases.
            </motion.p>
            <div className='flex flex-col justify-center items-center w-full mt-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 bg-neutral-900 w-full border border-neutral-800 rounded-md'>
                    {data.map((obj, idx) => {
                        return (
                            <div key={obj.id} className='flex flex-col items-start gap-4 justify-start p-8'>
                                <motion.img src={obj.imageURL} alt='image in a grid'></motion.img>
                                <div className="flex flex-row items-center gap-4 w-full">
                                    <motion.h2 className='text-xl text-white font-normal'>{obj.title}</motion.h2>
                                </div>
                                <div className='flex flex-row gap-4 w-full'>
                                    <div className='p-2 rounded-full bg-neutral-800 border border-neutral-800 text-neutral-400 text-xs'>
                                        Location: <motion.span>{obj.location}</motion.span>
                                    </div>
                                    <div className='p-2 rounded-full bg-neutral-800 border border-neutral-800 text-neutral-400 text-xs'>
                                        Date: <motion.span>{obj.date}</motion.span>
                                    </div>
                                </div>
                                <motion.p className="text-neutral-400 text-sm text-start font-normal">
                                    {obj.description}
                                </motion.p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default AboutPress