import { PlusIcon } from '@heroicons/react/24/solid'
import React from 'react'
import {motion} from 'motion/react'
const FloatingCard = () => {
    return (
        <div className='h-16 w-36 dark-accent-bg flex flex-row  gap-2 justify-center items-center rounded-md'>
            <div className='accent-bg h-8 w-8 flex items-center justify-center rounded-4xl'>
                <PlusIcon height={20} width={20} className='text-neutral-900' />
            </div>
            <div className='flex flex-col'>
                <motion.p className='font-normal text-sm'>+ $5,000</motion.p>
                <motion.p className='font-light text-xs'>Monthly Income</motion.p>
            </div>
        </div>
    )
}

export default FloatingCard