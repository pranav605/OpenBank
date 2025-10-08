import React from 'react'
import { motion } from 'motion/react'
import { BriefcaseIcon, LightBulbIcon, PresentationChartBarIcon, ScaleIcon } from '@heroicons/react/24/outline';


const CareersBenefits = () => {
    const data = [
        {
            id: 1,
            title: 'Competitive Compensation',
            icon: <PresentationChartBarIcon className='accent-text h-8 w-8'/>,
            content: 'We provide a competitive salary package that recognizes the skills and expertise of our employees. OpenBank believes in rewarding exceptional performance and offering opportunities for financial growth.',
        },
        {
            id: 2,
            title: 'Health and Wellness',
            icon: <LightBulbIcon className='accent-text h-8 w-8'/>,
            content: 'We prioritize the health and well-being of our employees by providing comprehensive medical, dental, and vision insurance plans. We also offer wellness programs, gym memberships, and resources to support a healthy lifestyle.',
        },
        {
            id: 3,
            title: 'Retirement Planning',
            icon:<BriefcaseIcon className='accent-text h-8 w-8'/>,
            content: 'OpenBank is committed to helping employees plan for their future. We offer a retirement savings plan with a generous employer match to help them build a secure financial foundation for the long term.',
        },
        {
            id: 4,
            title: 'Work-Life Balance',
            icon: <ScaleIcon className='accent-text h-8 w-8'/>,
            content: 'We understand the importance of maintaining a healthy work-life balance. OpenBank offers flexible work arrangements, paid time off, parental leave, and other programs that support employees in managing their personal and professional commitments.',
        }
    ]
    return (
        <div className='flex text-center justify-center items-center md:text-start md:justify-start md:items-start flex-col w-full max-w-5xl my-16 md:p-0 p-2'>
            <motion.h2 className="text-white text-3xl/10 font-medium">
                Our <motion.span className='accent-text'>Benefits</motion.span>
            </motion.h2>
            <motion.p className='text-sm font-light text-neutral-400 pt-4'>
                At OpenBank, our values form the foundation of our organization and guide our actions. We believe in upholding the highest standards of integrity, delivering exceptional service, and embracing innovation. These values define our culture and shape the way we work together to achieve our goals.
            </motion.p>
            <div className='flex flex-col md:flex-row gap-12 w-full mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 bg-neutral-900  rounded-md py-8 md:max-w-full w-full'>
                    {data.map((obj, idx) => {
                        return (
                            <div key={obj.id} className='flex flex-col items-start gap-4 justify-start rounded-md border border-neutral-700 bg-neutral-900 p-8'>
                                <div className= "flex flex-row items-center gap-4 w-full">
                                    <motion.div className='h-16 w-16 flex items-center justify-center rounded-full dark-accent-bg '>
                                        {obj.icon}
                                    </motion.div>
                                    <motion.h2 className='text-xl text-white font-normal'>{obj.title}</motion.h2>
                                </div>
                                <motion.p className="text-neutral-400 text-xs text-start font-normal">
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

export default CareersBenefits