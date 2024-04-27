import Image from 'next/image'
import React from 'react'

const AboutPage = () => {
  return (
    <div className=' sm:h-full'>
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
      <div className='bg-[#0C487B]  h-[609px] text-white py-5 px-5 flex justify-around flex-col'>
        <div>
          <h5 className='text-[12px] font-semibold'>OUR MISSION</h5>
          <h1 className='font-bold text-[28px]'>Creating Valuable Content For Creatives All  The World</h1>
          <p>ThinkHumble is a tech hiring platform that helps recruiters and engineering managers effortlessly hire the best developers thanks to a powerful suite of virtual recruiting tools that help identify, assess, interview and engage developers.</p>
        </div>
       <div>
          <h5 className='text-[12px] font-semibold'>OUR VISION</h5>
          <h1 className='font-bold text-[28px]'>A Platform That Empowers Individuals To Improve</h1>
          <p>ThinkHumble is a tech hiring platform that helps recruiters and engineering managers effortlessly hire the best developers thanks to a powerful suite of virtual recruiting tools that help identify, assess, interview and engage developers.</p>
        </div>
      </div>
    </div>
    <div>
      <div className='bg-[#050505]  h-[1011px] flex flex-col  items-center text-white gap-3'>
        <div className='text-center pt-9'>
          <Image src="/mission1.svg" alt='mission' width={366} height={245} />
        </div>
        <div className='w-[358px]'>
          <h1 className='text-[25px] font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
          <p  className='text-[14px]'>ThinkHumble is a tech hiring platform that helps recruiters and engineering managers effortlessly hire the best developers thanks to </p>
        </div>
        <div>
          <Image src="/mission2.svg" alt='mission' width={366} height={245} />
        </div>
        <div>
            <Image src="/mission3.svg" alt='mission' width={366} height={245} />
        </div>
      </div>
      <div className='bg-[#050505]  h-[1211px] text-white flex flex-col items-center px-8'>
        <div className='text-[28px]'>
          <h1 className='font-bold'>We give our people everything</h1> <span>that’s needed to succeed</span>
        </div>
        <ul className="flex flex-col gap-4 list-none pl-5 relative">
          <div className='pt-6'><Image src="std.svg" width={50} height={49.9} alt='grp'/></div>
      <li className="relative before:content-['•'] before:absolute before:left-[-1.5rem] before:text-red-500 before:text-xl">
        <div>
          <h1 className="font-bold pb-3 text-[18px]">Learning</h1>
          <p className='text-[14px]'>Our goal as an organisation is to be open about where the boundary of our knowledge lies and to hire people smarter than ourselves to push this boundary outward. We’ve learned over the years that saying.</p>
        </div>
      </li>
      <div className='pt-6'><Image src="grp-icon.svg" width={50} height={49.9} alt='grp'/></div>
      <li className="relative before:content-['•'] before:absolute before:left-[-1.5rem] before:text-red-500 before:text-xl">
        <div> 
          <h1 className="font-bold pb-3 text-[18px]">Leadership</h1>
          <p className='text-[14px]'>Our goal as an organisation is to be open about where the boundary of our knowledge lies and to hire people smarter than ourselves to push this boundary outward. We’ve learned over the years that saying.</p>
        </div>
      </li>
      <div className='pt-6'><Image src="trs.svg" width={50} height={49.9} alt='grp'/></div>
      <li className="relative before:content-['•'] before:absolute before:left-[-1.5rem] before:text-red-500 before:text-xl">
        <div>
          <h1 className="font-bold pb-3 text-[18px]">Transparency</h1>
          <p className='text-[14px]'>Our goal as an organisation is to be open about where the boundary of our knowledge lies and to hire people smarter than ourselves to push this boundary outward. We’ve learned over the years that saying.</p>
        </div>
      </li>
      <div className='pt-6'><Image src="frd.svg" width={50} height={49.9} alt='grp'/></div>
      <li className="relative before:content-['•'] before:absolute before:left-[-1.5rem] before:text-red-500 before:text-xl">
        <div>
          <h1 className="font-bold pb-3 text-[18px]">Transparency</h1>
          <p className='text-[14px]'>Our goal as an organisation is to be open about where the boundary of our knowledge lies and to hire people smarter than ourselves to push this boundary outward. We’ve learned over the years that saying.</p>
        </div>
      </li>
    </ul>
      </div>
      <div className='bg-[#050505]  text-white px-8 '>
        <div className='pt-5'>
          <h5 className='text-[#FF7F0E] text-[12px]'>OUR TEAM</h5>
          <h1 className='font-black text-[28px]'>Meet Our</h1>
          <span className='text-[28px] font-normal'>Best Teams</span>
          <p className='text-[14px] font-medium pt-4'>ThinkHumble is a tech hiring platform that helps recruiters and engineering managers effortlessly hire the best developers thanks</p>
        </div>
        <div className='flex'>
          <Image src="men1.svg" width={177.51} height={286} alt='grp'/>
          <Image src="women1.svg" width={177.51} height={286} alt='grp'/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AboutPage
