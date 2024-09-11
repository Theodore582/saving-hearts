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
        <div className='w-full h-20 shadow-md flex items-center px-20 justify-between font-raleway'> 
            <h1 className='text-4xl font-bold'><img className='' src='assets/logo.png' alt="" /></h1>
            

        <NavigationMenu>
            <NavigationMenuList>
                {navlinks.map((navlink) => (
                    <NavigationMenuItem key={navlink.link}>
                        {navlink.submenu ? (
                            <>
                                <NavigationMenuTrigger>{navlink.link}</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                        {navlink.submenu.map((sublink) => (
                                            <ListItem className="grid-cols-2"
                                                key={sublink.link}
                                                title={sublink.link}
                                                href={sublink.url}
                                            >
                                                {/* Add description or other content if needed */}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </>
                        ) : (
                            <Link href={navlink.url} legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    {navlink.link}
                                </NavigationMenuLink>
                            </Link>
                        )}
                    </NavigationMenuItem>
                ))}
                    <Link href={"https://nii-okai-website.vercel.app/"} legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            NII OKAI
                        </NavigationMenuLink>
                    </Link>
            </NavigationMenuList>
            <MobileNav />
        </NavigationMenu>

            <div className='hidden lg:flex'>
                <Link href="/contact" passHref>
                <Button
                    title="Get In Touch" />
                </Link>
            </div>
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


