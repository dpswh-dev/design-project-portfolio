import React from 'react'

export default function Card({children}) {
  return (
    <div className='bg-base-100 p-6 shadow-lg rounded-md'>
      {children}
    </div>
  )
}
