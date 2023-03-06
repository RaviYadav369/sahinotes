import React from 'react'
import { useParams } from 'react-router-dom'
import About from '../components/About';
import Notes from '../components/Notes';
import NotesList from '../components/NotesList';

const HomePage = () => {
    const {type} =useParams();
  return (
    <>
    <div >
        {type === 'notes' && <Notes />}
        {type === 'noteslist' && <NotesList />}
        {type === 'about' && <About />}
    </div>
    </>
  )
}

export default HomePage