'use client'
import React from 'react';
import { Button } from '@/components/ui/button';

const ScrollingBanner = () => {
  return (
    <div className="relative w-full h-12 overflow-hidden mt-3">
      <div className="scrolling-container">
        <div className="scrolling-content">
          <span className="inline-flex items-center text-xl">
            Don't miss our free UTB session on Part-2: ASIC Physical Design and
            Verification (Netlist-to-GDSII) of a Mod-N(Mod-10) Counter - Recorded
            Session Streaming on December 11, 2024! -
            <Button className="ml-4 bg-blue-500" onClick={() => {
              window.open('https://abhyasa.graphy.com/courses', "_blank")
            }}>Register Now</Button>
          </span>
          <span className="inline-flex items-center text-xl ml-20">
            Don't miss our free UTB session on Part-2: ASIC Physical Design and
            Verification (Netlist-to-GDSII) of a Mod-N(Mod-10) Counter - Recorded
            Session Streaming on December 11, 2024! -
            <Button className="ml-4 bg-blue-500" onClick={() => {
              window.open('https://abhyasa.graphy.com/courses', "_blank")
            }}>Register Now</Button>
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