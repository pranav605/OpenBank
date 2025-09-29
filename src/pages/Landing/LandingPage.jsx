import React from 'react'
import LandingHero from './LandingHero'
import LandingProducts from './LandingProducts'
import LandingUseCases from './LandingUseCases'
import LandingFeatures from './LandingFeatures'
import LandingFAQ from './LandingFAQ'

export const LandingPage = () => {
  return (
    <div className='flex flex-col items-center'>
        <LandingHero/>
        <LandingProducts/>
        <LandingUseCases/>
        <LandingFeatures/>
        <LandingFAQ/>
    </div>
  )
}
