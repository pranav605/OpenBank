import { CurrencyRupeeIcon, SparklesIcon, Square3Stack3DIcon, SquaresPlusIcon } from '@heroicons/react/24/solid'
import React from 'react';
import {motion} from 'motion/react';

const SecurityProtect = () => {
  const data = [
        {
            id: 1,
            title: 'Secure Online Banking Platform',
            icon: <SquaresPlusIcon className='accent-text h-8 w-8'/>,
            content: 'Our online banking platform is built with multiple layers of security to safeguard your information. We utilize industry-standard encryption protocols to ensure that your data remains confidential and protected during transmission.',
        },
        {
            id: 2,
            title: 'Multi-Factor Authentication',
            icon: <Square3Stack3DIcon className='accent-text h-8 w-8'/>,
            content: 'To enhance the security of your online banking experience, we employ multi-factor authentication. This additional layer of security requires you to provide multiple pieces of identification, such as a password and a one-time verification code, to access your account.',
        },
        {
            id: 3,
            title: 'Fraud Monitoring',
            icon:<SparklesIcon className='accent-text h-8 w-8'/>,
            content: 'We have sophisticated fraud detection systems in place to monitor your accounts for any suspicious activities. Our dedicated team works around the clock to detect and prevent unauthorized transactions, providing you with peace of mind.',
        },
        {
            id: 4,
            title: 'Work-Life Balance',
            icon: <CurrencyRupeeIcon className='accent-text h-8 w-8'/>,
            content: 'Our mobile banking app is designed with the same level of security as our online banking platform. You can confidently access your accounts, make transactions, and manage your finances on the go, knowing that your information is protected.',
        }
    ]
    return (
        <div className='flex text-center justify-center items-center md:text-start md:justify-start md:items-start flex-col w-full max-w-5xl my-16 md:p-0 p-2'>
            <motion.h2 className="text-white text-3xl/10 font-medium">
                How We <motion.span className='accent-text'>Protect You</motion.span>
            </motion.h2>
            <motion.p className='text-sm font-light text-neutral-400 pt-4'>
                At OpenBank, we prioritize the security and confidentiality of your financial information. Our state-of-the-art encryption technology and stringent data protection measures ensure your assets and transactions are safeguarded at all times
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
                                <motion.p className="text-neutral-400 text-sm text-start font-normal">
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

export default SecurityProtect