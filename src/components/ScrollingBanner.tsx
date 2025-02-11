'use client'
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';


const ScrollingBanner = () => {
  return (
    <div className="relative w-full h-12 overflow-hidden mt-3">
      <div className="scrolling-container">
        <div className="scrolling-content">
          <span className="inline-flex items-center text-xl">
          Comprehensive Industry-Oriented VLSI Design Training for II-year ECE, EEE & EIE Students (300 Hours Across 4 Semesters)
          <Link href={"https://drive.google.com/file/d/15yLJwm7gGqYvg4pkrA5cb6_nRlFzN7aa/view?usp=sharing"} target='_blank'>
            <Button className="ml-4 bg-blue-600 hover:bg-blue-700" >Join the Program</Button>
            </Link>
          </span>
          <span className="inline-flex items-center text-xl ml-20">
          Comprehensive Industry-Oriented VLSI Design Training for II-year ECE, EEE & EIE Students (300 Hours Across 4 Semesters)
          <Link href={"https://drive.google.com/file/d/15yLJwm7gGqYvg4pkrA5cb6_nRlFzN7aa/view?usp=sharing"} target='_blank'>
          
            <Button className="ml-4 bg-blue-600 hover:bg-blue-700" >Join the Program</Button>
            </Link>
          </span>
        </div>
      </div>

      <style jsx>{`
        .scrolling-container {
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .scrolling-content {
          display: inline-flex;
          white-space: nowrap;
          animation: scroll 30s linear infinite;
        }

        .scrolling-container:hover .scrolling-content {
          animation-play-state: paused;
        }

        @keyframes scroll {
          from {
            transform: translateX(25%);
          }
          to {
            transform: translateX(-100%);
          }
        }
      `}</style>
      
    </div>
  );
};

export default ScrollingBanner;