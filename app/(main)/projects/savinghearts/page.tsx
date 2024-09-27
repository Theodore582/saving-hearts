
import Gallery from "@/components/gallery"
import * as React from "react"





const page = () => {
    return (
        <div>
            <section className='bg-[url("/assets/project.jpg")] bg-cover h-[50vh] lg:bg-cover bg-no-repeat lg:h-[80vh] flex justify-center items-center backdrop-brightness-200'>
               
                
               

            </section>
        
                <section>

                <div className='font-raleway text-center'>
                    <h1 className='text-primaryy font-semibold text-lg pt-5'>WHAT WE&apos;VE DONE</h1>
                    <h1 className=' font-raleway m-auto text-3xl lg:text-5xl font-semibold lg:w-[600px] lg:leading-[60px] text-black'>THE SAVING HEARTS STORY SO FAR IN PICTURES</h1>
                </div>
                <div>
                   <Gallery />
                </div>
                     
                </section>
                
        </div>
    )
}

export default page




