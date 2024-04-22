import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-black sm:w-[1807px] sm:h-[100px] text-white flex justify-between items-center'>
      <div className='flex justify-between px-4 py-4 '>
        <Image src="/techpyro.svg" 
        alt='TechPyro Logo'
        height={70}
        width={85}
        priority
     
     />
      </div>
       <div className='hidden sm:flex sm:justify-between sm:gap-4 '>
        <Link className='text-[#FF7F0E]' href="/">HOME</Link>
        <Link className='pl-4' href="/about">ABOUT US</Link>
        <Link className='pl-4' href="blog">BLOG</Link>
        <Link className='pl-4' href="carrier">CARRIER</Link>
        <Link className='pl-4' href="contact">CONTACT US</Link>
      </div>
      <div className=''>
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
