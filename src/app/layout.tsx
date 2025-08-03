import type { Metadata } from "next";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"

import { GeistSans } from 'geist/font/sans';
import StickyNav from "@/components/StickyNav";
import Footer from "@/components/Footer";
 

export const metadata:Metadata={
  title:'Kickstart Your VLSI Career in Telangana, Andhra & Bangalore – Industry-Ready Training with Placement Support'
  ,
  description:'Abhyasa offers hands-on VLSI training programs across Telangana, Andhra Pradesh, and Bangalore. Learn from experts, master industry tools, and get job-ready with 100% placement assistance. Ideal for students, passouts & working professionals.'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
        // console.log("👶 children type:", typeof children, children);
  return (
    <html lang="en">
      <body
        className={`antialiased h-dvh ${GeistSans.className}`}
      >
        <StickyNav/>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >

          
            {children}
          </ThemeProvider>
          <Footer/>
      </body>
      
    </html>
  );
}
