import React from 'react'
import Asidebar from '../components/Asidebar'
import Navbar from '../components/Navbar'


const NotesPageLayout = (Component) => ({ ...props })=> {
    return (
        <>
            <div className='grid grid-rows-3 grid-cols-5 sm:gap-0 gap-2 '>
                <div className='col-span-1 row-span-3 hidden md:block '>
                    <Asidebar />
                </div>
                <div className='md:col-span-4 row-span-1 sm:row-span-1 col-span-5  '>
                    <Navbar />
                </div>
                <div className='sm:col-span-4 col-span-5 row-span-2 sm:p-3 p-1 '>
                    <Component {...props} />

                </div>
            </div>
        </>
    )
}

export default NotesPageLayout