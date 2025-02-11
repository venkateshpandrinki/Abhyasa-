"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, } from "./ui/dialog"

export default function CourseAnnouncementModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Show the modal when the component mounts
    setIsOpen(true)
  }, [])

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px] bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white border-gray-700">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">
            VLSI Design Training Program
          </DialogTitle>
          <DialogDescription className="text-lg mt-2 text-gray-300">
            Training Program for 2nd year B.Tech
            Duration : 300 hours
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-between gap-2">
          <Button
            variant="outline"
            onClick={() => setIsOpen(false)}
            className="text-white "
          >
            Close
          </Button>
          <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
            <Link href="https://drive.google.com/file/d/15yLJwm7gGqYvg4pkrA5cb6_nRlFzN7aa/view?usp=sharing">Learn More</Link>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

