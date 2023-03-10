import React from 'react'
import { FiSearch } from 'react-icons/fi'
import {  TbNumber1, TbNumber4 } from 'react-icons/tb'
import { NavLink } from 'react-router-dom'
import '../App.css';

const Navbar = () => {
  return (

    <>
      <div className='sm:p-4 p-1 '>
        <div className='sm:mt-5 mt-1 w-11/12 m-auto '>
          <input type="search" placeholder='Search the notes, teacher..' className='sm:p-[7px] p-1 border sm:w-96 w-52 rounded-l-lg inline ' />
          <span className='rounded-r-lg'>
            <FiSearch className='p-[10px] mb-1 font-semibold bg-green-700 text-4xl text-white inline' />
          </span>
        </div>
        <div className='mt-2 h-36   bg-gradient-to-r from-pink-300 to-blue-300' />
        <div className='sm:h-36 h-28 mt-0 p-1 sm:p-5 bg-gray-100'>
          <div className='flex justify-between pt-2 sm:pt-3 pb-2 sm:pb-3'>
            <div className='flex'>
              <div className='sm:h-14 sm:w-14 w-8 h-8 sm:p-4 p-1 font-semibold text-white rounded-full inline bg-green-600' >OK</div>
              <div className='ml-2 pt-1'>
                <h2 className='font-semibold '>Om Khandade</h2>
                <p className='underline text-xs sm:text-sm'>248 subscriber</p>
              </div>
            </div>
            <div>
              <button className='bg-green-600 font-semibold text-black pl-2 pr-2 p-1 rounded  sm:p-2 sm:pl-5 sm:pr-5 mt-1'>Subscribe</button>
            </div>
          </div>
          <div className='flex justify-between sm:justify-around w-full sm:w-3/5 nav'>
            <NavLink to="/notes" className={({ isActive }) => (isActive ? 'active p-1 sm:p-2 w-1/3 sm:w-3/12 sm:mr-2  font-semibold flex justify-between' : 'inactive p-1 sm:p-2 w-1/3 sm:w-3/12 sm:mr-2  font-semibold flex justify-between')}>Notes <TbNumber4  className='bg-green-600 p-1 text-lg text-white mt-1' /></NavLink>
            <NavLink to="/noteslist" className={({ isActive }) => (isActive ? 'active p-1 sm:p-2 w-2/5 sm:w-3/12 sm:mr-2  font-semibold flex justify-between' : 'inactive p-1 sm:p-2 w-2/5 sm:w-3/12 sm:mr-2  font-semibold flex justify-between')}>NotesList <TbNumber1 className='bg-gray-500 p-1 text-lg text-white mt-1' /></NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active p-1 sm:p-2 sm:w-3/12  sm:mr-2  font-semibold ' : 'inactive p-1 sm:p-2  sm:w-3/12 sm:mr-2  font-semibold ')}>About</NavLink>

          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar