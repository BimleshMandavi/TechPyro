import Image from 'next/image'
import React from 'react'

const FooterPage = () => {
  return (
    <div className='bg-[#202020] text-white'>
      <div className='flex justify-between px-5  w-full h-[111px] top-[6842px] left-[1px]'>
      <div className='flex flex-col justify-center items-center gap-2'>
       <Image 
              src="/about.svg"
              alt="About Logo"
              width={21.96}
              height={21.61}
              priority
            />
        <div>About Us</div>
      </div>
     <div className='flex flex-col justify-center items-center gap-2'>
       <Image
              src="/blog.svg"
              alt="Blog Logo"
              width={21.96}
              height={21.61}
              priority
            />
        <div>Blogs</div>
      </div>
      <div className='flex flex-col justify-center items-center gap-2'>
       <Image
              src="/home.svg"
              alt="Home Logo"
              width={21.96}
              height={21.61}
              priority
            />
        <div>Home</div>
      </div>
      <div className='flex flex-col justify-center items-center gap-2'>
       <Image
              src="/carrier.svg"
              alt="Carrier Logo"
              width={21.96}
              height={21.61}
              priority
            />
        <div>Carrier</div>
      </div>
      <div className='flex flex-col justify-center items-center gap-2'>
       <Image
              src="/contact.svg"
              alt="Vercel Logo"
              width={21.96}
              height={21.61}
              priority
            />
        <div >Contact</div>
      </div>
      </div>
      <div className='py-3 flex justify-center'>
         <Image 
              src="/line.svg"
              alt="Line Logo"
              width={132}
              height={4}
              priority
            />
      </div>
    </div>
  )
}

export default FooterPage
