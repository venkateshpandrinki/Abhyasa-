"use client";

import { Hedvig_Letters_Serif } from "next/font/google";
import { RainbowButton } from "./ui/rainbow-button";

const hedvig = Hedvig_Letters_Serif({ subsets: ["latin"] });

export function Hero() {
  return (
    <div className="relative flex h-[calc(100vh-135px)] w-full flex-col items-start  justify-center overflow-hidden rounded-lg border   bg-[#F5F5F5] dark:bg-background md:shadow-xl">
      <p
        className={` whitespace-pre-wrap   tracking-wide   text-4xl md:text-6xl lg:text-7xl font-medium   text-black dark:text-white ${hedvig.className} md:pl-8 pb-5 `}
      >
        Start Your VLSI career
        <br />
        with Excellent Placement
      </p>
      <p className=" text-black dark:text-[#fafafa]/60 text-lg md:text-2xl lg:text-3xl pl-8  pb-5">
        Designed & Delivered by Industry Experts
      </p>
      <span className=" pl-8">
        <RainbowButton onClick={() => {
          window.open('https://abhyasa.graphy.com/courses',"_blank")
        }}>Enroll Now!</RainbowButton>
      </span>

   
      


    

      {/* 
      <Image
      alt="hero image"
      
      src={'/images/hero.jpg'}
      fill
      sizes="(min-width: 808px) 50vw, 100vw"
      style={{
        
        objectFit: 'contain', // cover, contain, none
       
      }}
      
      />
       */}
      {/* <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
        )}
      /> */}
    </div>
  );
}
