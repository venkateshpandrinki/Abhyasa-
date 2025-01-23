import { Courses } from '@/components/courses'
import Navbar from '@/components/Navbar'
import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Mail, Phone } from 'lucide-react'
import Link from 'next/link'

const page = () => {
  const faqs = [
    {
      question: "How long do I have access to the course materials?",
      answer: "Access duration varies by course. VLSI Physical Design has access until 2025-07-18, while other courses offer lifetime access. Check each course's details for specific information."
    },
    {
      question: "Are these courses suitable for beginners?",
      answer: "Our courses cater to various skill levels. The VLSI courses are designed for those with some background in electronics, while ABHYASA Meetings are suitable for all levels. We recommend checking the course descriptions for prerequisites."
    },
    {
      question: "Can I get a certificate upon completion?",
      answer: "Yes, upon successful completion of a course, you will receive a certificate of completion from ABHYASA. This can be a valuable addition to your professional portfolio."
    },
    {
      question: "What if I need help during the course?",
      answer: "We offer support through discussion forums within each course. For ABHYASA Meetings, you can interact directly with instructors and peers. Additionally, you can reach out to our support team for any technical issues."
    },
    {
      question:"What are the different kinds of jobs in VLSI physical design ?",
      answer:"1) Synthesis and STA 2) Floorplan 3) PnR 4)Physical Verification 5) Formal Verification, Functionality Verification, CAD, SI/PI",
    },{
      question:"Can fresher easily get a job in VLSI PD ?",
      answer:`Ofcourse , with the right skill set its quiet easy . Its best to get into a MNC while you are in college (internship)
Worst case keep yourself well equipped with digital electronics , cmos vlsi and some scripting concepts . Also , try to connect with vlsi professionals in Linkedin.`
    }
  ]
  return (
    <div className='  bg-gradient-to-br from-black via-gray-900 to-gray-800'>
      <Navbar />
      <Courses />  
      <div className="pb-16 px-4 sm:px-6 lg:px-8  bg-inherit">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-8 md:grid-cols-2">
          {/* CTA Section */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">Need More Information?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">Our team is here to help you choose the right course and answer any questions you may have.</p>
              <div className="space-y-2">
                <Link href={"/contact"}>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white mb-3">
                  <Mail className="mr-2 h-4 w-4" /> Contact Us
                </Button>
                </Link>
                <Link href={"/contact"}>
                <Button variant="outline" className="w-full text-blue-400 hover:text-blue-300 border-blue-600 hover:bg-blue-900/20">
                  <Phone className="mr-2 h-4 w-4" /> Schedule a Call
                </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/*  Section */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="multiple"  className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-white hover:text-blue-400">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>

      
    </div>
  )
}

export default page
