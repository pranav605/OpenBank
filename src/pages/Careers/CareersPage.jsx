import React from 'react'
import CareersHero from './CareersHero'
import CareersValues from './CareersValues'
import CareersBenefits from './CareersBenefits'
import LandingFAQ from '../Landing/LandingFAQ'
import LandingBannerCard from '../Landing/LandingBannerCard'
import CareersJobs from './CareersJobs'

const CareersPage = () => {
    return (
        <div className='flex flex-col items-center'>
            <CareersHero/>
            <CareersValues/>
            <CareersBenefits/>
            <CareersJobs/>
            <LandingFAQ/>
            <LandingBannerCard/>
        </div>
    )
}

export default CareersPage