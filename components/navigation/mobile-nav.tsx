import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { FiMenu } from "react-icons/fi"
import { navlinks } from '@/utils/data'
import Link from 'next/link'


const MobileNav = () => {
  return (
      <Sheet>
          <SheetTrigger className="lg:hidden"><FiMenu/></SheetTrigger>
          <SheetContent>
              
              <div>
                  <ul className='flex flex-col gap-10 items-center font-semibold text-sm '>
                      {
                          navlinks.map((link) => (

                              <Link key={link.url} href={link.url}> <li className='hover:font-semibold cursor-pointer hover:transition duration-150 ease-in-out hover:scale-105'>{link.link}</li></Link>
                          ))
                      }
                  </ul>
                  
              </div>
          </SheetContent>
      </Sheet>

  )
}

export default MobileNav