import React from 'react'
import Asidebar from './Asidebar'
import Navbar from './Navbar'
import { FcOk } from 'react-icons/fc'
import NotesCard from './Notes-Card'

const Notes = () => {
    return (
        <>
            <div className='grid grid-rows-5 grid-cols-5 gap-2'>
                <div className='col-span-1 row-span-5'>
                    <Asidebar />
                </div>
                <div className='col-span-4 row-span-1'>
                    <Navbar />
                </div>
                <div className='col-span-4 row-span-4 p-3'>
                        <NotesCard />
        
                </div>
            </div>
        </>
    )
}

export default Notes