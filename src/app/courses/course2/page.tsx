"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Navbar from "@/components/Navbar"

export default function Component() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className=" bg-gradient-to-br from-black via-gray-900 to-gray-800">
      <Navbar/>

    <div className="min-h-screen text-white p-6 flex flex-col items-center justify-center gap-8">

      <Card className="w-full max-w-4xl bg-gray-800/50 text-white border-gray-700">
        <CardHeader>
          <CardTitle className="text-3xl font-bold mb-2">VLSI Design and Verification</CardTitle>
          <CardDescription className="text-gray-300">
            This course reflects the latest trends in the semiconductor industry, covering essential aspects of ASIC design, verification, and hands-on technical skills for advanced technologies.
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
                The curriculum begins with VLSI fundamentals and an understanding of Moore s Law, then moves into topics such as RTL coding, synthesis, low-power design, and verification using SystemVerilog and UVM, with a focus on coverage-driven, formal, and assertion-based methodologies. With strong emphasis on Linux fundamentals and practical sessions, this course prepares students for real-world automation in the design flow, enabling hands-on experience with modern, industry-relevant semiconductor solutions.
              </p>
              <h3 className="text-xl font-semibold mb-4">Training Outcomes</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Learn Verilog from Scratch",
                  "Design Digital Circuits",
                  "Verification Techniques",
                  "Simulation and Debugging",
                  "Certification and Technical Support"
                ].map((outcome, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="text-green-500" size={20} />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="modules" className="mt-4">
            <Accordion type="multiple" >
  <AccordionItem value="vlsi-asic-flow">
    <AccordionTrigger>VLSI ASIC Flow</AccordionTrigger>
    <AccordionContent>
      <ul className=" list-disc list-inside ">
        <li>VLSI Technology Overview</li>
        <li>Why VLSI?</li>
        <li>IP, Subsystems, and Chips</li>
        <li>SoC Architecture</li>
        <li>SoC Design Process</li>
        <li>System-Level Design - Hardware & Software</li>
        <li>VLSI Design Flow</li>
        <li>ASIC Vs FPGA</li>
      </ul>
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="digital-logic-design">
    <AccordionTrigger>Digital Logic Design</AccordionTrigger>
    <AccordionContent>
      <ul className=" list-disc list-inside ">
        <li>Number Systems</li>
        <li>Boolean Algebra and Logic Minimization</li>
        <li>Designing Combinational Logic Circuits</li>
        
        <li>Designing Sequential Logic Circuits: Latches, Flip-flops, and Conversions</li>
        <li>Frequency Dividers</li>
        <li>Finite State Machines</li>
        <li>Mealy & Moore FSMs</li>
        <li>Memories and Programmable Logic Devices</li>
      </ul>
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="introduction-to-linux-os">
    <AccordionTrigger>Introduction to Linux OS</AccordionTrigger>
    <AccordionContent>
      <ul className=" list-disc list-inside ">
        <li>Different Types of Operating System</li>
        <li>Why Unix?</li>
        <li>History of Unix</li>
        <li>Design Features & Layers</li>
        <li>Basic Unix Commands</li>
        <li>Advanced Commands</li>
        <li>Utilities</li>
        <li>Vi Editor</li>
        <li>Networking in Unix</li>
        <li>Labs on Linux Operating System</li>
      </ul>
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="verilog-hdl">
    <AccordionTrigger>Verilog HDL</AccordionTrigger>
    <AccordionContent>
      <ul className=" list-disc list-inside ">
        <li>Introduction to Verilog HDL</li>
        <li>Verilog Constructs</li>
      
        <li>Lab 1: Familiarization with Verilog Operators</li>
        <li>Advanced Verilog for Verification</li>
        <li>Assignments</li>
        <li>Tasks & Functions</li>
        <li>Lab 2: Familiarization with Delays & System Tasks</li>
        <li>Lab 3: Familiarization with Sequential Logic Circuits</li>
      </ul>
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="verilog-hdl-and-fsm">
    <AccordionTrigger>Verilog HDL & FSM</AccordionTrigger>
    <AccordionContent>
      <ul className=" list-disc list-inside ">
        <li>Finite State Machine & RTL Coding Style</li>
        <li>Lab 5: Familiarization with FSM Design</li>
      </ul>
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="advanced-verilog-and-code-coverage">
    <AccordionTrigger>Advanced Verilog & Code Coverage</AccordionTrigger>
    <AccordionContent>
      <ul className=" list-disc list-inside ">
        <li>Advanced Verilog Concepts</li>
        <li>Verilog stratified event queue</li>
        <li>Code Coverage</li>
        <li>Lab 6: Familiarization with Process of Generating Code Coverage Report</li>
      </ul>
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="verification-methodology-overview">
    <AccordionTrigger>Verification Methodology Overview (Testing Plan)</AccordionTrigger>
    <AccordionContent>
      <ul className=" list-disc list-inside ">
        <li>Introduction to Verification Methodology</li>
        <li>VLSI Design Flow – Verification</li>
        <li>Verification Process</li>
        <li>Reusable TB</li>
        <li>Verification Environment Architecture</li>
        <li>Directed Vs Random Testcases</li>
        <li>Constraint Random Coverage Driven Verification</li>
        <li>RTL – Functional Verification Methodologies</li>
        <li>Linting, ABV, Code and Functional Coverage</li>
      </ul>
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="systemverilog-theory-and-labs">
    <AccordionTrigger>SystemVerilog Theory & Labs</AccordionTrigger>
    <AccordionContent>
      <ul className=" list-disc list-inside ">
        <li>SystemVerilog Language Concepts Overview</li>
        <li>SystemVerilog Datatypes</li>
        <li>SystemVerilog Memories</li>
        <li>SystemVerilog Tasks & Functions</li>
        <li>SystemVerilog Interfaces</li>
       
        <li>Object-Oriented Programming - Basic</li>
      
        <li>Object-Oriented Programming - Advanced</li>
       
        <li>SV Randomization</li>
        
        <li>SV Threads, Mailbox, and Semaphores</li>
       
        <li>SV Virtual Interfaces</li>
        <li>Functional Coverage</li>
        <li>Case Study 1: TB Development for a Sample Design like RAM</li>
       
        <li>Case Study 2: SV TB Development Approach for a Sub-system/SoC</li>
      </ul>
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="universal-verification-methodology">
    <AccordionTrigger>Universal Verification Methodology Theory & Labs</AccordionTrigger>
    <AccordionContent>
      <ul className=" list-disc list-inside ">
        <li>UVM Overview</li>
        <li>UVM TB Architecture and Base Class Hierarchy</li>
        <li>UVM Factory</li>
        <li>Stimulus Modelling & Testbench Overview</li>
        <li>Lab 1: Familiarization with Stimulus Modelling</li>
        <li>Lab 2: Familiarization with UVM Factory</li>
        <li>UVM Phases and Reporting Mechanism</li>
        <li>Lab 3: Familiarization with UVM Phases</li>
        <li>TLM Ports and Configuration</li>
        <li>Creation of UVM TB Components</li>
       
        <li>UVM Sequences</li>
      
        <li>Virtual Sequences & Virtual Sequencers</li>
      
        <li>UVM Events & Callbacks</li>
        <li>Creating Scoreboard in UVM</li>
      
      </ul>
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="sva-theory-and-labs">
    <AccordionTrigger>SVA Theory & Labs</AccordionTrigger>
    <AccordionContent>
      <ul className=" list-disc list-inside ">
        <li>Introduction</li>
        <li>Sequences</li>
        <li>Different Operators & Sequence Compositions</li>
        <li>Definition of Reusable Sequences and Properties</li>
        <li>SVA Coverage and Control Tasks</li>
        <li>Lab Exercise: Familiarization with the Process of Writing Assertions for an RTL Design Based on Its Protocol</li>
      </ul>
    </AccordionContent>
  </AccordionItem>
</Accordion>

            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      
      <Card className="w-full max-w-4xl bg-gray-800/80 text-white border-gray-700">
        <CardContent className="pt-6">
          <h3 className="text-2xl font-semibold mb-4 text-center">Ready to Advance Your VLSI Skills?</h3>
          <p className="text-center mb-6 text-gray-300">Join our comprehensive VLSI Design and Verification course and take your career to the next level.</p>
          <div className="flex justify-center">
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-6 rounded-full text-lg transition-colors duration-300"
             onClick={() => window.open("https://abhyasa.graphy.com/courses/VLSI--Design--Verification--66e2b24053750d2d5bf2d01d-66e2b24053750d2d5bf2d01d"
              , "_blank")}
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