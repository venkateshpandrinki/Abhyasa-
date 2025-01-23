import Link from "next/link";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


import { ChevronDown } from "lucide-react";

const FloatingNav = () => {
  return (
    <div className="h-20 w-[850px] bg-blue-600  bg-opacity-100 font-bold text-xl top-20 right-40 absolute z-10 rounded-full hidden lg:flex justify-evenly items-center text-foreground dark:text-white">
      {/* Home Link */}
      <div className="relative group ">
        <Link href="/" className="  inline-block mb-1">
          Home
        </Link>
        <div className="absolute   left-0 bottom-0 w-full h-[4px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></div>
      </div>

      {/* About Link */}
      <div className="relative group">
        <Link href="/about" className="  inline-block mb-1">
          About
        </Link>
        <div className="absolute left-0 bottom-0 w-full h-[4px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></div>
      </div>

      {/* Courses Link */}
      <div className="relative group">
        <Link href="/courses" className="  inline-block mb-1">
          Courses
        </Link>
        <div className="absolute left-0 bottom-0 w-full h-[4px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></div>
      </div>
      <div className="relative group">
        <DropdownMenu>
          <DropdownMenuTrigger className=" flex items">
            Projects{" "}
            <span>
              <ChevronDown className=" mt-1" />
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuContent className=" bg-blue-600  rounded-2xl border-none ">
            <DropdownMenuItem className="   focus:bg-blue-800 my-2 text-lg font-bold ">
              <Link href={"/projects/physical-design"}>Physical Design</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className=" my-2 focus:bg-blue-800 text-lg font-bold ">
              <Link href={"/projects/design-verification"}>
                Design Verification
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        {/* <NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger> Projects</NavigationMenuTrigger>
      <NavigationMenuContent className=''>
        <NavigationMenuLink>Physical design</NavigationMenuLink>
        <NavigationMenuLink>Design Verification</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu> */}

        <div className="absolute left-0 bottom-0 w-full h-[4px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></div>
      </div>

      {/* Blog Link */}
      <div className="relative group">
        <Link href="/blog" className="  inline-block mb-1">
          Blog
        </Link>
        <div className="absolute left-0 bottom-0 w-full h-[4px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></div>
      </div>

      {/* Contact Us Link */}

      <div className="relative group">
        <Link href="/placements" className="  inline-block mb-1">
          Placements
        </Link>
        <div className="absolute left-0 bottom-0 w-full h-[4px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></div>
      </div>
      <div className="relative group">
        <Link href="/contact" className="  inline-block mb-1">
          Contact us
        </Link>
        <div className="absolute left-0 bottom-0 w-full h-[4px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></div>
      </div>
    </div>
  );
};

export default FloatingNav;
