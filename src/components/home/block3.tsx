import React from 'react'
import Image from "next/image";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { Avatar } from "@mui/material";

const Block3 = () => {
  return (
    <div>
      <div className="px-5 py-5 flex flex-col  justify-center gap-8 ">
      <div className=" w-full  sm:flex sm:flex-wrap  sm:gap-8 sm:w-full sm:mx-5">
     <div className="flex   sm:w-[496px] sm:h-[386px] flex-col gap-2 border-r-[10px] border-b-[10px] border-[#0C487BD4] rounded-[14px] p-4  my-4">
        <div className="flex"> 
      <div className="border-2 border-red-500 rounded-full p-2"> 
        <div className="rounded-full overflow-hidden"> 
          <Image src="/code.svg" alt="code" width={24.3} height={24.3} />
        </div>
      </div>
    </div>
      <h1 className="text-black font-bold text-[16px]">Web Design & Development</h1>
      <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor sit dolores corrupti laborum reprehenderit repellat ea numquam dolorum repellendus dolore a commodi illum optio, laboriosam hic quidem, qui delectus. Esse voluptate libero veritatis quisquam neque aperiam sapiente consequuntur tempora ab architecto. Explicabo maxime a quasi id atque! Suscipit, magnam excepturi!</p>
      </div>
        <div className="flex  flex-col sm:w-[496px] sm:h-[386px] gap-2 border-r-[10px] border-b-[10px] border-[#335c80d4] rounded-[14px] bg-[#0C487B] text-white  p-4 my-4">
        <div className="flex"> 
      <div className="border-2 border-red-500 rounded-full p-2"> 
        <div className="rounded-full overflow-hidden"> 
          <Image src="/code.svg" alt="code" width={24.3} height={24.3} />
        </div>
      </div>
    </div>
      <h1 className="text-white font-bold text-[16px]">App Design & Development</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor sit dolores corrupti laborum reprehenderit repellat ea numquam dolorum repellendus dolore a commodi illum optio, laboriosam hic quidem, qui delectus. Esse voluptate libero veritatis quisquam neque aperiam sapiente consequuntur tempora ab architecto. Explicabo maxime a quasi id atque! Suscipit, magnam excepturi!</p>
      </div>
        <div className="flex flex-col sm:w-[496px] sm:h-[386px] gap-2 border-r-[10px] border-b-[10px] border-[#0C487BD4] rounded-[14px] my-4 p-5">
        <div className="flex"> 
      <div className="border-2 border-red-500 rounded-full p-2"> 
        <div className="rounded-full overflow-hidden"> 
          <Image src="/code.svg" alt="code" width={24.3} height={24.3} />
        </div>
      </div>
    </div>
      <h1 className="text-black font-bold text-[16px]">Dashboard OR CRM</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor sit dolores corrupti laborum reprehenderit repellat ea numquam dolorum repellendus dolore a commodi illum optio, laboriosam hic quidem, qui delectus. Esse voluptate libero veritatis quisquam neque aperiam sapiente consequuntur tempora ab architecto. Explicabo maxime a quasi id atque! Suscipit, magnam excepturi!</p>
      </div>
        <div className="flex flex-col sm:w-[496px] sm:h-[386px] gap-2 border-r-[10px] border-b-[10px] border-[#0C487BD4] rounded-[14px] my-4 p-5">
        <div className="flex"> 
      <div className="border-2 border-red-500 rounded-full p-2"> 
        <div className="rounded-full overflow-hidden"> 
          <Image src="/code.svg" alt="code" width={24.3} height={24.3} />
        </div>
      </div>
    </div>
      <h1 className="text-black font-bold text-[16px]">Server Management</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor sit dolores corrupti laborum reprehenderit repellat ea numquam dolorum repellendus dolore a commodi illum optio, laboriosam hic quidem, qui delectus. Esse voluptate libero veritatis quisquam neque aperiam sapiente consequuntur tempora ab architecto. Explicabo maxime a quasi id atque! Suscipit, magnam excepturi!</p>
      </div>
       <div className="flex flex-col sm:w-[496px] sm:h-[386px] gap-2 border-r-[10px] border-b-[10px] border-[#0C487BD4] rounded-[14px] my-4 p-5">
        <div className="flex"> 
      <div className="border-2 border-red-500 rounded-full p-2"> 
        <div className="rounded-full overflow-hidden"> 
          <Image src="/code.svg" alt="code" width={24.3} height={24.3} />
        </div>
      </div>
    </div>
      <h1 className="text-black font-bold text-[16px]">Logo designing</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor sit dolores corrupti laborum reprehenderit repellat ea numquam dolorum repellendus dolore a commodi illum optio, laboriosam hic quidem, qui delectus. Esse voluptate libero veritatis quisquam neque aperiam sapiente consequuntur tempora ab architecto. Explicabo maxime a quasi id atque! Suscipit, magnam excepturi!</p>
      </div>
      <div className="flex flex-col sm:w-[496px] sm:h-[386px] gap-2 border-r-[10px] border-b-[10px] border-[#0C487BD4] rounded-[14px] my-4 p-5">
        <div className="flex"> 
      <div className="border-2 border-red-500 rounded-full p-2"> 
        <div className="rounded-full overflow-hidden"> 
          <Image src="/code.svg" alt="code" width={24.3} height={24.3} />
        </div>
      </div>
    </div>
      <h1 className="text-black font-bold text-[16px]">Graphics designing</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor sit dolores corrupti laborum reprehenderit repellat ea numquam dolorum repellendus dolore a commodi illum optio, laboriosam hic quidem, qui delectus. Esse voluptate libero veritatis quisquam neque aperiam sapiente consequuntur tempora ab architecto. Explicabo maxime a quasi id atque! Suscipit, magnam excepturi!</p>
      </div>
       </div>
      <div className="sm:flex sm:gap-5">
      <div className="sm:w-[50%]">
         <Image className="sm:w-full sm:h-full" src="/meetup.svg" alt="code" width={500} height={100} />
      </div>
      <div className="sm:w-[50%] sm:h-full sm:px-6">
      <div className="flex flex-col justify-center gap-4 mt-3">
        <h4 className="text-[#FF7F0E]">Case Study</h4>
        <h1 className="text-black font-bold text-[25px] sm:text-[50px]">Driving Success: A Tech Pyro Case Study</h1>
        <p className="sm:text-[18px] ">Welcome to a journey of innovation and success with [Your Company Name]. In our latest case study, we delve into the transformative partnership with [Client Company], showcasing a remarkable story of overcoming challenges and achieving unprecedented results. From the initial hurdles to the triumphant outcomes, this case study unveils the impact of [Your Product/Service] in [Client Industry]. Discover how our tailored solutions, strategic approach, and collaborative efforts propelled [Client Company] to new heights, setting a benchmark for excellence in their sector. Join us as we explore the intricate details of this success story, demonstrating the power of innovation and the tangible benefits experienced by our valued client. This is more than just a case study; it's a testament to the potential of partnership and the possibilities that unfold when visionary companies come together to create meaningful change.</p>
      </div>
        <div className="w-[220px] h-[44px] bg-[#0C487B] mt-4 flex justify-evenly items-center rounded text-white">
           <button className="text-white">LEARN MORE..</button>
         </div>
         </div>
      </div>
    
      <div className="bg-gradient-to-r from-blue-50">
        <div className="text-center px-4">
          <h4 className="text-[#FF7F0E] text-base
font-bold tracking-widest">FAQ</h4>
          <h1 className="font-bold text-[25px]">Frequently Asked Questions</h1>
        </div>
        <div className="sm:flex sm:gap-2">
        <div className="py-3 sm:w-[50%]">
          <Image className="sm:w-full sm:h-full" src="/faq.svg" alt="FAQ" width={471.73} height={219.1} />
        </div>
        <div className="sm:flex sm:flex-col">
        <div className="py-4">
           <div className="flex flex-col gap-2 py-2">
         <Accordion>
        <AccordionSummary
          expandIcon={<IoIosArrowDropdownCircle />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Software Engineer - Android</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
       <Accordion>
        <AccordionSummary
          expandIcon={<IoIosArrowDropdownCircle />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Software Engineer - Android</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
        </div>
        <div>
           <Accordion>
         <AccordionDetails>
      <ul className="list-disc pl-4 space-y-2"> 
        <li>Write reusable, testable, and effient code.</li>
        <li>Design and implement of low-latency, high-availability, and performant applications.</li>
        <li>Integration of user-facing elements developed by front-end developers with serve..</li>
        <li>Implementation of security and data protection.</li>
      </ul>
    </AccordionDetails>
      </Accordion>
        </div>
        <div className="flex flex-col gap-2 py-2">
            <Accordion>
        <AccordionSummary
          expandIcon={<IoIosArrowDropdownCircle />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Software Engineer - Android</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
        <Accordion>
        <AccordionSummary
          expandIcon={<IoIosArrowDropdownCircle />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Software Engineer - Android</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
        <Accordion>
        <AccordionSummary
          expandIcon={<IoIosArrowDropdownCircle />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Software Engineer - Android</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
        </div>
        </div>
        </div>
      </div>
      <div className="sm:flex justify-center">
         <div className="sm:w-[50%]">
         <Image className="sm:w-full" src="/energy-startup.svg" alt="startup" width={471.73} height={219.1} />
         </div>
         <div className="bg-[#0C487B]  text-white h-[200px] sm:h-[402px] flex flex-col justify-center items-center text-center">
          <h1 className="font-bold text-[28px]">Energy of a start-up combined with 30 years of experience.</h1>
          <div className="hidden sm:flex sm:justify-center bg-white text-[#FF7F0E] rounded-3xl sm:w-[216px] sm:h-[54px] sm:mt-4 ">
            <button>See Job Vacancies</button>
          </div>
         </div>
      </div>
      <div className="bg-gb-bg bg-cover w-[368pxpx] sm:w-[1621px]  pt-8">
        <div className="text-center">
        <h4 className="text-[#FF7F0E] text-base
font-bold tracking-widest">WE WORK</h4>
          <h1 className="font-bold text-[25px]">Industries We Work In</h1>
          <div className="flex flex-col sm:flex-row sm:w-full sm:justify-between sm:items-center sm:flex-wrap pt-6 gap-4">
             <Accordion>
         <AccordionDetails className="sm:w-[790px] sm:h-[377px]">
          <h1 className="text-[18px] text-start sm:text-center sm:font-bold py-4">Fintech</h1>
          <hr></hr>
      <ul className="list-disc list-disc-red flex justify-start flex-wrap gap-6 py-3 sm:text-[22px] px-7 sm:px-[150px]"> 
        <li>Software Engineer</li>
        <li>Stock Trading Platform.</li>
        <li>Lending & Alternative Financing Platforms</li>
        <li>Insurtech</li>
        <li>Digital Banking</li>
        <li>Ecommerce</li>
        <li>AI/ML solutions</li>

      </ul>
    </AccordionDetails>
      </Accordion>
            <Accordion className="sm:w-[790px] sm:h-[377px]">
         <AccordionDetails>
          <h1 className="text-[18px] text-start sm:text-center sm:font-bold py-4">Fintech</h1>
          <hr></hr>
      <ul className="list-disc flex justify-start flex-wrap gap-6 py-3 sm:text-[22px] px-7 sm:px-[150px]"> 
        <li>Software Engineer</li>
        <li>Stock Trading Platform.</li>
        <li>Lending & Alternative Financing Platforms</li>
        <li>Insurtech</li>
        <li>Digital Banking</li>
        <li>Ecommerce</li>
        <li>AI/ML solutions</li>

      </ul>
    </AccordionDetails>
      </Accordion>
            <Accordion className="sm:w-[790px] sm:h-[377px]">
         <AccordionDetails>
          <h1 className="text-[18px] text-start sm:text-center sm:font-bold py-4">Fintech</h1>
          <hr></hr>
      <ul className="list-disc flex justify-start flex-wrap gap-6 py-3 sm:text-[22px] px-7 sm:px-[150px]"> 
        <li>Software Engineer</li>
        <li>Stock Trading Platform.</li>
        <li>Lending & Alternative Financing Platforms</li>
        <li>Insurtech</li>
        <li>Digital Banking</li>
        <li>Ecommerce</li>
        <li>AI/ML solutions</li>

      </ul>
    </AccordionDetails>
      </Accordion>
            <Accordion className="sm:w-[790px] sm:h-[377px]">
         <AccordionDetails>
          <h1 className="text-[18px] text-start sm:text-center sm:font-bold py-4">Fintech</h1>
          <hr></hr>
      <ul className="list-disc  flex justify-start flex-wrap gap-6 py-3 sm:text-[22px] px-7 sm:px-[150px]" > 
        <li>Software Engineer</li>
        <li>Stock Trading Platform.</li>
        <li>Lending & Alternative Financing Platforms</li>
        <li>AI/ML solutions</li>
         <li>Insurtech</li>
        <li>Digital Banking</li>
        <li>Ecommerce</li>

      </ul>
    </AccordionDetails>
      </Accordion>
          </div>
          </div>
      </div>
      <div>
         <div className="text-start px-4">
          <h4 className="text-[#FF7F0E] font-bold tracking-widest">TESTIMONIALS</h4>
          <h1 className="font-bold text-[25px]">What Client Says</h1>
          <p className="pt-4">
            is a tech hiring platform that helps recruiters and engineering managers effortlessly hire the best developers thanks to a powerful suite of virtual recruiting tools that help identify, assess, interview and engage developers.
          </p>
        </div>
        <div className="sm:flex sm:justify-evenly sm:gap-5">
        <div className="border-2 border-[#717171] sm:w-[368px] h-[314px] p-4 rounded-lg  mt-5 ">
        <div className=" flex gap-4 my-4 py-5">
          <div className="">
            <Avatar>
               <Image src="/clien1.svg" alt="code" width={48} height={48} />
            </Avatar>
          </div>
          <div>
            <h4 className="text-[#061C3D]">Annette Black</h4>
            <p className="text-[#42526B] text-[14px]">Chief Chairman of <span className="text-[#7534FF]">Netflix</span></p>
          </div>
        </div>
        <p>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nulla nostrum saepe soluta sed aspernatur esse blanditiis praesentium eveniet iste quam, impedit ut inventore eum a aperiam officiis dicta ipsum?
        </p>
        <Image src="/client-logo.svg" alt="code" width={68} height={34} />
        </div>
        <div className="border-2 hidden md:flex md:flex-col border-[#717171] w-[368px] h-[314px] p-4 rounded-lg  mt-5 ">
        <div className=" flex gap-4 py-5">
          <div className="">
            <Avatar>
               <Image src="/clien1.svg" alt="code" width={48} height={48} />
            </Avatar>
          </div>
          <div>
            <h4 className="text-[#061C3D]">Annette Black</h4>
            <p className="text-[#42526B] text-[14px]">Chief Chairman of <span className="text-[#7534FF]">Netflix</span></p>
          </div>
        </div>
        <p>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nulla nostrum saepe soluta sed aspernatur esse blanditiis praesentium eveniet iste quam, impedit ut inventore eum a aperiam officiis dicta ipsum?
        </p>
        <Image src="/client-logo.svg" alt="code" width={68} height={34} />
        </div>
        <div className="border-2  hidden md:flex md:flex-col border-[#717171] w-[368px] h-[314px] p-4 rounded-lg  mt-5 ">
        <div className=" flex gap-4 py-5">
          <div className="">
            <Avatar>
               <Image src="/clien1.svg" alt="code" width={48} height={48} />
            </Avatar>
          </div>
          <div>
            <h4 className="text-[#061C3D]">Annette Black</h4>
            <p className="text-[#42526B] text-[14px]">Chief Chairman of <span className="text-[#7534FF]">Netflix</span></p>
          </div>
        </div>
        <p>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nulla nostrum saepe soluta sed aspernatur esse blanditiis praesentium eveniet iste quam, impedit ut inventore eum a aperiam officiis dicta ipsum?
        </p>
        <Image src="/client-logo.svg" alt="code" width={68} height={34} />
        </div>
        <div className="border-2  hidden md:flex md:flex-col border-[#717171] w-[368px] h-[314px] p-4 rounded-lg  mt-5 ">
        <div className=" flex gap-4 py-5">
          <div className="">
            <Avatar>
               <Image src="/clien1.svg" alt="code" width={48} height={48} />
            </Avatar>
          </div>
          <div>
            <h4 className="text-[#061C3D]">Annette Black</h4>
            <p className="text-[#42526B] text-[14px]">Chief Chairman of <span className="text-[#7534FF]">Netflix</span></p>
          </div>
        </div>
        <p>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nulla nostrum saepe soluta sed aspernatur esse blanditiis praesentium eveniet iste quam, impedit ut inventore eum a aperiam officiis dicta ipsum?
        </p>
        <Image src="/client-logo.svg" alt="code" width={68} height={34} />
        </div>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-[25px] text-center">Innovative Partnerships, Infinite Possibilities</h1>
        <div className="h-[133.19px] flex justify-evenly flex-wrap mt-6">
          <div className="border border-[#C4C4C4] w-[106.73px] h-[52.1px] rounded-md p-4">
            <Image  src="/prtn1.svg" alt="FAQ" width={106.73} height={52.1} />
          </div>
          <div className="border border-[#C4C4C4] w-[106.73px] h-[52.1px] rounded-md p-4">
            <Image  src="/prtn2.svg" alt="FAQ" width={106.73} height={52.1} />
          </div>
          <div className="border border-[#C4C4C4] w-[106.73px] h-[52.1px] rounded-md p-4">
            <Image  src="/prtn3.svg" alt="FAQ" width={106.73} height={52.1} />
          </div>
          <div className="border border-[#C4C4C4] w-[106.73px] h-[52.1px] rounded-md p-4">
            <Image  src="/prtn4.svg" alt="FAQ" width={106.73} height={52.1} />
          </div>
          <div className="border border-[#C4C4C4] w-[106.73px] h-[52.1px] rounded-md p-4">
            <Image  src="/prtn5.svg" alt="FAQ" width={106.73} height={52.1} />
          </div>
          <div className="border border-[#C4C4C4] w-[106.73px] h-[52.1px] rounded-md p-4">
            <Image  src="/prtn6.svg" alt="FAQ" width={106.73} height={52.1} />
          </div>
          <div className="border border-[#C4C4C4] w-[106.73px] h-[52.1px] rounded-md p-4">
            <Image  src="/prtn7.svg" alt="FAQ" width={106.73} height={52.1} />
          </div>
          <div className="border border-[#C4C4C4] w-[106.73px] h-[52.1px] rounded-md p-4">
            <Image  src="/prtn8.svg" alt="FAQ" width={106.73} height={52.1} />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Block3
