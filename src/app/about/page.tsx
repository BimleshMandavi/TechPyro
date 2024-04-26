import Image from 'next/image'
import React from 'react'

const AboutPage = () => {
  return (
    <div className=''>
      <div className="relative h-[640px] w-full bg-custom-bg bg-cover bg-center text-white">
      <div className="absolute inset-0 bg-black bg-opacity-85" />
      <div className="relative flex items-center  h-full  ml-4 text-start">
        <div className="flex justify-between flex-col gap-1 mx-6">
        <h4 className="text-[14px] text-[#FF7F0E]">TECH PYRO</h4>
        <h2 className="text-4xl font-bold">About Us</h2>
        <p className="max-w-2xl pt-5">
         Tech Pyro is a tech hiring platform that helps recruiters and engineering managers effortlessly hire the best developers thanks to a powerful suite of virtual recruiting tools that help identify, assess, interview and engage developers.
        </p>
        <div className="mt-10 flex justify-between pr-3">
         <div className="w-[220px] h-[44px] bg-[#0C487B] flex justify-evenly items-center rounded cursor-pointer">
           <div> <button>EXPLORE OPENINGS</button></div>
           </div>
        </div>
        </div>
      </div>
    </div>
    <div>
      <div className='h-[305px] bg-[#000000] text-white '>
         <div className='flex flex-col gap-5 px-6'>
          <h1 className='font-bold text-[28px]'>The Tech Pyro Way</h1>
          <p>The tech pyro Way  is a tech hiring platform that helps recruiters and engineering managers effortlessly hire the best developers thanks to a powerful suite of virtual</p>
          <p >The tech pyro Way  is a tech hiring platform that helps recruiters and engineering managers effortlessly hire the best developers thanks to a powerful suite of virtual</p>
         </div>
      
      <div className='pt-8 pl-5'>
        <Image src='/leaders.svg' alt='lead' height={132} width={496} />
      </div>
      </div>
      <div className='h-[1123px] bg-[#000000] text-white'>
        <div className='pt-[210px] flex flex-col gap-3 px-5'>
          <h4 className='text-[11px] text-[#FF7F0E]'>BACKGROUND</h4>
         <div className='text-[28px]'> <h1 className='font-bold '>The purpose</h1>
          <h1>Of the program</h1></div>
          <p>Tech pyro is a tech hiring platform that helps recruiters and engineering managers effortlessly hire the best developers thanks to a powerful suite of virtual recruiting tools that help identify, assess, interview and engage developers.</p>
          <p>The current program will run through 2022, with participants divided into four cohorts.</p>
        </div>
        <div className='pt-12 px-5 flex flex-col gap-4'>
          <div className='text-[28px]'>
            <h1 className='font-bold'>Who</h1>
            <h1>are we looking For?</h1>
          </div>
          <ul className="flex flex-col gap-4 list-none pl-5 relative">
      <li className="relative before:content-['•'] before:absolute before:left-[-1.5rem] before:text-red-500 before:text-xl">
        <div>
          <p className="font-bold pb-3">Proactive leaders</p>
          <p>With a proven track record of being empathetic and engaging with others online.</p>
        </div>
      </li>
      <li className="relative before:content-['•'] before:absolute before:left-[-1.5rem] before:text-red-500 before:text-xl">
        <div>
          <p className="font-bold pb-3">Social media experts</p>
          <p>With a proven track record of being empathetic and engaging with others online.</p>
        </div>
      </li>
      <li className="relative before:content-['•'] before:absolute before:left-[-1.5rem] before:text-red-500 before:text-xl">
        <div>
          <p className="font-bold pb-3">Quality assurance magicians</p>
          <p>Who can help boost Aleph Zero’s visibility and adoption across different industries.</p>
        </div>
      </li>
      <li className="relative before:content-['•'] before:absolute before:left-[-1.5rem] before:text-red-500 before:text-xl">
        <div>
          <p className="font-bold pb-3">Relationship builders</p>
          <p>Who can help boost Aleph Zero’s visibility and adoption across different industries.</p>
        </div>
      </li>
    </ul>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AboutPage
