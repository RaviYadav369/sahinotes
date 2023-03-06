import React from 'react'
import {FiSearch} from 'react-icons/fi'

const Navbar = () => {
  return (

    <>
    <div className='p-4 '>
      <div className='mt-5 w-3/4 m-auto '>
        <input type="search" placeholder='Search the notes, teacher..' className='p-[7px] border w-96 rounded-l-lg inline ' />
        <span className='rounded-r-lg'>
        <FiSearch className='p-[10px] mb-1 font-semibold bg-green-700 text-4xl text-white inline'  />
         </span> 
      </div>
      <div className='mt-2 h-36 bg-gradient-to-r from-pink-300 to-blue-300'>
        
      </div>
    </div>
    </>
  )
}

export default Navbar