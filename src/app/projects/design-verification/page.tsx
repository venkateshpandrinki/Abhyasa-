import Navbar from "@/components/Navbar";
import { CheckCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ProjectListing() {
  return (
    <div className="min-h-[80vh] bg-gradient-to-br from-black via-gray-900 to-gray-800 text-gray-100">
      <Navbar />
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-10 text-white my-12">
        Our Projects
      </h1>
      <div className="flex justify-center items-center mx-5 text-balance gap-8">
        <section className=" w-11/12 md:w-3/6 ">
          <h2 className="text-3xl font-semibold mb-6 text-white">
            Design Verification
          </h2>

          <Accordion type="single" collapsible className=" w-full">
            <AccordionItem value="project-1-1x3-router-design">
              <AccordionTrigger className="bg-gray-800 h-16 border-gray-700 hover:bg-gray-700 transition-colors rounded-t-2xl px-4 w-full">
                <div className="flex items-center gap-2 w-full">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span className="sm:text-base w-full text-left">
                    1X3 Router Design
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="bg-gray-800 px-4 py-3 text-gray-300">
                Create a Verilog module for a 1X3 router, enabling data routing
                from one input to three outputs. Implement logic for directing
                incoming data to one of the three output ports based on control
                signals, facilitating versatile data transmission in digital
                systems.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="project-2-uart-implementation">
              <AccordionTrigger className="bg-gray-800 h-16 border-gray-700 hover:bg-gray-700 transition-colors px-4 w-full">
                <div className="flex items-center gap-2 w-full">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span className="sm:text-base w-full text-left">
                    UART Implementation
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="bg-gray-800 px-4 py-3 text-gray-300">
                Design and implement a UART (Universal Asynchronous
                Receiver-Transmitter) transmitter and receiver using Verilog.
                This involves creating and simulating the UART protocol,
                developing the necessary logic for the transmitter and receiver,
                and verifying functionality through test cases.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="project-3-spi-controller-design">
              <AccordionTrigger className="bg-gray-800 h-16 border-gray-700 hover:bg-gray-700 transition-colors px-4 w-full">
                <div className="flex items-center gap-2 w-full">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span className="sm:text-base w-full text-left">
                    SPI Controller Design
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="bg-gray-800 px-4 py-3 text-gray-300">
                Develop a Verilog-based SPI (Serial Peripheral Interface)
                controller. This project involves implementing the SPI protocol,
                including both master and slave functionalities, and verifying
                device communication through simulation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="project-4-i2c-master-slave-design">
              <AccordionTrigger className="bg-gray-800 h-16 border-gray-700 hover:bg-gray-700 transition-colors px-4 w-full">
                <div className="flex items-center gap-2 w-full">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span className="sm:text-base w-full text-left">
                    I2C Master/Slave Design
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="bg-gray-800 px-4 py-3 text-gray-300">
                Implement an I2C (Inter-Integrated Circuit) master and slave
                using Verilog. Design the I2C protocol, implement read and write
                operations, and verify communication between devices through
                simulation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="project-5-axi-to-apb-bridge">
              <AccordionTrigger className="bg-gray-800 h-16 border-gray-700 hover:bg-gray-700 transition-colors px-4 w-full">
                <div className="flex items-center gap-2 w-full">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span className="sm:text-base w-full text-left">
                    AXI-to-APB Bridge
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="bg-gray-800 px-4 py-3 text-gray-300">
                Design a Verilog code for an AXI-to-APB Bridge, enabling
                seamless translation between AXI and APB protocols. This module
                facilitates efficient communication between high-speed
                processors and slower peripherals in digital systems.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="project-6-dual-port-ram-design">
              <AccordionTrigger className="bg-gray-800 h-16 border-gray-700 hover:bg-gray-700 transition-colors px-4 w-full">
                <div className="flex items-center gap-2 w-full">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span className="sm:text-base w-full text-left">
                    Dual-Port RAM Design
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="bg-gray-800 px-4 py-3 text-gray-300">
                Design a Verilog module for a dual-port RAM, allowing
                simultaneous read and write operations on two separate ports
                with independent addresses. Implement collision detection and
                handling mechanisms to ensure data integrity during concurrent
                access.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="project-7-amba-protocol">
              <AccordionTrigger className="bg-gray-800 h-16 border-gray-700 hover:bg-gray-700 transition-colors px-4 w-full">
                <div className="flex items-center gap-2 w-full">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span className="sm:text-base w-full text-left">
                    AMBA Protocol
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="bg-gray-800 px-4 py-3 text-gray-300">
                The Advanced Microcontroller Bus Architecture (AMBA) protocol
                defines how functional blocks communicate with each other in a
                system-on-chip (SoC).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="project-8-fifo-memory">
              <AccordionTrigger className="bg-gray-800 h-16 border-gray-700 hover:bg-gray-700 transition-colors px-4 w-full">
                <div className="flex items-center gap-2 w-full">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span className="sm:text-base w-full text-left">
                    FIFO Memory
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="bg-gray-800 px-4 py-3 text-gray-300">
                FIFO (First-In, First-Out) memory is a type of buffer or data
                storage mechanism where the first data written into the memory
                is the first to be read out, adhering to the queue-like
                behavior. It is widely used in digital systems for
                synchronization, buffering, and data flow management between
                subsystems operating at different speeds or in different clock
                domains.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="project-9-ethernet-project">
              <AccordionTrigger className="bg-gray-800 h-16 border-gray-700 hover:bg-gray-700 transition-colors px-4 w-full">
                <div className="flex items-center gap-2 w-full">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span className="sm:text-base w-full text-left">
                    Ethernet Project
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="bg-gray-800 px-4 py-3 text-gray-300">
                Ethernet is a widely used wired networking technology that
                connects devices in local area networks (LANs) and beyond. It
                operates based on the IEEE 802.3 standard, utilizing protocols
                like Carrier Sense Multiple Access with Collision Detection
                (CSMA/CD) to manage data transmission.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="project-10-pll-design">
              <AccordionTrigger className="bg-gray-800 h-16 border-gray-700 hover:bg-gray-700 transition-colors px-4 w-full">
                <div className="flex items-center gap-2 w-full">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span className="sm:text-base w-full text-left">
                    PLL Design
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="bg-gray-800 px-4 py-3 text-gray-300">
                A phase-locked loop (PLL) is a feedback system that generates an
                output signal with a phase that's related to its input signal.
                PLLs are designed to synchronize information accurately and to
                be insensitive to disturbances in the input signal.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </div>
    </div>
  );
}
