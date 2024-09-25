
import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"




const page = () => {
    return (
        <div>
            <section className='bg-[url("/assets/project.jpg")] bg-cover h-[50vh] lg:bg-cover bg-no-repeat lg:h-[80vh] flex justify-center items-center backdrop-brightness-200'>
               
                <div className='font-raleway text-center'>
                    <h1 className='text-primaryy font-semibold text-lg pt-5'>WHAT WE'VE DONE</h1>
                    <h1 className=' font-raleway m-auto text-3xl lg:text-5xl font-semibold lg:w-[600px] lg:leading-[60px] text-white'>THE FORTY(40) HEARTS PROJECT</h1>
                </div>
               

            </section>
            <section>
                
                <Carousel className="w-full max-w-sm m-auto">
                    <CarouselContent className="-ml-1">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                            <span className="text-2xl font-semibold">{index + 1}</span>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>

            </section>
        </div>
    )
}

export default page




