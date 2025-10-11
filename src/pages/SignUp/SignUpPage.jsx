import React from 'react'
import SignUpForm from './SignUpForm'
import LandingTestimonials from '../Landing/LandingTestimonials'

const SignUpPage = () => {
    return (
        <div className='flex flex-col items-center'>
            <SignUpForm/>
            <LandingTestimonials/>
        </div>
    )
}

export default SignUpPage