import React from 'react'
import Asidebar from './Asidebar'
import Navbar from './Navbar'

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
                <h2 className='col-span-4 row-span-4'>Notes</h2>
            </div>
        </>
    )
}

export default Notes