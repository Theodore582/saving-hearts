import Link from 'next/link';
import React from 'react'

interface IButton{
  title: string
  link?: string
}

const Button = ({title, link}:IButton) => {
  return link ? (
    <Link href={link}>
      <button className='bg-primaryy w-[180px] h-[50px] rounded-md flex justify-center items-center font-raleway  hover:bg-grey 
      hover:scale-105 active:bg-primaryy hover:transition duration-150 ease-in-out cursor-pointer' >
        <p className='text-lg font-bold text-white'>{title}</p>
      </button>
    </Link>
  )
    : (
      <button className='bg-primaryy w-[180px] h-[50px] rounded-md flex justify-center items-center font-raleway  hover:bg-grey 
      hover:scale-105 active:bg-primaryy hover:transition duration-150 ease-in-out cursor-pointer' >
          <p className='text-lg font-bold text-white'>{title}</p>
    </button>
  )
}

export default Button