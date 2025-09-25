import { CurrencyDollarIcon, CurrencyEuroIcon, CurrencyRupeeIcon, CurrencyYenIcon } from '@heroicons/react/24/solid'
import React from 'react'

const CurrenciesPill = () => {
  return (
    <div className='flex flex-row gap-2 bg-neutral-800 text-white px-4 py-1 items-center w-max rounded-4xl z-[1]'>
        <p className='text-sm font-normal'>Supported Currencies</p>
        <div className='bg-neutral-900 flex flex-row gap-1 py-1 px-2 rounded-4xl'>
            <CurrencyEuroIcon height={24} width={24} color='#CAFF33'/>
            <CurrencyDollarIcon height={24} width={24} color='#CAFF33'/>
            <CurrencyRupeeIcon height={24} width={24} color='#CAFF33'/>
            <CurrencyYenIcon height={24} width={24} color='#CAFF33'/>
        </div>
    </div>
  )
}

export default CurrenciesPill