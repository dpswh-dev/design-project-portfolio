import React from 'react'

export default function ProfileContainer({children}) {
  return (
    <div className='flex flex-col lg:flex-row  w-full  gap-6 p-6 mb-64 lg:grid lg:grid-cols-2  xl:flex'>
      {children}
    </div>
  )
}
