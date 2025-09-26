import React from 'react'
import LandingHero from './LandingHero'
import LandingProducts from './LandingProducts'
import LandingUseCases from './LandingUseCases'

export const LandingPage = () => {
  return (
    <div className='flex flex-col items-center'>
        <LandingHero/>
        <LandingProducts/>
        <LandingUseCases/>
    </div>
  )
}
