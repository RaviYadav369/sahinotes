import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FcOk } from 'react-icons/fc'
import { NoteContext } from '../context/Notes-Context'

const NotesCard = () => {
    // const note = [
    //     {
    //         name: "First Year: Denatal Anatomy - Bones Complete  (4 topics)",
    //         id: 1,
    //         notesImg: "https://images.unsplash.com/photo-1586075574644-b6e4cb9df495?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTZ8fGE0JTIwc2l6ZSUyMHBhcGVyfGVufDB8fDB8fA%3D%3D",
    //         views: "51K views",
    //         pages: "52",
    //         upload: "2 days ago",
    //     },
    //     {
    //         name: "CIIPS: Triz benchmarking (Lecture 8)",
    //         id: 2,
    //         notesImg: "https://images.unsplash.com/photo-1586075574644-b6e4cb9df495?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTZ8fGE0JTIwc2l6ZSUyMHBhcGVyfGVufDB8fDB8fA%3D%3D",
    //         views: "29K views",
    //         pages: "5",
    //         upload: "6 days ago",
    //     },
    //     {
    //         name: "JEE: Organic Chemistry - Halogens in 5 minutes",
    //         id: 3,
    //         notesImg: "https://images.unsplash.com/photo-1586075574644-b6e4cb9df495?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTZ8fGE0JTIwc2l6ZSUyMHBhcGVyfGVufDB8fDB8fA%3D%3D",
    //         views: "51K views",
    //         pages: "5",
    //         upload: "5 days ago",
    //     },
    //     {
    //         name: "First Year: Denatal Anatomy - Bones Complete  (4 topics)",
    //         id: 4,
    //         notesImg: "https://images.unsplash.com/photo-1586075574644-b6e4cb9df495?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTZ8fGE0JTIwc2l6ZSUyMHBhcGVyfGVufDB8fDB8fA%3D%3D",
    //         views: "51K views",
    //         pages: "40",
    //         upload: "2 days ago"
    //     },
    // ]
    const note = useContext(NoteContext)

    return (
        <>
            <div className='grid grid-rows-2 grid-cols-3 gap-3'>
                {note.map((each, index) => (
                    <Link to={`/opennotes/${each.id}`} key={index} >
                        <div className='p-3 border relative '>
                            <div className='absolute h-full w-full  '>
                                <div className='bg-black w-5 text-sm p-[1px] left-[87px] top-[132px] absolute text-white'>{each.pages}</div>
                                <FcOk className='absolute top-28 right-7' />
                            </div>
                            <div className='flex justify-between'>
                                <div className='w-2/5 h-32'>
                                    <img src={each.notesImg} alt='note1' className='h-full w-full' />
                                </div>
                                <div className='w-4/5 ml-3'>
                                    <p className='font-semibold text-sm'>{each.name}</p>
                                    <div className='mt-4'>
                                        <p className='inline text-xs '>{each.views}</p>
                                        <p className='inline text-xs'>{each.upload}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                )
                )}

            </div>
        </>
    )
}

export default NotesCard