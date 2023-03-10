import React from 'react'
import Asidebar from './Asidebar'
import Navbar from './Navbar'
import { FcOk } from 'react-icons/fc'
import NotesCard from './Notes-Card'

const Notes = () => {
    return (
        <>
            <div className='grid grid-rows-3 grid-cols-5 gap-2 '>
                <div className='col-span-1 row-span-3'>
                    <Asidebar />
                </div>
                <div className='col-span-4 row-span-1'>
                    <Navbar />
                </div>
                <div className='col-span-4 row-span-2 p-3'>
                        <NotesCard />
        
                </div>
            </div>
        </>
    )
}

export default Notes