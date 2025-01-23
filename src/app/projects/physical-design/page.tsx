
import Navbar from "@/components/Navbar"
import { CheckCircle } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function ProjectListing() {
  return (
    <div className="min-h-[80vh] bg-gradient-to-br from-black via-gray-900 to-gray-800 text-gray-100">
      <Navbar />
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-10 text-white my-12">Our Projects</h1>
      <div className="flex justify-center items-center mx-5 text-balance gap-8">
        <section className=" w-11/12 md:w-3/6 ">
          <h2 className="text-3xl font-semibold mb-6 text-white">Physical Design</h2>
          <Accordion type="single" collapsible className=" w-full">
            <AccordionItem value="project-1-dynamic-power-reduction">
              <AccordionTrigger className="bg-gray-800 h-16 border-gray-700 hover:bg-gray-700 transition-colors rounded-t-2xl    px-4 w-full">
                <div className="flex items-center gap-2 w-full">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span className="sm:text-base w-full text-left">Dynamic Power Reduction Techniques through Clock Tree Optimization</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="bg-gray-800 px-4 py-3 text-gray-300">
                This project involves optimizing the clock tree to minimize dynamic power consumption. Students will adjust the clock tree structure, reduce unnecessary toggling, and implement selective gating techniques. Through this, they gain skills in power-efficient design practices and understand the importance of an optimized clock network for achieving low-power goals.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="project-2-shielding-techniques">
              <AccordionTrigger className="bg-gray-800 h-16 border-gray-700 hover:bg-gray-700 transition-colors   px-4 w-full">
                <div className="flex items-center gap-2 w-full">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span className="sm:text-base w-full text-left">Shielding Techniques to Enhance Signal Integrity in Routing</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="bg-gray-800 px-4 py-3 text-gray-300">
                This project involves using shielding techniques to prevent signal interference, especially in high-frequency paths. Students will implement ground shielding, adjust spacing, and use dedicated routes to reduce cross-talk. By maintaining signal integrity through effective shielding, students ensure reliable performance in designs with densely packed high-speed interconnects.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="project-3-critical-path-analysis">
              <AccordionTrigger className="bg-gray-800 h-16 border-gray-700 hover:bg-gray-700 transition-colors   px-4 w-full">
                <div className="flex items-center gap-2 w-full">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span className="sm:text-base w-full text-left">Critical Path Analysis and Timing Optimization</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="bg-gray-800 px-4 py-3 text-gray-300">
                This project involves analyzing critical paths and applying optimization techniques to reduce delay and meet timing requirements. Students will perform static timing analysis, identify high-delay paths, and adjust placement and routing to optimize timing. Through this, they learn to target timing-sensitive paths and achieve timing closure, preparing them to handle performance-critical designs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="project-4-design-for-manufacturability">
              <AccordionTrigger className="bg-gray-800 h-16 border-gray-700 hover:bg-gray-700 transition-colors   px-4 w-full">
                <div className="flex items-center gap-2 w-full">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span className="sm:text-base w-full text-left">Design for Manufacturability and Yield Enhancement Techniques</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="bg-gray-800 px-4 py-3 text-gray-300">
                This project addresses layout modifications to enhance manufacturability and yield. Students will explore DRC compliance, dummy fill insertion, and layout uniformity to improve robustness against fabrication variations. By focusing on yield optimization, they learn techniques to minimize defects and improve production success rates, which is vital for manufacturing scalability.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="project-5-decoupling-capacitance">
              <AccordionTrigger className="bg-gray-800 h-16 border-gray-700 hover:bg-gray-700 transition-colors   px-4 w-full">
                <div className="flex items-center gap-2 w-full">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span className="sm:text-base w-full text-left">Implementation of Decoupling Capacitance for Power Integrity</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="bg-gray-800 px-4 py-3 text-gray-300">
                This project focuses on the design and placement of decoupling capacitors to improve power supply integrity across the layout. Students will analyze power grid behavior under varying loads and add capacitors to stabilize the voltage supply. Decoupling capacitors reduce noise and enhance circuit stability, providing a practical understanding of power integrity management.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="project-6-skew-reduction-techniques">
              <AccordionTrigger className="bg-gray-800 h-16 border-gray-700 hover:bg-gray-700 transition-colors   px-4 w-full">
                <div className="flex items-center gap-2 w-full">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span className="sm:text-base w-full text-left">Skew Reduction Techniques for Clock Distribution Networks</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="bg-gray-800 px-4 py-3 text-gray-300">
                Students will explore techniques to minimize clock skew across the design, ensuring synchronized operation of sequential elements. The project involves optimizing clock buffers, adjusting delays, and balancing clock paths. By achieving reduced skew, students ensure that timing margins are maintained, a critical requirement for clock-intensive designs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="project-7-timing-optimization-by-capacitance">
              <AccordionTrigger className="bg-gray-800 h-16 border-gray-700 hover:bg-gray-700 transition-colors   px-4 w-full">
                <div className="flex items-center gap-2 w-full">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span className="sm:text-base w-full text-left">Timing Optimization in Physical Design By Cutting the Capacitance</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="bg-gray-800 px-4 py-3 text-gray-300">
                In this project, students will focus on achieving timing convergence by strategically inserting buffers along critical paths. Buffer insertion reduces delay by breaking long interconnects, enhancing timing performance. This project teaches students the impact of buffers on timing closure and how effective buffer placement can stabilize timing in physical design.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="project-8-area-minimization-without-timing-violation">
              <AccordionTrigger className="bg-gray-800 h-16 border-gray-700 hover:bg-gray-700 transition-colors   px-4 w-full">
                <div className="flex items-center gap-2 w-full">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span className="sm:text-base w-full text-left">Physical Design for Area Minimization without Timing Violation</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="bg-gray-800 px-4 py-3 text-gray-300">
                This project emphasizes layout compaction techniques to minimize silicon area while maintaining timing integrity. Students will explore cell placement, wire length reduction, and buffer optimization to create a compact design. By balancing area efficiency and timing requirements, students learn to optimize layouts effectively without sacrificing performance, which is vital in cost-sensitive designs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="project-9-routing-optimization-for-congestion-management">
              <AccordionTrigger className="bg-gray-800 h-16 border-gray-700 hover:bg-gray-700 transition-colors   px-4 w-full">
                <div className="flex items-center gap-2 w-full">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span className="sm:text-base w-full text-left">Routing Optimization for Efficient Congestion Management</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="bg-gray-800 px-4 py-3 text-gray-300">
                This project focuses on routing strategies to manage congestion effectively, especially in high-density areas. Students will explore techniques such as track allocation, layer usage, and buffer insertion to reduce congestion without impacting timing. By managing congestion, they enhance signal flow and reduce design iterations, helping achieve a well-balanced layout and improving design convergence.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="project-10-clock-gating-for-power-reduction">
              <AccordionTrigger className="bg-gray-800 h-16 border-gray-700 hover:bg-gray-700 transition-colors   px-4 w-full">
                <div className="flex items-center gap-2 w-full">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span className="sm:text-base w-full text-left">Clock Gating Implementation for Dynamic Power Reduction</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="bg-gray-800 px-4 py-3 text-gray-300">
                This project involves implementing clock gating to reduce dynamic power consumption. Students will design and optimize clock gating cells, learning to selectively disable inactive regions of the circuit. By reducing unnecessary clock toggling, they achieve significant power savings, which is especially useful for energy-efficient designs. The project provides experience in power optimization and effective power management at the physical design level.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="project-11-floorplanning-for-optimized-data-flow">
              <AccordionTrigger className="bg-gray-800 h-16 border-gray-700 hover:bg-gray-700 transition-colors   px-4 w-full">
                <div className="flex items-center gap-2 w-full">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span className="sm:text-base w-full text-left">Floorplanning and Partitioning for Optimized Data Flow and Routing</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="bg-gray-800 px-4 py-3 text-gray-300">
                Students will explore floorplanning techniques, focusing on data flow and routing efficiency. By partitioning the design into functional blocks and planning data paths effectively, they will achieve optimized routing and reduced congestion. This project helps students understand how early design decisions in floorplanning influence layout quality and improve the chances of meeting timing, power, and area constraints in the later stages.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="project-12-high-speed-signal-routing">
              <AccordionTrigger className="bg-gray-800 h-16 border-gray-700 hover:bg-gray-700 transition-colors   px-4 w-full">
                <div className="flex items-center gap-2 w-full">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span className="sm:text-base w-full text-left">High-Speed Signal Routing for Reduced Delay and Cross-Talk using Layer Promotion and NDR</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="bg-gray-800 px-4 py-3 text-gray-300">
                Focusing on high-speed signal routing, students will implement techniques to minimize delay and cross-talk interference. The project involves optimizing routing paths, controlling impedance, and ensuring signal integrity across critical high-speed paths. Through practical routing optimization, students gain insights into managing signal timing and integrity, essential for designs requiring high-speed data transfer with minimal interference.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="project-13-advanced-placement-optimization">
              <AccordionTrigger className="bg-gray-800 h-16 border-gray-700 hover:bg-gray-700 transition-colors   px-4 w-full">
                <div className="flex items-center gap-2 w-full">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span className="sm:text-base w-full text-left">Advanced Placement Optimization for Improved Timing Convergence</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="bg-gray-800 px-4 py-3 text-gray-300">
                This project explores placement optimization techniques aimed at enhancing timing convergence. Students will analyze placement algorithms, adjust cell locations, and optimize layout for timing-critical paths. The project focuses on reducing wire lengths, balancing cell density, and achieving efficient distribution of cells. Through these techniques, students will gain hands-on experience with improving timing closure, achieving reduced delays, and ensuring an optimized cell placement to meet timing constraints while enhancing overall design performance.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="project-14-eco-insertion">
              <AccordionTrigger className="bg-gray-800 h-16 border-gray-700 hover:bg-gray-700 transition-colors   px-4 w-full">
                <div className="flex items-center gap-2 w-full">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span className="sm:text-base w-full text-left">Insertion and Optimization of ECOs (Engineering Change Orders)</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="bg-gray-800 px-4 py-3 text-gray-300">
                Focusing on ECO techniques, students will implement design changes and optimizations to achieve timing closure post-layout. This project covers efficient ECO insertion methods for timing adjustments, layout modifications, and design rule adherence, equipping students with practical skills for handling last-minute design changes without extensive redesign.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="project-15-high-speed-io-buffer-placement">
              <AccordionTrigger className="bg-gray-800 h-16 border-gray-700 hover:bg-gray-700 transition-colors   px-4 w-full">
                <div className="flex items-center gap-2 w-full">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span className="sm:text-base w-full text-left">High-Speed I/O Buffer Placement and Optimization</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="bg-gray-800 px-4 py-3 text-gray-300">
                This project focuses on optimizing I/O buffer placement for high-speed applications. Students will apply placement and routing strategies to minimize signal degradation and timing delays, ensuring robust I/O performance, essential for maintaining integrity in designs with high-frequency data transfer.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="project-16-multi-vt-cell-selection">
              <AccordionTrigger className="bg-gray-800 h-16 border-gray-700 hover:bg-gray-700 transition-colors   px-4 w-full">
                <div className="flex items-center gap-2 w-full">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span className="sm:text-base w-full text-left">Multi-Vt Cell Selection for Power and Performance Trade-Off</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="bg-gray-800 px-4 py-3 text-gray-300">
                Implement a multi-Vt cell selection strategy to balance power and performance. Analyze timing paths to select the optimal Vt cells for minimal power consumption without compromising speed.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="project-17-rc-delay-minimization">
              <AccordionTrigger className="bg-gray-800 h-16 border-gray-700 hover:bg-gray-700 transition-colors px-4 w-full">
                <div className="flex items-center gap-2 w-full">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span className="sm:text-base w-full text-left">RC Delay Minimization for Critical Paths</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="bg-gray-800 px-4 py-3 text-gray-300">
                Identify critical paths and optimize RC delays through wire sizing, buffer insertion, and placement adjustments. Focus on achieving timing closure by reducing delay on critical nets.
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </section>
      </div>
    </div>
  )
}
