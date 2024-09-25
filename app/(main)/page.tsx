"use client"

import Button from '@/components/button'
import Card from '@/components/card'
import Eventcard from '@/components/eventcard'
// import Navbar from '@/components/navbar'
import { aims, cards, proof } from '@/utils/data'
import Slider from "react-slick";
import Image from 'next/image'
import { title } from 'process'
import { useState } from 'react'
import ReactPlayer from 'react-player';
import Link from 'next/link'
import ClientProvider from '@/providers/client-provider'






export default function Home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false
  };

  
  return (

    <main> 
      <ClientProvider>
    <Slider {...settings}>
        
      <section className='w-full h-auto bg-[url("/assets/map.svg")] bg-cover bg-no-repeat container'>
        <div   className='text-center flex flex-col lg:text-left lg:flex-row justify-between md:px-20 font-raleway'>
      <div className='flex items-center lg:items-start flex-col gap-5 mt-20  justify-center'>
              <h1 className='text-3xl  md:text-6xl font-bold lg:leading-[70px]'>Every life saved is a world <span className='text-secondaryy'>transformed.</span></h1>
            <p className='text-lg text-grey font-poppins '>&apos;&apos;Saving one life may not change the world, but for that one person, 
              the world changes forever.&apos;&apos;</p>

              <Button title="Donate" />
      </div>

      <div className='flex'>
            <img className='mt-10 lg:mt-0 xl:w-[1100px]' src='assets/hero1.png' alt="" />
      </div>
    </div>
     </section>

        <section className='w-full h-[85vh] bg-[url("/assets/hero5.png")] bg-cover bg-center bg-no-repeat'>
        
          <div className=' text-center flex flex-col gap-20 lg:text-left lg:flex-row justify-between md:px-20 font-raleway'>
            <div className='h-[60vh] flex items-center lg:items-start flex-col gap-5 mt-20 justify-center '>
              <h1 className='text-3xl md:text-6xl font-bold lg:leading-[70px] text-white'>I AM A HEART <br></br> <span className='text-secondaryy'>SAVER</span>.</h1>
              <p className='text-lg text-white font-poppins font-extralight '>Raising funds to sponsor children living with <br></br> cardiovascular diseases</p>
              <Button title="Donate" />
            </div>

            <div className='h-[60vh] flex items-center lg:items-start flex-col gap-5 mt-20 justify-center'>
              <ReactPlayer url='/assets/documentary.mp4' controls />
            </div>
          </div>
          

          
         
        </section>

      </Slider> 
      </ClientProvider>

      <section className='bg-[#F5F5F5] px-10 lg:px-20 py-10'>
        <div className='font-raleway text-center'>
          <h1 className='text-primaryy font-semibold text-lg pt-5'>What We Do</h1>
          <h1 className=' font-raleway m-auto text-3xl lg:text-5xl font-semibold lg:w-[600px] lg:leading-[60px]'>We are here to provide aid for the children</h1>
        </div>
       
        <div className='w-full flex flex-col gap-5 lg:flex-row justify-center lg:gap-14 mt-10'>
           {
            aims.map((aim,index)=>(
              <div className='lg:w-[240px] text-center flex flex-col gap-4'key={index}>
                <p className="text-primaryy m-auto text-4xl" >{aim.icon}</p>  
                <h1 className='lg:text-2xl font-semibold text-gray-800'>{aim.title}</h1>
                <p className='w-auto m-auto font-poppins text-sm leading-relaxed text-gray-400'>{aim.text}</p>
              </div>
            ))
           }
          
        </div>
     </section>
      

      <section className='container'>

        <div className='grid xl:grid-cols-2 gap-10 xl:px-20 xl:gap-1 h-auto py-10'>

          <div className='text-center xl:text-left font-raleway xl:w-[90%] flex flex-col justify-center items-center xl:justify-start xl:items-start m-auto'>
            <h1 className='text-primaryy font-semibold text-lg pt-10 '>Who Are We</h1>
            <h1 className='text-3xl font-raleway lg:text-5xl font-semibold lg:leading-[60px]'>A Little About Us</h1>
            <p className='font-poppins text-sm leading-loose text-gray-500 lg:w-[500px] my-5'>Nii Okai Saving Hearts Foundation (NOSHF) is a non-profit organization founded by musician Ernest Nii-Okai Okai.
               On his 10th anniversary of his album 'Mokobe', he launched the Saving Hearts Project to perform 10 heart surgeries for 
               underprivileged children in Ghana. The foundation was established to support more children who require funding for open 
               heart surgeries. On his 40th birthday, the Foundation launched the Forty Hearts Project, which currently has 15 successful 
               surgeries and hopes to complete the remaining 25.
               
             </p>
             
            <Link href="/about">
              <Button title="Learn More" />
            </Link>

              
        </div>

          <div className=''>
          <img className='w-5/5 h-3/3' src='assets/about.png' alt="" />
        </div>
        </div>

    </section>

      <section className='container px-10 lg:px-24 py-8'>
        
        <div className='font-raleway text-center'>
          <h1 className='text-primaryy font-semibold text-lg pt-5'>What We Do</h1>
          <h1 className=' font-raleway m-auto text-3xl lg:text-5xl font-semibold lg:w-[600px] lg:leading-[60px]'>Causes</h1>
        </div>
        <div className="flex flex-col gap-20 lg:flex-row lg:justify-between lg:bg-[url('/assets/shade.pn')] bg-cover bg-no-repeat h-auto">
            {
              cards.map((card,index)=>(
                
                    <Card key={index}
                    image={card.image}
                    title={card.title}
                    text={card.text}
                     />
                
              ))
            }
        </div>
        
    </section>

      <section className='bg-[#F5F5F5]'>
        <div className='lg:px-24 py-16 px-10 container '>
        <div className='font-raleway text-center'>
          <h1 className='text-primaryy font-semibold text-lg pt-5'>What We Do</h1>
          <h1 className='font-raleway m-auto text-3xl lg:text-5xl font-semibold lg:w-[600px] lg:leading-[60px]'>UpComing Events</h1>
        </div>

        <div className=' flex flex-col gap-5 2xl:flex-row justify-between'>

          <div className='flex flex-col gap-5 mt-7'>
            <Eventcard />
            <Eventcard />
            
           
          </div>

            <div className='flex flex-col justify-center md:items-center 2xl:w-[28%]  bg-[url("/assets/volunteer.png")] bg-cover bg-no-repeat  py-16 px-3 lg:px-10 '>
              <h1 className='text-4xl lg:text-5xl font-raleway font-semibold gap-4 text-primaryy backdrop-blur-sm'>Volunteer<span className='text-3xl lg:text-5xl text-white '><br></br> To Help</span></h1>
              <p className='font-poppins text-sm leading-loose text-gray-300  my-5'>Lorem ipsum dolor sit amet consectetur. Lacus vitae nibh diam eu lectus sit viverra.
              </p>
          <Button title='Volunteer Now' />
          </div>

         
          
        </div>
        </div>
    </section>

      <section className='bg-[url("/assets/proof.png")] bg-cover bg-no-repeat bg-fixed lg:h-[200px]'>
        <div className='lg:px-24 py-16 px-10 container bg-[url("/assets/proof.png)] bg-cover bg-no-repeat flex flex-col gap-10 lg:flex-row lg:gap-28 justify-center'>
  

                    {
                      proof.map((item, index)=>(
                        <div key={index}>
                        <h1 className='font-raleway text-6xl font-semibold text-white text-center'>{item.number}</h1>
                        <h1 className='font-poopins text-gray-400 font-medium text-center'>{item.title}</h1>
                        </div>
                      ))
                    }

                  
        </div>

    </section>
    

      
    


   </main>
  )
}
