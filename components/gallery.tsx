"use client"; // Mark this as a client component
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { getSafeString } from '@/helpers/string';
import { Project } from '@/types';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { SanityImage } from './sanity';

type Props = {
    data?: Project[];
};

const Gallery = ({ data }: Props) => {
    if (!data || data?.length < 1) return <></>;

    return (
        <div className="container mx-auto p-4">
            {data.map((project, galleryIndex) => (
                <div key={galleryIndex} className="mb-12">
                    {/* Section Title */}
                    <h2 className="font-raleway text-secondaryy text-center text-2xl lg:text-3xl font-bold mb-6">{getSafeString(project.title)}</h2>
                    <p className='text-center'>
                        {getSafeString(project.description)}
                    </p>
                    {/* Grid of 4 Images */}

                    <Carousel
                        opts={{
                            align: "start",
                        }}
                        className="w-full max-w-[93%] xl:max-w-full gap-2 mx-auto"
                    >
                        <CarouselContent>
                            {
                                project && project.images?.length > 0 && project.images.map((item, index) => (
                                    <CarouselItem key={`${project.title}${index}`} className='mr- md:basis-1/2 lg:basis-1/3'>
                                        <Zoom>
                                            <SanityImage className="w-full h-auto aspect-square min-h-full object-cover" fit="cover" image={item} usesImg />
                                        </Zoom>
                                    </CarouselItem>
                                ))
                            }
                           
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>


                </div>
            ))}
        </div>
    );
};

export default Gallery;
