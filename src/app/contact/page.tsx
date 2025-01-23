'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Instagram, Linkedin, Phone, Mail, TwitterIcon } from "lucide-react"
import Navbar from "@/components/Navbar"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"

// Define the form schema
const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits" }),
  institute: z.string().min(2, { message: "Institute name must be at least 2 characters" }),
});

export default function Page() {
  const [formStatus, setFormStatus] = useState("");

  // Initialize form with Zod validation
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: any) => {
    setFormStatus("Submitting...");
    const formDataString = new URLSearchParams(data).toString();

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbx0HV-pVV-u6fDNs0sWV6DoasFeRYzOxglymUhBpDvsHUDFWLqR3r4UmtqoFVMNyq-nmw/exec",
        {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: formDataString,
        }
      );
      
      if (response.ok) {
        setFormStatus("Message sent successfully!");
        reset(); // Clear form fields
      } else {
        throw new Error("Failed to submit the form");
      }
    } catch (error) {
      console.error(error);
      setFormStatus("An error occurred while sending the message.");
    }

    setTimeout(() => setFormStatus(""), 3000);
  };

  return (
    <div className=" md:h-5/6 bg-gradient-to-br from-black via-gray-900 to-gray-800 p-4 md:p-8 ">
      <Navbar />
      <h1 className="text-5xl md:text-7xl font-bold text-center my-4 text-white">Contact us</h1>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left side content remains the same */}
        <div className="space-y-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-3">Address</h2>
              <p className="text-gray-300 leading-relaxed">
                2nd Floor, Akhila Arcade Rama Talkies Road Asilmetta junction Visakhapatnam-530016 Andhra Pradesh India
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
                  <TwitterIcon className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Form card with updated logic */}
        <Card className="bg-white rounded-3xl text-black">
          <CardContent className="p-6 space-y-4">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-2">
                <Input
                  className="bg-white border-gray-200 h-12 text-lg"
                  placeholder="Name"
                  {...register("name")}
                />
                {errors.name && <p className="text-red-500 text-sm">{String(errors.name.message)}</p>}
              </div>

              <div className="space-y-2">
                <Input
                  className="bg-white border-gray-200 h-12 text-lg"
                  placeholder="Email"
                  type="email"
                  {...register("email")}
                />
                {errors.email && <p className="text-red-500 text-sm">{String(errors.email.message)}</p>}
              </div>

              <div className="space-y-2">
                <Input
                  className="bg-white border-gray-200 h-12 text-lg"
                  placeholder="Phone"
                  type="tel"
                  {...register("phone")}
                />
                {errors.phone && <p className="text-red-500 text-sm">{String(errors.phone.message)}</p>}
              </div>

              <div className="space-y-2">
                <Input
                  className="bg-white border-gray-200 h-12 text-lg"
                  placeholder="Institute"
                  {...register("institute")}
                />
                {errors.institute && <p className="text-red-500 text-sm">{String(errors.institute.message)}</p>}
              </div>

              <Button type="submit" className="w-32 h-12 text-lg bg-[#1e1b4b] hover:bg-[#2e2a5b]">
                Send
              </Button>
            </form>
            {formStatus && <p className="text-center text-sm font-medium text-gray-600">{formStatus}</p>}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}