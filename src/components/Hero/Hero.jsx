import React from 'react'

export default function Hero({heading, subHeading}) {
  return (
    <div className='relative w-screen h-[50rem] lg:h-[40rem] bg-primary p-10'>
      <div className='flex h-full items-center justify-center lg:justify-start'>
        <div className='flex flex-col text-center md:text-left'>
          <h1 className='mb-6 text-white font-semibold text-6xl md:text-[5rem] xl:text-[9rem] xl:ml-24 lg:mb-0'>{heading}</h1>
          <h1 className='text-white text-3xl xl:ml-24'>{subHeading}</h1>
        </div>
      </div>
    </div>
  )
}
