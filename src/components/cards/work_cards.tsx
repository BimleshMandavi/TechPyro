import { Accordion, AccordionDetails } from '@mui/material'
import React from 'react'

const Work_cards = () => {
  return (
    <div>
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
    </div>
  )
}

export default Work_cards
