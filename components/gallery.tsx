"use client"; // Mark this as a client component

import { galleries } from '@/utils/data';
import Image from 'next/image';

const Gallery = () => {
    

    return (
        <div className="container mx-auto p-4">
            {galleries.map((gallery, galleryIndex) => (
                <div key={galleryIndex} className="mb-12">
                    {/* Section Title */}
                    <h2 className="font-raleway text-secondaryy text-center text-3xl font-bold mb-6">{gallery.title}</h2>

                    {/* Grid of 4 Images */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {gallery.images.map((image, imageIndex) => (
                            <div key={imageIndex} className="flex flex-col items-center">
                                <Image
                                    src={image.src}
                                    width={500}
                                    height={500}
                                    alt={image.alt}
                                    className="object-cover w-full h-64 rounded-lg"
                                />
                                <p className="text-center font-medium mt-2">{image.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Gallery;
