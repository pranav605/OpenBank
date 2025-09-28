import React, { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
const LandingFeatures = () => {
    const [activeTab, setActiveTab] = useState('Online Banking');
    const categories = ["Online Banking", "Financial Tools", "Customer Support"]
    return (
        <div className='flex flex-col md:max-w-5xl mx-auto gap-8'>
            <div className='flex flex-col md:justify-start md:items-start justify-center items-center md:text-start text-center'>
                <motion.h2 className="accent-text text-3xl/10 font-medium">
                    <motion.span className='text-white'>Our</motion.span> Features
                </motion.h2>
                <motion.p className='text-sm font-light text-neutral-400 pt-4'>
                    Experience a host of powerful features at OpenBank, including seamless online banking, secure transactions, and personalized financial insights, all designed to enhance your banking experience
                </motion.p>
            </div>
            <div className='flex flex-col md:flex-row gap-8'>
                <div className='h-fit flex flex-1/5 flex-col bg-neutral-900 border border-neutral-800 rounded-md gap-4 p-4'>
                    {categories.map((v, i) => {
                        return (
                            <motion.button
                                key={i}
                                className={`relative rounded-full px-4 py-4 text-sm text-white font-light transition focus-visible:outline-2 border border-neutral-800 cursor-pointer`}
                                style={{
                                    WebkitTapHighlightColor: "transparent",
                                }}
                                animate={{
                                    color: activeTab === v ? "#CAFF33" : "#ffffff",
                                }}
                                transition={{ type: 'spring', bounce: 0.2, duration: 0.2 }}
                                onClick={() => setActiveTab(v)}
                            >

                                {v}
                            </motion.button>
                        )
                    })}
                </div>
                <div className="flex flex-4/5 flex-col md:flex-row gap-4">
                    <AnimatePresence mode='wait'>
                        {{
                            "Online Banking": (
                                <motion.div
                                    key="online"
                                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    {FeatureCard(
                                        "24/7 Account Access",
                                        "Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease."
                                    )}
                                    {FeatureCard(
                                        "Mobile Banking App",
                                        "Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet."
                                    )}
                                    {FeatureCard(
                                        "Secure Transactions",
                                        "Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information."
                                    )}
                                    {FeatureCard(
                                        "Bill Pay and Transfers",
                                        "Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks."
                                    )}
                                </motion.div>
                            ),

                            "Financial Tools": (
                                <motion.div
                                    key="tools"
                                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    {FeatureCard(
                                        "Budgeting & Expense Tracking",
                                        "Take control of your spending with built-in budgeting tools. Categorize expenses, track trends, and set financial goals that keep you on track."
                                    )}
                                    {FeatureCard(
                                        "Savings Goals",
                                        "Easily set and monitor savings goals for vacations, big purchases, or emergencies. Automated progress updates help you stay motivated."
                                    )}
                                    {FeatureCard(
                                        "Investment Insights",
                                        "Get personalized insights into your investment portfolio with performance charts, risk analysis, and recommendations to grow your wealth."
                                    )}
                                    {FeatureCard(
                                        "Financial Calculators",
                                        "Use smart calculators to estimate loan payments, mortgage affordability, retirement savings, and more—all at your fingertips."
                                    )}
                                </motion.div>
                            ),

                            "Customer Support": (
                                <motion.div
                                    key="support"
                                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    {FeatureCard(
                                        "24/7 Live Chat",
                                        "Connect instantly with our support agents through live chat, available around the clock to answer your questions."
                                    )}
                                    {FeatureCard(
                                        "Dedicated Phone Support",
                                        "Speak directly with our customer care team for quick resolutions to your issues, from account help to transaction queries."
                                    )}
                                    {FeatureCard(
                                        "Knowledge Base",
                                        "Browse FAQs, tutorials, and how-to guides designed to help you solve problems without waiting on support."
                                    )}
                                    {FeatureCard(
                                        "Community Forum",
                                        "Engage with other users in our moderated forum to share tips, experiences, and get peer-to-peer advice."
                                    )}
                                </motion.div>
                            ),
                        }[activeTab]}
                    </AnimatePresence>

                </div>

            </div>
        </div>
    )
}

const FeatureCard = (title, desc) => {
    return <motion.div className='flex flex-col p-10 border border-neutral-800 rounded-md'>
        <motion.div className='flex flex-row justify-between items-center'>
            <motion.h3 className='text-sm text-white font-normal'>{title}</motion.h3>
            <ArrowUpRightIcon height={24} width={24} fill='#CAFF33' />
        </motion.div>
        <motion.p className='text-sm font-light text-neutral-400'>
            {desc}
        </motion.p>
    </motion.div>
}

export default LandingFeatures