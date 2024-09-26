"use client";
import SimpleSlider from '@/components/slider';
import React from 'react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
}
  from "@/components/ui/tabs";
import { useAboutPageData } from '@/hooks/use-about-page-data';
import { getSafeString } from '@/helpers/string';
import { SanityBlock, SanityImage } from '@/components/sanity';
import { CustomError } from '@/components/custom';
import CustomLoader from '@/components/custom/loader';



const Page = () => {
  const { data, error, loading } = useAboutPageData();

  if (error) {
    return (
      <CustomError />
    );
  }
  if (loading ) {
    return (
      <CustomLoader isScreenHeight />
    );
  }

  return (
    <div>
      <section style={{
        backgroundImage: `url(${data?.hero?.bgImage || "/assets/aboutpg.jpg"})`
      }} className='bg-[url("/assets/aboutpg.jpg")] bg-cover bg-center h-[50vh] lg:bg-cover bg-no-repeat lg:h-[80vh] flex justify-center items-center'>
        <div className='font-raleway text-center'>
          <h1 className='text-primaryy font-semibold text-lg pt-5'>{getSafeString(data?.hero?.subtitle, !!error, loading)}</h1>
          <h1 className=' font-raleway m-auto text-3xl lg:text-5xl font-semibold lg:w-[600px] lg:leading-[60px] text-white'>{getSafeString(data?.hero?.title, !!error, loading)}</h1>
        </div>

      </section>

      <section className='px-10 py-5 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:gap-10'>

        <div className=''>
          <SanityImage usesImg image={data?.background?.image} />

        </div>
        <div >
          <div className='py-5 lg:py-0 font-raleway text-center lg:text-left'>
            <h1 className='text-primaryy font-semibold text-lg pt-5 '>Background</h1>
            <h1 className=' font-raleway text-3xl lg:text-5xl font-semibold lg:leading-[60px]'>{getSafeString(data?.background?.title, !!error, loading)}</h1>
          </div>

          <SanityBlock value={data?.background?.description} />

        

        </div>


      </section>

      <section className='px-10 py-20 max-w-6xl mx-auto flex flex-col lg:flex-row-reverse  lg:gap-10'>

        <div className='flex items-center justify-center m-auto'>
          <SanityImage usesImg image={data?.background2?.image} />


        </div>
        <div>
          <div className='py-5 lg:py-0 font-raleway text-center lg:text-left'>
            <h1 className='text-primaryy font-semibold text-lg pt-5 '>Background</h1>
            <h1 className=' font-raleway text-3xl lg:text-5xl font-semibold lg:leading-[60px]'>{getSafeString(data?.background?.title, !!error, loading)}</h1>
          </div>

          <SanityBlock value={data?.background2?.description} />
         
        </div>


      </section>

      <section className='px-10 py-5 max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 lg:justify-around'>
        <section className='px-10 py-10 max-w-6xl mx-auto'>

          <Tabs defaultValue="achievements" className="">
            <div className='w-full py-5 flex items-center justify-center'>
              <TabsList className='mx-auto py-6 px-2'>
                <TabsTrigger className=' px-16 py-1 text-lg ' value="achievements">Achievements</TabsTrigger>
                <TabsTrigger className='px-16 py-1 text-lg ' value="objectives">Objectives</TabsTrigger>
              </TabsList>
            </div>


            <TabsContent className='' value="achievements">
              <div className='font-raleway text-center mb-6'>
                <h1 className='text-primaryy font-semibold text-lg pt-5'>What We&apos;ve Done</h1>
                <h1 className=' font-raleway m-auto text-3xl lg:text-5xl font-semibold lg:w-[600px] lg:leading-[60px] text-black'>Achievements</h1>
              </div>

             <SanityBlock value={data?.achievement} />


            </TabsContent>

            <TabsContent className='' value="objectives">
              <div className='font-raleway text-center mb-6'>
                <h1 className='text-primaryy font-semibold text-lg pt-5'>What Plan To Do</h1>
                <h1 className=' font-raleway m-auto text-3xl lg:text-5xl font-semibold lg:w-[600px] lg:leading-[60px] text-black'>NOSHF OBJECTIVES </h1>
              </div>

              <SanityBlock value={data?.objective} />

              

            </TabsContent>
          </Tabs>

        </section>

      </section>

      {/* <section className='px-7 py-5 bg-[#40444D] lg:container-custom h-auto'>
             <SimpleSlider />
            
        </section> */}
    </div>
  );
};

export default Page;