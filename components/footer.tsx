"use client";


import { navlinks } from '@/utils/data';
import React, { useState } from 'react';
import { BsEnvelopeAt, BsInstagram, BsTelephone, BsTwitter, BsWhatsapp, BsYoutube } from 'react-icons/bs';
import { IoLocationOutline } from 'react-icons/io5';
import Button from './button';
import Link from 'next/link';
import { useFooterPageData } from '@/hooks/use-footer-data';
import { getSafeString, getSocialIconFromString } from '@/helpers/string';
import { useAppPageData } from '@/hooks/use-app-data';

const Footer = () => {
    const { data, error, loading } = useFooterPageData();
    const { data: app, error: appError, loading: appLoading } = useAppPageData();


    const validateEmail = (email: string) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return !!email.match(emailPattern);
    };

    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);

    const handleEmailChange = (e: any) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        setIsValidEmail(validateEmail(newEmail));
    };

    return (
        <div>
            <section className='bg-[url("/assets/footerbg.png")] bg-cover bg-no-repeat'>
                <div className='lg:px-24 py-16 px-10 container flex flex-col lg:flex-row lg:justify-around gap-5 items-center'>
                    <div className='w-auto lg:w-[25%] flex flex-col items-center lg:items-start'>
                        <h1 className='text-2xl font-semibold'>{getSafeString(data?.aboutTitle, !!error, loading)}</h1>
                        <p className='font-poppins text-sm leading-loose text-black my-5'>
                            {getSafeString(data?.aboutDescription, !!error, loading)}
                        </p>
                    </div>

                    <div className='text-center lg:text-left'>
                        <h1 className='text-xl font-semibold mb-5'>Links</h1>
                        {
                            (navlinks || []).map((link) => (

                                <Link key={link.url} href={link.url}> <li className='hover:font-semibold cursor-pointer hover:transition duration-150 ease-in-out hover:scale-105'>{link.link}</li></Link>
                            ))
                        }
                    </div>

                    <div className='w-auto lg:w-[25%] flex flex-col items-center lg:items-start'>
                        <h1 className='text-xl font-semibold mb-5'>Get In Touch</h1>
                        <p className=' font-poppins text-sm leading-loose text-black'>
                            {getSafeString(data?.getInTouchDescription, !!error, loading)}
                        </p>
                        <p className='flex items-center gap-2 font-poppins text-sm leading-loose text-black mt-2'><span><IoLocationOutline size={15} /></span>{getSafeString(app?.location, !!appError, appLoading)}</p>
                        <p className='flex items-center gap-2 font-poppins text-sm leading-loose text-black mt-2'><span><BsTelephone size={15} /></span>{getSafeString(app?.phone, !!appError, appLoading)}</p>
                        <p className='flex items-center gap-2 font-poppins text-sm leading-loose text-black mt-2'><span><BsEnvelopeAt size={15} /></span>{getSafeString(app?.email, !!appError, appLoading)}</p>

                    </div>

                </div>
                <div className='py-5 px-10 h-auto lg:h-[20vh] gap-5 bg-grey flex flex-col lg:flex-row justify-between lg:px-36 items-center'>

                    <div className='flex flex-col gap-2'>
                        <h1 className='text-2xl text-white font-semibold text-center lg:text-left '>Subscribe to our newletter</h1>
                        <div className='flex flex-col lg:flex-row gap-5  items-center'>
                            <input className={`border p-2 ${isValidEmail ? 'border-gray-300' : 'border-red-500'} h-[50px] w-[90%] lg:w-[25vw] border-none rounded-md p-4`}

                                type='email'
                                placeholder='example@gmail.com'
                                onChange={handleEmailChange} />
                            {!isValidEmail && <p className="text-red-600">Please enter a valid email address.</p>}
                            <Button title='Submit' />

                        </div>

                    </div>

                    <div className='flex flex-col lg:flex-row gap-5 items-center'>
                        <h1 className='text-2xl text-white font-semibold '>Find Us:</h1>
                        <div className='flex flex-row gap-3'>
                            {
                                app?.socials && app?.socials?.length > 0 && (app?.socials || [])?.map((item, index) => {
                                    const Icon = getSocialIconFromString(item.name)
                                    return (
                                        <Link href={item.link} key={index}>
                                            <div className='bg-primaryy w-[50px] h-[50px] flex items-center justify-center rounded-full hover:cursor-pointer hover:underline hover:transition duration-150 ease-in-out hover:scale-105 active:bg-grey'> <p className='text-white'>
                                                {
                                                    Icon ? <Icon size={20} /> : null
                                                }
                                                
                                            </p></div>
                                        </Link>
                                    );
                                })
                            }
                      
                        </div>
                    </div>

                </div>
                <div className='flex flex-col lg:flex-row items-center bg-white px-10 lg:px-36 h-[5vh] justify-between gap-2 pt-5'>
                    <p className='text-md text-center'> © 2023. {getSafeString(app?.appName, !!appError, appLoading)}. All Rights Reserved.</p>
                    {/* <div className='flex gap-5'>
                        <p className='text-md hover:cursor-pointer hover:underline hover:transition duration-150 ease-in-out'> Terms & Conditions</p>
                        <p className='text-md hover:cursor-pointer hover:underline hover:transition duration-200 ease-in-out'>Privacy policy</p>
                    </div> */}
                </div>


            </section>


        </div>
    );
};

export default Footer;