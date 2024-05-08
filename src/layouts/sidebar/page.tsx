import Image from 'next/image'
import React from 'react'

const Sidebar = () => {
  return (
    <div>
      <div>
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
    </div>
  )
}

export default Sidebar
