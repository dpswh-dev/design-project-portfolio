import React from 'react'

export default function Card({caseStudy, desc, imgSrc, alt, className}) {
  return (
    <div className='h-[32rem] mt-24 mb-16'>
      <div className='flex h-full items-center justify-center lg:justify-start'>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure><img src={imgSrc} alt={alt} /></figure>
          <div className="card-body">
            <h2 className="card-title text-accent text-2xl">{caseStudy}</h2>
            <p className='text-lg'>{desc}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-outline hover:bg-accent mt-6 text-lg font-normal hover:border-none">Read more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
