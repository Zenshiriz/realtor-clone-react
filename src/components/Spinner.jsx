import React from 'react'
import spinner from "../assets/spinner.svg"

export default function Spinner() {
  return (
    <div className=' bg-black bg-opacity-50 flex justify-center items-center fixed left-0 right-0 top-0 z-50 bottom-0'>
      <div>
        <img src={spinner} alt="loading" className='h-24' />
      </div>
    </div>
  )
}