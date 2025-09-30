import React from 'react'
import { motion } from "motion/react"
// --- DOT PATTERN DEFINITIONS ---
// Inline SVG for the repeating dot pattern background (1x1 transparent dot)
const DOT_PATTERN_SVG = `
    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8">
        <rect width="8" height="8" fill="rgba(0,0,0,0)" />
        <circle cx="4" cy="4" r="0.5" fill="#4B5563" />
    </svg>
`.trim();

// Convert the SVG to a CSS background URL format
const DOT_PATTERN_URL = `url("data:image/svg+xml;base64,${btoa(DOT_PATTERN_SVG)}")`;
// --- END DOT PATTERN DEFINITIONS ---
const LandingBannerCard = () => {
    return (
        <div className='flex relative text-center justify-center items-center md:text-start md:justify-start md:items-start flex-col w-full max-w-5xl mb-16 md:p-0 p-2 gap-8'>
            <div className='flex flex-col md:flex-row md:justify-start md:items-center justify-center items-center text-center md:text-start border border-neutral-800 rounded-md p-8'>
                 <div
                    className="absolute top-0 left-0 w-full h-full rounded-tl-xl pointer-events-none"
                    style={{
                        backgroundImage: DOT_PATTERN_URL,
                        backgroundSize: '8px 8px',
                        opacity: 0.3, // Adjust opacity for desired subtlety
                    }}
                />
                <div className='flex flex-2/3 flex-col gap-4'>
                    <motion.h1 className='text-white text-2xl/10 font-medium'>
                        Start your financial journey with <motion.span className='accent-text'>OpenBank today!</motion.span>
                    </motion.h1>
                    <motion.p className='text-sm font-light text-neutral-400'>
                        Ready to take control of your finances? Join OpenBank now, and let us help you achieve your financial goals with our tailored solutions and exceptional customer service
                    </motion.p>
                </div>
                <div className='flex flex-1/3 justify-end'>
                    <motion.button className='accent-bg text-black py-4 px-6 mt-4 rounded-4xl'>
                        Open Account
                    </motion.button>
                </div>
            </div>
        </div>
    )
}

export default LandingBannerCard