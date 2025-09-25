import { CheckBadgeIcon } from '@heroicons/react/24/solid'
import React from 'react'

const CheckedPill = () => {
  return (
    <div className='flex flex-row gap-2 bg-neutral-800 text-white px-4 py-1 items-center w-max rounded-2xl'>
        <CheckBadgeIcon height={24} width={24} fill='#CAFF33'/>
        <p className='text-sm font-light'>No LLC Required, No Credit Check.</p>
    </div>
  )
}

export default CheckedPill