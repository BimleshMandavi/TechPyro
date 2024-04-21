import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-black'>
      <div className='flex justify-between px-4 py-4'>
        <Image src="/techpyro.svg" 
        alt='TechPyro Logo'
        height={70}
        width={85}
        priority
     
     />
     <Image src="/rectangle.svg" 
        alt='TechPyro Logo'
        height={70}
        width={85}
        priority
        />

      </div>
    </div>
  )
}

export default Navbar
