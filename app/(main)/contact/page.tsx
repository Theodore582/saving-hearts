
import { FaLocationDot } from "react-icons/fa6";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Button from "@/components/button";



const Contact = () => {


    return(
        <div  className="">
            <section className='bg-[url("/assets/hero4.png")] bg-cover h-[50vh] lg:bg-cover bg-no-repeat lg:h-[80vh] flex justify-center items-center'>
                <div className='font-raleway text-center'>
                    <h1 className='text-primaryy font-semibold text-lg pt-5'>FIND US</h1>
                    <h1 className=' font-raleway m-auto text-3xl lg:text-5xl font-semibold lg:w-[600px] lg:leading-[60px] text-white'>GET IN TOUCH</h1>
                </div>

            </section>

            <div className="flex flex-row h-fit w-[83vw] m-auto justify-center items-center  ">

                <div className="w-[600px] h-[100vh] bg-primaryy my-40 m-auto p-5 ">
                    
                <div className="flex flex-col justify-center items-center ">
                <h1 className='font-raleway text-center m-auto text-3xl lg:text-4xl font-semibold lg:w-[600px] lg:leading-[60px] text-white'>Contact Us</h1>

                <div className="flex flex-row justify-center items-center gap-10 my-6">
                
                            <p className="w-16 h-16 bg-acc flex justify-center items-center rounded-full text-white"><FaLocationDot size={30} /></p>
                        <p className="text-white font-semibold">Address: 194 West 221 street, Accra Ghana</p>
                    
                </div>

                    <div className="flex flex-row justify-center items-center gap-10 my-6">

                        <p className="w-16 h-16 bg-acc flex justify-center items-center rounded-full text-white"><FaLocationDot size={30} /></p>
                        <p className="text-white font-semibold">Address: 194 West 221 street, Accra Ghana</p>

                    </div>
                    <div className="flex flex-row justify-center items-center gap-10 my-6">

                            <p className="w-16 h-16 bg-acc flex justify-center items-center rounded-full text-white"><FaLocationDot size={30} /></p>
                        <p className="text-white font-semibold">Address: 194 West 221 street, Accra Ghana</p>

                    </div>

                    

                    
            </div>
            </div>

                <div className="w-fit m-auto shadow-lg p-10 h-[100vh] ">
                    <h1 className=' font-raleway text-center m-auto text-3xl lg:text-4xl font-semibold lg:w-[600px] lg:leading-[60px]'>Get In Touch</h1>


                    <div className="flex flex-col gap-10 justify-center items-center">
                        <div className="grid w-full max-w-sm items-center gap-3">
                            <Label htmlFor="email">Name</Label>
                            <Input type="name" id="name" placeholder="Your Name" />
                        </div>

                        <div className="grid w-full max-w-sm items-center gap-3">
                            <Label htmlFor="email">Email</Label>
                            <Input type="email" id="email" placeholder="Email" />
                        </div>

                        <div className="grid w-full max-w-sm items-center gap-3">
                            <Label htmlFor="number">Phone Number</Label>
                            <Input type="number" id="number" placeholder="Your Number" />
                        </div>

                        <div className="grid w-2/3 gap-3">
                            <Label htmlFor="message">Your message</Label>
                            <Textarea placeholder="Type your message here." id="message" />
                        </div>

                        <Button title="Submit"/>
                    </div>


            </div>
            </div>
        </div>
    )

}

export default Contact