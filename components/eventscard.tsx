import React from 'react'
import dayjs from 'dayjs'
import { Event } from '@/types';
import { SanityImage } from './sanity';
import { getSafeString } from '@/helpers/string';


interface ICard {
   event: Event


}

const EventsCard = ({ event }: ICard) => {
    return (
        <div className=' lg:flex flex-col gap-3 px-5 py-5 bg-[#F6F6F6] lg:w-[500px] '>
            <div className='  '>
                <SanityImage className="rounded-md object-cover" usesImg image={event?.image} />
            </div>
            <h1 className='text-primaryy font-semibold text-sm text-left'>Events</h1>
            <div className='flex flex-col lg:gap-3 pt-4 gap-10 lg:text-left '>
                <h1 className='font-raleway text-xl lg:text-[23px] font-bold tracking-wide leading-[35px] text-black'>{getSafeString(event?.title)}</h1>
                <p className='font-poppins text-sm leading-loose text-gray-500 '>{getSafeString(event?.description).slice(0, 150)}... </p>

            </div>
            <div>
                
                <h1 className='text-gray-400 font-semibold text-sm text-left pt-5 '>
                    {dayjs(event?.date).format("MMM D, YYYY")}
                </h1>
                <h1 className='text-black font-semibold text-sm text-left pt-3 hover:underline hover:cursor-pointer'>Read More</h1>
            </div>
        </div>
    )
}

export default EventsCard