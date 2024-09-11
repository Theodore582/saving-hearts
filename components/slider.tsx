"use client"

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials =[
    {
    image: "/ assets / card2.png",
    name: "Elizabeth Williams",
    text: `Lorem ipsum dolor sit amet consectetur. Lacus vitae nibh diam eu lectus sit viverra. Consectetur praesent morbi lobortis dolor 
            lacus nascetur aliquam.Eget sodales ipsum ullamcorper amet suspendisse consequat.Eu pulvinar eget bibendum velit.Amet nulla sed malesuada
            morbi mauris sit auctor pharetra a. 
         Aliquet eget pharetra viverra eget feugiat nulla posuere nunc.Interdum purus commodo enim eget ipsum sem est viverra odio..`
    },
    {
        image: "/ assets / card1.png",
        name: "Elizabeth Williams",
        text: `Lorem ipsum dolor sit amet consectetur. Lacus vitae nibh diam eu lectus sit viverra. Consectetur praesent morbi lobortis dolor 
            lacus nascetur aliquam.Eget sodales ipsum ullamcorper amet suspendisse consequat.Eu pulvinar eget bibendum velit.Amet nulla sed malesuada
            morbi mauris sit auctor pharetra a. 
         Aliquet eget pharetra viverra eget feugiat nulla posuere nunc.Interdum purus commodo enim eget ipsum sem est viverra odio..`
    },
    {
        image: "/ assets / card3.png",
        name: "Williams Matthew",
        text: `Lorem ipsum dolor sit amet consectetur. Lacus vitae nibh diam eu lectus sit viverra. Consectetur praesent morbi lobortis dolor 
            lacus nascetur aliquam.Eget sodales ipsum ullamcorper amet suspendisse consequat.Eu pulvinar eget bibendum velit.Amet nulla sed malesuada
            morbi mauris sit auctor pharetra a. 
         Aliquet eget pharetra viverra eget feugiat nulla posuere nunc.Interdum purus commodo enim eget ipsum sem est viverra odio..`
    },
    {
        image: "/ assets / card1.png",
        name: "Liz Williams",
        text: `Lorem ipsum dolor sit amet consectetur. Lacus vitae nibh diam eu lectus sit viverra. Consectetur praesent morbi lobortis dolor 
            lacus nascetur aliquam.Eget sodales ipsum ullamcorper amet suspendisse consequat.Eu pulvinar eget bibendum velit.Amet nulla sed malesuada
            morbi mauris sit auctor pharetra a. 
         Aliquet eget pharetra viverra eget feugiat nulla posuere nunc.Interdum purus commodo enim eget ipsum sem est viverra odio..`
    },
    
]
    

export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div>
            <Slider  {...settings}>
                {
                    testimonials.map((testimonial,index)=>(
                       
                            <div key={index}>
                                <div className='font-raleway text-center'>
                                    <h1 className='text-primaryy font-semibold text-lg pt-5'>What People Say</h1>
                                    <h1 className='font-raleway m-auto text-3xl lg:text-5xl font-semibold lg:w-[600px] lg:leading-[60px] text-white'>Testimonials</h1>
                                </div>


                        
                            <div className="rounded-full bg-black h-[100px] w-[100px] m-auto mt-16">
                                <img className="rounded-full" src={testimonial.image} alt="" />
                            </div>
                            <h1 className='text-primaryy text-center font-semibold text-lg pt-5'>{testimonial.name}</h1>
                            <p className='text-center font-poppins text-sm leading-loose text-white my-5 lg:w-[60%] m-auto'>{testimonial.text}</p>
                       
                            </div>
                       
                        
                    ))
                }

            </Slider>
           
        </div>
    );
}

