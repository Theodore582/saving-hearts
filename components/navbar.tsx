"use client";

import * as React from "react";


import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { navlinks } from "@/utils/data";
import MobileNav from "./navigation/mobile-nav";
import Button from "./button";


export function Navbar() {
    return (
        <div className='bg-white  w-full h-20 shadow-md flex items-center px-20 justify-between font-raleway lg:fixed z-10'> 
            <h1 className='text-4xl font-bold'><img className='' src='assets/logo.png' alt="" /></h1>
            
            
            <NavigationMenu className="hidden md:flex ">
            <NavigationMenuList>
                {navlinks.map((navlink) => (
                    <NavigationMenuItem key={navlink.link}>
                            <Link href={navlink.url} legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    {navlink.link}
                                </NavigationMenuLink>
                            </Link>
                    </NavigationMenuItem>
                ))}
                    <Link href={"http://niiokai.com"} legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            NII OKAI
                        </NavigationMenuLink>
                    </Link>
            </NavigationMenuList>
            
        </NavigationMenu>
            

            <div className='hidden lg:flex'>
                <Link href="/contact" passHref>
                <Button
                    title="Get In Touch" />
                </Link>
            </div>
            <MobileNav />
        </div>
    );
}


const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-raleway font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});

ListItem.displayName = "ListItem";


