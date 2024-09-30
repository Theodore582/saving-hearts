import React, { useState, useEffect } from 'react';
import Button from './button';
import { AiOutlineClockCircle } from "react-icons/ai";
import { TfiLocationPin } from "react-icons/tfi";
import { Event } from '@/types';
import { getSafeString } from '@/helpers/string';
import { format, differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';
import { CustomError } from './custom';
import CustomLoader from './custom/loader';
import { useHomePageData } from '@/hooks/use-home-page-data';
import { useCausesData } from '@/hooks/use-causes-data';
import { useEventsData } from '@/hooks/use-events-data';
import Image from 'next/image';

const EventCard = ({ event: { content, date, image, description, location, title } }: { event: Event; }) => {
  const eventDate = new Date(date);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Function to calculate time remaining
  const calculateTimeLeft = () => {
    const currentDate = new Date();
    const daysLeft = differenceInDays(eventDate, currentDate);
    const hoursLeft = differenceInHours(eventDate, currentDate) % 24;
    const minutesLeft = differenceInMinutes(eventDate, currentDate) % 60;
    const secondsLeft = differenceInSeconds(eventDate, currentDate) % 60;

    return {
      days: daysLeft,
      hours: hoursLeft,
      minutes: minutesLeft,
      seconds: secondsLeft,
    };
  };

  useEffect(() => {
    // Update time left immediately
    setTimeLeft(calculateTimeLeft());

    // Set an interval to update the countdown every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, [date]);

  // Format date for display
  const formattedDay = format(eventDate, 'dd');
  const formattedMonth = format(eventDate, 'MMMM');
  const formattedTime = format(eventDate, 'p');

  const { data, error, loading } = useHomePageData();
  const { causes, error: causesError, loading: causesLoading } = useCausesData();
  const { events, error: eventsError, loading: eventsLoading } = useEventsData();


  if (error || causesError || eventsError) {
    return (
      <CustomError  />
    );
  }
  if (loading || causesLoading || eventsLoading) {
    return (
      <CustomLoader isScreenHeight />
    );
  }

  return (
    <div className='bg-white flex-col shadow-lg h-auto gap-5 py-5 px-7 justify-between rounded-xl flex xl:flex-row m-0 p-0'>
      <div className='flex flex-col gap-16'>
        {/* Dynamically show event date */}
        <h1 className='flex flex-col text-6xl text-center font-raleway font-semibold gap-4'>
          {formattedDay}
          <span className='text-lg text-gray-500'>{formattedMonth}</span>
        </h1>
        <div className='flex xl:flex-row gap-4 justify-center'>
          <p className='flex flex-col text-sm font-poppins text-center text-gray-400'>
            {timeLeft.days}<span>Days</span>
          </p>
          <p className='flex flex-col text-sm font-poppins text-center text-gray-400'>
            {timeLeft.hours}<span>Hours</span>
          </p>
          <p className='flex flex-col text-sm font-poppins text-center text-gray-400'>
            {timeLeft.minutes}<span>Minutes</span>
          </p>
          <p className='flex flex-col text-sm font-poppins text-center text-gray-400'>
            {timeLeft.seconds}<span>Seconds</span>
          </p>
        </div>
      </div>
      <div className='text-center xl:text-left w-[300px]'>
        {/* Dynamically show event title */}
        <h1 className='w-[50%] text-3xl font-semibold xl:w-[300px]'>
          {getSafeString(title)}
        </h1>
        {/* Dynamically show event description */}
        <p className='font-poppins text-sm leading-loose text-gray-500 xl:w-[500px] my-5'>
          {getSafeString(description)}
        </p>
        <div className=''>
          <Button title='Learn More' />
          {/* Dynamically show event time */}
         
        </div>
        <div className='flex flex-col gap-2'>
          <p className='flex gap-3 items-center font-poppins text-md text-gray-500'>
            <AiOutlineClockCircle />
            {formattedTime}
          </p>
          {/* Dynamically show event location */}
          <p className='flex gap-3 items-center font-poppins text-md text-gray-500'>
            <TfiLocationPin />
            {getSafeString(location)}
          </p>
        </div>
      </div>

      <div className=''>    
        <Image
        className='rounded-md'
          src="/assets/rockina.jpg"
          alt="img"
          width={150}
          height={100}
          />
            </div> 
    </div>
  );
};

export default EventCard;
