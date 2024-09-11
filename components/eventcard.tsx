import React from 'react'
import Button from './button'
import { AiOutlineClockCircle } from "react-icons/ai"
import { TfiLocationPin } from "react-icons/tfi"

const Eventcard = () => {
  return (
    <div className='bg-white flex-col  shadow-lg h-auto gap-5 py-5 px-7 rounded-xl flex xl:flex-row m-0 p-0'>
          
        <div className='flex flex-col gap-10'>
            <h1 className='flex flex-col text-6xl text-center font-raleway font-semibold gap-4'>14<span className='text-lg text-gray-500'>December</span></h1>
            <div className='flex  xl:flex-row gap-4 justify-center'>
                <p className='flex flex-col text-sm font-poppins text-center text-gray-400'>20<span>Days</span></p>
                <p className='flex flex-col text-sm font-poppins text-center text-gray-400'>12<span>Hours</span></p>
                <p className='flex flex-col text-sm font-poppins text-center text-gray-400'>30<span>Minutes</span></p>
                <p className='flex flex-col text-sm font-poppins text-center text-gray-400'>45<span>Seconds</span></p>
            </div>
        </div>
        <div className='w-auto text-center xl:text-left'>
        <h1 className='w-[100%] text-3xl font-semibold xl:w-[500px] '>Donating Clothes to Orphanages</h1>
              <p className='font-poppins text-sm leading-loose text-gray-500 xl:w-[500px] my-5'>Lorem ipsum dolor sit amet consectetur. Lacus vitae nibh diam eu lectus sit viverra.
                </p>
        <div className='flex flex-col justify-center items-center gap-5 md:flex-row xl:gap-8 xl:w-[550px]'>
                    <Button title='Learn More'/>
                  <p className='flex gap-3 items-center font-poppins text-md text-gray-500'><AiOutlineClockCircle />5:00pm</p>
                  <p className='flex gap-3 items-center font-poppins text-md text-gray-500'><TfiLocationPin />Adenta Housing Down</p>
                </div>
        
          </div> 

     

     
    </div>
  )
}

export default Eventcard