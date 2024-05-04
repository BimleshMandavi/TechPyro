"use client"

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import Headroom from "react-headroom"


const FooterPage = () => {

  const pathname = usePathname()
  console.log(pathname);
  
  return (
   <Headroom
      style={{
        position: 'fixed', // Keep the footer fixed at the bottom
        bottom: 0, // Position it at the bottom
        width: '100%', // Make it as wide as the viewport
      }}
      wrapperStyle={{
        height: '60px', // Set wrapper height to maintain space
      }}
      disableInlineStyles={true} // Disable default inline styles
    >
    <div className=' bg-[#1B1B1B]  text-white  pt-8 h-[111px] sm:h-[469px] sm:w-full'>
      <div className='flex justify-between md:hidden px-5  top-[6842px] left-[1px]'>
      <div className='flex flex-col justify-center items-center gap-4 text-center'>
     <Link className='flex flex-col justify-center items-center gap-2'  href="about">
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
     <Link  className='flex flex-col justify-center items-center gap-2' href="blog">
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
      <Link  className='flex flex-col justify-center items-center gap-2' href="/">
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
      <Link  className='flex flex-col justify-center items-center gap-2' href="carrier">
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
      <div >
      <Link  className='flex flex-col justify-center items-center gap-2' href="contact">
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
      <div className='py-3 flex md:hidden justify-center'>
         <Image 
              src="/line.svg"
              alt="Line Logo"
              width={132}
              height={4}
              priority
            />
      </div>

<div className='hidden md:flex flex-col gap-[40px]'>

      <div className=' w-[1301px] h-[276]px md:justify-between items-center pl-[150px] pt-1'>
         <div className='flex flex-col gap-4'>
          <Image src="/techpyro.svg" 
        alt='TechPyro Logo'
        height={91}
        width={75}
        priority />
        <p className='w-[419px] text-[18px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eius aut sit nemo et quibusdam nihil iste provident? Nihil, facere.</p>
        <div className='flex gap-2' >
        <Image src="/facebook.svg" 
        alt='Facebook Logo'
        height={40}
        width={40}
        priority />
        <Image src="/linkedin.svg" 
        alt='Linkedin Logo'
        height={40}
        width={40}
        priority />
        <Image src="/insta.svg" 
        alt='Insta Logo'
        height={40}
        width={40}
        priority />
        
         <Image src="/twitter.svg" 
        alt='Twitter Logo'
        height={40}
        width={40}
        priority />
        </div>
         </div>
         <div className='flex flex-col gap-3'>
          <h1>Company</h1>
          <Link href="/about">About Us</Link>
          <Link href="/carrier">Careers</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact Us</Link>
          <Link href="/blog">Blog</Link>
         </div>
         <div className='flex flex-col gap-3'>
          <h1>Service</h1>
          <Link href="/about">Web Design & Development</Link>
          <Link href="/carrier">Dashboard OR CRM</Link>
          <Link href="/services">Logo designing</Link>
          <Link href="/contact">Graphics designing</Link>
          <Link href="/blog">Server Management</Link>
         </div>
         <div className='flex flex-col justify-between items-start gap-5'>
          <h1 className='text-[18px] Poppins'>Join Newsletter</h1>
          <div className='flex flex-col items-start'>
          <input className='w-[342px] h-[54px] p-4 text-black' type="email" placeholder='Type email hare...' />
          </div>
            <button className='text-[18px] font-semibold Inter  bg-[#0C487B] w-[138px] sm:w-full h-[54px] text-center rounded cursor-pointer'>Subscribe</button>
         </div>
      </div>
      <hr/>
      <div className='flex justify-evenly items-center pt-10'>
        <div><h1>© All rights reserved –  TECH PYRO</h1></div>
        <div className='flex gap-3'>
          <h1>Privacy Policy</h1>
          <h1>Terms & Conditions</h1>
        </div>
      </div>
      </div>
    </div>
    </Headroom>
  )
}

export default FooterPage
