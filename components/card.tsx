import React from 'react'
import Button from './button'

interface ICard {
    image:string,
    title: string,
    text: string,


}

const Card = ({image,title,text}:ICard) => {
  return (
      <div className=' lg:w-[30%] flex flex-col justify-center items-center '>
        <div className='lg:w-[100%]  '>
            <img src={image} alt="" />
        </div>
          <div className='flex flex-col lg:gap-3 pt-4 justify-center items-center gap-5 text-center m-auto lg:items-start lg:text-left'>
              <h1 className='text-xl lg:text-2xl font-semibold text-black'>{title}</h1>
              <p className='font-poppins text-sm leading-loose text-gray-500 '>{text} </p>

                 <Button title="Donate Now" />
        </div>
    </div>
  )
}

export default Card