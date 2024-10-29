import Logo from "@/app/fonts/logo";
import Link from "next/link";
import React from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "./ui/button";
import { GeistSans } from 'geist/font/sans';



const Navbar = () => {
  return (
    <div className={`${GeistSans.className} z-10  w-full bg-transparent  bg-opacity-50 backdrop-filter  top-0 fixed backdrop-blur-md `}>
      <header className=" flex h-16 w-full shrink-0 items-center px-4 md:px-6  ">
       
        <Link href="/">
        <Logo /> 
        </Link>
        <Link href="/">
        <p className="    font-serif text-4xl">Abhyasa</p>
        </Link>


        <nav className="ml-auto hidden lg:flex gap-8">
          <Link
           href="/blog"
           className={` text-base text-foreground/60 hover:text-white transition-colors   `}
          > Home</Link>
          <Link
           href="/blog"
           className={` text-base text-foreground/60 hover:text-white transition-colors   `}
          > About</Link>
          <Link
           href="/blog"
           className={` text-base text-foreground/60 hover:text-white transition-colors   `}
          > Courses</Link>
          <Link
           href="/blog"
           className={` text-base text-foreground/60 hover:text-white transition-colors   `}
          > Blog</Link>
          <Link
           href="/blog"
           className={` text-base text-foreground/60 hover:text-white transition-colors   `}
          > Contact Us</Link>
          
          {/* <Link
            href="/"
            className=" group inline-flex h-9 w-max items-center justify-center rounded-md  px-4 py-2 text-md font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-accent dark:hover:bg-primary dark:hover:text-gray-50 dark:focus:bg-secondar dark:focus:text-gray-50 dark:data-[active]:bg-zinc-800/50 dark:data-[state=open]:bg-zinc-800/50 "
          >
            Home
          </Link>
         
          <Link
            href="aboutus"
            className=" group inline-flex h-9 w-max items-center justify-center rounded-md  px-4 py-2 text-md font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-accent dark:hover:bg-primary dark:hover:text-gray-50 dark:focus:bg-secondary dark:focus:text-gray-50 dark:data-[active]:bg-zinc-800/50 dark:data-[state=open]:bg-zinc-800/50"
          >
            About
          </Link>
          <Link
            href="courses"
            className="  group inline-flex h-9 w-max items-center justify-center rounded-md  px-4 py-2 text-md font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-accent dark:hover:bg-primary dark:hover:text-gray-50 dark:focus:bg-secondary dark:focus:text-gray-50 dark:data-[active]:bg-zinc-800/50 dark:data-[state=open]:bg-zinc-800/50"
          >
            Courses
          </Link>
          <Button> Contact us</Button> */}
        </nav>
      </header>
      <Separator />
    </div>
  );
};

export default Navbar;
