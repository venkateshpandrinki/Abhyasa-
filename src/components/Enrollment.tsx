import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";


const enrollmentSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits" }),
  qualification: z.enum(["high-school", "bachelors", "masters", "phd"], {
    required_error: "Please select your highest qualification",
  }),
  passedOut: z.number().int().min(1900, { message: "Enter a valid year" }).max(2099, { message: "Enter a valid year" }),
});

export default function Enrollment() {
  const [selectedQualification, setSelectedQualification] = useState("");
  
  // Initialize form with Zod validation
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(enrollmentSchema),
  });

  const onSubmit = (data: any) => {
    // Handle form submission (e.g., send data to a server)
    console.log(data);
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSfgcZ72pLYIUGDa1oS_OAz-BC6hd006mUNpocryiNk8ejO8Cg/viewform?usp=sf_link";
  };

  return (
    <section className="min-h-screen  bg-inherit flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-800  backdrop-blur-md rounded-xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Enrollment Form</h2>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white">Name</Label>
            <Input id="name" placeholder="Enter your full name" className="bg-white/20 text-white placeholder:text-gray-400" {...register("name")} />
            {errors.name && <p className="text-red-500 text-sm">{String(errors.name.message)}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" className="bg-white/20 text-white placeholder:text-gray-400" {...register("email")} />
            {errors.email && <p className="text-red-500 text-sm">{String(errors.email.message)}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-white">Phone</Label> 
            <Input id="phone" type="tel" placeholder="Enter your phone number" className="bg-white/20 text-white placeholder:text-gray-400" {...register("phone")} />
            {errors.phone?.message && <p className="text-red-500 text-sm">{String(errors.phone.message)}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="qualification" className="text-white">Highest Qualification</Label>
            <Select onValueChange={(value) => setValue("qualification", value)}>
              <SelectTrigger className="bg-white/20 text-white">
                <SelectValue placeholder="Select your highest qualification" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="high-school">High School</SelectItem>
                <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                <SelectItem value="masters">Master's Degree</SelectItem>
                <SelectItem value="phd">Ph.D.</SelectItem>
              </SelectContent>
            </Select>
            {errors.qualification && <p className="text-red-500 text-sm">{String(errors.qualification.message)}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="passedOut" className="text-white">Year of Passed Out</Label>
            <Input id="passedOut" type="number" placeholder="Enter year" min="1900" max="2099" step="1" className="bg-white/20 text-white placeholder:text-gray-400" {...register("passedOut", { valueAsNumber: true })} />
            {errors.passedOut && <p className="text-red-500 text-sm">{String(errors.passedOut.message)}</p>}
          </div>
          <Button type="submit" className="w-full bg-blue-500  text-white hover:bg-blue-600">Submit</Button>
        </form>
      </div>
    </section>
  );
}
