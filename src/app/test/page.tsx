"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import HeroText from "@/components/HeroText";
import BlurText from "@/components/BlurText";
import FloatingNav from "@/components/FloatingNav";
import { Mail, Phone } from "lucide-react";
import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { Separator } from "@/components/ui/separator";
import Heroslide from "@/components/Heroslide";
import { Navigationbar } from "@/components/navigationbar";
import StickyNav from "@/components/StickyNav";
import { MarqueeDemo } from "@/components/MarqueeDemo";

import Logowithshapes from "@/components/Logowithshapes";
import ScrollingBanner from "@/components/ScrollingBanner";
import { Courses } from "@/components/component/courses";
import { Placements } from "@/components/Placements";

const images = ["/images/bgimg.jpg", "/images/processor-8785387_1920.jpg"];

export default function Home() {
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
            <a href="mailto:abhyasasemitech@gmail.com">
              abhyasasemitech@gmail.com
            </a>
          </address>
        </div>
        <Separator className=" bg-slate-400 h-8" orientation="vertical" />
        <div className=" cursor-pointer flex space-x-4">
          <LinkedInLogoIcon />

          <InstagramLogoIcon />
          <TwitterLogoIcon />
        </div>
      </div>
      <div className=" absolute  left-36 ">
        <Logowithshapes />
      </div>
      <FloatingNav />
      <Navigationbar />
      <StickyNav />

      <div className="relative h-4/5  lg:h-screen overflow-hidden">
        <Head>
          <title>Image Carousel</title>
          <link rel="icon" href="/favicon.ico" />
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
          </div>
        ))}

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Heroslide />
        </div>
      </div>
      <ScrollingBanner />
      <Courses />
     
      <Placements/>
    </>
  );
}
