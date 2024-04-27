import Image from 'next/image'
import React from 'react'

const ContactPage = () => {
  return (
    <div>
      <div className="relative h-full w-full bg-custom-bg bg-cover bg-center text-white">
      <div className="absolute inset-0 bg-black bg-opacity-80" />
     <div className='relative flex flex-col items-center '>
       <div className=' bg-black w-[358px] h-[559px] m-14 text-white'>
        <div className='text-center pt-5'>
          <h1 className='text-[24px] font-black'>Get In Tuch</h1>
           <Image className='pt-3' src="rtc1.svg" width={383} height={1} alt='map' />
        </div>
      </div>
      <div>
        <Image src="map.svg" width={368} height={211} alt='map' />
      </div>
     </div>
    </div>
    </div>
  )
}

export default ContactPage
