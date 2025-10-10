import React from 'react'
import AboutHero from './AboutHero'
import AboutMission from './AboutMission'
import AboutPress from './AboutPress'

const AboutPage = () => {
    return (
        <div className='flex flex-col items-center'>
            <AboutHero/>
            <AboutMission/>
            <AboutPress/>
        </div>
    )
}

export default AboutPage