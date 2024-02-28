import React from 'react'

export default function Profile({name, course, desc}) {
  return (
    <div className="bg-white p-8 text-left rounded-lg relative top-40 mb-24 min-w-52">
      <div className=' rounded-full bg-primary h-24 w-24 absolute hidden md:block top-[-25%] left-5 md:h-40 md:w-40 md:top-[-35%] lg:h-32 lg:w-32 sm:h-16 '/>
      <div className='flex flex-col md:place-items-center'>
        <div className='relative md:bottom-4 lg:left-16 md:left-[-2rem]'>
          <h1 className='text-accent text-2xl lg:text-3xl font-semibold md:text-4xl'>{name}</h1>
          <h1 className='text-[#707070] font-normal text-lg mb-6 lg:mb-0 lg:text-lg md:text-xl'>{course}</h1>
        </div>
      </div>
      <h1 className='text-primaryText font-normal text-lg lg:text-lg md:text-2xl'>{desc}</h1>
    </div>
  )
}
