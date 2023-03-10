import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { NoteContext } from '../context/Notes-Context'
import { IoIosArrowBack,IoIosArrowForward } from 'react-icons/io'
import {BiLike,BiShareAlt} from 'react-icons/bi'
import {BsThreeDotsVertical} from 'react-icons/bs'
const OpenNotes = () => {

  const note = useContext(NoteContext)

  const { id } = useParams()
  const openNote = note.find((e) => e.id === parseInt(id));
  // console.log(openNote);

  return (
    <>
      <nav className='flex '>
        <div className='w-3/5 p-5'>
          <div className=' p-4'>

            <h2 className='font-semibold text-2xl '>
              <Link to='/notes'>
                <IoIosArrowBack className='text-2xl font-semibold inline mr-4 mb-1' />
              </Link>
              CIIZ Organic Chemistry Notes</h2>
          </div>
          <div className='rounded-2xl mt-7 m-4 p-2'>
            <img src='https://images.unsplash.com/photo-1586075574644-b6e4cb9df495?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTZ8fGE0JTIwc2l6ZSUyMHBhcGVyfGVufDB8fDB8fA%3D%3D' alt='notes Photo' className='h-full w-full rounded-3xl' />
          </div>

        </div>
        <div className='w-2/5  bg-gray-100'>
          <div className='p-5 mt-4 flex justify-between w-3/5'>
            <p className='p-1 text-black'>
            <BiLike className='text-2xl font-semibold text-black inline m-1 mb-1' />
             56 Likes
            </p>
             <p className='p-1 text-black'>
              <BiShareAlt className='text-2xl font-semibold inline m-1 mb-1' />
              Share
             </p>
             <p className='p-1  text-black'>
              <BsThreeDotsVertical  className='font-semibold inline text-2xl' />
             </p>
          </div>

        </div>
      </nav>

    </>
  )
}

export default OpenNotes