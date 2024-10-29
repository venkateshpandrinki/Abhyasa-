'use client'
import splitStringUsingRegex from "@/lib/SplitStringUsingRegex";
import {motion,Variants} from 'framer-motion'
import { Hedvig_Letters_Serif } from "next/font/google";

const hedvig = Hedvig_Letters_Serif({ subsets: ["latin"] });


const heading = " Start Your VLSI career with Excellent Placement";
const text = `  Designed & Delivered by Industry Experts`;

import React from 'react'

const charVariants = {
    hidden:{opacity:0},
    reveal:{opacity:1},
}

const HeroText = () => {
    const headingChars = splitStringUsingRegex(heading);
    const textChars = splitStringUsingRegex(text);
  return (
    <div className=" flex  flex-col">
    <motion.h1
    initial='hidden'
    whileInView="reveal"
    transition={{staggerChildren:0.02}}
    className={` whitespace-pre-wrap   tracking-wide   text-4xl md:text-6xl lg:text-7xl font-medium   text-black dark:text-white  md:pl-8 pb-5 `}
    >
        {headingChars.map((char) => (
            <motion.span
            key={char}
            transition={{duration:0.5}}
            variants={charVariants}
            >
                {char}
            </motion.span>
        ))}
        
    </motion.h1>
    <motion.p
     initial='hidden'
     whileInView="reveal"
     transition={{staggerChildren:0.015}}
     className=" text-black dark:text-[#fafafa]/60 text-lg md:text-2xl lg:text-3xl pl-8  pb-5"
    >
         {textChars.map((char) => (
            <motion.span
            key={char}
            transition={{duration:0.35}}
            variants={charVariants}
            >
                {char}
            </motion.span>
        ))}

    </motion.p>
    </div>
  )
}

export default HeroText
