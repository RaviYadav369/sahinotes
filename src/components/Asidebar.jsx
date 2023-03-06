import React from 'react'
import { Link } from 'react-router-dom'
import { FcOk } from 'react-icons/fc'
import {BsPlus} from 'react-icons/bs'


const Asidebar = () => {
    return (
        <>
            <div className='p-3 flex flex-col'>

                <div className='relative w-3/4 m-auto '>

                    <FcOk className='text-xs absolute left-14 top-9' />
                    <h1 className='border-b-2 pt-3  text-2xl border-green-400 w-fit m-6'>sahinotes</h1>
                </div>
                <button className='bg-green-700 rounded-3xl font-semibold p-2 w-3/4 m-auto text-white'><BsPlus className='inline mr-1 mb-1 text-white text-2xl font-extrabold' />New notes</button>
                <Link to='/' className='p-2 border mt-7 font-semibold w-3/4  m-auto' >Home</Link>
                <Link to='/savednotes' className='p-2 border mt-2 font-semibold w-3/4 m-auto' >Saved Notes</Link>
            </div>
        </>
    )
}

export default Asidebar