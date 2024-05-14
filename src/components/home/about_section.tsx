import Image from 'next/image'
import React from 'react'
import { FaPlayCircle } from 'react-icons/fa'

const About_section = () => {
  return (
    <div className='overflow-x-hidden '>
       <div className="relative h-[728.98px] w-full bg-custom-bg bg-cover bg-center text-white">
      <div className="absolute inset-0 bg-black bg-opacity-70" />
      <div className="relative flex items-center   h-full  space-y-4 ml-6 md:ml-8 text-start ">
        <Image src="/rectangle-1.svg" alt="Example" width={4} height={222} />
        <div className="flex justify-between flex-col gap-1 mx-6">
        <h1 className="text-4xl font-bold ">The Tech</h1>
        <h1 className="text-4xl font-bold">Behind Building</h1>
        <h2 className="text-3xl pt-2">Great Tech Teams</h2>
        <p className="max-w-2xl pt-5">
          ThinkHumble is a tech hiring platform that helps recruiters and engineering managers
          effortlessly hire the best developers thanks to a powerful suite of virtual recruiting
          tools that help identify, assess, interview, and engage developers.
        </p>
        <div className="mt-10 flex justify-between w-full ">
         <div className=" h-[44px] bg-[#0C487B] flex justify-evenly p-2 items-center rounded cursor-pointer gap-2">
          <FaPlayCircle className="" />
           <button className="text-[12px]">SWIPE TO THIS VIDEO</button>
           </div>
           <button className="text-[12px] h-[44px]  bg-[#000000] flex justify-center items-center rounded text-center sm:px-3">WE ARE HIRING</button></div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About_section
