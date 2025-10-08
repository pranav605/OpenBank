import { BriefcaseIcon } from '@heroicons/react/24/outline';
import { motion } from 'motion/react';

const CareersJobs = () => {
    const data = [
        {
            id: 1,
            title: 'Relationship Manager',
            location: 'India',
            department: 'Retail Banking',
            content: 'As a Relationship Manager at YourBank, you will be responsible for developing and maintaining relationships with our valued customers. You will proactively identify their financial needs and offer tailored solutions to help them achieve their goals. We are seeking individuals with excellent communication skills, a strong sales acumen, and a passion for delivering exceptional customer service.',
            requirements: [
                "Bachelor's degree in Business, Finance, or a related field",
                "Minimum of 3 years of experience in sales or relationship management in the banking industry",
                "Proven track record of meeting and exceeding sales targets",
                "Excellent interpersonal and negotiation skills",
                "Strong knowledge of banking products and services"
            ]
        },
        {
            id: 2,
            title: 'Risk Analyst',
            location: 'India',
            department: 'Risk Management',
            content: 'As a Risk Analyst at YourBank, you will play a vital role in identifying and assessing potential risks to our organization. You will analyze data, conduct risk assessments, and develop strategies to mitigate risks. We are looking for detail-oriented individuals with strong analytical skills and a solid understanding of risk management principles.',
            requirements: [
                "Bachelor's degree in Finance, Economics, or a related field",
                "Minimum of 2 years of experience in risk management or a similar role",
                "Proficiency in risk analysis tools and techniques",
                "Strong analytical and problem-solving skills",
                "Knowledge of regulatory requirements and industry best practices"
            ]
        },
        {
            id: 3,
            title: 'IT Security Specialist',
            location: 'India',
            department: 'Information Technology',
            content: 'As an IT Security Specialist at YourBank, you will be responsible for ensuring the security and integrity of our information systems. You will develop and implement security protocols, conduct vulnerability assessments, and respond to security incidents. We are seeking individuals with a strong technical background, knowledge of cybersecurity best practices, and a commitment to maintaining the confidentiality of customer data.',
            requirements: [
                "Bachelor's degree in Computer Science, Information Security, or a related field",
                "Minimum of 5 years of experience in IT security or a similar role",
                "In-depth knowledge of network security protocols and technologies",
                "Familiarity with regulatory frameworks such as PCI DSS and GDPR",
                "Professional certifications such as CISSP or CISM are preferred"
            ]
        }
    ]
    return (
        <div className='flex text-center justify-center items-center md:text-start md:justify-start md:items-start flex-col w-full max-w-5xl my-16 md:p-0 p-2'>
            <motion.h2 className="accent-text text-3xl/10 font-medium">
                Job Postings
            </motion.h2>
            <motion.p className='text-sm font-light text-neutral-400 pt-4'>
                Explore exciting job openings at YourBank, where we value talent, innovation, and a passion for customer service. Join our team and be part of shaping a brighter future in the banking industry
            </motion.p>
            <div className='flex flex-col md:flex-row gap-12 w-full mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 bg-neutral-900  rounded-md py-8 md:max-w-full w-full'>
                    {data.map((obj, idx) => {
                        return (
                            <div key={obj.id} className='flex flex-col items-start gap-4 justify-start rounded-md border border-neutral-700 bg-neutral-900 p-8'>
                                <div className="flex flex-row items-center gap-4 w-full">
                                    <motion.h2 className='text-xl text-white font-normal'>{obj.title}</motion.h2>
                                </div>
                                <div className='flex flex-row gap-4 w-full'>
                                    <div className='p-2 rounded-full bg-neutral-800 border border-neutral-800 text-neutral-400 text-xs'>
                                        Location: <motion.span>{obj.location}</motion.span>
                                    </div>
                                    <div className='p-2 rounded-full bg-neutral-800 border border-neutral-800 text-neutral-400 text-xs'>
                                        Department: <motion.span>{obj.department}</motion.span>
                                    </div>
                                </div>
                                <motion.p className='text-lg text-white font-normal'>About This Job</motion.p>
                                <motion.p className="text-neutral-400 text-sm text-start font-normal">
                                    {obj.content}
                                </motion.p>
                                <motion.p className='text-lg text-white font-normal'>Requirements & Qualifications</motion.p>
                                <motion.div className="flex flex-col gap-2 w-full">
                                    {obj.requirements.map((r, idx) => (
                                        <motion.div
                                            key={idx}
                                            className="flex flex-row items-center gap-3 w-full text-neutral-400"
                                        >
                                            <div className="flex items-center justify-center w-6 h-6 min-w-[24px]">
                                                <BriefcaseIcon width={20} height={20} className="text-neutral-300" />
                                            </div>
                                            <motion.span className="leading-snug text-sm md:text-base">{r}</motion.span>
                                        </motion.div>
                                    ))}
                                </motion.div>

                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default CareersJobs