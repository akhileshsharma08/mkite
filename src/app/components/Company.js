import Image from 'next/image'
import React from 'react'

const Company = () => {
  return (
    <div className='bg-slate-900 text-white py-16'>
        <div className="companyContainer">
            <h1 className='h1 text-gray-500 py-2 text-center'>I serverd at </h1>
            <div className="companyLogo">
                {/* <Image/> */}
            </div>
        </div>
    </div>
  )
}

export default Company