import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FooterPage = () => {
  return (
    <div className=' bg-black text-white pt-8 h-[111px] sm:h-[469px] sm:w-full'>
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
      <div className='py-3 flex sm:hidden justify-center'>
         <Image 
              src="/line.svg"
              alt="Line Logo"
              width={132}
              height={4}
              priority
            />
      </div>





<div className='flex flex-col gap-[70px]'>

      <div className='hidden sm:flex w-[1301px] h-[276]px sm:justify-between items-center pl-[250px] pt-1'>
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
          <Link href="/blog">Web Design & Development</Link>
         </div>
         <div className='flex flex-col justify-between items-start'>
          <h1>Join Newsletter</h1>
          <div className='flex flex-col items-start'>
          <input type="text" placeholder='Enter your email' />
          </div>
           <button>Subscribe</button>
         </div>
      </div>
      <hr/>
      <div className='flex justify-between px-10'>
        <div><h1>© All rights reserved –  TECH PYRO</h1></div>
        <div className='flex gap-3'>
          <h1>Privacy Policy</h1>
          <h1>Terms & Conditions</h1>
        </div>
      </div>
      </div>
    </div>
  )
}

export default FooterPage
