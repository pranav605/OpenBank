import React from 'react'
import LandingTestimonials from '../Landing/LandingTestimonials'
import LoginForm from './LoginForm'

const LoginPage = () => {
    return (
        <div className='flex flex-col items-center'>
            <LoginForm/>
            <LandingTestimonials/>
        </div>
    )
}

export default LoginPage