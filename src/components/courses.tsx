'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Book, Globe, Clock, ChevronRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function Courses() {
  const router = useRouter()

  const courses = [
    {
      title: "VLSI Physical Design",
      image: "/images/vlsipd.webp",
      modules: 3,
      language: "English",
      access: "Access till 2025-07-18",
      url: "https://abhyasa.graphy.com/courses/VLSI--Physical-Design--66e40e7870e1ab34d9f9933d-66e40e7870e1ab34d9f9933d",
      url2: "/courses/course1"
    },
    {
      title: "VLSI Design Verification",
      image: "/images/vlsidv.webp",
      modules: 2,
      language: "English",
      access: "LifeTime",
      url: "https://abhyasa.graphy.com/courses/VLSI--Design--Verification--66e2b24053750d2d5bf2d01d-66e2b24053750d2d5bf2d01d",
      url2: "/courses/course2"
    },
    
  ]

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8">
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-10 text-white">Our Courses</h1>
  
    <div className="flex flex-wrap gap-8 justify-center max-w-7xl mx-auto">
      {courses.map((course, index) => (
        <Card key={index} className="w-full sm:w-[48%] lg:w-[30%] bg-gray-800 border-gray-700 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_5px_rgba(30,58,138,0.6)]">
          <img
            src={course.image}
            alt={`${course.title} cover`}
            width={600}
            height={400}
            className="w-full h-48 object-cover"
          />
          <CardHeader>
            <CardTitle className="text-xl font-bold text-white">{course.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-400">Learn with ABHYASA</p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center">
                <Book className="w-4 h-4 mr-2" />
                <span>{course.modules} modules</span>
              </div>
              <div className="flex items-center">
                <Globe className="w-4 h-4 mr-2" />
                <span>{course.language}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>{course.access}</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between border-t border-gray-700 pt-4">
            <Button 
              className="bg-blue-500 hover:bg-blue-600 text-white"
              onClick={() => window.open(course.url, "_blank")}
            >
              Enroll Now
            </Button>
            <Button 
              variant="ghost" 
              className="text-blue-300 hover:text-blue-400"
              onClick={() => router.push(`${course.url2}`)}
            >
              Know more <ChevronRight className="ml-1 w-4 h-4" />
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  </div>
  
  )
}