import Image from "next/image";
import { FaPlayCircle } from "react-icons/fa";


export default function Home() {
  return (
    <div>
    <div className="relative h-[728.98px] w-full bg-custom-bg bg-cover bg-center text-white">
      <div className="absolute inset-0 bg-black bg-opacity-70" />
      <div className="relative flex items-center justify-center h-full space-y-4 ml-8">
        <Image src="/rectangle-1.svg" alt="Example" width={4} height={222} />
        <div className="flex justify-between flex-col gap-1 mx-6 ">
        <h1 className="text-4xl font-bold">The Tech</h1>
        <h1 className="text-4xl font-bold">Behind Building</h1>
        <h2 className="text-3xl pt-2">Great Tech Teams</h2>
        <p className="max-w-2xl pt-5">
          ThinkHumble is a tech hiring platform that helps recruiters and engineering managers
          effortlessly hire the best developers thanks to a powerful suite of virtual recruiting
          tools that help identify, assess, interview, and engage developers.
        </p>
        <div className="mt-10 flex justify-between">
         <div className="w-[220px] h-[44px] bg-[#0C487B] flex justify-evenly items-center rounded">
          <FaPlayCircle />
           <div> <button>SWIPE TO THIS VIDEO</button></div>
           </div>
           <div className="h-[44px] w-[140px] bg-[#000000] flex justify-center items-center rounded"> <button>WE ARE HIRING</button></div>
        </div>
        </div>
      </div>
    </div>
    <div className="px-8 py-8">
      <h1 className="text-black font-bold text-[25px]">Our Services</h1>
      <p className="pt-5 text-[16px] font-normal">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi velit nam libero quidem quasi, recusandae aliquid, corporis architecto minima animi accusantium possimus eaque alias maiores aut officia quis illum. Illum fugiat quod quibusdam amet animi maxime omnis, dolorem reprehenderit neque libero, nostrum numquam, suscipit recusandae! Tenetur provident iure at excepturi, eveniet, repudiandae, quod commodi impedit inventore sint pariatur! Quos fugiat labore rem voluptates beatae nostrum, consequatur delectus exercitationem hic veniam aspernatur molestias dicta placeat totam necessitatibus ullam, assumenda, vitae deserunt!</p>
    </div>
    <div className="px-5 py-5 flex flex-col justify-center gap-8">
     <div className="flex flex-col gap-2 border-r-[10px] border-b-[10px] border-[#0C487BD4] rounded-[14px] p-5 ">
        <div className="flex"> 
      <div className="border-2 border-red-500 rounded-full p-2"> 
        <div className="rounded-full overflow-hidden"> 
          <Image src="/code.svg" alt="code" width={24.3} height={24.3} />
        </div>
      </div>
    </div>
      <h1 className="text-black font-bold text-[16px]">Web Design & Development</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor sit dolores corrupti laborum reprehenderit repellat ea numquam dolorum repellendus dolore a commodi illum optio, laboriosam hic quidem, qui delectus. Esse voluptate libero veritatis quisquam neque aperiam sapiente consequuntur tempora ab architecto. Explicabo maxime a quasi id atque! Suscipit, magnam excepturi!</p>
      </div>
        <div className="flex flex-col gap-2 border-r-[10px] border-b-[10px] border-[#335c80d4] rounded-[14px] bg-[#0C487B] text-white p-5">
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
        <div className="flex flex-col gap-2 border-r-[10px] border-b-[10px] border-[#0C487BD4] rounded-[14px] p-5">
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
        <div className="flex flex-col gap-2 border-r-[10px] border-b-[10px] border-[#0C487BD4] rounded-[14px] p-5">
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
       <div className="flex flex-col gap-2 border-r-[10px] border-b-[10px] border-[#0C487BD4] rounded-[14px] p-5">
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
      <div className="flex flex-col gap-2 border-r-[10px] border-b-[10px] border-[#0C487BD4] rounded-[14px] p-5">
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
      <div>
      <div>
         <Image src="/meetup.svg" alt="code" width={500} height={100} />
      </div>
      <div className="flex flex-col justify-center gap-4 mt-3">
        <h4 className="text-[#FF7F0E]">Case Study</h4>
        <h1 className="text-black font-bold text-[25px]">Driving Success: A Tech Pyro Case Study</h1>
        <p>Welcome to a journey of innovation and success with [Your Company Name]. In our latest case study, we delve into the transformative partnership with [Client Company], showcasing a remarkable story of overcoming challenges and achieving unprecedented results. From the initial hurdles to the triumphant outcomes, this case study unveils the impact of [Your Product/Service] in [Client Industry]. Discover how our tailored solutions, strategic approach, and collaborative efforts propelled [Client Company] to new heights, setting a benchmark for excellence in their sector. Join us as we explore the intricate details of this success story, demonstrating the power of innovation and the tangible benefits experienced by our valued client. This is more than just a case study; it's a testament to the potential of partnership and the possibilities that unfold when visionary companies come together to create meaningful change.</p>
      </div>
        <div className="w-[220px] h-[44px] bg-[#0C487B] mt-4 flex justify-evenly items-center rounded text-white">
           <button className="text-white">LEARN MORE..</button>
           </div>
      </div>
      <div>
        
      </div>
    </div>
    </div>
  );
}
