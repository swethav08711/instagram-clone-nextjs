import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <div>
        {/* left */}
   <div className='flex items-center justify-between max-w-6xl'>
    <div className=' cursor-pointer h-24 w-24 relative hidden lg:inline-grid '>
        <Image layout="fill"  className=' object-contain' alt='ista-icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"/>
    </div>
    <div className='cursor-pointer h-24 w-10 relative  lg:hidden '>
        <Image layout="fill"  className=' object-contain' alt='ista-icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"/>
    </div>
    <h1>Right Side</h1>
   </div>
        {/* middle */}

        {/* right */}
    </div>
  )
}
