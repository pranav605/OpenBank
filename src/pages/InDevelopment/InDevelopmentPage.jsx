import React from 'react'

const InDevelopmentPage = () => {
  return (
    <div className="flex flex-col justify-center items-center my-20 w-full gap-6">
      <img
        src="/assets/in_progress.png"
        alt="Guy sitting in a hammock, website under construction"
        className="max-w-md w-full"
      />
      <p className="text-lg accent-text font-medium">
        Page is under development
      </p>
    </div>
  )
}

export default InDevelopmentPage
