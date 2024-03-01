import React from 'react'

export default function Card({children}) {
  return (
    <div className='bg-base-100 p-12 shadow-lg rounded-md'>
      {children}
    </div>
  )
}
