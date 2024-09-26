"use client"
import React from 'react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
}
  from "@/components/ui/tabs"
import NewsCard from '@/components/newscard'
import { events, news } from '@/utils/data'
import EventsCard from '@/components/eventscard'
import { useEventsData } from '@/hooks/use-events-data';
import { useNewsData } from '@/hooks/use-news-data';
import { CustomError } from '@/components/custom';
import CustomLoader from '@/components/custom/loader';


const News = () => {
  const { events, error: eventError, loading: eventsLoading } = useEventsData();
  const { newss, error, loading } = useNewsData();

  if (error || eventError) {
    return (
      <CustomError />
    );
  }
  if (loading || eventsLoading) {
    return (
      <CustomLoader isScreenHeight />
    );
  }

  return (
    <div>
      <section className='bg-[url("/assets/news.png")] bg-cover h-[50vh] lg:bg-cover bg-no-repeat lg:h-[80vh] flex justify-center items-center'>
        <div className='font-raleway text-center'>
          <h1 className='text-primaryy font-semibold text-lg pt-5'>What We Do</h1>
          <h1 className=' font-raleway m-auto text-3xl lg:text-5xl font-semibold lg:w-[600px] lg:leading-[60px] text-white'>News & Events</h1>
        </div>

      </section>

      <section className='px-10 py-10 max-w-6xl mx-auto'>

        <Tabs defaultValue="news" className="">
          <div className='w-full py-10 flex items-center justify-center'>
            <TabsList className='mx-auto py-6 px-2'>
              <TabsTrigger className=' px-16 py-1 text-lg ' value="news">News</TabsTrigger>
              <TabsTrigger className='px-16 py-1 text-lg ' value="events">Events</TabsTrigger>
            </TabsList>
          </div>
          

          <TabsContent className='grid grid-cols-2 gap-8' value="news">

            {
              newss.map((news, index) => (

                <NewsCard key={index}
                 news={news}
                />

              ))
            }



          </TabsContent>

          <TabsContent className='grid grid-cols-2 gap-8' value="events">
            {
              events.map((ev, index) => (

                <EventsCard key={index}
                  event={ev}
                />

              ))
            }
          </TabsContent>
        </Tabs>

      </section>
    </div>
  )
}

export default News