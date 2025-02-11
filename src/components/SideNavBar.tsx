"use client"

import { useState } from "react"
import Link from "next/link"
import { Home, FileText, Monitor, Grid, Clock, ChevronRight, ChevronLeft } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface NavItemProps {
  href: string
  icon: React.ReactNode
  children: React.ReactNode
  className?: string
}

function NavItem({ href, icon, children, className }: NavItemProps) {
  return (
    <Button
      asChild
      variant="ghost"
      className={cn("w-full justify-start gap-2 px-4 py-2 text-gray-200 hover:bg-gray-700/50", className)}
    >
      <Link href={href}>
        {icon}
        <span className="flex-1">{children}</span>
      </Link>
    </Button>
  )
}

export default function SideNavBar() {
  const [isExpanded, setIsExpanded] = useState(false) // Sidebar visibility state

  return (
    <>
      {/* Sidebar */}
      <div
        className={cn(
          "fixed top-1/4 left-0 h-auto w-60 bg-slate-800 z-40 rounded-xl transition-transform duration-300 ease-in-out",
          isExpanded ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <NavItem href="/" icon={<Home className="h-5 w-5" />}>
          Home
        </NavItem>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="physical-design" className="border-none">
            <AccordionTrigger className="flex w-full items-center gap-2 px-4 py-2 text-gray-200 hover:bg-gray-700/50 hover:no-underline">
              <FileText className="h-5 w-5" />
              <span className="flex-1 text-left">Physical Design</span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col space-y-1 bg-gray-700/20 py-1">
                {[
                  "Logic Synthesis",
                  "PD Inputs",
                  "Floorplan",
                  "Powerplan",
                  "Placement",
                  "Clock Tree Synthesis",
                  "Routing",
                  "Static Timing Analysis",
                ].map((item, index) => (
                  <Button
                    key={index}
                    asChild
                    variant="ghost"
                    className="w-full justify-start pl-11 py-1.5 text-sm text-gray-300 hover:bg-gray-700/50"
                  >
                    <Link href={`/physical-design/${item.toLowerCase().replace(/\s+/g, "-")}`}>{item}</Link>
                  </Button>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <NavItem href="/pd-verification" icon={<FileText className="h-5 w-5" />}>
          PD Verification
        </NavItem>

        <NavItem href="/pd-analysis" icon={<FileText className="h-5 w-5" />}>
          PD Analysis
        </NavItem>

        <NavItem href="/pd-essentials" icon={<FileText className="h-5 w-5" />}>
          PD Essentials
        </NavItem>

        <NavItem href="/discontinuity" icon={<FileText className="h-5 w-5" />}>
          Discontinuity
        </NavItem>

        <NavItem href="/videos" icon={<Monitor className="h-5 w-5" />}>
          Videos
        </NavItem>

        <NavItem href="/sta-numericals" icon={<Grid className="h-5 w-5" />}>
          STA Numericals
        </NavItem>

        <NavItem href="/qa" icon={<Clock className="h-5 w-5" />}>
          Q&A
        </NavItem>

        <NavItem href="/extras" icon={<FileText className="h-5 w-5" />}>
          Extras
        </NavItem>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="fixed top-1/4 left-0 z-50 bg-slate-800 text-white p-2 rounded-r-md hover:bg-gray-700 transition-all duration-300"
      >
        {isExpanded ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
      </button>
    </>
  )
}
