import React from 'react'

const BlogPage = () => {
  return (
    <div className='h-[100vh] w-full'>
      <div className="relative h-full w-full bg-custom1-bg bg-cover bg-center text-white">
      <div className="absolute inset-0 bg-black bg-opacity-80" />
     <div className='relative flex flex-col   sm:flex-row sm:justify-center'>
          <div className=' pt-5 flex flex-col justify-center '>
            <h4 className='text-[16px] text-[#0C487B]'>LATEST BLOGS</h4>
          <h1 className='text-[30px] font-black'>Blog & News</h1>
          <div className='flex' >
          <h1 className='text-[16px] font-semibold'>TECH PYRO</h1> <span className='text-[16px]'>is a tech hiring platform that helps recruiters and engineering managers effortlessly hire the best developers thanks to a powerful suite of virtual recruiting tools that help identify, assess, interview and engage developers.</span>
          </div>

        </div>
     </div>
    </div>
    </div>
  )
}

export default BlogPage
