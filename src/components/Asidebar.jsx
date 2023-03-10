import React from 'react'
import { Link } from 'react-router-dom'
import { FcOk } from 'react-icons/fc'
import {BsPlus} from 'react-icons/bs'


const Asidebar = () => {
    return (
        <>
            <div className='md:p-3  flex flex-col '>

                <div className='relative w-full lg:w-3/4 md:m-auto '>

                    <Link to='/' >
                    <FcOk className='text-xs absolute left-12 top-7' />
                    <h1 className='border-b-2 pt-3 text-lg md:text-2xl border-green-400 w-fit m-1 md:m-4'>sahinotes</h1>

                    </Link>
                </div>
                <button className='bg-green-700 mt-4 rounded-3xl font-semibold text-sm  md:p-2 w-full lg:w-3/4 md:m-auto text-white'><BsPlus className='inline mr-1 mb-1 text-white text-sm md:text-2xl font-extrabold' />New notes</button>
                <Link to='/' className='p-1  mt-5 font-semibold w-full lg:w-3/4  m-auto' >Home</Link>
                <Link to='/savednotes' className='p-1 font-semibold w-full lg:w-3/4 m-auto' >Saved Notes</Link>
            </div>
        </>
    )
}

export default Asidebar