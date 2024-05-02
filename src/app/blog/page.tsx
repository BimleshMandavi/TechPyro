import React from 'react'

const BlogPage = () => {
  return (
    <div className='h-[100vh] w-full'>
      <div className="relative h-full w-full bg-custom1-bg bg-cover bg-center text-white">
      <div className="absolute inset-0 bg-black bg-opacity-80" />
     <div className='relative '>
          <div className=' h-[233px]'>
            <h4 className='text-[16px] text-[#0C487B] w-[142px] h-[24px]'>LATEST BLOGS</h4>
          <h1 className='text-[30px] font-black'>Blog & News</h1>
          <div className='flex w-[361px] h-[156px]' >
          <span className='w-[120px] h-[12px] sm:w-full'>Tech pyro</span><span className='text-[16px]'>is a tech hiring platform that helps recruiters and engineering managers effortlessly hire the best developers thanks to a powerful suite of virtual recruiting tools that help identify, assess, interview and engage developers.</span>
          </div>
        </div>
     </div>
    </div>
    </div>
  )
}

export default BlogPage
