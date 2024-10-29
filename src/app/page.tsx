import { Courses } from "@/components/component/courses";
import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";
import Mainsection from "@/components/Mainsection";
import { MarqueeDemo } from "@/components/MarqueeDemo";

import Navbar from "@/components/Navbar";
import ScrollingBanner from "@/components/ScrollingBanner";



export default function Home() {
  return (
    <div className=" bg-background dark:bg-background">
     
     

   <Navbar/>
   
   {/* <Hero /> */}
   <Mainsection/>
   <ScrollingBanner/>
   <Courses/>
   <Footer/>  
   
    
    
    </div>
   
  );
}
