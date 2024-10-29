'use client'
import { Button } from "@/components/ui/button"
import Globesvg from "../ui/Globesvg";
import { Book, Globe, Clock } from 'lucide-react';

export function Courses() {
  return (
    <div className="py-10">
      <h1 className="text-6xl font-medium text-center mb-5">Our Courses</h1>

    <section className="grid grid-cols-1 justify-center  gap-6 mx-10 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:px-6 ">
      <div className="rounded-lg  overflow-hidden shadow-lg transition-all hover:scale-[1.02]  hover:shadow-[0_0_15px_5px_rgba(128,0,128,0.6)] ">
        <img
          src="https://abhyasa.graphy.com/_next/image?url=https%3A%2F%2Fd502jbuhuh9wk.cloudfront.net%2Fcourses%2F66e40e7870e1ab34d9f9933d%2Fcover%2F2024-09-13T10%3A11%3A32.535Z.jpg&w=1920&q=75"
          alt="Course Image"
          width={600}
          height={400}
          className="w-full  object-cover"
          // style={{ aspectRatio: "600/400", objectFit: "cover" }}
          />
        <div className="p-4 bg-card  border border-border">
          <h3 className="text-lg font-semibold mb-2">VLSI Physical Design</h3>
          <p className="text-muted-foreground mb-4">
          Learn with ABHYASA
          </p>

          <div className="space-y-2">
        <div className="flex items-center text-sm text-foreground dark:text-foreground">
          <Book className="w-4 h-4 mr-2" />
          <span>3 modules</span>
        </div>
        <div className="flex items-center text-sm text-foreground dark:text-foreground">
          <Globe className="w-4 h-4 mr-2" />
          <span>English</span>
        </div>
        <div className="flex items-center text-sm text-foreground dark:text-foreground">
          <Clock className="w-4 h-4 mr-2" />
          <span>Access till 2025-07-18</span>
        </div>
      </div>
          
          <Button className="w-full mt-2" onClick={() => {
            window.open("https://abhyasa.graphy.com/courses/VLSI--Physical-Design--66e40e7870e1ab34d9f9933d-66e40e7870e1ab34d9f9933d", "_blank");
          }}>Enroll Now</Button>
        </div>
      </div>
      {/* course two */}
      <div className="rounded-lg overflow-hidden shadow-lg transition-all hover:scale-[1.02] hover:shadow-[0_0_15px_5px_rgba(128,0,128,0.6)]">
        <img
          src="https://abhyasa.graphy.com/_next/image?url=https%3A%2F%2Fd502jbuhuh9wk.cloudfront.net%2Fcourses%2F66e2b24053750d2d5bf2d01d%2Fcover%2F2024-09-13T10%3A52%3A50.148Z.jpg&w=828&q=75"
          alt="Course Image"
          width={600}
          height={400}
          className="w-full  object-cover"
          // style={{ aspectRatio: "600/400", objectFit: "cover" }}
          />
        <div className="p-4 bg-card  border border-border">
          <h3 className="text-lg font-semibold mb-2">VLSI Design Verification</h3>
          <p className="text-muted-foreground mb-4">
           Learn with ABHYASA
          </p>
          
          <div className="space-y-2">
        <div className="flex items-center text-sm text-foreground dark:text-foreground">
          <Book className="w-4 h-4 mr-2" />
          <span>2 modules</span>
        </div>
        <div className="flex items-center text-sm text-foreground dark:text-foreground">
          <Globe className="w-4 h-4 mr-2" />
          <span>English</span>
        </div>
        <div className="flex items-center text-sm text-foreground dark:text-foreground">
          <Clock className="w-4 h-4 mr-2" />
          <span>LifeTime</span>
        </div>
      </div>

          <Button className="w-full mt-2" onClick={() => {
            window.open("https://abhyasa.graphy.com/courses/VLSI--Design--Verification--66e2b24053750d2d5bf2d01d-66e2b24053750d2d5bf2d01d", "_blank");
          }} >Enroll Now</Button>
        </div>
      </div>
      {/* course 3 */}
      <div className="rounded-lg overflow-hidden shadow-lg transition-all hover:scale-[1.02] hover:shadow-[0_0_15px_5px_rgba(128,0,128,0.6)]">
        <img
          src="https://abhyasa.graphy.com/_next/image?url=https%3A%2F%2Fd502jbuhuh9wk.cloudfront.net%2Fcourses%2F66efec953d2dba4bb1c40a2b%2Fcover%2F2024-09-22T10%3A09%3A25.295Z.jpg&w=828&q=75"
          alt="Course Image"
          width={600}
          height={400}
          className="w-full object-cover "
          // style={{ aspectRatio: "600/400", objectFit: "cover" }}
          />
        <div className="p-4 bg-card  border border-border">
          <h3 className="text-lg font-semibold mb-2">ABHYASA Meetings</h3>
          <p className="text-muted-foreground mb-4">
            Learn with ABHYASA
          </p>
          
          <div className="space-y-2">
        <div className="flex items-center text-sm text-foreground dark:text-foreground">
          <Book className="w-4 h-4 mr-2" />
          <span>1 module</span>
        </div>
        <div className="flex items-center text-sm text-foreground dark:text-foreground">
          <Globe className="w-4 h-4 mr-2" />
          <span>English</span>
        </div>
        <div className="flex items-center text-sm text-foreground dark:text-foreground">
          <Clock className="w-4 h-4 mr-2" />
          <span>LifeTime</span>
        </div>
      </div>


          <Button className="w-full mt-2" onClick={ () =>{
            window.open("https://abhyasa.graphy.com/courses/ABHYASA-Meetings-66efec953d2dba4bb1c40a2b", "_blank");
          }}>Enroll Now</Button>
        </div>
      </div>
      
    </section>
          </div>
  )
}
