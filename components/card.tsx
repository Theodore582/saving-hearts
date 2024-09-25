import React from 'react';
import Button from './button';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { SanityImage } from './sanity';

interface ICard {
  image: SanityImageSource | string,
  title: string,
  description: string,


}

const Card = ({ image, title, description }: ICard) => {
  return (
    <div className=' w-full flex flex-col justify-center items-center gap-2  '>
      <div className='  w-full '>
        <SanityImage image={image} usesImg className="overflow-hidden max-h-[250px] w-full  " fit="cover"/>
      </div>
      <div className='flex flex-col lg:gap-3  justify-center items-center gap-5 text-center m-auto lg:items-start lg:text-left'>
        <h1 className='text-xl lg:text-2xl font-semibold text-black'>{title}</h1>
        <p className='font-poppins text-sm leading-loose text-gray-500 '>{description} </p>

        <Button title="Donate Now" />
      </div>
    </div>
  );
};

export default Card;