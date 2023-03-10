import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { NoteContext } from '../context/Notes-Context'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { BiLike, BiShareAlt } from 'react-icons/bi'
import { BsThreeDotsVertical } from 'react-icons/bs'
const OpenNotes = () => {

  const note = useContext(NoteContext)

  const { id } = useParams()
  const openNote = note.find((e) => e.id === parseInt(id));
  // console.log(openNote);

  return (
    <>
      <nav className=' md:flex block '>
        <div className='md:w-3/5 w-full md:p-5 pb-0'>
          <div className='p-1 md:p-4 pb-0'>

            <h2 className='font-semibold md:text-2xl '>
              <Link to='/notes'>
                <IoIosArrowBack className='md:text-2xl text-sm font-semibold md:inline mr-4 mb-1' />
              </Link>
              {openNote.name} </h2>
          </div>
          <div className='rounded-2xl h-screen mt-7  md:m-4 mb-0 p-2 pb-0 '>
            <img src={openNote.notesImg} alt='notes Photo' className='h-full  w-full rounded-3xl' />
          </div>

        </div>
        <div className='md:w-2/5 w-full bg-gray-100 flex'>
          <div className='w-1/12 hidden pl-2 pr-2 items-center md:flex'><IoIosArrowForward /></div>
          <div className='w-auto'>
            <div className='p-5 mt-4 flex justify-between w-full md:w-3/5'>
              <p className='p-1 text-black'>
                <BiLike className='text-2xl font-semibold text-black inline m-1 mb-1' />
                {openNote.like} Likes
              </p>
              <p className='p-1 text-black'>
                <BiShareAlt className='text-2xl font-semibold inline m-1 mb-1' />
                Share
              </p>
              <p className='p-1  text-black'>
                <BsThreeDotsVertical className='font-semibold inline text-2xl' />
              </p>
            </div>
            <div className='flex mt-3 md:mt-7'>
              <div className='w-2/12 ml-2 md:ml-5'>
                <img src={openNote.authorImg} alt='aurthor Photo' className='h-12 w-12 rounded-full' />
              </div>
              <div className='w-2/4'>
                <p className='font-semibold text-sm md:text-xl'>{openNote.author}</p>
                <p className='text-sm'>GPA 10</p>

              </div>
              <div className='w-1/5'>
                <button className='bg-green-700 text-white p-1 pl-4 pr-4 rounded-2xl'>Follow</button>
              </div>
            </div>

            <div className='mt-10 p-5'>
              <h2 className='text-2xl font-semibold'>Description</h2>
              <p className='text-black font-normal leading-5'>Tristique posuere faucibus sed vel ut suspendisse. Pellentesque purus accumsan nisl platea odio metus. Egestas sit malesuada sit sit habitant. Odio ornare potenti neque diam urna id. Ultrices massa massa consequat habitant dui massa sapien et, morbi. Malesuada scelerisque non fermentum, velit ullamcorper vestibulum. Orci velit tortor ornare et urna arcu nisl. Ipsum neque nulla sed id venenatis.</p>
            </div>

            <div>
              <h2 className='text-2xl font-semibold p-5 mt-'>Resourses</h2>
              <div className='border-4 p-3 flex '>
                <img src={openNote.resourses} alt='Resourses Photo' className='h-32' />
                <div className='w-3/4'>
                  <p className='font-semibold p-2 ml-2'>Wheeler's Dental Anatomy, Physiology and Occlusion, 1st South Asia Edition</p>
                  <button className='bg-yellow-500 text-white p-2 ml-5 md:ml-14 mt-2 items-center rounded-xl'>Buy on Amazon</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

    </>
  )
}

export default OpenNotes