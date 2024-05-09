import Image from 'next/image'
import React from 'react'

const Services_card = () => {
  return (
    <div>
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
    </div>
  )
}

export default Services_card
