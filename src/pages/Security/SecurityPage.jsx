import React from 'react'
import LandingFAQ from '../Landing/LandingFAQ'
import SecurityHero from './SecurityHero'
import SecurityProtect from './SecurityProtect'

const SecurityPage = () => {
    return (
        <div className='flex flex-col items-center'>
            <SecurityHero/>
            <SecurityProtect/>
            <LandingFAQ />
        </div>
    )
}

export default SecurityPage