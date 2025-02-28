"use client";

import Navbar from "@/components/Navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ExportedImage from "next-image-export-optimizer";
import React from "react";

const page = () => {
  return (
    <>
      <div className=" bg-gradient-to-br from-black via-gray-900 to-gray-800 ">
        <Navbar />
        <div className="min-h-screen text-white flex items-center justify-center p-4">
          <Card className="w-full max-w-4xl bg-gray-800 bg-opacity-50 border-none">
            <CardHeader>
              <CardTitle className="text-3xl md:text-5xl lg:text-5xl font-bold leading-tight tracking-tight">
                Module placement constraints in physical design
              </CardTitle>
              {/* <CardDescription>
                Efficiently manage large VLSI designs with trimDesign.
              </CardDescription> */}
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-white/80">
                Working with Cadence Innovus, designers need to control cell
                placement efficiently to optimize performance, congestion, and
                timing closure. Innovus provides multiple module placement
                constraints that guide and restrict module locations within the
                core design area: None, Guide, Fence, Region and Soft
                Guide/Cluster
              </p>
              <h2 className="text-2xl font-semibold mb-2">1. None</h2>
              <p className=" mb-4">
                When a module is assigned the None constraint, it means that the
                module is not pre-placed within the core design area. However,
                this does not mean that it lacks placement control. The module
                may still be moved into the core area during optimization or
                loaded using a floorplan file.
              </p>
              <div>
                <h2 className="text-2xl font-semibold mb-2">
                  2. GuideWorking of trimDesign
                </h2>
                <p className="mb-4">
                  A Guide is a soft constraint that helps in placing cells
                  closer together but does not enforce strict placement rules.
                  It represents a logical grouping of instances in the netlist
                  and assists the placement engine in keeping related components
                  nearby
                </p>

                <Card className="w-full">
                  <CardContent className="p-4 bg-muted rounded-md">
                    <pre className="whitespace-pre-wrap break-words text-sm">
                      Command: createGuide object_name bbox
                    </pre>
                  </CardContent>
                </Card>

                <ExportedImage
                  src="/images/blog/modulecon.png"
                  alt="Parasitic Transistors Formation"
                  unoptimized
                  width={600}
                  height={400}
                  className=" mx-auto"
                />
                <h3 className=" text-xl font-semibold mb-2">Key Features:</h3>
                <ul className=" list-disc ml-6 mb-4">
                  <li>
                    Represents the logical module structure of the netlist.
                  </li>
                  <li>
                    Helps in placing cells of the module close to each other
                    within the suggested area.
                  </li>
                  <li>
                    Appears as pink objects in the Floorplan view (by default)
                    after the design is imported, but before floorplanning.
                  </li>
                  <li>
                    The module guide snaps to a standard cell row (vertically)
                    and to a metal 2 pitch (horizontally) (the default). This
                    default can be changed to snap to the manufacture grid (in
                    the Preferences form's Floorplan page).
                  </li>
                  <li>
                    Does not enforce strict placement, meaning cells can be
                    slightly displaced based on connectivity requirements.
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2">3. Fence</h2>
                <p className="mb-4">
                  A Fence is a hard constraint that strictly confines a module
                  within a fixed area. It prevents cells from moving outside the
                  defined boundary and restricts other instances from entering
                  the area.
                </p>

                <Card className="w-full">
                  <CardContent className="p-4 bg-muted rounded-md">
                    <pre className="whitespace-pre-wrap break-words text-sm">
                      Command: createFence object_name bbox
                    </pre>
                  </CardContent>
                </Card>

                <ExportedImage
                  src="/images/blog/modulecon1.png"
                  alt="Parasitic Transistors Formation"
                  unoptimized
                  width={600}
                  height={400}
                  className=" mx-auto"
                />
                <p className=" mt-1">
                  Example: Consider a memory block that needs to be placed in a
                  specific region to optimize data flow. A Fence ensures that no
                  other cells intrude, maintaining predictable timing and
                  congestion
                </p>
                <h3 className=" text-xl font-semibold mb-2">Key Features:</h3>
                <ul className=" list-disc ml-6 mb-4">
                  <li>
                    When a hierarchical instance is defined as a partition, its
                    constraint type changes to a fence
                  </li>
                  <li>
                    The fence outline is rigid, meaning all instances must
                    remain within the boundary.
                  </li>
                  <li>
                    Non-child instances from other modules cannot be placed
                    inside the fence.
                  </li>
                  <li>
                    This hard restriction is necessary to ensure consistency
                    with third-party backend tools.
                  </li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-2">4. Region</h2>
                <p className="mb-4">
                  A Region is similar to a Fence, but it is less restrictive.
                  Other instances can be placed inside a region, but priority is
                  given to the assigned module.
                </p>

                <Card className="w-full">
                  <CardContent className="p-4 bg-muted rounded-md">
                    <pre className="whitespace-pre-wrap break-words text-sm">
                      Command: createFence object_name bboxCommand: createRegion
                      object_name bbox
                    </pre>
                  </CardContent>
                </Card>

                <ExportedImage
                  src="/images/blog/modulecon2.png"
                  alt="Parasitic Transistors Formation"
                  unoptimized
                  width={600}
                  height={400}
                  className=" mx-auto"
                />
                <p className=" mt-1">
                  Example: If you have an ALU (Arithmetic Logic Unit) in a
                  multi-core processor, a Region can keep its logic in a
                  dedicated area, but some unrelated cells may still be placed
                  within that area if needed.
                </p>
                <h3 className=" text-xl font-semibold mb-2">Key Features:</h3>
                <ul className=" list-disc ml-6 mb-4">
                  <li>
                    Unlike a fence, other instances from different modules can
                    be placed inside a region.
                  </li>
                  <li>
                    A module guide automatically changes to a Region when it is
                    pre-placed in the core design area.
                  </li>

                  <li>
                    Helps in grouping cells together while still allowing some
                    flexibility.
                  </li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-2">
                  5. Soft Guide/Cluster
                </h2>
                <p className="mb-4">
                  A Soft Guide, also known as a Cluster, is an even looser
                  constraint than a Guide. It does not specify an exact
                  placement location but ensures that grouped instances stay
                  relatively close to each other.
                </p>

                <ExportedImage
                  src="/images/blog/modulecon3.png"
                  alt="Parasitic Transistors Formation"
                  unoptimized
                  width={600}
                  height={400}
                  className=" mx-auto"
                />

                <h3 className=" text-xl font-semibold mb-2">Key Features:</h3>
                <ul className=" list-disc ml-6 mb-4">
                  <li>
                    Similar to a Guide, but it does not enforce any specific
                    location constraints.
                  </li>
                  <li>
                    Ensures that the grouped instances stay relatively close but
                    allows some cells to be placed further if necessary
                  </li>
                  <li>
                    Less restrictive than Fence or Region, meaning placements
                    may spread out if required for connectivity.
                  </li>
                  <li>
                    The placement engine can control the degree of closeness
                    using the command: setPlaceMode
                    -place_global_soft_guide_strength
                  </li>
                </ul>
              </div>
              <Card className="w-full">
                <CardContent className="p-4 bg-muted rounded-md">
                  <p>To delete the Guide / Fence / Region for the module use</p>
                  <pre className="whitespace-pre-wrap break-words text-sm">
                    command: unplaceGuide Example: unplaceGuide object_name
                  </pre>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default page;
