import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FooterPage = () => {
  return (
    <div className=' bg-black text-white pt-8 h-[111px] sm:h-full sm:w-full'>
      <div className='flex justify-between sm:hidden px-5  top-[6842px] left-[1px]'>
      <div className='flex flex-col justify-center items-center gap-4 text-center'>
     <Link href="about">
      <div className='text-center'>
        <Image className=''
              src="/about.svg"
              alt="About Logo"
              width={21.96}
              height={21.61}
              priority
            />
            </div>
        <div>About Us</div>
     </Link>
      </div>
     <div className='flex flex-col justify-center items-center gap-2'>
     <Link href="blog">
        <Image
              src="/blog.svg"
              alt="Blog Logo"
              width={21.96}
              height={21.61}
              priority
            />
        <div>Blogs</div>
     </Link>
      </div>
      <div className='flex flex-col justify-center items-center gap-2'>
      <Link href="/">
         <Image
              src="/home.svg"
              alt="Home Logo"
              width={21.96}
              height={21.61}
              priority
            />
        <div>Home</div>
      </Link>
      </div>
      <div className='flex flex-col justify-center items-center gap-2'>
      <Link href="carrier">
         <Image
              src="/carrier.svg"
              alt="Carrier Logo"
              width={21.96}
              height={21.61}
              priority
            />
        <div>Carrier</div>
      </Link>
      </div>
      <div className='flex flex-col justify-center items-center gap-2'>
      <Link href="contact">
         <Image
              src="/contact.svg"
              alt="Vercel Logo"
              width={21.96}
              height={21.61}
              priority
            />
        <div >Contact</div>
      </Link>
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
