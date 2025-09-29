import React, { useState } from 'react'
import { AnimatePresence, motion } from "motion/react"
import { ArrowDownIcon, ChevronDownIcon } from '@heroicons/react/24/solid';

export const faqs = [
    {
        id: 10,
        question: "How do I open an account with OpenBank?",
        answer:
            'Opening an account with OpenBank is easy. Simply visit our website and click on the "Open an Account" button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help.',
    },
    {
        id: 20,
        question: "What types of accounts does OpenBank offer?",
        answer:
            "OpenBank offers a range of accounts including savings accounts, checking accounts, business accounts, and student-friendly options. Each is designed with features to suit different financial needs.",
    },
    {
        id: 30,
        question: "How secure is online banking with OpenBank?",
        answer:
            "We use advanced encryption, multi-factor authentication, and continuous monitoring to ensure your data and funds remain secure. Our team is dedicated to protecting your privacy and safety online.",
    },
    {
        id: 40,
        question: "Can I access my account internationally?",
        answer:
            "Yes, OpenBank online and mobile banking can be accessed from anywhere in the world, as long as you have a secure internet connection. Be sure to enable travel notifications for added security.",
    },
    {
        id: 50,
        question: "Does OpenBank charge fees for money transfers?",
        answer:
            "Domestic transfers are free of charge. For international transfers, minimal fees may apply depending on the destination country and the chosen transfer method. Full details are available in our pricing guide.",
    },
    {
        id: 60,
        question: "How can I contact customer support?",
        answer:
            "You can reach our customer support team 24/7 via live chat, email, or by calling our toll-free number. We’re here to help with any questions or issues you may have.",
    },
];


const LandingFAQ = () => {
    const [showAll, setShowAll] = useState(false);
    const COLLAPSED_HEIGHT = 440; // px
    const EXPANDED_HEIGHT = 1040;

    // Calculate how many items to show initially (2 rows)
    const itemsToShow = showAll ? faqs.length : 4;
    return (
        <div className='flex relative text-center justify-center items-center md:text-start md:justify-start md:items-start flex-col w-full max-w-5xl my-16 md:p-0 p-2 gap-8'>
            <div className='flex flex-col md:justify-start md:items-start justify-center items-center md:text-start text-center'>
                <motion.h2 className="text-white text-3xl/10 font-medium">
                    <motion.span className='accent-text'>Frequently</motion.span> Asked Questions
                </motion.h2>
                <motion.p className='text-sm font-light text-neutral-400 pt-4'>
                    Still you have any questions? Contact our Team via support@openbank.com
                </motion.p>
            </div>
            <AnimatePresence mode='wait'>
                <motion.div
                    key="faq-container"
                    animate={{
                        maxHeight: showAll ? EXPANDED_HEIGHT : COLLAPSED_HEIGHT,
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="grid md:grid-cols-2 grid-cols-1 gap-4 w-full"
                    style={{
                        // 'overflow: hidden' ensures the content beyond the maxHeight is clipped.
                        overflow: 'hidden',
                    }}
                >
                    {faqs.map((d) => (
                        <QuestionCard key={d.id} q={d.question} a={d.answer} />
                    ))}
                </motion.div>

                {/* Button to toggle showing more */}
                {faqs.length > 4 && (
                    <motion.div layout className='flex flex-col w-full justify-center items-center md:text-start text-center'>
                        <button
                            className="-mt-20 px-8 py-4 border flex flex-row gap-2 items-center justify-center border-neutral-800 rounded-full bg-neutral-900 text-sm text-white text-light cursor-pointer"
                            onClick={() => setShowAll(!showAll)}
                        >
                            {showAll ? "Show Less" : "Show More"}
                            <motion.span
                                animate={{ rotate: showAll ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="flex items-center"
                            >
                                <ChevronDownIcon height={16} width={16} />
                            </motion.span>
                        </button>
                    </motion.div>

                )}
            </AnimatePresence>
        </div>
    )
}

const QuestionCard = ({ q, a }) => {
    return (
        <div className='border border-neutral-800 rounded-md p-8 flex flex-col divide divide-y-2 divide-neutral-800'>
            <p className='text-sm font-medium text-white pb-4'>{q}</p>
            <p className='text-sm font-light text-neutral-400 pt-6 '>{a}</p>
        </div>
    )
}

export default LandingFAQ