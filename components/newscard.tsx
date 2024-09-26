import React from 'react';
import { News } from '@/types';
import { getSafeString } from '@/helpers/string';

interface ICard {
    news: News;
}

const NewsCard = ({ news }: ICard) => {
    return (
        <div className=' lg: flex flex-col gap-3 px-8 py-5 bg-[#F6F6F6] '>
            <h1 className='text-primaryy font-semibold text-sm text-left'>News</h1>
            <div className='flex flex-col lg:gap-3 pt-4 gap-8 lg:text-left'>
                <h1 className='font-raleway text-xl lg:text-[23px] font-bold tracking-wide leading-[35px] text-black'>{getSafeString(news?.title)}</h1>
                <p className='font-poppins text-sm leading-loose text-gray-500 '>{getSafeString(news?.description)?.slice(0, 150)}... </p>
                <h1 className='text-black font-semibold text-sm text-left pt-5 hover:underline hover:cursor-pointer'>Read More</h1>

            </div>
        </div>
    );
};

export default NewsCard;