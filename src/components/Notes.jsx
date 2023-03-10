import React from 'react'
import NotesCard from './Notes-Card'
import NotesPageLayout from '../hoc/Notes-PageLayout'

const Notes = () => {
    return (
            <NotesCard />
    )
}

export default NotesPageLayout(Notes)