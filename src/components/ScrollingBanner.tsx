'use client'
import React from 'react';
import { Button } from '@/components/ui/button';

const ScrollingBanner = () => (
  <div className="relative w-full h-12 overflow-hidden mt-3">
    <div className="absolute whitespace-nowrap animate-loopscroll flex items-center">
      <span className="inline-flex items-center text-xl">
        Don't miss our free UTB session on Part-2: ASIC Physical Design and
        Verification (Netlist-to-GDSII) of a Mod-N(Mod-10) Counter - Recorded
        Session Streaming on October 11, 2024! -
        <Button className="ml-4" onClick={() => {
          window.open('https://abhyasa.graphy.com/courses',"_blank")
        }}>Register Now</Button>
      </span>
      <span className="inline-flex items-center text-xl ml-20">
        Don't miss our free UTB session on Part-2: ASIC Physical Design and
        Verification (Netlist-to-GDSII) of a Mod-N(Mod-10) Counter - Recorded
        Session Streaming on October 11, 2024! -
        <Button className="ml-4" onClick={() => {
          window.open('https://abhyasa.graphy.com/courses',"_blank")
        }}>Register Now</Button>
      </span>
    </div>
  </div>
);

export default ScrollingBanner;

