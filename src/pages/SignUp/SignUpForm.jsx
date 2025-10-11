import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const SignUpForm = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-5xl mx-auto text-white my-16 px-4 sm:px-6 md:px-8">
            <div className="relative bg-[url('/assets/texture.jpg')] bg-cover bg-center flex flex-col justify-center items-center text-center  border border-neutral-700 p-6 sm:p-10 md:p-16 rounded-lg gap-4 w-full max-w-5xl overflow-hidden">
                <div className="absolute inset-0 bg-neutral-950/60 rounded-lg"></div>
                <div className="relative z-10 flex flex-col justify-center items-center w-full gap-4">
                    <motion.h1 className="text-3xl sm:text-4xl accent-text font-medium">
                        Sign Up
                    </motion.h1>
                    <motion.p className="text-sm sm:text-base text-neutral-400">
                        Join our community today! Create an account to unlock exclusive features and personalized experiences.
                    </motion.p>

                    {/* Input fields */}
                    <motion.div className="flex flex-col md:flex-row gap-4 w-full justify-center items-center">
                        <motion.input
                            id="first_name"
                            required
                            type="text"
                            name="first_name"
                            className="p-3 sm:p-4 bg-neutral-800 text-neutral-300 text-sm rounded-full w-full focus:outline-none focus:ring-2 focus:ring-accent transition"
                            placeholder="Enter your first name"
                        />
                        <motion.input
                            id="last_name"
                            required
                            type="text"
                            name="last_name"
                            className="p-3 sm:p-4 bg-neutral-800 text-neutral-300 text-sm rounded-full w-full focus:outline-none focus:ring-2 focus:ring-accent transition"
                            placeholder="Enter your last name"
                        />
                    </motion.div>
                    <motion.div className="flex flex-col md:flex-row gap-4 w-full justify-center items-center">
                        <motion.input
                            id="email"
                            required
                            type="email"
                            name="email"
                            className="p-3 sm:p-4 bg-neutral-800 text-neutral-300 text-sm rounded-full w-full focus:outline-none focus:ring-2 focus:ring-accent transition"
                            placeholder="Enter your email"
                        />
                        <motion.input
                            id="password"
                            required
                            type="password"
                            name="password"
                            className="p-3 sm:p-4 bg-neutral-800 text-neutral-300 text-sm rounded-full w-full focus:outline-none focus:ring-2 focus:ring-accent transition"
                            placeholder="Enter your password"
                        />
                    </motion.div>

                    <Link
                        to="/forgot-password"
                        className="text-white underline text-xs sm:text-sm hover:text-accent transition"
                    >
                        Forgot your password?
                    </Link>

                    {/* Buttons */}
                    <motion.button className="p-3 sm:p-4 text-sm font-medium text-neutral-900 accent-bg rounded-full w-full md:w-1/2 transition hover:opacity-90">
                        Sign Up
                    </motion.button>
                    <motion.button className="p-3 sm:p-4 text-sm font-medium bg-neutral-800 text-white rounded-full w-full md:w-1/2 transition hover:bg-neutral-700">
                        Login
                    </motion.button>

                    {/* Divider */}
                    <div className="flex items-center w-full md:w-2/3 mt-6">
                        <hr className="flex-grow border-neutral-600" />
                        <span className="px-3 text-xs sm:text-sm text-neutral-400 whitespace-nowrap">
                            Or continue with
                        </span>
                        <hr className="flex-grow border-neutral-600" />
                    </div>

                    {/* Social buttons */}
                    <div className="flex flex-row gap-4 justify-center w-full md:w-2/3 mt-2">
                        {['google', 'facebook', 'apple'].map((provider) => (
                            <motion.a
                                key={provider}
                                href="#"
                                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full dark-accent-bg text-black flex items-center justify-center hover:scale-105 transition"
                            >
                                <motion.img
                                    src={`/assets/${provider}.png`}
                                    alt={`Login via ${provider}`}
                                    className="w-6 sm:w-8 h-6 sm:h-8"
                                />
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpForm;
