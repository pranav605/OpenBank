import React, { useState } from 'react';
import { motion } from 'motion/react'
import { ChevronLeftIcon, ChevronRightIcon, BanknotesIcon, CogIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

// --- MOCK DATA ---
const cardData_ind = [
    { id: 1, name: 'John D', content: 'I recently started my own business, and OpenBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.' },
    { id: 2, name: 'Jane D',  content: 'Seamless integration with Apple Pay and Google Pay for quick transactions.', },
    { id: 3, name: 'Jim D',  content: 'Flexible repayment terms and competitive rates for personal and business loans.' },
    { id: 4, name: 'Julie D', content: 'Diversified portfolios managed by experts, tailored to your risk tolerance.' },
    { id: 5, name: 'Jack D',  content: 'Dedicated business accounts with expense tracking and invoicing features.' },
    { id: 6, name: 'Jill D',  content: 'Send and receive money internationally with low fees and excellent exchange rates.' },
];

const cardData_bus = [
    { id: 11, name: 'Acme Corp', content: 'I recently started my own business, and OpenBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.' },
    { id: 12, name: 'StartupX', content: 'Seamless integration with Apple Pay and Google Pay for quick transactions.', },
    { id: 13, name: 'Global Traders', content: 'Flexible repayment terms and competitive rates for personal and business loans.' },
    { id: 14, name: 'BrightFuture Inc.', content: 'Diversified portfolios managed by experts, tailored to your risk tolerance.' },
    { id: 15, name: 'JumpStart', content: 'Diversified portfolios managed by experts, tailored to your risk tolerance.' },
    { id: 16, name: 'JustinTime', content: 'Diversified portfolios managed by experts, tailored to your risk tolerance.' },
];


// --- HELPER COMPONENTS ---

const CarouselCard = ({ data, isCenter, style, cardData }) => {

    return (
        <motion.div
            style={style} // Apply motion styles (x, scale, opacity)
            className={`
                absolute w-72 h-80 rounded-2xl p-6 shadow-xl 
                bg-neutral-900 flex flex-col justify-between items-center transition-all duration-300
            `}
        >
            <div className="flex items-center justify-center w-full mb-6">

                {/* Left side line */}
                <div className="flex-grow border-t border-neutral-700/50 mr-4"></div>

                {/* Image block (centered) */}
                <div className={`p-3 rounded-xl w-fit bg-neutral-900`}>
                    <motion.img height={32} width={32} src='/assets/quotes.png' alt='Quotes image' />
                </div>

                {/* Right side line */}
                <div className="flex-grow border-t border-neutral-700/50 ml-4"></div>
            </div>
            <div>
                <p className={`text-sm font-light text-center ${isCenter ? 'text-neutral-200' : 'text-neutral-400'}`}>
                    {data.content}
                </p>
            </div>
            <button className={`mt-4 py-2 text-sm font-semibold accent-text rounded-lg transition duration-300`}
            >
                {data.name}
            </button>
        </motion.div>
    );
};

// --- MAIN CAROUSEL COMPONENT ---

const HorizontalCarousel = ({cardData, initialIndex}) => {
    const [activeIndex, setActiveIndex] = useState(initialIndex);
    const totalCards = cardData.length;

    // Constants for positioning (adjust these for layout)
    const CARD_OFFSET = 300; // px distance between cards visually

    const goToNext = () => {
        setActiveIndex((prev) => (prev + 1) % totalCards);
    };

    const goToPrev = () => {
        setActiveIndex((prev) => (prev - 1 + totalCards) % totalCards);
    };

    // Calculate indices for circular navigation
    const prevIndex = (activeIndex - 1 + totalCards) % totalCards;
    const nextIndex = (activeIndex + 1) % totalCards;

    // Variants map the visual state name ('center', 'left', 'right', 'out') to motion properties
    const cardVariants = {
        center: { x: 0, scale: 1, opacity: 1, zIndex: 10, filter: 'blur(0px)' },
        left: { x: -CARD_OFFSET, scale: 0.85, opacity: 0.4, zIndex: 5, filter: 'blur(2px)' },
        right: { x: CARD_OFFSET, scale: 0.85, opacity: 0.4, zIndex: 5, filter: 'blur(2px)' },
        // Position far off-screen and fully hidden
        out: { x: 0, scale: 0.5, opacity: 0, zIndex: 0, filter: 'blur(4px)' }
    };

    return (
        <div className="bg-neutral-900 flex flex-col items-center justify-center p-4 font-sans">

            <div className="relative w-full max-w-4xl flex items-center justify-center">

                {/* Navigation Buttons */}
                <div className="hidden absolute inset-y-0 w-full md:flex justify-between items-center z-20 pointer-events-none">
                    <button
                        onClick={goToPrev}
                        className="p-3 bg-neutral-700/50 hover:bg-neutral-700 rounded-full shadow-lg transition duration-300 pointer-events-auto backdrop-blur-sm -ml-8"
                    >
                        <ChevronLeftIcon className="w-6 h-6 text-white" />
                    </button>
                    <button
                        onClick={goToNext}
                        className="p-3 bg-neutral-700/50 hover:bg-neutral-700 rounded-full shadow-lg transition duration-300 pointer-events-auto backdrop-blur-sm -mr-8"
                    >
                        <ChevronRightIcon className="w-6 h-6 text-white" />
                    </button>
                </div>

                {/* Carousel Track: Fixed height to prevent content jump */}
                <div className="relative h-96 w-full flex justify-center items-center overflow-hidden">
                    {cardData.map((card, i) => {
                        let styleKey = 'out'; // Default state is hidden

                        if (i === activeIndex) {
                            styleKey = 'center';
                        } else if (i === prevIndex) {
                            styleKey = 'left';
                        } else if (i === nextIndex) {
                            styleKey = 'right';
                        }

                        // We need a custom logic to handle two cards away
                        // This makes the transition cleaner when cycling
                        const diff = Math.abs(i - activeIndex);
                        if (diff > 1 && diff < totalCards - 1) {
                            styleKey = 'out';
                        }

                        return (
                            <CarouselCard
                                key={card.id}
                                data={card}
                                isCenter={i === activeIndex}
                                // Apply the calculated motion properties from the variants object
                                style={cardVariants[styleKey]}
                                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                            />
                        );
                    })}
                </div>
            </div>
            <div className="inset-y-0 w-full gap-2 flex md:hidden justify-center items-center z-20 pointer-events-none">
                <button
                    onClick={goToPrev}
                    className="p-3 bg-neutral-700/50 hover:bg-neutral-700 rounded-full shadow-lg transition duration-300 pointer-events-auto backdrop-blur-sm -ml-8"
                >
                    <ChevronLeftIcon className="w-6 h-6 text-white" />
                </button>
                <button
                    onClick={goToNext}
                    className="p-3 bg-neutral-700/50 hover:bg-neutral-700 rounded-full shadow-lg transition duration-300 pointer-events-auto backdrop-blur-sm -mr-8"
                >
                    <ChevronRightIcon className="w-6 h-6 text-white" />
                </button>
            </div>
        </div>
    );
};

const LandingTestimonials = () => {
    const [activeTab, setActiveTab] = useState('ind')
    return (
        <div className='flex flex-col my-16 text-white w-full max-w-5xl mx-auto md:p-0 p-2'>
            <div className='flex flex-col md:flex-row justify-center items-center text-center gap-8 md:text-start md:justify-between md:items-end w-full'>
                <div className='flex flex-2/3 flex-col gap-4'>
                    <motion.h1 className='text-white text-3xl/10 font-medium'>
                        Our <motion.span className='accent-text'>Testimonials</motion.span>
                    </motion.h1>
                    <motion.p className='text-sm font-light text-neutral-400'>
                        Discover how OpenBank has transformed lives with innovative digital solutions and personalized customer service. See why our clients trust us for a secure and prosperous financial journey
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
                                layoutId='testimonials'
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
                                layoutId='testimonials'
                                className='absolute inset-0 z-10 accent-bg mix-blend-difference'
                                style={{ borderRadius: 9999 }}
                                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        For Businesses
                    </button>
                </div>
            </div>
            {activeTab === 'ind' ? 
            <HorizontalCarousel cardData={cardData_ind} initialIndex={0}/>
            : 
            <HorizontalCarousel cardData={cardData_bus} initialIndex={10}/>
            }
        </div>
    )
}

export default LandingTestimonials