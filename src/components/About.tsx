import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Cpu, Book, Users, Award } from "lucide-react"
import Image from "next/image"
import Navbar from "./Navbar"

export default function About() {
  return (
    <div className="min-h-screen bg-background">
     <Navbar />

      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About Abhyasa</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Empowering the next generation of VLSI engineers with cutting-edge courses and hands-on experience.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg text-muted-foreground">
            At Abhyasa, we are committed to bridging the gap between theoretical knowledge and practical application in the field of VLSI design. Our mission is to provide high-quality, industry-relevant courses that equip students and professionals with the skills needed to excel in the rapidly evolving world of integrated circuit design.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8">Why Choose Abhyasa?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Book, title: "Comprehensive Curriculum", description: "Covers all aspects of VLSI design from basics to advanced topics" },
              { icon: Users, title: "Expert Instructors", description: "Learn from industry professionals with years of experience" },
              { icon: Cpu, title: "Hands-on Projects", description: "Apply your knowledge with real-world VLSI design projects" },
              { icon: Award, title: "Industry Recognition", description: "Our courses are recognized and valued by top tech companies" }
            ].map((feature, index) => (
              <Card key={index}>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <feature.icon className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Name 1", role: "Founder & Lead Instructor" },
              { name: "Name 2", role: "VLSI Design Expert" },
              { name: "Name 3", role: "Course Development Manager" }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <Image
                  src={`/placeholder.svg?height=200&width=200`}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center bg-muted p-8 rounded-lg">
          <h2 className="text-3xl font-semibold mb-4">Ready to Start Your VLSI Journey?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Explore our courses and take the first step towards becoming a VLSI design expert.
          </p>
          <Button size="lg">
            View Our Courses
          </Button>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-8 mt-16">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Abhyasa VLSI Courses. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}