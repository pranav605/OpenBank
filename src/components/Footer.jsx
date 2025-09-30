import React from 'react'
import { motion } from 'motion/react'
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'

const Footer = () => {
    return (
        <div className='flex flex-col bg-neutral-800/50 gap-8 justify-center items-center'>
            <motion.div className='flex flex-row pt-6 justify-center items-center gap-1'>
                <motion.img
                    src='/assets/logo.png'
                    height={12}
                    width={24}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                ></motion.img>
                <motion.p className='text-sm font-normal text-white'>OpenBank</motion.p>
            </motion.div>
            <motion.div className='flex flex-row gap-2 text-sm font-light text-white/90'>
                <motion.a href='/' className='cursor-pointer'>Home</motion.a>
                <motion.a href='/careers' className='cursor-pointer'>Careers</motion.a>
                <motion.a href='/about' className='cursor-pointer'>About</motion.a>
                <motion.a href='/security' className='cursor-pointer'>Security</motion.a>
            </motion.div>
            <motion.div className='flex flex-col md:flex-row gap-2 justify-center items-center mb-8'>
                <motion.a href='mailto:saipranavnishtala@gmail.com' className='cursor-pointer flex flex-row items-center gap-1 text-white/90 text-sm'>
                    <EnvelopeIcon height={12} width={12} fill='#CAFF33' /> saipranavnishtala@gmail.com
                </motion.a>
                <motion.a href='tel:1234567890' className='cursor-pointer flex flex-row items-center gap-1 text-white/90 text-sm'>
                    <PhoneIcon height={12} width={12} fill='#CAFF33' /> +1 1234567890
                </motion.a>
                <motion.span className='cursor-pointer flex flex-row items-center gap-1 text-white/90 text-sm'>
                    <MapPinIcon height={12} width={12} fill='#CAFF33' /> Canada
                </motion.span>
            </motion.div>
            <motion.div className='hidden md:flex flex-row w-4/5 justify-center items-center bg-neutral-900 p-4 rounded-full border border-neutral-700 mb-4'>
                <motion.div className='flex flex-row justify-between w-full items-center'>
                    <motion.div className='flex flex-row items-center gap-2'>
                        <motion.a className='w-8 h-8 rounded-4xl accent-bg text-black flex gap-2 items-center justify-center'>
                            <motion.img src='/assets/x.png' alt='Link to X' height={20} width={20}></motion.img>
                        </motion.a>
                        <motion.a className='w-8 h-8 rounded-4xl accent-bg text-black flex gap-2 items-center justify-center'>
                            <motion.img src='/assets/linkedin.png' alt='Link to linkedin' height={20} width={20}></motion.img>
                        </motion.a>
                        <motion.a className='w-8 h-8 rounded-4xl accent-bg text-black flex gap-2 items-center justify-center'>
                            <motion.img src='/assets/instagram.png' alt='Link to instagram' height={20} width={20}></motion.img>
                        </motion.a>
                    </motion.div>
                    <motion.p className='text-white/90 text-sm font-light'>OpenBank, develped by Sai Pranav Nishtala</motion.p>
                    <motion.div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-white/50">
                        <motion.a
                            href="#"
                            className="px-3 py-2 text-white/90 text-sm font-light hover:text-white"
                        >
                            Privacy Policy
                        </motion.a>
                        <motion.a
                            href="#"
                            className="px-3 py-2 text-white/90 text-sm font-light hover:text-white"
                        >
                            Terms and Conditions
                        </motion.a>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Footer