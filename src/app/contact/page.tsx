import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Instagram, Linkedin, Youtube, Phone, Mail, TwitterIcon } from "lucide-react"
import Navbar from "@/components/Navbar"

export default function page() {
  return (
    <div className=" h-5/6 bg-gradient-to-br from-black via-gray-900 to-gray-800 p-4 md:p-8">
        <Navbar/>
        <h1 className="text-5xl md:text-7xl font-bold text-center  my-4 text-white">Contact us</h1>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-8">
         
          
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-3">Address</h2>
              <p className="text-gray-300 leading-relaxed">
              2nd Floor, Akhila Arcade Rama Talkies
Road Asilmetta junction Visakhapatnam-530016
Andhra Pradesh India
              </p>
            </div>

            <div className="flex items-center gap-3 text-gray-300">
              <Phone className="h-5 w-5" />
              <span>+91 9438062982</span>
            </div>

            <div className="flex items-center gap-3 text-gray-300">
              <Mail className="h-5 w-5" />
              <span>abhyasasemitech@gmail.com</span>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-white">Social Media</h2>
              <div className="flex gap-4">
               
                <a href="https://www.instagram.com/abhyasa_semitech/" target="_blank" className="text-white hover:text-gray-300">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="https://www.linkedin.com/in/abhyasasemitech24/" target="_blank" className="text-white hover:text-gray-300">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="https://x.com/abhyasasemitech" target="_blank" className="text-white hover:text-gray-300">
                    <TwitterIcon className="h-6 w-6"/>
                  
                </a>
              </div>
            </div>
          </div>
        </div>

        <Card className="bg-white rounded-3xl">
          <CardContent className="p-6 space-y-4">
            <div className="space-y-2">
              <Input
                className="bg-white border-gray-200 h-12 text-lg"
                id="name"
                placeholder="Name"
              />
            </div>
            <div className="space-y-2">
              <Input
                className="bg-white border-gray-200 h-12 text-lg"
                id="email"
                placeholder="Email"
                type="email"
              />
            </div>
            <div className="space-y-2">
              <Input
                className="bg-white border-gray-200 h-12 text-lg"
                id="phone"
                placeholder="Phone"
                type="tel"
              />
            </div>
            <div className="space-y-2">
              <Input
                className="bg-white border-gray-200 h-12 text-lg"
                id="institute"
                placeholder="Institute"
              />
            </div>
            <Button className="w-32 h-12 text-lg bg-[#1e1b4b] hover:bg-[#2e2a5b]">
              Send
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}