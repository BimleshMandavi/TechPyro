import Image from 'next/image'
import React from 'react'

const AboutPage = () => {
  return (
    <div className=' sm:h-full'>
      <div className="relative h-[640px] w-full bg-custom-bg bg-cover bg-center text-white">
      <div className="absolute inset-0 bg-black bg-opacity-85 sm:bg-opacity-70" />
      <div className="relative flex items-center  h-full  ml-4 text-start sm:px-8">
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
    <div className=''>
      <div className='h-[305px] bg-[#000000] text-white '>
         <div className='flex flex-col gap-5 px-6 sm:px-8 ml-4 '>
          <h1 className='font-bold text-[28px]'>The Tech Pyro Way</h1>
          <div className='sm:flex'>
          <p className='sm:w-[735px] sm:p-5'>Creating the tech behind building great tech teams has taught us that the key to real, lasting success is always the people. So we’ve built a culture of acceptance where introverts and extroverts, early birds and night owls, and left brainers as well as right brainers feel at home.</p>
          <p className='sm:w-[674px] sm:p-5'>The tech pyro Way  is a tech hiring platform that helps recruiters and engineering managers effortlessly hire the best developers thanks to a powerful suite of virtual</p>
          </div>
         </div>
      <div className='pt-8 pl-5 sm:w-full'>
        <Image className='sm:w-[1614px] sm:h-[538px] p-8' src='/leaders.svg' alt='lead' height={132} width={496} />
      </div>
      </div>
      <div className='h-[1123px] sm:h-[873px] bg-[#000000] text-white sm:pt-[273px] sm:px-7 sm:flex'>
        <div className='pt-[210px] flex flex-col gap-3 px-5'>
          <h4 className='text-[11px] text-[#FF7F0E]'>BACKGROUND</h4>
         <div className='text-[28px]'> <h1 className='font-bold '>The purpose</h1>
          <h1>Of the program</h1></div>
          <p>Tech pyro is a tech hiring platform that helps recruiters and engineering managers effortlessly hire the best developers thanks to a powerful suite of virtual recruiting tools that help identify, assess, interview and engage developers.</p>
          <p>The current program will run through 2022, with participants divided into four cohorts.</p>
        </div>
        <div className='pt-12 px-5 flex flex-col gap-4 sm:pt-[243px]'>
          <div className='text-[28px] sm:flex sm:gap-3'>
            <h1 className='font-bold'>Who</h1>
            <h1>are we looking For?</h1>
          </div>
          <ul className="flex flex-col gap-4 list-none pl-5 relative sm:flex-row sm:p-7 ">
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
      <div className='bg-[#0C487B]  h-[609px] sm:h-[438px] text-white py-5 px-5 flex justify-around flex-col sm:flex-row'>
        <div className='sm:w-[707px]'>
          <h5 className='text-[12px] font-semibold'>OUR MISSION</h5>
          <h1 className='font-bold text-[28px]'>Creating Valuable Content For Creatives All  The World</h1>
          <p>ThinkHumble is a tech hiring platform that helps recruiters and engineering managers effortlessly hire the best developers thanks to a powerful suite of virtual recruiting tools that help identify, assess, interview and engage developers.</p>
        </div>
       <div className='sm:w-[741px]'>
          <h5 className='text-[12px] font-semibold'>OUR VISION</h5>
          <h1 className='font-bold text-[28px]'>A Platform That Empowers Individuals To Improve</h1>
          <p>ThinkHumble is a tech hiring platform that helps recruiters and engineering managers effortlessly hire the best developers thanks to a powerful suite of virtual recruiting tools that help identify, assess, interview and engage developers.</p>
        </div>
      </div>
    </div>
    <div>
      <div className='bg-[#050505]  h-[1011px] flex flex-col  items-center text-white gap-3'>
        <div className='sm:flex sm:gap-5'>
        <div className='text-center pt-9'>
          <Image className='sm:w-[641px] sm:h-[518px]' src="/mission1.svg" alt='mission' width={366} height={245} />
        </div>
        <div className='w-[358px] sm:w-[784px] sm:pt-10 sm:pl-6'>
          <h1 className='text-[25px] font-bold sm:text-[50px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
          <p  className='text-[14px]'>ThinkHumble is a tech hiring platform that helps recruiters and engineering managers effortlessly hire the best developers thanks to </p>
        <div>
          <Image className='sm:w-[894px]' src="/mission2.svg" alt='mission' width={366} height={245} />
        </div>
        </div>
        </div>
        <div>
            <Image className='sm:mr-[845px] sm:w-[641px] sm:h-[293px]' src="/mission3.svg" alt='mission' width={366} height={245} />
        </div>
      </div>
      <div className='bg-[#050505]  h-[1211px] sm:h-[345px]  text-white flex flex-col  px-8 '>
        <div className='text-[28px]'>
          <h1 className='font-bold'>We give our people everything</h1> <span>that’s needed to succeed</span>
        </div>
        <ul className="flex flex-col gap-4 list-none pl-5 relative sm:flex-row sm:pt-8">
          <Image src="std.svg" width={50} height={49.9} alt='grp'/>
      <li className="relative before:content-['•'] before:absolute before:left-[-1.5rem] before:text-red-500 before:text-xl">
        <div>
          <h1 className="font-bold pb-3 text-[18px]">Learning</h1>
          <p className='text-[14px]'>Our goal as an organisation is to be open about where the boundary of our knowledge lies and to hire people smarter than ourselves to push this boundary outward. We’ve learned over the years that saying.</p>
        </div>
      </li>
      <Image src="grp-icon.svg" width={50} height={49.9} alt='grp'/>
      <li className="relative before:content-['•'] before:absolute before:left-[-1.5rem] before:text-red-500 before:text-xl">
        <div> 
          <h1 className="font-bold pb-3 text-[18px]">Leadership</h1>
          <p className='text-[14px]'>Our goal as an organisation is to be open about where the boundary of our knowledge lies and to hire people smarter than ourselves to push this boundary outward. We’ve learned over the years that saying.</p>
        </div>
      </li>
     <Image src="trs.svg" width={50} height={49.9} alt='grp'/>
      <li className="relative before:content-['•'] before:absolute before:left-[-1.5rem] before:text-red-500 before:text-xl">
        <div>
          <h1 className="font-bold pb-3 text-[18px]">Transparency</h1>
          <p className='text-[14px]'>Our goal as an organisation is to be open about where the boundary of our knowledge lies and to hire people smarter than ourselves to push this boundary outward. We’ve learned over the years that saying.</p>
        </div>
      </li>
      <Image src="frd.svg" width={50} height={49.9} alt='grp'/>
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
        <div className='flex pt-4 flex-wrap w-full justify-evenly'>
          <Image src="men1.svg" width={177.51} height={286} alt='grp'/>
          <Image src="women1.svg" width={177.51} height={286} alt='grp'/>
              <Image className='hidden sm:flex' src="men1.svg" width={177.51} height={286} alt='grp'/>
          <Image className='hidden sm:flex' src="women1.svg" width={177.51} height={286} alt='grp'/>
              <Image className='hidden md:flex' src="men1.svg" width={177.51} height={286} alt='grp'/>
          <Image className='hidden md:flex' src="women1.svg" width={177.51} height={286} alt='grp'/>
              <Image className='hidden lg:flex' src="men1.svg" width={177.51} height={286} alt='grp'/>
          <Image className='hidden lg:flex' src="women1.svg" width={177.51} height={286} alt='grp'/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AboutPage
