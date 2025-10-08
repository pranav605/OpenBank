import React from 'react';
import { motion } from 'motion/react'

const CareersValues = () => {
    const data = [
        {
            id: 1,
            title: 'Integrity',
            content: 'We conduct ourselves with utmost honesty, transparency, and ethical behavior. We believe in doing what is right for our customers, colleagues, and stakeholders, even when faced with difficult choices.',
        },
        {
            id: 2,
            title: 'Customer Centricity',
            content: 'Our customers are at the heart of everything we do. We are dedicated to understanding their needs, providing personalized solutions, and delivering exceptional service that exceeds expectations.',
        },
        {
            id: 3,
            title: 'Collaboration',
            content: 'We foster a collaborative and inclusive work environment, where teamwork and diversity are celebrated. By leveraging the unique strengths and perspectives of our employees, we drive innovation and achieve greater success together.',
        },
        {
            id: 4,
            title: 'Innovation',
            content: 'We embrace change and constantly seek innovative solutions to meet the evolving needs of our customers. We encourage our employees to think creatively, challenge conventions, and explore new ideas to drive the future of banking.',
        }
    ]
    return (
        <div className='flex text-center justify-center items-center md:text-start md:justify-start md:items-start flex-col w-full max-w-5xl my-16 md:p-0 p-2'>
            <motion.h2 className="text-white text-3xl/10 font-medium">
                Our <motion.span className='accent-text'>Values</motion.span>
            </motion.h2>
            <motion.p className='text-sm font-light text-neutral-400 pt-4'>
                At OpenBank, we value our employees and are dedicated to their well-being and success. We offer a comprehensive range of benefits designed to support their personal and professional growth.
            </motion.p>
            <div className='flex flex-col md:flex-row gap-12 w-full mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 bg-neutral-900  rounded-md py-8 md:max-w-full w-full'>
                    {data.map((obj, idx) => {
                        return (
                            <div key={obj.id} className='flex flex-col items-start justify-start border-l border-lime-400 p-6'>
                                <div className="h-16 flex w-full">
                                    <motion.h2 className='text-4xl text-neutral-600 font-medium'>{obj.title}</motion.h2>
                                </div>
                                <motion.p className="text-neutral-400 text-xs font-normal">
                                    {obj.content}
                                </motion.p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default CareersValues