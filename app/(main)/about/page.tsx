import SimpleSlider from '@/components/slider';
import React from 'react'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
}
  from "@/components/ui/tabs"



const Page = () => {

  return (
    <div>
      <section className='bg-[url("/assets/aboutpg.jpg")] bg-cover bg-center h-[50vh] lg:bg-cover bg-no-repeat lg:h-[80vh] flex justify-center items-center'>
              <div className='font-raleway text-center'>
                  <h1 className='text-primaryy font-semibold text-lg pt-5'>Who Are We</h1>
                  <h1 className=' font-raleway m-auto text-3xl lg:text-5xl font-semibold lg:w-[600px] lg:leading-[60px] text-white'>About Us</h1>
              </div>
              
        </section>

      <section className='px-10 py-5 max-w-6xl mx-auto flex flex-col lg:flex-row lg:gap-10'>
           
              <div className=''>
                <img  src='/assets/about1&2.png' alt="" />
      
              </div>
              <div >
                  <div className='py-5 lg:py-0 font-raleway text-center lg:text-right'>
            <h1 className='text-primaryy font-semibold text-lg pt-5 '>Background</h1>
                      <h1 className=' font-raleway text-3xl lg:text-5xl font-semibold lg:leading-[60px]'>About Us</h1>
                  </div>

          <p className=' text-center lg:text-right font-poppins text-sm leading-loose text-gray-500 lg:w-[500px] my-5'>The Nii Okai Saving Hearts Foundation (NOSHF) is a not-for-profit Non-Governmental Organization based in Tema. 
            Its founder and leader is Ernest Nii-Okai Okai, known in music circles as Nii Okai, whose debut hit album ‘Mokobe’ continues to bless a 
            lot lives in Ghana and across the world.<br></br> 
            On ‘Mokobe’s 10th Anniversary, Nii Okai launched the Saving Hearts Project to perform 10 heart 
            surgeries for 10 children under the age of 10 across the 10 regions of Ghana. This was preceded by the signing of a memorandum of understanding 
            between (NOSHF) and the Ghana Heart Foundation on the 12th of December 2013.
            To the glory of the Almighty God, all the 10 surgeries were successfully conducted and beneficiaries doing well. 
            The Nii Okai Saving Hearts Foundation (NOSHF) was birthed after realizing the need to continue to support many more children who require some form 
            of funding to undergo open heart 
            surgeries. <br></br>
            On Nii Okai's 40th birthday, the Forty Hearts Project was launched alongside his album "Yesu Hi" at Morning Star Cathedral, Lighthouse Chapel-Sakumono. The project aims to fund heart surgeries for 40 underprivileged kids in 16 Ghanaian regions. Currently, 
            15 successful surgeries have been completed, with the goal of completing 25 more.
.</p>

              </div>

              
        </section>

      <section className='px-10 py-20 max-w-6xl mx-auto flex flex-col lg:flex-row-reverse  lg:gap-10'>

        <div className='flex items-center justify-center m-auto'>
          <img src='/assets/aboutpg3.png' alt="" />

        </div>
        <div>
          <div className='py-5 lg:py-0 font-raleway text-center lg:text-right'>
            <h1 className='text-primaryy font-semibold text-lg pt-5 '>Background</h1>
            <h1 className=' font-raleway text-3xl lg:text-5xl font-semibold lg:leading-[60px]'>About Us</h1>
          </div>

          <p className=' text-center lg:text-right font-poppins text-sm leading-loose text-gray-500 lg:w-[500px] my-5'>The foundation's focus is on the acronym "HEARTS";</p>
          <p className='text-center lg:text-right font-poppins text-sm leading-loose text-gray-500 lg:w-[500px] my-5'><span className='font-semibold text-secondaryy'>• Heart Related Issues  –</span> support needy children to undergo open heart surgeries <br></br>
            <span className='font-semibold text-secondaryy'>• Education –</span> embark on an educational campaign on healthy lifestyles to avoid heart related diseases.<br></br>
            <span className='font-semibold text-secondaryy'>• 	Advocacy –</span> promote the course of proper care for patients with heart related issues. <br></br>
            <span className='font-semibold text-secondaryy'>• Raising of funds –</span> embark on fund raising programs to support the foundation. <br></br>
            <span className='font-semibold text-secondaryy'>• 	Teamwork –</span> Partnerships with stakeholders & supporting ministries for the course. <br></br>
            <span className='font-semibold text-secondaryy'>• Soul winning – </span> Undertake soul winning activities together with supporting heart surgeries</p>

        </div>


      </section>

      {/* <section className='px-10 py-5  h-auto bg-secondaryy'>
              <h1 className='text-center text-white font-raleway text-3xl lg:text-5xl font-semibold lg:leading-[60px]'>Partners</h1>
        </section> */}

      {/* <section className='px-10 py-5 max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 lg:justify-around'>
              <div className='m-auto w-[300px] h-auto  lg:w-[450px] lg:h-[467px]  rounded-3xl shadow-2xl border-2 border-primaryy py-16 px-9 flex flex-col gap-6'>
                  <h1 className=' text-center font-raleway text-3xl lg:text-5xl font-semibold lg:leading-[60px]'>Our<span className='text-primaryy'> Mission</span></h1>
                  <p className='text-center font-poppins text-sm leading-loose text-gray-500 my-5'>Lorem ipsum dolor sit amet consectetur. Lacus vitae nibh diam eu lectus sit viverra. Consectetur praesent morbi lobortis dolor
                      lacus nascetur aliquam. Eget sodales ipsum ullamcorper amet suspendisse consequat. Eu pulvinar eget bibendum velit. Amet nulla sed malesuada morbi
                      mauris sit auctor pharetra a.
                     </p>


            </div>

              <div className='w-[300px] h-auto lg:w-[450px] lg:h-[467px] rounded-3xl shadow-2xl border-2 border-primaryy py-16 px-9 flex flex-col gap-6 m-auto'>
                  <h1 className=' text-center font-raleway text-3xl lg:text-5xl font-semibold lg:leading-[60px]'>Our<span className='text-primaryy'> Vision</span></h1>
                  <p className='text-center font-poppins text-sm leading-loose text-gray-500 my-5'>Lorem ipsum dolor sit amet consectetur. Lacus vitae nibh diam eu lectus sit viverra. Consectetur praesent morbi lobortis dolor
                      lacus nascetur aliquam. Eget sodales ipsum ullamcorper amet suspendisse consequat. Eu pulvinar eget bibendum velit. Amet nulla sed malesuada morbi
                      mauris sit auctor pharetra a.
                  </p>


              </div>
            
        </section> */}
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
              <div className='font-raleway text-center'>
                <h1 className='text-primaryy font-semibold text-lg pt-5'>What We've Done</h1>
                <h1 className=' font-raleway m-auto text-3xl lg:text-5xl font-semibold lg:w-[600px] lg:leading-[60px] text-black'>Achievements</h1>
              </div>

              <p className='text-left font-poppins text-sm leading-loose text-gray-500 my-5'>•	Since its inception, NOSHF has successfully sponsored twenty-five (25) heart surgeries of children from the various regions of Ghana. Through its various fundraising mechanisms, the NOSHF has had support from various organizations, companies and individuals whose contributions have been used to pay for the above stated surgeries.  </p>
              <p className='text-left font-poppins text-sm leading-loose text-gray-500 my-5'> •	The credibility of the NOSHF led to the signing of a Memoranda of Understanding (MOUs) with the Ghana Heart Foundation (GHF), the KNUST-SRC and Ansuaa-Ababio Pediatric Centre (AAPC) in charge of identifying the children in need of sponsorship for the heart surgeries;</p>
              <p className='text-left font-poppins text-sm leading-loose text-gray-500 my-5'>•	The NOSHF has collaborated with the KNUST-SRC to embark on sensitization about child heart diseases during World Hearts Day – 29th September 2015 </p>
              <p className='text-left font-poppins text-sm leading-loose text-gray-500 my-5'> •	The theme song of the Saving Hearts Project won the Music for Development Award instituted by the World Bank at the 2015 edition of the Ghana Music Awards. </p>
              <p className='text-left font-poppins text-sm leading-loose text-gray-500 my-5'>•	Nii Okai launched an album dedicated solely to the Saving Hearts project titled “Saving Hearts”. </p>
              <p className='text-left font-poppins text-sm leading-loose text-gray-500 my-5'>•	NOSHF partnered with a UK-based Medical outreach team known as Haven of Rest-UK who sponsored two (2) of the surgeries. </p>
              <p className='text-left font-poppins text-sm leading-loose text-gray-500 my-5'>• Partnership with IT Consortium who are supporting NOSHF on their crowd funding CHANGO app to help raise funds to support the surgeries. </p>
              <p className='text-left font-poppins text-sm leading-loose text-gray-500 my-5'>• Collaborated with the University of Ghana Medical Center (UGMC) together with their partners, Boston Children’s Hospital from the USA and Kinderherzen, Germany to undertake some twenty (20) heart surgeries. </p>
               

              
              <h1 className=' font-raleway m-auto text-3xl lg:text-5xl font-semibold lg:w-[600px] lg:leading-[60px] text-black'>MOKOBE @ 20</h1>
              
              <p className='text-left font-poppins text-sm leading-loose text-gray-500 my-5'>•  On the Occasion of ‘Mokobe’s 20th anniversary celebration last year, a grand musical concert was held at the ICGC- Zoe Temple, Community 5 Tema on the 17th September, 2023. As part of the celebration, NOSHF collaborated with the University of Ghana Medical Center (UGMC) together with their partners, Boston Children’s Hospital from the USA and Kinderherzen, Germany to undertake some twenty (20) heart surgeries from 18th September, 2023 to 22nd September, 2023. NOSHF funded two (2) out of the 20 surgeries that were undertaken. This initiative aims at becoming a yearly project and we are constantly searching for partners who will help support this worthy cause.</p>


            </TabsContent>

            <TabsContent className='' value="objectives">
              <div className='font-raleway text-center'>
                <h1 className='text-primaryy font-semibold text-lg pt-5'>What Plan To Do</h1>
                <h1 className=' font-raleway m-auto text-3xl lg:text-5xl font-semibold lg:w-[600px] lg:leading-[60px] text-black'>NOSHF OBJECTIVES FOR 2024 </h1>
              </div>
              
              <p className='text-left font-poppins text-sm leading-loose text-gray-500 my-5'>The strategic objectives of the NOSHF for 2024 are as follows:</p>
              <p className='text-left font-poppins text-sm leading-loose text-gray-500 my-5'> •	To be able to fund ten (10) heart surgeries for the year in collaboration with the University of Ghana Medical Center (UGMC) and their partners from Boston Children’s Hospital and Kinderherzen from Germany.</p>
              <p className='text-left font-poppins text-sm leading-loose text-gray-500 my-5'> •	To sensitize the public on heart related diseases:
                THE NOSHF seeks to ride on the success of its previous awareness campaigns to embark on some more campaigns to educate and sensitize the public on heart related diseases.
</p>
              <p className='text-left font-poppins text-sm leading-loose text-gray-500 my-5'> •	Create awareness about World Hearts Day – 29th September 2024 and organize screening for children in some selected schools to be able to detect heart related diseases.</p>
              
            </TabsContent>
          </Tabs>

        </section>

      </section>

          {/* <section className='px-7 py-5 bg-[#40444D] lg:container-custom h-auto'>
             <SimpleSlider />
            
        </section> */}
    </div>
  )
}

export default Page