"use client";

import Button from '@/components/button';
import Card from '@/components/card';
import Eventcard from '@/components/eventcard';
import Slider from "react-slick";
import ReactPlayer from 'react-player';
import ClientProvider from '@/providers/client-provider';
import Link from 'next/link';
import { useHomePageData } from '@/hooks/use-home-page-data';
import { CustomError } from '@/components/custom';
import { getSafeString } from '@/helpers/string';
import { SanityImage } from '@/components/sanity';
import { useCausesData } from '@/hooks/use-causes-data';
import { useEventsData } from '@/hooks/use-events-data';
import CustomLoader from '@/components/custom/loader';






export default function Home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  const { data, error, loading } = useHomePageData();
  const { causes, error: causesError, loading: causesLoading } = useCausesData();
  const { events, error: eventsError, loading: eventsLoading } = useEventsData();


  if (error || causesError || eventsError) {
    return (
      <CustomError />
    );
  }
  if (loading || causesLoading || eventsLoading) {
    return (
      <CustomLoader isScreenHeight />
    );
  }

  return (

    <main>
      <ClientProvider>
        <Slider {...settings}>
          <section className='w-full h-auto bg-[url("/assets/map.svg")] bg-cover bg-no-repeat container'>
            <div className='text-center flex flex-col lg:text-left lg:flex-row justify-between md:px-20 font-raleway'>
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
          <h1 className=' font-raleway m-auto text-3xl lg:text-5xl font-semibold max-w-[600px] lg:leading-[60px]'>
            {getSafeString(data?.whatWeDoTitle)}
          </h1>
        </div>

        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto  lg:gap-10 mt-10'>
          {
            data && data.whatWeDoPoints?.length && data?.whatWeDoPoints.map((aim, index) => (
              <div className='w-full text-center flex flex-col items-center  gap-4' key={index}>
                <SanityImage image={aim?.wwdIcon} className="w-[100px] h-[50px]" usesImg fit="contain" />
                <h1 className='lg:text-xl font-semibold text-gray-800'>{aim.wwdTitle}</h1>
                <p className='w-auto m-auto font-poppins text-sm leading-relaxed text-gray-400'>{aim.wwdDescription}</p>
              </div>
            ))
          }

        </div>
      </section>


      <section className='container'>

        <div className='grid xl:grid-cols-2 gap-10 xl:px-20 xl:gap-1 h-auto py-10'>

          <div className='text-center xl:text-left font-raleway xl:w-[90%] flex flex-col justify-center items-center xl:justify-start xl:items-start m-auto'>
            <h1 className='text-primaryy font-semibold text-lg pt-10 '>{getSafeString(data?.about?.aboutSubtitle)}</h1>
            <h1 className='text-3xl font-raleway lg:text-5xl font-semibold lg:leading-[60px]'>{getSafeString(data?.about?.aboutTitle)}</h1>
            <p className='font-poppins text-sm leading-loose text-gray-500 lg:w-[500px] my-5'>
              {getSafeString(data?.about?.aboutDescription)}
            </p>

            <Link href="/about">
              <Button title="Learn More" />
            </Link>


          </div>

          <div className=''>
            <SanityImage image={data?.about?.aboutImage} className="w-5/5 h-3/3" usesImg fit="contain" />

          </div>
        </div>

      </section>

      <section className='container px-10 lg:px-24 py-8'>

        <div className='font-raleway text-center'>
          <h1 className='text-primaryy font-semibold text-lg pt-5'>What We Do</h1>
          <h1 className=' font-raleway m-auto text-3xl lg:text-5xl font-semibold lg:w-[600px] lg:leading-[60px]'>Causes</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:justify-between lg:bg-[url('/assets/shade.pn')] bg-cover bg-no-repeat h-auto">
          {
            causes && causes.map((card, index) => (

              <Card key={index}
                image={card.image}
                title={card.title}
                description={card.description}
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

          <div className=' grid grid-cols-1 lg:grid-cols-4 gap-5 mt-4 2xl:flex-row justify-between'>

            <div className='flex flex-col gap-5 col-span-1 lg:col-span-3'>
              {
                events?.length && events?.slice(0, 2)?.map((event, index) => (
                  <Eventcard key={index} event={event} />
                ))
              }



            </div>

            <div className='flex flex-col justify-center md:items-center w-full text-center  bg-[url("/assets/volunteer.png")] bg-cover bg-no-repeat  py-16 px-3 lg:px-10 '>
              <h1 className='text-3xl lg:text-4xl  font-raleway font-semibold gap-4 text-primaryy backdrop-blur-sm'>{getSafeString(data?.volunteer?.title)}</h1>
              <p className='font-poppins text-sm leading-loose text-gray-300  my-5'>
                {getSafeString(data?.volunteer?.description)}
              </p>
              <Button title='Volunteer Now' link="contact" />
            </div>



          </div>
        </div>
      </section>

      <section className='bg-[url("/assets/proof.png")] bg-cover bg-no-repeat bg-fixed lg:h-[200px]'>
        <div className='lg:px-24 py-16 px-10 container bg-[url("/assets/proof.png)] bg-cover bg-no-repeat flex flex-col gap-10 lg:flex-row lg:gap-28 justify-center'>


          {
            data?.stats.map((item, index) => (
              <div key={index}>
                <h1 className='font-raleway text-6xl font-semibold text-white text-center'>{item.count}</h1>
                <h1 className='font-poopins text-gray-400 font-medium text-center'>{item.statLabel}</h1>
              </div>
            ))
          }


        </div>

      </section>






    </main>
  );
}
