
"use client"
import { CustomError } from "@/components/custom";
import CustomLoader from "@/components/custom/loader";
import Gallery from "@/components/gallery";
import { urlFor } from "@/components/sanity/image";
import { getSafeString } from "@/helpers/string";
import { useProjectsData } from "@/hooks/use-projects-data";
import { useProjectPageData } from "@/hooks/use-projects-page-data";
import * as React from "react";





const Page = () => {
    const { data, error, loading } = useProjectPageData()
    const { projects, error: projectError, loading: projectLoading } = useProjectsData()

    if (error || projectError ) {
        return (
            <CustomError />
        );
    }
    if (loading || projectLoading ) {
        return (
            <CustomLoader isScreenHeight />
        );
    }

    const heroImage = urlFor(data?.heroImage ); 

    return (
        <div>
            <section style={{
                backgroundImage: `url(${heroImage || "/assets/project.jpg"})`
            }} className=' bg-cover h-[50vh] lg:bg-cover bg-no-repeat lg:h-[80vh] flex justify-center items-center backdrop-brightness-200'>




            </section>

            <section className="container">

                <div className='font-raleway text-center'>
                    <h1 className='text-primaryy font-semibold text-lg pt-5'>
                        {getSafeString(data?.subtitle, !!error, loading)}
                    </h1>
                    <h1 className=' font-raleway m-auto text-3xl lg:text-5xl font-semibold lg:w-[600px] lg:leading-[60px] text-black'>
                        {getSafeString(data?.title, !!error, loading)}
                    </h1>
                </div>
                <div className="mt-8 mx-auto">
                    <Gallery data={projects} />
                </div>

            </section>

        </div>
    );
};

export default Page




