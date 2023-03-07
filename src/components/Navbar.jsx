import React from 'react'
import { FiSearch } from 'react-icons/fi'
import {TbNumber3 , TbNumber1} from 'react-icons/tb'

const Navbar = () => {
  return (

    <>
      <div className='p-4 '>
        <div className='mt-5 w-3/4 m-auto '>
          <input type="search" placeholder='Search the notes, teacher..' className='p-[7px] border w-96 rounded-l-lg inline ' />
          <span className='rounded-r-lg'>
            <FiSearch className='p-[10px] mb-1 font-semibold bg-green-700 text-4xl text-white inline' />
          </span>
        </div>
        <div className='mt-2 h-36 bg-gradient-to-r from-pink-300 to-blue-300' />
        <div className='h-36 mt-0 p-5 bg-gray-100'>
          <div className='flex justify-between pt-3 pb-3'>
            <div className='flex'>
              <div className='h-14 w-14 p-4 font-semibold text-white rounded-full inline bg-green-400' >OK</div>
              <div className='ml-2 pt-1'>
                <h2 className='font-semibold'>Om Khandade</h2>
                <p className='underline text-sm'>248 subscriber</p>
              </div>
            </div>
            <div>
              <button className='bg-green-400 text-black rounded p-2 pl-5 pr-5 mt-1'>Subscribe</button>
            </div>
          </div>
          <div className='flex justify-around w-3/5'>
            <div className='p-2 w-3/12 mr-2 border-b-4 font-semibold border-green-600 flex justify-between'>Notes <TbNumber3 className='bg-green-600 p-1 text-lg mt-1 text-white' /></div>
            <div className='p-2 w-3/12 mr-2  font-semibold flex justify-between'>NotesLists <TbNumber1 className='bg-gray-500 p-1 text-lg text-white mt-1' /></div>
            <div className='p-2 w-3/12 mr-2  font-semibold '>About</div>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar