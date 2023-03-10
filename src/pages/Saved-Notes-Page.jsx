import React from 'react'
import Asidebar from '../components/Asidebar'

const SavedNotesPage = () => {
  return (

    <>
      <div className='grid grid-rows-3 grid-cols-5 gap-2 '>
        <div className='col-span-1 row-span-3'>
          <Asidebar />
        </div>
        Saved Note Page    
      </div>
    </>
  )
}

export default SavedNotesPage