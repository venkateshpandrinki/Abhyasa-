"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import FloatingNav from "@/components/FloatingNav";
import { ChevronDown, LucideYoutube, Mail, Phone, Youtube, YoutubeIcon } from "lucide-react";
import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { Separator } from "@/components/ui/separator";
import Heroslide from "@/components/Heroslide";

import Logowithshapes from "@/components/Logowithshapes";
import ScrollingBanner from "@/components/ScrollingBanner";
import { Courses } from "@/components/courses";
import { Placements } from "@/components/Placements";
import Features from "@/components/Features";
import Enrollment from "@/components/Enrollment";
import Navbar from "@/components/Navbar";
import { useRef } from "react";
import Link from "next/link";
import Blog from "@/components/Blog";
import type { Metadata } from 'next';
import { DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
// const images = ["https://media.licdn.com/dms/image/v2/D5612AQH8MT2TEr39zw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1679751126970?e=1736380800&v=beta&t=SK2GrZN0wUy7vXnShVgRVSsFXDQ1JS0uRUc21jDlJF4","https://pinetrainingacademy.in/wp-content/uploads/2023/07/Untitled-design-18-e1690568162755.jpg","https://openroaddesigncontest.org/wp-content/uploads/2023/02/99.jpg"];
const images = ['/images/b1.webp','/images/b2.webp','/images/b3.webp'];
// const images = ['/images/b2.WEBP','/images/b1.WEBP','images/b3.WEBP'];












export default function Home() {
  const enrollmentRef = useRef<HTMLDivElement | null>(null); // Define the type for the ref

  const scrollToEnrollment = () => {
    enrollmentRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setKey((prevKey) => prevKey + 1); // This will force the animation to restart
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
  <>
         {/* <SideNavBar/>  */}
    {/* <CourseAnnouncementModal/> */}
    {/* <ImagePopup altText="banner" imageUrl="/images/flyer1.jpg" linkUrl="https://drive.google.com/file/d/15yLJwm7gGqYvg4pkrA5cb6_nRlFzN7aa/view?usp=sharing"/> */}
    <div className=" scroll-smooth  bg-gradient-to-br from-black via-gray-900 to-gray-800  ">

      {/* /contactdetails */}
      <div className="w-[850px] absolute hidden lg:flex items-center justify-end  space-x-4  h-20  font-semibold right-40 z-10 px-10">
        <div className=" flex  cursor-pointer  p-2">
          <Phone />
          +91 9438062982
        </div>

        <Separator className=" bg-slate-400 h-8" orientation="vertical" />
        <div className=" flex gap-2  p-2">
          <Mail />

          <address>
            <a href="mailto:hr@abhyasa.org.in">
            hr@abhyasa.org.in
            </a>
          </address>
        </div>
        <Separator className=" bg-slate-400 h-8" orientation="vertical" />
        <div className=" cursor-pointer flex items-center space-x-4">
            <Link href={"https://www.linkedin.com/in/abhyasasemitech24/"} target="_blank" aria-label="LinkedIn">
            <LinkedInLogoIcon />
            </Link>
            <Link href={"https://www.instagram.com/abhyasa_semitech/"} target="_blank" aria-label="Instagram">
            <InstagramLogoIcon />
            </Link>
            <Link href={"https://x.com/abhyasasemitech"} target="_blank" aria-label="Twitter">
            <TwitterLogoIcon />
            </Link>
            <Link href={"https://www.youtube.com/@abhyasa_semitech"} target="_blank" aria-label="Youtube">
            <LucideYoutube className="h-6 w-6" strokeWidth={1} />
            </Link>
        </div>
      </div>
      <div className=" absolute ">
        <Logowithshapes />
      </div>
      <FloatingNav />
      <div className=" lg:hidden ">

      <Navbar/>
      </div>


      <div className="relative   w-full h-[500px]  lg:h-[calc(100vh-60px)] overflow-hidden">

        <Head>
          <title>Image Carousel</title>
          <link rel="icon" href="" />
        </Head>

        {images.map((image, index) => (
          <div
          key={`${image}-${key}`}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          >
            <div
              className="w-full h-full bg-cover bg-center animate-slowzoom opacity-40"
              style={{ backgroundImage: `url(${image})` }}
              />
            {/* <div className="relative w-full h-full animate-slowzoom opacity-40">
  <ExportedImage
  src={image}
  alt="Background Image"
  fill
  
  priority
  />
  </div> */}

          </div>
        ))}

        <div className="absolute inset-0 flex flex-col  items-center justify-center">
          <Heroslide scrollToEnrollment={scrollToEnrollment} />
          

    <div className="flex md:justify-center  md:gap-16 h-auto justify-center  gap-5 mt-2 w-full  ">
      <div className=" ">

      <DropdownMenu >
          <DropdownMenuTrigger className=" flex items-center  text-base bg-blue-600  rounded-md border-none p-2">
            Physical Design{" "}
            <span>
              <ChevronDown className=" mt-1" />
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuContent className=" bg-blue-600  rounded-2xl border-none ">
            <DropdownMenuItem className="   focus:bg-blue-800 my-2 text-lg font-bold ">
              <Link href={"/blog/pnr/floorplanning-the-design"}> Floorplanning the design</Link>
            </DropdownMenuItem>
            
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
        {/* <div>

        <Button>PD Verification</Button>
        </div>
        <div>

        <Button>PD Analysis</Button>
        </div> */}
        <div>

        {/* <Link href='/blog/pnr/latchup-effect'>
        <Button >PD Essentials</Button>
        </Link> */}
<DropdownMenu >
          <DropdownMenuTrigger className=" flex items-center  text-base bg-blue-600  rounded-md border-none p-2">
            PD Essentials{" "}
            <span>
              <ChevronDown className=" mt-1" />
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuContent className=" bg-blue-600  rounded-2xl border-none ">
            <DropdownMenuItem className="   focus:bg-blue-800 my-2 text-lg font-bold ">
              <Link href={"/blog/pnr/latchup-effect"}> Latchup-Effect</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className=" my-2 focus:bg-blue-800 text-lg font-bold ">
              <Link href={"/blog/pnr/trim-design"}>
                Trim-Design
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className=" my-2 focus:bg-blue-800 text-lg font-bold ">
              <Link href={"/blog/pnr/module-placement-constraints"}>
                Module Placement constraints
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        </div>
      </div>
  
        </div>
      </div>
      {/* <ScrollingBanner /> */}
      <Features />
      <Courses />

      {/* <Placements /> */}
      <div ref={enrollmentRef}>

      <Enrollment />
      </div>
      <Blog/>
      
    </div>
    
        </>
  );
}
