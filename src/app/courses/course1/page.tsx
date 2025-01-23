"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Navbar from "@/components/Navbar"
import { Separator } from "@/components/ui/separator"

export default function Component() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className=" bg-gradient-to-br from-black via-gray-900 to-gray-800">
      <Navbar/>

    <div className="min-h-screen text-white p-6 flex flex-col items-center justify-center gap-8">

      <Card className="w-full max-w-4xl bg-gray-800/50 text-white border-gray-700">
        <CardHeader>
          <CardTitle className="text-3xl font-bold mb-2">VLSI Physical Design</CardTitle>
          <CardDescription className="text-gray-300">
          This course provides a comprehensive overview of physical design methodologies essential for creating efficient and optimized integrated circuits. It addresses the latest advancements in semiconductor technology, focusing on practical skills and knowledge required for effective physical design in ASIC development.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-gray-700">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="modules">Modules</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="mt-4 text-gray-300">
              <h3 className="text-xl font-semibold mb-2">About The Course</h3>
              <p className="mb-6">
              The curriculum starts with the foundational concepts of VLSI physical design, including design rules and the importance of technology scaling. It progresses through critical topics such as floorplanning, placement, clock tree synthesis, routing, and sign-off processes. Emphasis is placed on industry-standard tools and techniques, enabling students to tackle real-world challenges in physical design. Through hands-on labs and projects, participants gain practical experience in optimizing layouts for performance, power, and area, preparing them for careers in the dynamic semiconductor field.
              </p>
              <h3 className="text-xl font-semibold mb-4">Training Outcomes</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
    "Master Physical Design Techniques",
    "Implement Effective Floorplanning Strategies",
    "Execute Placement and Routing",
    "Understand Timing Analysis and Optimization",
    "Gain Proficiency in Power and Signal Integrity Techniques",
    "Receive Certification and Ongoing Technical Support"
  ].map((outcome, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="text-blue-600" size={20} />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="modules" className="mt-4">
            <ul className=" list-disc list-inside  space-y-2">
  <li>Introduction to VLSI Physical Design</li>
  <Separator/>
  <li>Introduction to LINUX & TCL</li>
  <Separator/>
  <li>Design Preparation</li>
  <Separator/>
  <li>Floorplanning</li>
  <Separator/>
  <li>Placement</li>
  <Separator/>
  <li>Clock Tree Synthesis (CTS)</li>
  <Separator/>
  <li>Routing</li>
  <Separator/>
  <li>Timing Analysis and Optimization</li>
  <Separator/>
  <li>Power and Signal Integrity</li>
  <Separator/>
  <li>Verification and Sign-off</li>
  <Separator/>
  <li>Advanced Topics</li>
  <Separator/>
  <li>Hands-On Projects and Case Studies</li>
</ul>


            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      
      <Card className="w-full max-w-4xl bg-gray-800/80 text-white border-gray-700">
        <CardContent className="pt-6">
          <h3 className="text-2xl font-semibold mb-4 text-center">Ready to Advance Your VLSI Skills?</h3>
          <p className="text-center mb-6 text-gray-300">Join our comprehensive VLSI Physical Design course and take your career to the next level.</p>
          <div className="flex justify-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full text-lg transition-colors duration-300"
             onClick={() => window.open("https://abhyasa.graphy.com/courses/VLSI--Physical-Design--66e40e7870e1ab34d9f9933d-66e40e7870e1ab34d9f9933d", "_blank")}
            >
              Enroll Now
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
                </div>
  )
}