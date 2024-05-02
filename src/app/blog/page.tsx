import Image from 'next/image'
import React from 'react'

const BlogPage = () => {
  return (
    <div className='h-[100vh] w-full'>
      <div className="relative h-full w-full bg-custom1-bg bg-cover bg-center text-white">
      <div className="absolute inset-0 bg-black bg-opacity-80" />
     <div className='relative '>
          <div className=' h-[233px] flex flex-col justify-center absolute top-[230px] inset-0 bg-black bg-opacity-40 px-6'>
            <h4 className='text-[16px] text-[#0C487B] w-[142px] h-[24px]'>LATEST BLOGS</h4>
          <h1 className='text-[30px] font-black'>Blog & News</h1>
          <div className='text-[16px]'>
          <span className='w-[80px] font-bold'>TECH PYRO</span> is a tech hiring platform that helps recruiters and engineering managers effortlessly hire the best developers thanks to a powerful suite of virtual recruiting tools that help identify, assess, interview and engage developers.
          </div>
        </div>
        <div className='absolute top-[480px] inset-0 bg-black bg-opacity-70'>
          <div>
            <Image src="/grp-img1.svg" width={368} height={216} alt="grp1" />
          </div>
          <div>
            
          </div>
        </div>
     </div>
    </div>
    </div>
  )
}

export default BlogPage
