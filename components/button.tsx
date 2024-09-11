import React from 'react'

interface IButton{
 title:string
}

const Button = ({title}:IButton) => {
  return (
      <div className='bg-primaryy w-[180px] h-[50px] rounded-md flex justify-center items-center font-raleway  hover:bg-grey 
      hover:scale-105 active:bg-primaryy hover:transition duration-150 ease-in-out cursor-pointer' >
          <h1 className='text-lg font-bold text-white'>{title}</h1>
    </div>
  )
}

export default Button