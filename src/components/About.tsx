import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Layers, Target, Eye } from "lucide-react"
import Navbar from "./Navbar"

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white pb-8 px-8">
     <Navbar />
      <div className="max-w-4xl mx-auto mt-3">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-center my-2">ABOUT US</h1>

        <Card className="bg-gray-800 bg-opacity-50 backdrop-blur-lg mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-white">Who are 'ABHYASA'?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">
              The name ABHYASA infers practice, to achieve a quiet consistency and dedication: to see change, you need regular abhyasa (practice). ABHYASA is a VLSI Design Training mainly focused on giving complete knowledge and hands-on experience in VLSI design flow with industry-oriented tools. Our team has an Industry presence of over 10 years. It is extensive training for students in the field of electrical and electronics. By the end of the course, students will learn to work in a Linux environment and understand the complete VLSI design flow. ABHYASA was established to supply the VLSI industries with more expertise and fresh talent pools.
            </p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-gray-800 bg-opacity-50 backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-white">
                <Target className="mr-2" />
                Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Abhyasa is committed to materialize its vision through its extensive training programs, seminars, internships, and workshops. Abhyasa is dedicated to realizing its mission and exposing graduates and undergraduates to the industry.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 bg-opacity-50 backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-white">
                <Eye className="mr-2" />
                Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                The goal of Abhyasa is to serve as an intellectual bridge connecting highly developed, idealistic industries with a wealth of talented universities. Abhyasa wants to establish a point of contact for VLSI training through research and development, industry-focused education programs, and technological contributions.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4 flex items-center justify-center text-white shadow-sm">
            <Layers className="mr-2" />
            Our Expertise
          </h2>
          <p className="text-gray-300">
            With over a decade of industry presence, ABHYASA brings you comprehensive VLSI Design Training that bridges the gap between academia and industry requirements.
          </p>
        </div>
      </div>
    </div>
  )
}