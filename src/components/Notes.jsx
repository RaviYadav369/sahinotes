import React from 'react'
import Asidebar from './Asidebar'
import Navbar from './Navbar'
import { FcOk } from 'react-icons/fc'

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
                    <div className='grid grid-rows-3 grid-cols-3 gap-3'>
                        <div className='p-3 border relative '>
                            <div className='absolute h-full w-full  '>
                                <div className='bg-black w-5 text-sm p-[1px] left-[87px] top-[132px] absolute text-white'>52</div>
                                <FcOk className='absolute top-28 right-7' />
                            </div>
                            <div className='flex justify-between'>
                                <div className='w-2/5 h-32'>
                                    <img src='https://images.unsplash.com/photo-1586075574644-b6e4cb9df495?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTZ8fGE0JTIwc2l6ZSUyMHBhcGVyfGVufDB8fDB8fA%3D%3D' alt='note1' className='h-full w-full' />
                                </div>
                                <div className='w-4/5 ml-3'>
                                    <p className='font-semibold text-sm'>First Year: Dental Anatomy - Bones Complete (4 topic)</p>
                                    <div className='mt-4'>
                                        <p className='inline text-xs '>51K views </p>
                                        <p className='inline text-xs'>2 days ago </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='p-3 border relative '>
                            <div className='absolute h-full w-full  '>
                                <div className='bg-black w-5 text-sm p-[1px] left-[87px] top-[132px] absolute text-white'>5</div>
                                <FcOk className='absolute top-28 right-7' />
                            </div>
                            <div className='flex justify-between'>
                                <div className='w-2/5 h-32'>
                                    <img src='https://images.unsplash.com/photo-1586075574644-b6e4cb9df495?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTZ8fGE0JTIwc2l6ZSUyMHBhcGVyfGVufDB8fDB8fA%3D%3D' alt='note1' className='h-full w-full' />
                                </div>
                                <div className='w-4/5 ml-3'>
                                    <p className='font-semibold text-sm'>CIIPS: Triz benchmarking (Lecture 8) </p>
                                    <div className='mt-4'>
                                        <p className='inline text-xs '>29K views </p>
                                        <p className='inline text-xs'>6 days ago </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='p-3 border relative '>
                            <div className='absolute h-full w-full  '>
                                <div className='bg-black w-5 text-sm p-[1px] left-[87px] top-[132px] absolute text-white'>5</div>
                                <FcOk className='absolute top-28 right-7' />
                            </div>
                            <div className='flex justify-between'>
                                <div className='w-2/5 h-32'>
                                    <img src='https://images.unsplash.com/photo-1586075574644-b6e4cb9df495?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTZ8fGE0JTIwc2l6ZSUyMHBhcGVyfGVufDB8fDB8fA%3D%3D' alt='note1' className='h-full w-full' />
                                </div>
                                <div className='w-4/5 ml-3'>
                                    <p className='font-semibold text-sm'>JEE: Organic Chemistry - Halogens in 5 minutes</p>
                                    <div className='mt-4'>
                                        <p className='inline text-xs '>In Draft</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                     
                        <div className='p-3 border relative '>
                            <div className='absolute h-full w-full  '>
                                <div className='bg-black w-5 text-sm p-[1px] left-[87px] top-[132px] absolute text-white'>5</div>
                                <FcOk className='absolute top-28 right-7' />
                            </div>
                            <div className='flex justify-between'>
                                <div className='w-2/5 h-32'>
                                    <img src='https://images.unsplash.com/photo-1586075574644-b6e4cb9df495?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTZ8fGE0JTIwc2l6ZSUyMHBhcGVyfGVufDB8fDB8fA%3D%3D' alt='note1' className='h-full w-full' />
                                </div>
                                <div className='w-4/5 ml-3'>
                                    <p className='font-semibold text-sm'>First Year: Dental Anatomy - Bones Complete (4 topic)</p>
                                    <div className='mt-4'>
                                        <p className='inline text-xs '>51K views </p>
                                        <p className='inline text-xs'>2 days ago </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                     

                    </div>

                </div>
            </div>
        </>
    )
}

export default Notes