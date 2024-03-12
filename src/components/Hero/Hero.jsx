import React from 'react'

export default function Hero({heading, subHeading}) {
  return (
    <div className='relative w-screen h-[50rem] lg:h-[40rem] bg-primary p-10'>
      <div className='flex h-full items-center justify-center lg:justify-start'>
        <div className='flex flex-col text-center md:text-left'>
          <h1 className='mb-2 text-white font-semibold text-4xl md:text-[5rem] xl:text-9xl xl:ml-24 lg:mb-0'>{heading}</h1>
          <h1 className='text-white text-xl xl:ml-24 md:mt-8 md:text-3xl'>{subHeading}</h1>
        </div>
      </div>
    </div>
  )
}
