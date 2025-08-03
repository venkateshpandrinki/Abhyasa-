"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { GeistSans } from "geist/font/sans";
import { ChevronDown, Menu, X } from "lucide-react";
import clsx from "clsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Logo from "./Logo";

const Navbar = () => {
  const [isSideMenuOpen, setMenu] = useState(false);

  return (
    <div className={`${GeistSans.className} w-full`}>
      <header className="flex h-16 w-full shrink-0  items-center px-4 md:px-6">
        <Link href="/" className="  my-2" aria-label="Home">
          {/* <ExportedImage
            src={"/images/smallLogo.png"}
            alt="logo"
            width={70}
            height={70}
          /> */}
       <Logo className='w-[70px] h-[70px]'/>
        </Link>
        <Link href="/" className="  text-center">
          <p className="font-serif text-4xl  text-red-500 tracking-wide">
            ABHYASA
          </p>
          <p className=" text-[14px]  font-medium text-blue-500">
            SEMICON TECHNOLOGIES
          </p>
        </Link>

        <nav className="ml-auto hidden lg:flex items-center gap-8">
          <Link
            href="/"
            className="text-base text-white hover:text-white transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-base text-white hover:text-white transition-colors"
          >
            About
          </Link>
          <Link
            href="/courses"
            className="text-base text-white hover:text-white transition-colors"
          >
            Courses
          </Link>

          <NavigationMenu className="bg-transparent">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className=" bg-transparent text-base text-white hover:bg-[#121928]">
            Projects
          </NavigationMenuTrigger>
          <NavigationMenuContent className="h-auto min-w-[300px] flex flex-col bg-[#121928] hover:bg-[#121928] shadow-lg p-4 rounded-md ">
            <NavigationMenuLink className="w-full pb-4 hover:bg-[#121928]/80">
              <Link href="/projects/physical-design" className="px-4 w-full py-2 rounded-md transition-colors text-base">
                Physical Design
              </Link>
            </NavigationMenuLink>
            <Separator/>
            <NavigationMenuLink className="w-full pt-2 ">
              <Link href="/projects/design-verification" className="px-4 py-2 rounded-md transition-colors text-base ">
                 Design Verification
              </Link>
            </NavigationMenuLink>
          
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>


          <Link
            href="/blog"
            className="text-base text-white hover:text-white transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/placements"
            className="text-base text-white hover:text-white transition-colors"
          >
            Placements
          </Link>
          <Link
            href="/contact"
            className="text-base text-white hover:text-white transition-colors"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden ml-auto">
          <Menu size={32} onClick={() => setMenu(true)} />
        </div>
      </header>

      <Separator />

      {/* Mobile Sidebar Menu */}
      <div
        className={clsx(
          "fixed h-screen w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 -translate-x-full transition-all z-50",
          isSideMenuOpen && "translate-x-0"
        )}
       
      >
        <section className="bg-black text-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-40 w-3/4 flex">
          <div className="flex justify-end">
            <X onClick={() => setMenu(false)} />
          </div>

          <Link
            href="/" 
            className="text-base text-white transition-colors"
            onClick={() => setMenu(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-base text-white transition-colors"
            onClick={() => setMenu(false)}
          >
            About
          </Link>
          <Link
            href="/courses"
            className="text-base text-white transition-colors"
            onClick={() => setMenu(false)}
          >
            Courses
          </Link>
          <DropdownMenu>
          <DropdownMenuTrigger className=" flex items">
            Projects{" "}
            <span>
              <ChevronDown className=" mt-1" />
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="   rounded-2xl border-none ">
            <DropdownMenuItem className="   my-2 text-lg font-bold ">
              <Link href={"/projects/physical-design"}
               onClick={() => setMenu(false)}>Physical Design</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className=" my-2  text-lg font-bold ">
              <Link href={"/projects/design-verification"}
               onClick={() => setMenu(false)}>
                Design Verification
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

          <Link
            href="/blog"
            className="text-base text-white transition-colors"
            onClick={() => setMenu(false)}
          >
            Blog
          </Link>
          <Link
            href="/placements"
            className="text-base text-white transition-colors"
            onClick={() => setMenu(false)}
          >
            Placements
          </Link>
          <Link
            href="/contact"
            className="text-base text-white transition-colors"
            onClick={() => setMenu(false)}
          >
            Contact Us
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Navbar;
