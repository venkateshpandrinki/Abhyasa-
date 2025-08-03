import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import {  Info } from "lucide-react"

import Marquee from "@/components/ui/marquee";
import ExportedImage from "next-image-export-optimizer";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { Metadata } from 'next'
export const metadata:Metadata ={
 title:'VLSI Placement Training with 100% Support – Abhyasa Success Stories',
 description:'See how Abhyasa students secure core semiconductor jobs with industry-relevant VLSI training. Our placement assistance covers resume building, mock interviews & hiring from MNCs and startups.'
}
const logos = [
  { "image": "/images/comp/c1.jpg", "alt": "Logo 1" },
  { "image": "/images/comp/c2.jpg", "alt": "Logo 2" },
  { "image": "/images/comp/c3.jpg", "alt": "Logo 3" },
  { "image": "/images/comp/c4.jpg", "alt": "Logo 4" },
  { "image": "/images/comp/c5.png", "alt": "Logo 5" },
  { "image": "/images/comp/c6.png", "alt": "Logo 6" },
  { "image": "/images/comp/c7.jpg", "alt": "Logo 7" },
  { "image": "/images/comp/c8.png", "alt": "Logo 8" },
  { "image": "/images/comp/c9.jpg", "alt": "Logo 9" },
  { "image": "/images/comp/c10.png", "alt": "Logo 10" },
  { "image": "/images/comp/c11.jpg", "alt": "Logo 11" },
  { "image": "/images/comp/c12.jpg", "alt": "Logo 12" },
  { "image": "/images/comp/c13.jpg", "alt": "Logo 13" },
  { "image": "/images/comp/c14.png", "alt": "Logo 14" },
  { "image": "/images/comp/c15.png", "alt": "Logo 15" },
  { "image": "/images/comp/c16.jpg", "alt": "Logo 16" },
  { "image": "/images/comp/c17.png", "alt": "Logo 17" },
  { "image": "/images/comp/c18.png", "alt": "Logo 18" },
  { "image": "/images/comp/c19.png", "alt": "Logo 19" },
  { "image": "/images/comp/c20.png", "alt": "Logo 20" }
]

export default function page() {
  return (
    <>
    
    <div className="min-h-screen  bg-gradient-to-br from-black via-gray-900 to-gray-800 text-gray-100">
    <Navbar/>
      <main className="container mx-auto px-4 py-16 space-y-16">
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Leap Ahead in Your <span className="text-blue-400">Career</span>
          </h1>
          {/* <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our placement program is designed to launch you into a successful career. Discover opportunities that align with your passion and skills.
            </p>
            <Button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white">
            Explore Opportunities
            <ChevronRight className="ml-2 h-4 w-4" />
            </Button> */}
        </section>

        <section aria-labelledby="policies-heading" className="space-y-8">
          <h2 id="policies-heading" className="text-3xl font-bold text-center mb-8 text-gray-100">
            Placement Support Policies
          </h2>
          <Card className="bg-gray-900 bg-opacity-50 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-gray-100">
                <Info className="h-5 w-5 text-blue-400" />
                <span>Important Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-gray-300 list-disc pl-5">
                <li>
                  The Institute puts its best effort into providing students with job opportunities by connecting potential employers with students. However, the Institute doesn't provide any guarantee on placement, as it depends on the prevailing job scenario.
                </li>
                <li>
                  Students are provided with placement support until they secure a job.
                </li>
                <li>
                  The Institute conducts evaluation tests once every month. Students are shortlisted for job opportunities based on their performance in these tests.
                </li>
                <li>
                  Below is the list of companies who have hired trained candidates from our Institute. In some cases, candidates would have been selected in off-campus drives without institute support.
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>
        <section className=" ">

        <Marquee
          pauseOnHover
          className="sm:h-20 md:h-24 justify-center overflow-hidden [--duration:30s] [--gap:1rem]"
          >
          {logos.map((data, idx) => (
            <ExportedImage
              key={idx}
              src={data.image}
              alt={data.alt}
              style={{ aspectRatio: "16/9" }}
              className="mx-auto md:h-20  md:w-auto  h-16 w-auto cursor-pointer rounded-xl  transition-all duration-300 hover hover:shadow-white shadow-md"
            />
          ))}
        </Marquee>
        <Marquee
          pauseOnHover
          reverse
          className=" sm:h-20 md:h-24 justify-center overflow-hidden [--duration:30s] [--gap:1rem]"
        >
          {logos.map((data, idx) => (
            <ExportedImage
            key={idx}
            src={data.image}
            alt={data.alt}
            style={{ aspectRatio: "16/9" }}
            className="mx-auto  md:h-20  md:w-auto  h-16 w-auto cursor-pointer rounded-xl  transition-all duration-300 hover hover:shadow-white shadow-md"
            />
          ))}
        </Marquee>
       
        
        </section>
        <section aria-labelledby="testimonials-heading" className="space-y-8">
          <h2 id="testimonials-heading" className="text-3xl font-bold text-center mb-8 text-gray-100">
            Our Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-cyan-50/5 border-cyan-200/20 backdrop-blur-sm hover:bg-cyan-50/10 transition-colors">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="relative w-24 h-24 mb-4">
                    <ExportedImage
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="rounded-full object-cover"
                      fill
                      sizes="(max-width: 96px) 100vw, 96px"
                      />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-100">{testimonial.name}</h3>
                  <p className="text-purple-400 mt-1">{testimonial.company}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        

      </main>
    </div>
            </>
  )
}
const testimonials = [
    {
      name: "S.Chandrasekhar",
      company: "Wipro",
      image: "/images/alumni/ch.jpg"
    },
    {
      name: "I. Naga Rajesh",
      company: "Digicomm",
      image: "/images/alumni/nagarajesh.jpg"
    },
    {
      name: "M. Emmanuel",
      company: "AppEx Semiconductors",
      image: "/images/alumni/emmanuel.png"
    },
    {
      name: "P. Narendra",
      company: "Krish Semiconductors",
      image: "/images/alumni/narendra.png"
    },
    {
      name: "K.Rahul",
      company: "Chipsolvetech",
      image: "/images/alumni/rahul.jpg"
    },
    {
      name: "A.Animesh",
      company: "Omni Arch Semiconductors",
      image: "/images/alumni/animesh.jpg"
    }
  ]